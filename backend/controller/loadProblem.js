import fs from "fs";
import path from "path";

export function loadProblem(problemId) {
  const filePath = path.join(process.cwd(), "problems", `${problemId}.json`);
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}
