import express from "express";
import cors from "cors";
import axios from "axios";
import { loadProblem } from "./controller/loadProblem.js";

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

function normalize(str) {
  return (str || "").trim().replace(/\s+/g, " ").toLowerCase();
}

app.post("/judge", async (req, res) => {
  const { language, code, questionId } = req.body;

  if (!language || !code || !questionId) {
    return res.status(400).json({
      error: "BadRequest",
      message: "language, code and questionId are required",
    });
  }

  try {
    const problem = loadProblem(questionId);

    if (!problem || !problem.testCases) {
      return res.status(400).json({
        error: "ProblemError",
        message: `No testCases found for questionId=${questionId}`,
      });
    }

    const results = [];

    for (const t of problem.testCases) {
      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language,
          version: "*",
          files: [{ content: code }],
          stdin: t.input,
        }
      );

      const run = response.data.run || {};
      const rawActual = (run.stdout || "").trim();
      const rawExpected = (t.expected || "").trim();

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
    console.error("Judge error:", err.message);
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
