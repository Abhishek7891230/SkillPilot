import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { codingQuestions } from "../data/codingQuestions";
import "../styles/coding.css";
import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

function CustomDropdown({ value, options, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        className="custom-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="custom-dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`custom-dropdown-item ${
                option.value === value ? "active" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function CodingPracticePage() {
  const [selectedCategory, setSelectedCategory] = useState("Basics");
  const filteredQuestions = codingQuestions.filter(
    (q) => q.category === selectedCategory
  );

  const starterCode = {
    python: `# write your code here\n`,
    javascript: `// write your code here\n`,
    cpp: `#include <bits/stdc++.h>
using namespace std;
int main(){
    // write your code here
    return 0;
}`,
  };

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(starterCode.python);
  const [output, setOutput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = filteredQuestions[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1 < filteredQuestions.length ? i + 1 : 0));
  };

  const categoryOptions = [
    { value: "Basics", label: "Basics" },
    { value: "Arrays", label: "Arrays" },
    { value: "Strings", label: "Strings" },
    { value: "Math", label: "Math" },
  ];

  const questionOptions = filteredQuestions.map((q, index) => ({
    value: index,
    label: `${index + 1}. ${q.title}`,
  }));

  const languageOptions = [
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "cpp", label: "C++" },
  ];

  function formatResults(results) {
    return results
      .map(
        (r, i) => `
Test Case ${i + 1}:
Input: ${r.input}
Expected: ${r.expected}
Got: ${r.actual}
Result: ${r.passed ? "✔ PASS" : "✘ FAIL"}
`
      )
      .join("\n\n");
  }

  const runCode = async () => {
    if (!currentQuestion) {
      setOutput("No question selected.");
      return;
    }

    setOutput("Running tests...");

    try {
      const res = await fetch(
        "https://skillpilot-production-8c12.up.railway.app/judge",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            language,
            code,
            questionId: currentQuestion.id,
          }),
        }
      );

      const data = await res.json();

      if (!data || !Array.isArray(data.results)) {
        setOutput("Judge Error: No results returned");
        return;
      }

      setOutput(formatResults(data.results));
    } catch (err) {
      setOutput("Execution Error: " + err.message);
    }
  };

  return (
    <>
      <Navbar />

      <main className="coding-page">
        <div className="question-pane">
          <div className="question-header-bar">
            <button className="nav-btn" onClick={handlePrev}>
              &lt;
            </button>

            <CustomDropdown
              value={selectedCategory}
              options={categoryOptions}
              onChange={(val) => {
                setSelectedCategory(val);
                setCurrentIndex(0);
              }}
              placeholder="Select Category"
            />

            <CustomDropdown
              value={currentIndex}
              options={questionOptions}
              onChange={(val) => setCurrentIndex(val)}
              placeholder="Select Question"
            />

            <button className="nav-btn" onClick={handleNext}>
              &gt;
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
            <CustomDropdown
              value={language}
              options={languageOptions}
              onChange={(val) => {
                setLanguage(val);
                setCode(starterCode[val]);
              }}
              placeholder="Select Language"
            />

            <button className="run-btn" onClick={runCode}>
              ▶
            </button>

            <button className="submit-btn">Submit</button>
          </div>

          <div className="editor-fixed">
            <Editor
              height="100%"
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

          <div className="output-fixed">
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
