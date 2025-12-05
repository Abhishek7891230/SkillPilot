import express from "express";
import cors from "cors";
import axios from "axios";
import { loadProblem } from "./controller/loadProblem.js";

const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(express.json());

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
      decls.push(`vector<long long> ${name} = {${arg.join(",")}};`);
      callArgs.push(name);
    } else if (typeof arg === "number") {
      decls.push(`long long ${name} = ${arg};`);
      callArgs.push(name);
    } else {
      decls.push(`string ${name} = "${String(arg).replace(/"/g, '\\"')}";`);
      callArgs.push(name);
    }
  });
  return `
#include <bits/stdc++.h>
using namespace std;
${code}
int main(){
${decls.map((d) => "    " + d).join("\n")}
    try {
        auto res = solve(${callArgs.join(",")});
        cout << "__output:" << res;
    } catch (...) {
        cout << "__output:Runtime Error";
    }
}
`;
}

function buildJavaHarness(code, args) {
  const decls = [];
  const callArgs = [];

  args.forEach((arg, idx) => {
    const name = `arg${idx}`;
    if (Array.isArray(arg)) {
      decls.push(`int[] ${name} = new int[]{${arg.join(",")}};`);
      callArgs.push(name);
    } else if (typeof arg === "number") {
      decls.push(`int ${name} = ${arg};`);
      callArgs.push(name);
    } else {
      decls.push(`String ${name} = "${String(arg).replace(/"/g, '\\"')}";`);
      callArgs.push(name);
    }
  });

  const classFixedCode = code.replace(
    /public\s+class\s+Solution/,
    "class Solution"
  );

  return `
import java.util.*;
import java.io.*;
import java.math.*;

${classFixedCode}

public class Main {
    public static void main(String[] args) {
        try {
${decls.map((d) => "            " + d).join("\n")}
            Object result = Solution.solve(${callArgs.join(",")});
            System.out.println("__output:" + String.valueOf(result));
        } catch (Exception e) {
            // DEBUGGING: Print the actual error message
            System.out.println("__output:" + e.toString());
        }
    }
}
`;
}

app.post("/judge", async (req, res) => {
  const { language, code, questionId } = req.body;

  try {
    const problem = loadProblem(questionId);
    const results = [];

    for (const t of problem.testCases) {
      let harness;
      let pistonLang = language;
      let fileName = "main.txt";

      if (language === "javascript") {
        fileName = "main.js";
        harness = `
const realLog = console.log;
console.log = (msg) => { if (String(msg).startsWith("__output:")) realLog(msg); };
${code}
try {
  const r = solve(...${JSON.stringify(t.args)});
  console.log("__output:" + JSON.stringify(r));
} catch (err) {
  console.log("__output:" + err.message);
}
`;
      }

      if (language === "python") {
        fileName = "main.py";
        harness = `
import builtins
import json
_real_print = print
def print(*args, **kwargs): pass
${code}
try:
    result = solve(*${JSON.stringify(t.args)})
    _real_print("__output:" + str(result))
except Exception as e:
    _real_print("__output:" + str(e))
`;
      }

      if (language === "cpp") {
        fileName = "main.cpp";
        harness = buildCppHarness(code, t.args);
      }

      if (language === "java") {
        fileName = "Main.java";
        harness = buildJavaHarness(code, t.args);
      }

      const response = await runWithRetry({
        language: pistonLang,
        version: "*",
        files: [{ name: fileName, content: harness }],
      });

      const fullOutput = response.data.run.stdout + response.data.run.stderr;

      const match = fullOutput.match(/__output:(.*)/);

      let actual;
      if (match) {
        actual = match[1].trim();
      } else {
        actual = fullOutput.trim();
      }

      const inputStr = t.args.map((a) => JSON.stringify(a)).join(", ");

      results.push({
        args: t.args,
        input: inputStr,
        expected: t.expected,
        actual: actual,
        passed: actual === t.expected,
      });
    }

    return res.json({ results });
  } catch (err) {
    return res.status(500).json({ error: "JudgeError", message: err.message });
  }
});

app.listen(8080, "0.0.0.0", () => console.log("Backend running on 8080"));
