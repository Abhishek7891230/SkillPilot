import express from "express";
import cors from "cors";
import axios from "axios";
import { loadProblem } from "./controller/loadProblem.js";
import { pythonWrapper } from "./wrappers/pythonWrapper.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false,
  })
);

app.use(express.json());
app.options("*", cors());

async function runWithRetry(payload, retries = 3, delay = 300) {
  for (let i = 0; i < retries; i++) {
    try {
      return await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        payload
      );
    } catch (err) {
      const status = err.response?.status;

      if (status === 429 && i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }

      throw err;
    }
  }
}

app.post("/judge", async (req, res) => {
  const { language, code, questionId } = req.body;

  try {
    const problem = loadProblem(questionId);

    let wrapper;
    if (language === "python") {
      wrapper = pythonWrapper;
    } else {
      return res.json({ error: "Language wrapper not implemented yet" });
    }

    const results = [];

    for (const t of problem.testCases) {
      const wrappedCode = wrapper(code, problem.functionName);

      const response = await runWithRetry({
        language,
        version: "*",
        files: [{ content: wrappedCode }],
        stdin: t.input,
      });

      const rawActual = (response.data.run.stdout || "").trim();
      const rawExpected = t.expected.trim();

      function normalize(str) {
        return str.replace(/\s+/g, "").toLowerCase();
      }

      const passed = normalize(rawActual) === normalize(rawExpected);

      results.push({
        input: t.input,
        expected: rawExpected,
        actual: rawActual,
        passed,
      });
    }

    res.json({ results });
  } catch (err) {
    res.status(500).json({
      error: "JudgeError",
      message: err.message,
    });
  }
});

app.get("/", (req, res) => {
  res.json({ status: "Backend is running!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
