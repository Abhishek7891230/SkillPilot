import fs from "fs";
import path from "path";

export function loadProblem(problemId) {
  const primary = path.join(process.cwd(), "problems", `${problemId}.json`);

  const fallback = path.join(
    process.cwd(),
    "mockProblems",
    `${problemId}.json`
  );

  if (fs.existsSync(primary)) {
    console.log("Loading problem:", primary);
    return JSON.parse(fs.readFileSync(primary, "utf8"));
  }

  if (fs.existsSync(fallback)) {
    console.log("Loading mock problem:", fallback);
    return JSON.parse(fs.readFileSync(fallback, "utf8"));
  }

  throw new Error(`Problem not found: ${problemId}`);
}
