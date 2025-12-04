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

function buildCppHarness(code, args) {
  const decls = [];
  const callArgs = [];

  args.forEach((arg, index) => {
    const name = `arg${index}`;
    if (Array.isArray(arg)) {
      const values = arg.join(", ");
      decls.push(`vector<long long> ${name} = {${values}};`);
      callArgs.push(name);
    } else if (typeof arg === "number") {
      decls.push(`long long ${name} = ${arg};`);
      callArgs.push(name);
    } else if (typeof arg === "string") {
      const escaped = arg
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n");
      decls.push(`string ${name} = "${escaped}";`);
      callArgs.push(name);
    } else {
      const escaped = JSON.stringify(arg)
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n");
      decls.push(`string ${name} = "${escaped}";`);
      callArgs.push(name);
    }
  });

  const declBlock = decls.length
    ? decls.map((l) => "    " + l).join("\n") + "\n"
    : "";
  const call = callArgs.join(", ");

  return `#include <bits/stdc++.h>
using namespace std;

${code}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
${declBlock}    auto __result = solve(${call});
    cout << "__output:" << __result;
    return 0;
}
`;
}

function buildJavaHarness(code, args) {
  const decls = [];
  const callArgs = [];

  args.forEach((arg, index) => {
    const name = `arg${index}`;
    if (Array.isArray(arg)) {
      const values = arg.join(", ");
      decls.push(`int[] ${name} = new int[]{${values}};`);
      callArgs.push(name);
    } else if (typeof arg === "number") {
      decls.push(`int ${name} = ${arg};`);
      callArgs.push(name);
    } else if (typeof arg === "string") {
      const escaped = arg
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n");
      decls.push(`String ${name} = "${escaped}";`);
      callArgs.push(name);
    } else {
      const escaped = JSON.stringify(arg)
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n");
      decls.push(`String ${name} = "${escaped}";`);
      callArgs.push(name);
    }
  });

  const declBlock = decls.length
    ? decls.map((l) => "        " + l).join("\n") + "\n"
    : "";
  const call = callArgs.join(", ");

  return `${code}

public class Main {
    public static void main(String[] args) {
${declBlock}        Object result = Solution.solve(${call});
        System.out.println("__output:" + String.valueOf(result));
    }
}
`;
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
  if (String(msg).startsWith("__output:")) realLog(msg);
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

        results.push({ args: t.args, expected: t.expected, actual, passed });
      }

      return res.json({ results });
    }

    if (language === "python") {
      for (const t of problem.testCases) {
        const harness = `
import builtins
_real_print = print
def print(*args, **kwargs): pass

${code}

try:
    result = solve(*${JSON.stringify(t.args)})
    _real_print("__output:" + str(result))
except:
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

        results.push({ args: t.args, expected: t.expected, actual, passed });
      }

      return res.json({ results });
    }

    if (language === "cpp") {
      for (const t of problem.testCases) {
        const harness = buildCppHarness(code, t.args);

        const response = await runWithRetry({
          language: "cpp",
          version: "*",
          files: [{ content: harness }],
        });

        const stdout = response.data.run.stdout || "";
        const match = stdout.match(/__output:(.*)/);
        const actual = match ? match[1].trim() : "";
        const passed = actual === t.expected;

        results.push({ args: t.args, expected: t.expected, actual, passed });
      }

      return res.json({ results });
    }

    if (language === "java") {
      for (const t of problem.testCases) {
        const sanitized = code
          .replace(/public\s+class/g, "class")
          .replace(/public\s+static/g, "static");

        const harness = buildJavaHarness(sanitized, t.args);

        const response = await runWithRetry({
          language: "java",
          version: "*",
          files: [{ content: harness }],
        });

        const stdout = response.data.run.stdout || "";
        const match = stdout.match(/__output:(.*)/);
        const actual = match ? match[1].trim() : "";
        const passed = actual === t.expected;

        results.push({ args: t.args, expected: t.expected, actual, passed });
      }

      return res.json({ results });
    }

    return res.status(400).json({ error: "Unsupported language" });
  } catch (err) {
    res.status(500).json({ error: "JudgeError", message: err.message });
  }
});

app.get("/", (req, res) => {
  res.json({ status: "Backend is running!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
