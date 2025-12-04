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
        await new Promise((r) => setTimeout(r, delay));
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
    const results = [];

    if (language === "javascript") {
      for (const t of problem.testCases) {
        const harness = `
          const realLog = console.log;
          console.log = (msg) => {
            if (String(msg).startsWith("__output:")) {
              realLog(msg);
            }
          };

          ${code}

          let __result;
          try {
            __result = solve(...${JSON.stringify(t.args)});
          } catch (err) {
            console.log("__output:Error");
            process.exit(0);
          }

          console.log("__output:" + JSON.stringify(__result));
        `;

        const response = await runWithRetry({
          language: "javascript",
          version: "*",
          files: [{ content: harness }],
        });

        const stdout = response.data.run.stdout || "";
        const match = stdout.match(/__output:(.*)/);
        const actual = match ? match[1].trim() : "";
        const passed = actual === t.expected;

        results.push({
          args: t.args,
          expected: t.expected,
          actual,
          passed,
        });
      }

      return res.json({ results });
    }

    if (language === "python") {
      for (const t of problem.testCases) {
        const harness = `
import builtins
_real_print = print
def print(*args, **kwargs):
    pass

${code}

try:
    result = solve(*${JSON.stringify(t.args)})
    _real_print("__output:" + str(result))
except Exception as e:
    _real_print("__output:Error")
        `;

        const response = await runWithRetry({
          language: "python",
          version: "*",
          files: [{ content: harness }],
        });

        const stdout = response.data.run.stdout || "";
        const match = stdout.match(/__output:(.*)/);
        const actual = match ? match[1].trim() : "";
        const passed = actual === t.expected;

        results.push({
          args: t.args,
          expected: t.expected,
          actual,
          passed,
        });
      }

      return res.json({ results });
    }

    return res.status(400).json({ error: "Unsupported language" });
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
