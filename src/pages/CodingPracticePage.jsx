import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { codingQuestions } from "../data/codingQuestions";
import "../styles/coding.css";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export function CodingPracticePage() {
  const [selectedCategory, setSelectedCategory] = useState("Basics");
  const filteredQuestions = codingQuestions.filter(
    (q) => q.category === selectedCategory
  );

  const starterCode = {
    python: `# write your code here\n`,
    javascript: `// write your code here\n`,
    cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    // write your code here\n    return 0;\n}`,
  };

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(starterCode["python"]);
  const [output, setOutput] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = filteredQuestions[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1 < filteredQuestions.length ? i + 1 : 0));
  };

  const runCode = async () => {
    setOutput("Running...");

    const sampleInput = currentQuestion.samples?.[0]?.input || "";

    try {
      const res = await fetch("skillpilot-production-8c12.up.railway.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          code,
          input: sampleInput,
        }),
      });

      const data = await res.json();

      if (data.stderr) {
        setOutput(data.stderr);
      } else {
        setOutput(data.stdout || "No output");
      }
    } catch (err) {
      setOutput("Backend error. Check console.");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <main className="coding-page">
        <div className="question-pane">
          <div className="question-header-bar">
            <button className="nav-btn" onClick={handlePrev}>
              ← Prev
            </button>

            <select
              className="dropdown"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentIndex(0);
              }}
            >
              <option value="Basics">Basics</option>
              <option value="Arrays">Arrays</option>
              <option value="Strings">Strings</option>
              <option value="Math">Math</option>
            </select>

            <select
              className="dropdown"
              value={currentIndex}
              onChange={(e) => setCurrentIndex(Number(e.target.value))}
            >
              {filteredQuestions.map((q, index) => (
                <option key={q.id} value={index}>
                  {index + 1}. {q.title}
                </option>
              ))}
            </select>
            <button className="nav-btn" onClick={handleNext}>
              Next →
            </button>
          </div>

          <div className="question-body">
            <h2 className="question-title">{currentQuestion.title}</h2>

            <div className="tags">
              <span className="difficulty">{currentQuestion.difficulty}</span>
              <span className="topic">{currentQuestion.category}</span>
            </div>

            <h3>Description</h3>
            <p>{currentQuestion.description}</p>

            <h3>Input Format</h3>
            <p>{currentQuestion.inputFormat}</p>

            <h3>Output Format</h3>
            <p>{currentQuestion.outputFormat}</p>

            <h3>Sample Tests</h3>
            {currentQuestion.samples.map((s, i) => (
              <div className="sample-box" key={i}>
                <strong>Input</strong>
                <pre>{s.input}</pre>
                <strong>Output</strong>
                <pre>{s.output}</pre>
                {s.explanation && <p>{s.explanation}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="editor-pane">
          <div className="editor-toolbar">
            <select
              className="dropdown"
              value={language}
              onChange={(e) => {
                const lang = e.target.value;
                setLanguage(lang);
                setCode(starterCode[lang]);
              }}
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="cpp">C++</option>
            </select>

            <button className="run-btn" onClick={runCode}>
              ▶
            </button>
            <button className="submit-btn">Submit</button>
          </div>

          <div className="editor-container">
            <Editor
              height="100%"
              defaultLanguage={language}
              language={language}
              value={code}
              onChange={(value) => setCode(value)}
              theme="vs-dark"
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
              }}
            />
          </div>

          <div className="output-pane">
            <h3>Output</h3>
            <pre className="output-box">
              {output || "-- Run code to see output --"}
            </pre>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
