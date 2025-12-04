import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { codingQuestions } from "../data/codingQuestions";
import "../styles/coding.css";
import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { auth } from "../firebase/auth";
import { db } from "../firebase/firestore";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "./AuthPage";

function CustomDropdown({ value, options, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="custom-dropdown" ref={ref}>
      <button
        className="custom-dropdown-trigger"
        onClick={() => setOpen(!open)}
      >
        <span>{selected?.label || placeholder}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {open && (
        <div className="custom-dropdown-menu">
          {options.map((o) => (
            <div
              key={o.value}
              className={`custom-dropdown-item ${
                o.value === value ? "active" : ""
              }`}
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
            >
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function CodingPracticePage() {
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Basics");
  const [solvedQuestions, setSolvedQuestions] = useState([]);

  const filtered = codingQuestions.filter(
    (q) => q.category === selectedCategory
  );

  const starter = {
    python: `# write your code here\n`,
    javascript: `// write your code here\n`,
    cpp: `#include <bits/stdc++.h>
using namespace std;
int main(){
    return 0;
}`,
  };

  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(starter.python);
  const [output, setOutput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allPassed, setAllPassed] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthUser(null);
        setAuthLoading(false);
        return;
      }
      setAuthUser(user);
      const ref = doc(db, "users", user.uid, "coding", "solved");
      const snap = await getDoc(ref);
      if (snap.exists()) setSolvedQuestions(snap.data().solvedQuestions || []);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  const current = filtered[currentIndex];
  const isSolved = solvedQuestions.includes(current.id);

  const categoryOptions = [
    { value: "Basics", label: "Basics" },
    { value: "Arrays", label: "Arrays" },
    { value: "Strings", label: "Strings" },
    { value: "Math", label: "Math" },
  ];

  const questionOptions = filtered.map((q, i) => ({
    value: i,
    label: solvedQuestions.includes(q.id)
      ? `✔ ${i + 1}. ${q.title}`
      : `${i + 1}. ${q.title}`,
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
Result: ${r.passed ? "✔ PASS" : "✘ FAIL"}`
      )
      .join("\n\n");
  }

  useEffect(() => {
    Promise.resolve().then(() => {
      setOutput("");
      setAllPassed(false);
      setCode(starter[language]);
    });
  }, [currentIndex, selectedCategory, language]);

  const runCode = async () => {
    setOutput("Running tests...");
    const res = await fetch(
      "https://skillpilot-production-8c12.up.railway.app/judge",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code, questionId: current.id }),
      }
    );
    const data = await res.json();
    if (!Array.isArray(data.results)) {
      setOutput("Judge Error");
      return;
    }
    setOutput(formatResults(data.results));
    setAllPassed(data.results.every((r) => r.passed));
  };

  const handleSubmit = async () => {
    if (!allPassed) return;
    if (!authUser) return;

    const newList = [...solvedQuestions, current.id];

    await setDoc(
      doc(db, "users", authUser.uid, "coding", "solved"),
      { solvedQuestions: newList },
      { merge: true }
    );

    await setDoc(
      doc(
        db,
        "users",
        authUser.uid,
        "dailyActivity",
        new Date().toISOString().split("T")[0]
      ),
      { solved: increment(1) },
      { merge: true }
    );

    setSolvedQuestions(newList);
    alert("Submitted successfully!");
  };

  if (authLoading)
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <div className="loading-text">Loading…</div>
      </div>
    );

  if (!authUser) return <Auth />;

  return (
    <>
      <Navbar />
      <main className="coding-page">
        <div className="question-pane">
          <div className="question-header-bar">
            <button
              className="nav-btn"
              onClick={() => setCurrentIndex((i) => (i > 0 ? i - 1 : 0))}
            >
              &lt;
            </button>
            <CustomDropdown
              value={selectedCategory}
              options={categoryOptions}
              onChange={(v) => {
                setSelectedCategory(v);
                setCurrentIndex(0);
              }}
              placeholder="Select Category"
            />
            <CustomDropdown
              value={currentIndex}
              options={questionOptions}
              onChange={(v) => setCurrentIndex(v)}
              placeholder="Select Question"
            />
            <button
              className="nav-btn"
              onClick={() =>
                setCurrentIndex((i) => (i + 1 < filtered.length ? i + 1 : 0))
              }
            >
              &gt;
            </button>
          </div>
          <div className="question-body">
            <h2 className="question-title">{current.title}</h2>
            <div className="tags">
              <span className="difficulty">{current.difficulty}</span>
              <span className="topic">{current.category}</span>
            </div>
            <h3>Description</h3>
            <p>{current.description}</p>
            <h3>Input Format</h3>
            <p>{current.inputFormat}</p>
            <h3>Output Format</h3>
            <p>{current.outputFormat}</p>
            <h3>Sample Tests</h3>
            {current.samples.map((s, i) => (
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
              onChange={(v) => {
                setLanguage(v);
                setCode(starter[v]);
                setOutput("");
                setAllPassed(false);
              }}
              placeholder="Select Language"
            />
            <button className="run-btn" disabled={isSolved} onClick={runCode}>
              ▶
            </button>
            <button
              className="submit-btn"
              disabled={!allPassed || isSolved}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          <div className="editor-fixed">
            <Editor
              height="100%"
              language={language}
              value={code}
              onChange={(v) => !isSolved && setCode(v)}
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
