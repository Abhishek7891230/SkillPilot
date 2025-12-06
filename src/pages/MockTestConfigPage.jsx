import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/mockconfig.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { activateMockSession } from "../utils/mockSession.js";

export function MockTestConfigPage() {
  const [params] = useSearchParams();
  const mode = params.get("mode") || "aptitude";

  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("mix");

  const [countMode, setCountMode] = useState("preset");
  const [count, setCount] = useState(10);
  const [customCount, setCustomCount] = useState("");

  const [timeMode, setTimeMode] = useState("preset");
  const [totalTime, setTotalTime] = useState(30);
  const [customTime, setCustomTime] = useState("");

  const [perQuestionMode, setPerQuestionMode] = useState("preset");
  const [perQuestion, setPerQuestion] = useState(0.25);
  const [customPerQuestion, setCustomPerQuestion] = useState("");

  const questionPresets = [5, 10, 15, 20, 25, 30, 40, 50];
  const timePresets = [5, 10, 15, 20, 30, 45, 60, 90, 120, 180];
  const perQuestionPresets = [0, 0.25, 0.5, 1, 2, 3, 5, 10, 15, 20, 30];

  function handleCountChange(value) {
    if (value === "custom") {
      setCountMode("custom");
      setCustomCount("");
    } else {
      setCountMode("preset");
      setCount(parseInt(value));
    }
  }

  function handleCustomCountChange(value) {
    const num = parseInt(value);
    if (value === "" || (num >= 5 && num <= 50 && !value.includes("."))) {
      setCustomCount(value);
      if (num >= 5 && num <= 50) {
        setCount(num);
      }
    }
  }

  function handleTimeChange(value) {
    if (value === "custom") {
      setTimeMode("custom");
      setCustomTime("");
    } else {
      setTimeMode("preset");
      setTotalTime(parseInt(value));
    }
  }

  function handleCustomTimeChange(value) {
    const num = parseInt(value);
    if (value === "" || (num >= 5 && num <= 180 && !value.includes("."))) {
      setCustomTime(value);
      if (num >= 5 && num <= 180) {
        setTotalTime(num);
      }
    }
  }

  function handlePerQuestionChange(value) {
    if (value === "custom") {
      setPerQuestionMode("custom");
      setCustomPerQuestion("");
    } else {
      setPerQuestionMode("preset");
      setPerQuestion(parseInt(value));
    }
  }

  function handleCustomPerQuestionChange(value) {
    const num = parseFloat(value);
    if (
      value === "" ||
      (num >= 0.25 && num <= 30 && value.split(".").length <= 2)
    ) {
      setCustomPerQuestion(value);
      if (num >= 0.25 && num <= 30) {
        setPerQuestion(num);
      }
    }
  }

  function formatTime(minutes) {
    if (minutes === 0) return "Disabled";
    if (minutes < 1) return `${minutes * 60} Seconds`;
    return `${minutes} ${minutes === 1 ? "Minute" : "Minutes"}`;
  }

  function startTest() {
    if (
      countMode === "custom" &&
      (customCount === "" || parseInt(customCount) < 5)
    ) {
      alert("Please enter a valid number of questions (minimum 5)");
      return;
    }

    if (
      timeMode === "custom" &&
      (customTime === "" || parseInt(customTime) < 5)
    ) {
      alert("Please enter a valid total time (minimum 5 minutes)");
      return;
    }

    if (perQuestionMode === "custom" && customPerQuestion === "") {
      alert("Please enter a valid time per question (0 to disable)");
      return;
    }

    activateMockSession();

    navigate(
      `/mocktest/start?mode=${mode}&difficulty=${difficulty}&count=${count}&total=${totalTime}&perq=${perQuestion}`,
      { replace: true }
    );
  }

  return (
    <>
      <Navbar />
      <main className="mock-config-page">
        <div className="mock-card">
          <h2 className="config-title">
            {mode === "aptitude" ? "Aptitude Mock Test" : "Coding Mock Test"}
          </h2>

          <div className="config-group">
            <label>Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="mix">Mix</option>
            </select>
          </div>

          <div className="config-group">
            <label>Number of Questions</label>
            {countMode === "preset" ? (
              <select
                value={count}
                onChange={(e) => handleCountChange(e.target.value)}
              >
                {questionPresets.map((num) => (
                  <option key={num} value={num}>
                    {num} Questions
                  </option>
                ))}
                <option value="custom">Custom</option>
              </select>
            ) : (
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="number"
                  value={customCount}
                  placeholder="Enter 5-50"
                  min={5}
                  max={50}
                  onChange={(e) => handleCustomCountChange(e.target.value)}
                  style={{ flex: 1 }}
                />
                <button
                  onClick={() => {
                    setCountMode("preset");
                    setCount(10);
                  }}
                  style={{
                    padding: "8px 12px",
                    background: "#6c757d",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
              </div>
            )}
            {countMode === "custom" && (
              <small>Enter between 5 and 50 questions</small>
            )}
          </div>

          <div className="config-group">
            <label>Total Test Time</label>
            {timeMode === "preset" ? (
              <select
                value={totalTime}
                onChange={(e) => handleTimeChange(e.target.value)}
              >
                {timePresets.map((num) => (
                  <option key={num} value={num}>
                    {num} Minutes
                  </option>
                ))}
                <option value="custom">Custom</option>
              </select>
            ) : (
              <div className="custom-input-group">
                <input
                  type="number"
                  value={customTime}
                  placeholder="Enter 5-180"
                  min={5}
                  max={180}
                  onChange={(e) => handleCustomTimeChange(e.target.value)}
                />
                <button
                  className="back-btn"
                  onClick={() => {
                    setTimeMode("preset");
                    setTotalTime(30);
                  }}
                >
                  Back
                </button>
              </div>
            )}
            {timeMode === "custom" && (
              <small>Enter between 5 and 180 minutes</small>
            )}
          </div>

          <div className="config-group">
            <label>Time Per Question (optional)</label>
            {perQuestionMode === "preset" ? (
              <select
                value={perQuestion}
                onChange={(e) => handlePerQuestionChange(e.target.value)}
              >
                {perQuestionPresets.map((num) => (
                  <option key={num} value={num}>
                    {formatTime(num)}
                  </option>
                ))}
                <option value="custom">Custom</option>
              </select>
            ) : (
              <div className="custom-input-group">
                <input
                  type="number"
                  value={customPerQuestion}
                  placeholder="Enter 0.25-30"
                  min={0.25}
                  max={30}
                  step={0.25}
                  onChange={(e) =>
                    handleCustomPerQuestionChange(e.target.value)
                  }
                />
                <button
                  className="back-btn"
                  onClick={() => {
                    setPerQuestionMode("preset");
                    setPerQuestion(0.25);
                  }}
                >
                  Back
                </button>
              </div>
            )}
            {perQuestionMode === "custom" ? (
              <small>Enter between 0.25 and 30 minutes (0 to disable)</small>
            ) : (
              <small>Set to Disabled to remove time limit per question</small>
            )}
          </div>

          <button className="start-btn" onClick={startTest}>
            Start Test
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
