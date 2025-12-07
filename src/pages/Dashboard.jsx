import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { auth } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/dashboard.css";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { useEffect, useState, useMemo } from "react";
import { aptitudeQuestions } from "../data/aptitudeQuestions";
import { codingQuestions } from "../data/codingQuestions";

function GaugeChart({ value, total, label, gradientId }) {
  const progress = total === 0 ? 0 : Math.min(Math.max(value / total, 0), 1);
  const radius = 45;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <div className="light-gauge">
      <svg viewBox="0 0 100 50" className="gauge-svg">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        <path className="gauge-bg" d="M 5 50 A 45 45 0 0 1 95 50" />
        {progress > 0 && (
          <path
            className="gauge-fg"
            d="M 5 50 A 45 45 0 0 1 95 50"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ stroke: `url(#${gradientId})` }}
          />
        )}
      </svg>
      <div className="light-center">
        <span className="light-total">{value}</span>
        {total > 0 && <span className="light-sub">/{total}</span>}
        <div className="light-label">{label}</div>
      </div>
    </div>
  );
}

function calculateStats(allQuestions, solvedIds) {
  const solved = allQuestions.filter((q) => solvedIds.includes(q.id));

  return {
    total: solved.length,
    totalQuestions: allQuestions.length,
    byDifficulty: {
      easy: solved.filter((q) => q.difficulty === "easy").length,
      medium: solved.filter((q) => q.difficulty === "medium").length,
      hard: solved.filter((q) => q.difficulty === "hard").length,
    },
    totalByDifficulty: {
      easy: allQuestions.filter((q) => q.difficulty === "easy").length,
      medium: allQuestions.filter((q) => q.difficulty === "medium").length,
      hard: allQuestions.filter((q) => q.difficulty === "hard").length,
    },
  };
}

function calculateStreaks(dailyActivity, last30Days) {
  let currentStreak = 0;
  let maxStreak = 0;
  let activeDays = 0;

  for (let i = last30Days.length - 1; i >= 0; i--) {
    const solved = dailyActivity[last30Days[i]] || 0;

    if (solved > 0) {
      activeDays++;
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return { activeDays, maxStreak };
}

function getLast30Days() {
  const arr = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    arr.push(d.toISOString().split("T")[0]);
  }

  return arr;
}

export function Dashboard() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);

  const [aptSolvedIds, setAptSolvedIds] = useState([]);
  const [codingSolvedIds, setCodingSolvedIds] = useState([]);
  const [dailyActivity, setDailyActivity] = useState({});

  const [codingMock, setCodingMock] = useState({
    testsTaken: 0,
    bestScore: 0,
    avgScore: 0,
    preferredLanguage: "-",
    lastTests: [],
  });

  const [aptMock, setAptMock] = useState({
    testsTaken: 0,
    bestScore: 0,
    avgScore: 0,
    lastTests: [],
  });

  const [openCodingInsights, setOpenCodingInsights] = useState(false);
  const [openAptInsights, setOpenAptInsights] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setDataLoading(false);
      return;
    }

    async function fetchData() {
      setDataLoading(true);

      try {
        const apt = await getDoc(
          doc(db, "users", user.uid, "aptitude", "solved")
        );
        setAptSolvedIds(apt.exists() ? apt.data().solvedQuestions || [] : []);

        const cod = await getDoc(
          doc(db, "users", user.uid, "coding", "solved")
        );
        setCodingSolvedIds(
          cod.exists() ? cod.data().solvedQuestions || [] : []
        );

        const cm = await getDoc(
          doc(db, "users", user.uid, "mockTests", "coding")
        );
        if (cm.exists()) setCodingMock(cm.data());

        const am = await getDoc(
          doc(db, "users", user.uid, "mockTests", "aptitude")
        );
        if (am.exists()) setAptMock(am.data());

        const actSnap = await getDocs(
          collection(db, "users", user.uid, "dailyActivity")
        );
        const map = {};
        actSnap.forEach((d) => {
          map[d.id] = d.data().solved || 0;
        });
        setDailyActivity(map);
      } catch (err) {
        console.error("Dashboard load failed:", err);
      } finally {
        setDataLoading(false);
      }
    }

    fetchData();
  }, [user, authLoading]);

  const last30Days = useMemo(() => getLast30Days(), []);

  const aptStats = useMemo(
    () => calculateStats(aptitudeQuestions, aptSolvedIds),
    [aptSolvedIds]
  );

  const codingStats = useMemo(
    () => calculateStats(codingQuestions, codingSolvedIds),
    [codingSolvedIds]
  );

  const streakData = useMemo(
    () => calculateStreaks(dailyActivity, last30Days),
    [dailyActivity, last30Days]
  );

  const totalSolved = aptStats.total + codingStats.total;

  if (authLoading || dataLoading) {
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

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="loading-container">
          <div className="loading-text">Please log in to view Dashboard</div>
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
                src={
                  user.photoURL ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="profile"
              />
            </div>

            <h3 className="profile-name">{user.displayName || "User"}</h3>
            <p className="profile-email">{user.email}</p>

            <button className="edit-profile-btn">Edit Profile</button>

            <div className="profile-stats">
              <div>
                <span className="stat-label">Total Solved</span>
                <span className="stat-value">{totalSolved}</span>
              </div>
              <div>
                <span className="stat-label">Active Days</span>
                <span className="stat-value">{streakData.activeDays}</span>
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
                  <GaugeChart
                    value={codingStats.total}
                    total={codingStats.totalQuestions}
                    label="Total Solved"
                    gradientId="codingGradient"
                  />
                </div>

                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box easy">
                      <span>Easy</span>
                      <strong>
                        {codingStats.byDifficulty.easy}/
                        {codingStats.totalByDifficulty.easy}
                      </strong>
                    </div>

                    <div className="difficulty-box medium">
                      <span>Med</span>
                      <strong>
                        {codingStats.byDifficulty.medium}/
                        {codingStats.totalByDifficulty.medium}
                      </strong>
                    </div>

                    <div className="difficulty-box hard">
                      <span>Hard</span>
                      <strong>
                        {codingStats.byDifficulty.hard}/
                        {codingStats.totalByDifficulty.hard}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-card">
              <h3 className="card-title">Aptitude</h3>
              <div className="card-body">
                <div className="card-left">
                  <GaugeChart
                    value={aptStats.total}
                    total={aptStats.totalQuestions}
                    label="Total Solved"
                    gradientId="aptitudeGradient"
                  />
                </div>
                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box easy">
                      <span>Easy</span>
                      <strong>
                        {aptStats.byDifficulty.easy}/
                        {aptStats.totalByDifficulty.easy}
                      </strong>
                    </div>

                    <div className="difficulty-box medium">
                      <span>Med</span>
                      <strong>
                        {aptStats.byDifficulty.medium}/
                        {aptStats.totalByDifficulty.medium}
                      </strong>
                    </div>

                    <div className="difficulty-box hard">
                      <span>Hard</span>
                      <strong>
                        {aptStats.byDifficulty.hard}/
                        {aptStats.totalByDifficulty.hard}
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
                  <GaugeChart
                    value={codingMock.avgScore}
                    total={100}
                    label="Avg score"
                    gradientId="codingMockGradient"
                  />
                  <button
                    className="insight-btn"
                    onClick={() => setOpenCodingInsights(true)}
                  >
                    More insights ⟶
                  </button>
                </div>

                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box summary">
                      <span>Tests taken</span>
                      <strong>{codingMock.testsTaken}</strong>
                    </div>

                    <div className="difficulty-box summary">
                      <span>Best score</span>
                      <strong>{codingMock.bestScore}%</strong>
                    </div>

                    <div className="difficulty-box summary">
                      <span>Preferred</span>
                      <strong>{codingMock.preferredLanguage}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="progress-card">
              <h3 className="card-title">Aptitude Mock Test</h3>
              <div className="card-body">
                <div className="card-left">
                  <GaugeChart
                    value={aptMock.avgScore}
                    total={100}
                    label="Avg score"
                    gradientId="aptitudeMockGradient"
                  />
                  <button
                    className="insight-btn"
                    onClick={() => setOpenAptInsights(true)}
                  >
                    More insights ⟶
                  </button>
                </div>
                <div className="card-right">
                  <div className="difficulty-column">
                    <div className="difficulty-box summary">
                      <span>Tests taken</span>
                      <strong>{aptMock.testsTaken}</strong>
                    </div>

                    <div className="difficulty-box summary">
                      <span>Best score</span>
                      <strong>{aptMock.bestScore}%</strong>
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
                <span>Active days: {streakData.activeDays}</span>
                <span>Max streak: {streakData.maxStreak}</span>
              </div>
            </div>

            <div className="streak-grid">
              {last30Days.map((date) => {
                const solved = dailyActivity[date] || 0;

                const cls =
                  solved <= 0
                    ? ""
                    : solved < 5
                    ? "streak-low"
                    : solved < 10
                    ? "streak-mid"
                    : "streak-high";

                return <div key={date} className={`streak-cell ${cls}`} />;
              })}
            </div>
          </section>
        </section>
        {openCodingInsights && (
          <div className="insight-modal">
            <div className="insight-box">
              <button
                className="close-btn"
                onClick={() => setOpenCodingInsights(false)}
              >
                ✖
              </button>

              <h2>Coding Mock Test Insights</h2>

              <div className="insight-stats">
                <div className="insight-stats-item">
                  <p>Tests taken</p>
                  <strong>{codingMock.testsTaken}</strong>
                </div>

                <div className="insight-stats-item">
                  <p>Best score</p>
                  <strong>{codingMock.bestScore}%</strong>
                </div>

                <div className="insight-stats-item">
                  <p>Average score</p>
                  <strong>{codingMock.avgScore}%</strong>
                </div>

                <div className="insight-stats-item">
                  <p>Preferred language</p>
                  <strong>{codingMock.preferredLanguage}</strong>
                </div>
              </div>

              <h3 className="insight-section-title">Recent Tests</h3>
              <div className="insight-list">
                <div className="insight-list-header">
                  <span>Date</span>
                  <span>Score</span>
                  <span>Language</span>
                </div>

                {codingMock.lastTests.slice(-5).map((t, i) => (
                  <div className="insight-item" key={i}>
                    <span>{t.date}</span>
                    <span>{t.score}%</span>
                    <span>{t.language}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {openAptInsights && (
          <div className="insight-modal">
            <div className="insight-box">
              <button
                className="close-btn"
                onClick={() => setOpenAptInsights(false)}
              >
                ✖
              </button>

              <h2>Aptitude Mock Test Insights</h2>

              <div className="insight-stats">
                <div className="insight-stats-item">
                  <p>Tests taken</p>
                  <strong>{aptMock.testsTaken}</strong>
                </div>

                <div className="insight-stats-item">
                  <p>Best score</p>
                  <strong>{aptMock.bestScore}%</strong>
                </div>

                <div className="insight-stats-item">
                  <p>Average score</p>
                  <strong>{aptMock.avgScore}%</strong>
                </div>
              </div>

              <h3 className="insight-section-title">Recent Tests</h3>

              <div className="insight-list">
                <div className="insight-list-header">
                  <span>Date</span>
                  <span>Score</span>
                  <span></span>{" "}
                </div>

                {aptMock.lastTests.slice(-5).map((t, i) => (
                  <div className="insight-item" key={i}>
                    <span>{t.date}</span>
                    <span>{t.score}%</span>
                    <span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
