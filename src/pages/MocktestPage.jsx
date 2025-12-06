import { useSearchParams, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import Editor from "@monaco-editor/react";
import "../styles/mocktest.css";
import { clearMockSession, isSessionActive } from "../utils/mockSession";
import { mockAptQuestions } from "../data/mockAptQuestions";
import { mockCodingQuestions } from "../data/mockCodingQuestions";

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTimeFromSeconds(totalSeconds) {
  if (totalSeconds <= 0) return "00:00";
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function MockTestPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSessionActive()) {
      navigate("/mocktest", { replace: true });
    }
  }, [navigate]);

  const resultsRef = useRef(null);

  const mode = params.get("mode") === "coding" ? "coding" : "aptitude";
  const difficulty = params.get("difficulty") || "mix";

  const countParam = parseInt(params.get("count") || "10", 10);
  const totalMinutesParam = parseInt(params.get("total") || "0", 10);
  const perQuestionParam = parseFloat(params.get("perq") || "0");

  const questionCount =
    Number.isFinite(countParam) && countParam > 0 ? countParam : 10;
  const totalMinutes =
    Number.isFinite(totalMinutesParam) && totalMinutesParam > 0
      ? totalMinutesParam
      : 0;
  const perQuestionMinutes =
    Number.isFinite(perQuestionParam) && perQuestionParam > 0
      ? perQuestionParam
      : 0;

  const hasPerQuestionTimer = perQuestionMinutes > 0;
  const initialPerQuestionSeconds = Math.round(perQuestionMinutes * 60);

  const questions = useMemo(() => {
    const pool = mode === "aptitude" ? mockAptQuestions : mockCodingQuestions;
    const filtered = ["easy", "medium", "hard"].includes(difficulty)
      ? pool.filter((q) => q.difficulty === difficulty)
      : pool;
    return shuffleArray(filtered).slice(0, questionCount);
  }, [mode, difficulty, questionCount]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [currentLanguage, setCurrentLanguage] = useState("python");
  const [codeState, setCodeState] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [showResults, setShowResults] = useState(false);
  const [scoreData, setScoreData] = useState(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const [output, setOutput] = useState("");
  const [runLoading, setRunLoading] = useState(false);

  const [remainingPerQuestion, setRemainingPerQuestion] = useState(
    initialPerQuestionSeconds
  );
  const [remainingTotalSeconds, setRemainingTotalSeconds] = useState(
    !hasPerQuestionTimer && totalMinutes > 0 ? totalMinutes * 60 : 0
  );

  const languageOptions = [
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "cpp", label: "C++" },
    { value: "java", label: "Java" },
    { value: "typescript", label: "TypeScript" },
  ];

  const starterByLanguage = {
    python: `def solve(*args):\n    return 0\n`,
    javascript: `function solve(...args) {\n  return 0;\n}\n`,
    typescript: `export function solve(...args: any[]): any {\n  return 0;\n}\n`,
    cpp: `#include <bits/stdc++.h>\nusing namespace std;\n\nlong long solve() {\n    return 0;\n}\n\nint main() {\n    return 0;\n}\n`,
    java: `public class Solution {\n    public static int solve() {\n        return 0;\n    }\n}\n`,
  };

  const currentQuestion = questions[currentIndex];

  function getCurrentCode() {
    const entry = codeState[currentIndex];
    if (entry && entry[currentLanguage] != null) return entry[currentLanguage];
    return starterByLanguage[currentLanguage] || "";
  }

  const currentCode = mode === "coding" ? getCurrentCode() : "";

  function setCurrentCode(newCode) {
    setCodeState((prev) => {
      const entry = prev[currentIndex] || {};
      return {
        ...prev,
        [currentIndex]: { ...entry, [currentLanguage]: newCode },
      };
    });
  }

  function handleSelectOption(optionIndex) {
    setAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
  }

  const currentAnswer = answers[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const hasAnswerForAptitude =
    mode === "aptitude" &&
    currentAnswer !== undefined &&
    currentAnswer !== null;

  const hasAnswerForCoding = mode === "coding" && currentCode.trim().length > 0;

  const canProceed =
    mode === "aptitude" ? hasAnswerForAptitude : hasAnswerForCoding;

  function goPrev() {
    if (hasPerQuestionTimer) return;
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  function goNext() {
    if (!canProceed || submitted) return;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      if (hasPerQuestionTimer) {
        setRemainingPerQuestion(initialPerQuestionSeconds);
      }
      setOutput("");
    }
  }

  function calculateAptitudeScore() {
    let correct = 0;
    let wrong = 0;

    const correctList = [];
    const wrongList = [];

    questions.forEach((q, idx) => {
      if (answers[idx] === q.answerIndex) {
        correct++;
        correctList.push(q.question);
      } else {
        wrong++;
        wrongList.push(q.question);
      }
    });

    return {
      score: correct,
      total: questions.length,
      correctList,
      wrongList,
    };
  }

  const submitTest = useCallback(
    (force = false) => {
      if (submitted) return;
      if (!force && !canProceed) return;

      setSubmitted(true);
      clearMockSession();

      if (mode === "aptitude") {
        const results = calculateAptitudeScore();
        setScoreData(results);
        setShowResults(true);

        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        navigate("/mocktest", { replace: true });
      }
    },
    [submitted, canProceed, navigate, answers, questions, mode]
  );

  useEffect(() => {
    if (!hasPerQuestionTimer || submitted) return;
    setRemainingPerQuestion(initialPerQuestionSeconds);
  }, [currentIndex, hasPerQuestionTimer, submitted, initialPerQuestionSeconds]);

  useEffect(() => {
    if (
      !hasPerQuestionTimer ||
      submitted ||
      remainingPerQuestion <= 0 ||
      isTransitioning
    )
      return;

    const id = setInterval(() => {
      setRemainingPerQuestion((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [hasPerQuestionTimer, submitted, currentIndex, isTransitioning]);

  useEffect(() => {
    if (
      !hasPerQuestionTimer ||
      submitted ||
      remainingPerQuestion > 0 ||
      isTransitioning
    )
      return;

    setIsTransitioning(true);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setOutput("");
    } else {
      submitTest(true);
    }
  }, [
    hasPerQuestionTimer,
    submitted,
    remainingPerQuestion,
    currentIndex,
    questions.length,
    submitTest,
    isTransitioning,
  ]);

  useEffect(() => {
    if (isTransitioning) {
      setIsTransitioning(false);
    }
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    if (hasPerQuestionTimer || submitted || totalMinutes <= 0) return;
    if (remainingTotalSeconds <= 0) {
      submitTest(true);
      return;
    }

    const timeoutId = setTimeout(() => {
      setRemainingTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [
    hasPerQuestionTimer,
    submitted,
    totalMinutes,
    remainingTotalSeconds,
    submitTest,
  ]);

  function handleExit() {
    const ok = window.confirm("Exit test? Progress will be lost.");
    if (!ok) return;
    clearMockSession();
    navigate("/mocktest", { replace: true });
  }

  async function runCode() {
    if (mode !== "coding") return;

    if (!currentCode.trim()) {
      setOutput("No code to run.");
      return;
    }

    setRunLoading(true);
    setOutput("Running...");

    try {
      const res = await fetch(
        "https://skillpilot-production-8c12.up.railway.app/judge",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            language: currentLanguage,
            code: currentCode,
            questionId: currentQuestion.id,
          }),
        }
      );

      const data = await res.json();

      if (!Array.isArray(data.results)) {
        setOutput("Judge Error.");
        setRunLoading(false);
        return;
      }

      const formatted = data.results
        .map(
          (r, i) => `
Test Case ${i + 1}
Input: ${r.input}
Expected: ${r.expected}
Got: ${r.actual}
Result: ${r.passed ? "✔ PASS" : "✘ FAIL"}
`
        )
        .join("\n");

      setOutput(formatted);
    } catch (err) {
      setOutput("Error running code." + err);
    }

    setRunLoading(false);
  }

  let timerLabel = "";
  let timerValue = "";

  if (hasPerQuestionTimer) {
    timerLabel = "Time per question";
    timerValue = formatTimeFromSeconds(remainingPerQuestion);
  } else if (totalMinutes > 0) {
    timerLabel = "Total time left";
    timerValue = formatTimeFromSeconds(remainingTotalSeconds);
  } else {
    timerLabel = "Time";
    timerValue = "No limit";
  }

  return (
    <div className="mock-test-page">
      <header className="mock-test-header">
        <div className="header-left">
          <h1 className="test-title">
            {mode === "aptitude" ? "Aptitude Mock Test" : "Coding Mock Test"}
          </h1>
          <div className="test-meta">
            <span>
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span>•</span>
            <span>
              Difficulty: {difficulty === "mix" ? "Mixed" : difficulty}
            </span>
            <span>•</span>
            <span>
              {timerLabel}: {timerValue}
            </span>
          </div>
        </div>
        <button className="exit-btn" onClick={handleExit}>
          Exit Test
        </button>
      </header>

      <main
        className={mode === "coding" ? "coding-content" : "aptitude-content"}
      >
        {mode === "aptitude" ? (
          <>
            <h2 className="question-title">{currentQuestion?.question}</h2>
            <div className="options-list">
              {(currentQuestion?.options || []).map((opt, idx) => (
                <button
                  key={idx}
                  className={`option-item ${
                    currentAnswer === idx ? "selected" : ""
                  }`}
                  onClick={() => handleSelectOption(idx)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="option-text">{opt}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="question-panel">
              <h2 className="question-title">{currentQuestion?.title}</h2>

              <div className="question-section">
                <h3>Description</h3>
                <p>{currentQuestion?.description}</p>
              </div>

              <div className="question-section">
                <h3>Input Format</h3>
                <p>{currentQuestion?.inputFormat}</p>
              </div>

              <div className="question-section">
                <h3>Output Format</h3>
                <p>{currentQuestion?.outputFormat}</p>
              </div>

              {currentQuestion?.samples && (
                <div className="question-section">
                  <h3>Sample Tests</h3>
                  {currentQuestion.samples.map((s, i) => (
                    <div key={i} className="sample-case">
                      <strong>Input:</strong>
                      <pre>{s.input}</pre>

                      <strong>Output:</strong>
                      <pre>{s.output}</pre>

                      {s.explanation && (
                        <p className="explanation">{s.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="editor-panel">
              <div className="editor-toolbar">
                <label>Language:</label>
                <select
                  value={currentLanguage}
                  onChange={(e) => {
                    setCurrentLanguage(e.target.value);
                    setOutput("");
                  }}
                >
                  {languageOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                <button
                  className="run-btn"
                  onClick={runCode}
                  disabled={runLoading}
                >
                  {runLoading ? "Running..." : "▶ Run"}
                </button>
              </div>

              <div className="editor-wrapper">
                <Editor
                  height="100%"
                  language={currentLanguage}
                  theme="vs-dark"
                  value={currentCode}
                  onChange={(v) => setCurrentCode(v || "")}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                  }}
                />
              </div>

              <div className="output-box">
                <h3>Output</h3>
                <pre className="output-text">
                  {output || "-- Run code to see output --"}
                </pre>
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="mock-test-footer">
        {!hasPerQuestionTimer && currentIndex > 0 && !submitted && (
          <button className="btn-secondary" onClick={goPrev}>
            Previous
          </button>
        )}

        {!isLastQuestion && !submitted && (
          <button
            className={`btn-primary ${!canProceed ? "disabled" : ""}`}
            onClick={goNext}
            disabled={!canProceed}
          >
            Next
          </button>
        )}

        {isLastQuestion && !submitted && mode === "aptitude" && (
          <button
            className={`btn-submit ${!canProceed ? "disabled" : ""}`}
            onClick={() => submitTest(false)}
            disabled={!canProceed}
          >
            Submit Test
          </button>
        )}

        {submitted && <span className="submitted-text">Test submitted!</span>}
      </footer>

      {showResults && scoreData && (
        <div ref={resultsRef} className="results-modal">
          <div className="results-box">
            <h2>Your Score</h2>
            <p>
              <strong>{scoreData.score}</strong> / {scoreData.total}
            </p>

            <div className="results-section">
              <h3>What You Know</h3>
              {scoreData.correctList.length === 0 ? (
                <p className="empty-text">Nothing correct this time.</p>
              ) : (
                <ul className="result-list">
                  {scoreData.correctList.map((q, i) => (
                    <li key={i}>
                      <span className="icon good">✔</span> {q}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="results-section">
              <h3>What You Should Focus On</h3>
              {scoreData.wrongList.length === 0 ? (
                <p className="empty-text">Perfect. Nothing to improve.</p>
              ) : (
                <ul className="result-list">
                  {scoreData.wrongList.map((q, i) => (
                    <li key={i}>
                      <span className="icon bad">✘</span> {q}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="modal-buttons">
              <button
                onClick={() =>
                  navigate("/mocktest/config?mode=aptitude", { replace: true })
                }
              >
                Take Another Test
              </button>

              <button onClick={() => navigate("/dashboard")}>
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
