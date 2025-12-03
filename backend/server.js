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
      const wrapped = wrapper(code, problem.functionName);

      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language,
          version: "*",
          files: [{ content: wrapped }],
          stdin: t.input,
        }
      );

      const actual = (response.data.run.stdout || "").trim();
      const expected = t.expected.trim();
      const passed = actual === expected;

      results.push({
        input: t.input,
        expected,
        actual,
        passed,
      });
    }

    res.json({ results });
  } catch (err) {
    res.json({
      error: "Judge error",
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
