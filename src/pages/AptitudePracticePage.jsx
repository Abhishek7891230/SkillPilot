import { useState, useLayoutEffect, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { aptitudeQuestions } from "../data/aptitudeQuestions";
import "../styles/aptitude.css";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { auth } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "./AuthPage";

export function AptitudePracticePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Logical Reasoning");
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const saveSolvedToFirestore = async (list) => {
    if (!authUser) return;

    const ref = doc(db, "users", authUser.uid, "aptitude", "solved");
    await setDoc(ref, { solvedQuestions: list }, { merge: true });
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthUser(null);
        setAuthLoading(false);
        return;
      }

      setAuthUser(user);

      const ref = doc(db, "users", user.uid, "aptitude", "solved");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setSolvedQuestions(snap.data().solvedQuestions || []);
      }

      setAuthLoading(false);
    });

    return () => unsub();
  }, []);

  const filteredQuesions = aptitudeQuestions.filter(
    (q) => q.category === selectedCategory
  );

  const currentQuestion = filteredQuesions[currentIndex];

  useLayoutEffect(() => {
    if (!currentQuestion) return;

    if (solvedQuestions.includes(currentQuestion.id)) {
      setSelectedAnswer(currentQuestion.answerIndex);
      setSubmitted(true);
      setShowSolution(false);
      return;
    }

    setSelectedAnswer(null);
    setSubmitted(false);
    setShowSolution(false);
    setAttempt(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion.id]);

  const handleSelectOption = (index) => {
    if (solvedQuestions.includes(currentQuestion.id)) {
      return;
    }
    if (
      !submitted ||
      (submitted && selectedAnswer !== currentQuestion.answerIndex)
    ) {
      setSelectedAnswer(index);
      if (submitted) {
        setSubmitted(false);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setSubmitted(true);
    const isCorrect = selectedAnswer === currentQuestion.answerIndex;

    if (isCorrect && !solvedQuestions.includes(currentQuestion.id)) {
      const newList = [...solvedQuestions, currentQuestion.id];
      setSolvedQuestions(newList);
      saveSolvedToFirestore(newList);
    }

    if (!isCorrect) {
      setAttempt((prev) => prev + 1);
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 < filteredQuesions.length ? prev + 1 : 0
    );

    setSelectedAnswer(null);
    setAttempt(0);
    setSubmitted(false);
    setShowSolution(false);
  };

  function handlePrevBtn() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  }

  const isCorrect = submitted && selectedAnswer === currentQuestion.answerIndex;
  const isWrong = submitted && selectedAnswer !== currentQuestion.answerIndex;

  if (authLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <div className="loading-text">Loading…</div>
      </div>
    );
  }

  if (!authUser) {
    return <Auth />;
  }

  return (
    <>
      <Navbar />

      <main className="aptitude-page">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Aptitude</h2>
            <span className="question-count">
              Question {currentIndex + 1}/{filteredQuesions.length}
            </span>
          </div>

          <div className="categories">
            <h3>Categories</h3>
            <ul className="category-list">
              <li
                className={`category-item ${
                  selectedCategory === "Logical Reasoning" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Logical Reasoning");
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setAttempt(0);
                  setSubmitted(false);
                  setShowSolution(false);
                  if (openCategory === "Logical Reasoning") {
                    setOpenCategory(null);
                  } else {
                    setOpenCategory("Logical Reasoning");
                  }
                }}
              >
                <span className="category-icon">✓</span>
                Logical Reasoning ▾
              </li>
              {openCategory === "Logical Reasoning" && (
                <ul className="question-sublist">
                  {aptitudeQuestions
                    .filter((q) => q.category === "Logical Reasoning")
                    .map((q, index) => (
                      <li
                        key={q.id}
                        className={`question-subitem ${
                          solvedQuestions.includes(q.id) ? "solved" : ""
                        }`}
                        onClick={() => {
                          setSelectedCategory("Logical Reasoning");
                          setCurrentIndex(index);
                        }}
                      >
                        {index + 1}. {q.question.slice(0, 30)}
                      </li>
                    ))}
                </ul>
              )}
              <li
                className={`category-item ${
                  selectedCategory === "Quantitative Aptitude" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Quantitative Aptitude");
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setAttempt(0);
                  setSubmitted(false);
                  setShowSolution(false);
                  if (openCategory === "Quantitative Aptitude") {
                    setOpenCategory(null);
                  } else {
                    setOpenCategory("Quantitative Aptitude");
                  }
                }}
              >
                <span className="category-icon">✓</span>
                Quantitative Aptitude ▾
              </li>
              {openCategory === "Quantitative Aptitude" && (
                <ul className="question-sublist">
                  {aptitudeQuestions
                    .filter((q) => q.category === "Quantitative Aptitude")
                    .map((q, index) => (
                      <li
                        key={q.id}
                        className={`question-subitem ${
                          solvedQuestions.includes(q.id) ? "solved" : ""
                        }`}
                        onClick={() => {
                          setSelectedCategory("Quantitative Aptitude");
                          setCurrentIndex(index);
                        }}
                      >
                        {index + 1}. {q.question.slice(0, 30)}
                      </li>
                    ))}
                </ul>
              )}
              <li
                className={`category-item ${
                  selectedCategory === "Verbal Ability" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Verbal Ability");
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setAttempt(0);
                  setSubmitted(false);
                  setShowSolution(false);
                  if (openCategory === "Verbal Ability") {
                    setOpenCategory(null);
                  } else {
                    setOpenCategory("Verbal Ability");
                  }
                }}
              >
                <span className="category-icon">✓</span>
                Verbal Ability ▾
              </li>
              {openCategory === "Verbal Ability" && (
                <ul className="question-sublist">
                  {aptitudeQuestions
                    .filter((q) => q.category === "Verbal Ability")
                    .map((q, index) => (
                      <li
                        key={q.id}
                        className={`question-subitem ${
                          solvedQuestions.includes(q.id) ? "solved" : ""
                        }`}
                        onClick={() => {
                          setSelectedCategory("Verbal Ability");
                          setCurrentIndex(index);
                        }}
                      >
                        {index + 1}. {q.question.slice(0, 30)}
                      </li>
                    ))}
                </ul>
              )}
              <li
                className={`category-item ${
                  selectedCategory === "Non-Verbal Reasoning" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Non-Verbal Reasoning");
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setAttempt(0);
                  setSubmitted(false);
                  setShowSolution(false);
                  if (openCategory === "Non-Verbal Reasoning") {
                    setOpenCategory(null);
                  } else {
                    setOpenCategory("Non-Verbal Reasoning");
                  }
                }}
              >
                <span className="category-icon">✓</span>
                Non-Verbal Reasoning ▾
              </li>
              {openCategory === "Non-Verbal Reasoning" && (
                <ul className="question-sublist">
                  {aptitudeQuestions
                    .filter((q) => q.category === "Non-Verbal Reasoning")
                    .map((q, index) => (
                      <li
                        key={q.id}
                        className={`question-subitem ${
                          solvedQuestions.includes(q.id) ? "solved" : ""
                        }`}
                        onClick={() => {
                          setSelectedCategory("Non-Verbal Reasoning");
                          setCurrentIndex(index);
                        }}
                      >
                        {index + 1}. {q.question.slice(0, 30)}
                      </li>
                    ))}
                </ul>
              )}
              <li
                className={`category-item ${
                  selectedCategory === "Data Interpretation" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Data Interpretation");
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setAttempt(0);
                  setSubmitted(false);
                  setShowSolution(false);
                  if (openCategory === "Data Interpretation") {
                    setOpenCategory(null);
                  } else {
                    setOpenCategory("Data Interpretation");
                  }
                }}
              >
                <span className="category-icon">✓</span>
                Data Interpretation ▾
              </li>
              {openCategory === "Data Interpretation" && (
                <ul className="question-sublist">
                  {aptitudeQuestions
                    .filter((q) => q.category === "Data Interpretation")
                    .map((q, index) => (
                      <li
                        key={q.id}
                        className={`question-subitem ${
                          solvedQuestions.includes(q.id) ? "solved" : ""
                        }`}
                        onClick={() => {
                          setSelectedCategory("Data Interpretation");
                          setCurrentIndex(index);
                        }}
                      >
                        {index + 1}. {q.question.slice(0, 30)}
                      </li>
                    ))}
                </ul>
              )}
            </ul>
          </div>
        </aside>

        <div className="content-area">
          <div className="question-container">
            <div className="question-header">
              <div className="left-info">
                <span className="difficulty-badge">
                  {currentQuestion.difficulty}
                </span>
                <span className="topic-badge">{currentQuestion.category}</span>
              </div>

              <div className="solved-info">
                Total Questions Solved: {solvedQuestions.length}/
                {aptitudeQuestions.length}
              </div>
            </div>

            <div className="question-content">
              <h2 className="question-title">Question {currentIndex + 1}</h2>
              <p className="question-text">{currentQuestion.question}</p>
            </div>

            <div className="options-container">
              {currentQuestion.options.map((opt, index) => {
                const isThisCorrect = index === currentQuestion.answerIndex;
                const isSelected = selectedAnswer === index;
                const showAsCorrect =
                  (submitted && isCorrect && isThisCorrect) ||
                  (solvedQuestions.includes(currentQuestion.id) &&
                    isThisCorrect) ||
                  (showSolution && isThisCorrect);
                const showAsIncorrect =
                  submitted && isSelected && !isThisCorrect;

                return (
                  <div
                    key={index}
                    className={`option-card
                      ${isSelected && !submitted ? "selected" : ""}
                      ${showAsCorrect ? "correct" : ""}
                      ${showAsIncorrect ? "incorrect" : ""}
                    `}
                    onClick={() => handleSelectOption(index)}
                  >
                    <span className="option-label">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="option-text">{opt}</span>

                    {showAsCorrect && <span className="result-icon">✓</span>}
                    {showAsIncorrect && <span className="result-icon">✗</span>}
                  </div>
                );
              })}
            </div>

            {submitted && (
              <div
                className={`review-section ${
                  isCorrect ? "correct-review" : "wrong-review"
                }`}
              >
                <div className="review-text">
                  {isCorrect ? (
                    <>
                      <strong>That's Correct!</strong>
                      <p>Great job! You got it right.</p>
                    </>
                  ) : (
                    <>
                      <strong>That's Wrong!</strong>
                      <p>Review concepts and try again.</p>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="action-buttons">
              <button className="prev-btn" onClick={handlePrevBtn}>
                ⟵ Previous Question
              </button>
              {!isCorrect && (
                <button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={
                    selectedAnswer === null ||
                    (submitted && isWrong) ||
                    solvedQuestions.includes(currentQuestion.id)
                  }
                >
                  {submitted ? "Resubmit" : "Submit Answer"}
                </button>
              )}

              <button className="next-btn" onClick={handleNext}>
                Next Question →
              </button>
            </div>

            {isWrong && attempt >= 3 && !showSolution && (
              <button className="solutionBtn" onClick={handleShowSolution}>
                Show Solution
              </button>
            )}

            {showSolution && (
              <div className="explanation-box">
                <h3>Solution</h3>
                <p>{currentQuestion.solution}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
