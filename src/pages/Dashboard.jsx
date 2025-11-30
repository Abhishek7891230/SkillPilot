import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { auth } from "../firebase/auth";
import "../styles/dashboard.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { useEffect, useState } from "react";
import { aptitudeQuestions } from "../data/aptitudeQuestions";

export function Dashboard() {
  const streakCells = Array.from({ length: 30 });
  const user = auth.currentUser;

  const [aptSolvedIds, setAptSolvedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const solvedAptObjects = aptitudeQuestions.filter((q) =>
    aptSolvedIds.includes(q.id)
  );

  const totalAptSolved = solvedAptObjects.length;

  const aptitudeEasy = solvedAptObjects.filter(
    (q) => q.difficulty === "easy"
  ).length;
  const aptitudeMed = solvedAptObjects.filter(
    (q) => q.difficulty === "medium"
  ).length;
  const aptitudeHard = solvedAptObjects.filter(
    (q) => q.difficulty === "hard"
  ).length;

  const totalAptEasy = aptitudeQuestions.filter(
    (q) => q.difficulty === "easy"
  ).length;
  const totalAptMed = aptitudeQuestions.filter(
    (q) => q.difficulty === "medium"
  ).length;
  const totalAptHard = aptitudeQuestions.filter(
    (q) => q.difficulty === "hard"
  ).length;

  const aptProgressPercent =
    aptitudeQuestions.length === 0
      ? 0
      : totalAptSolved / aptitudeQuestions.length;

  const clampedApt = Math.min(Math.max(aptProgressPercent, 0), 1);
  const radius = 45;
  const circumference = Math.PI * radius;
  const aptOffset = circumference * (1 - clampedApt);

  useEffect(() => {
    async function fetchAptData() {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "users", user.uid, "aptitude", "solved");
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setAptSolvedIds(snap.data().solvedQuestions || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAptData();
  }, [user]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loading-container">
          <div className="loader"></div>
          <div className="loading-text">Loading Dashboard...</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="dashboard-page">
        <aside className="dashboard-sidebar">
          <div className="profile-card">
            <div className="profile-pic">
              <img
                className="profile-picture"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profile"
              />
            </div>
            <h3 className="profile-name">Your Name</h3>
            <p className="profile-email">user@example.com</p>

            <button className="edit-profile-btn">Edit Profile</button>

            <div className="profile-stats">
              <div>
                <span className="stat-label">Total Solved</span>
                <span className="stat-value">{totalAptSolved}</span>
              </div>
              <div>
                <span className="stat-label">Active Days</span>
                <span className="stat-value">0</span>
              </div>
            </div>
          </div>
        </aside>

        <section className="dashboard-main">
          <div className="progress-grid">
            <div className="progress-card">
              <h3 className="card-title">Coding</h3>

              <div className="card-body">
                <div className="card-left">
                  <div className="light-gauge">
                    <svg viewBox="0 0 100 50" className="gauge-svg">
                      <defs>
                        <linearGradient
                          id="gaugeGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                      <path
                        className="gauge-bg"
                        d="M 5 50 A 45 45 0 0 1 95 50"
                      />
                    </svg>
                    <div className="light-center">
                      <span className="light-total">0</span>
                      <span className="light-sub">/3762</span>
                      <div className="light-label">Total Solved</div>
                    </div>
                  </div>
                </div>

                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box easy">
                      <span>Easy</span>
                      <strong>0/915</strong>
                    </div>
                    <div className="difficulty-box medium">
                      <span>Med </span>
                      <strong>0/959</strong>
                    </div>
                    <div className="difficulty-box hard">
                      <span>Hard</span>
                      <strong>0/888</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-card">
              <h3 className="card-title">Aptitude</h3>

              <div className="card-body">
                <div className="card-left">
                  <div className="light-gauge">
                    <svg viewBox="0 0 100 50" className="gauge-svg">
                      <path
                        className="gauge-bg"
                        d="M 5 50 A 45 45 0 0 1 95 50"
                      />
                      <path
                        className="gauge-fg"
                        d="M 5 50 A 45 45 0 0 1 95 50"
                        strokeDasharray={circumference}
                        strokeDashoffset={aptOffset}
                      />
                    </svg>

                    <div className="light-center">
                      <span className="light-total">{totalAptSolved}</span>
                      <span className="light-sub">
                        /{aptitudeQuestions.length}
                      </span>
                      <div className="light-label">Total Solved</div>
                    </div>
                  </div>
                </div>

                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box easy">
                      <span>Easy</span>
                      <strong>
                        {aptitudeEasy}/{totalAptEasy}
                      </strong>
                    </div>
                    <div className="difficulty-box medium">
                      <span>Med </span>
                      <strong>
                        {aptitudeMed}/{totalAptMed}
                      </strong>
                    </div>
                    <div className="difficulty-box hard">
                      <span>Hard</span>
                      <strong>
                        {aptitudeHard}/{totalAptHard}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-card">
              <h3 className="card-title">Coding Mock Test</h3>

              <div className="card-body">
                <div className="card-left">
                  <div className="light-gauge">
                    <svg viewBox="0 0 100 50" className="gauge-svg">
                      <defs>
                        <linearGradient
                          id="gaugeGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                      <path
                        className="gauge-bg"
                        d="M 5 50 A 45 45 0 0 1 95 50"
                      />
                    </svg>
                    <div className="light-center">
                      <span className="light-total">0</span>
                      <div className="light-label">Success rate</div>
                    </div>
                  </div>
                </div>

                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box summary">
                      <span>Tests taken</span>
                      <strong>0</strong>
                    </div>
                    <div className="difficulty-box summary">
                      <span>Best score</span>
                      <strong> 0%</strong>
                    </div>
                    <div className="difficulty-box summary">
                      <span>Average</span>
                      <strong>0%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-card">
              <h3 className="card-title">Aptitude Mock Test</h3>

              <div className="card-body">
                <div className="card-left">
                  <div className="light-gauge">
                    <svg viewBox="0 0 100 50" className="gauge-svg">
                      <defs>
                        <linearGradient
                          id="gaugeGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                      <path
                        className="gauge-bg"
                        d="M 5 50 A 45 45 0 0 1 95 50"
                      />
                    </svg>
                    <div className="light-center">
                      <span className="light-total">0</span>
                      <div className="light-label">Success rate</div>
                    </div>
                  </div>
                </div>

                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box summary">
                      <span>Tests taken</span>
                      <strong>0</strong>
                    </div>
                    <div className="difficulty-box summary">
                      <span>Best score</span>
                      <strong>0%</strong>
                    </div>
                    <div className="difficulty-box summary">
                      <span>Average</span>
                      <strong>0%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="streak-section">
            <div className="streak-header">
              <h3>Practice streak (last 30 days)</h3>
              <div className="streak-meta">
                <span>Active days: 0</span>
                <span>Max streak: 0</span>
              </div>
            </div>

            <div className="streak-grid">
              {streakCells.map((_, idx) => (
                <div key={idx} className="streak-cell" />
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
