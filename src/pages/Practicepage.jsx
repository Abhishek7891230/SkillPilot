import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/practice.css";

export function PracticePage() {
  return (
    <>
      <Navbar />

      <main className="practice">
        <section className="section">
          <div className="left-title">
            <h2>Practice Coding</h2>
            <p>
              Strengthen your coding foundation with structured exercises, timed
              mock tests, and concise explanations.
            </p>
          </div>

          <div className="right-content">
            <a href="/coding" className="item">
              <h3>Solve Problems →</h3>
              <p>
                Improve your DSA fundamentals through progressive challenges.
              </p>
            </a>

            <a href="/mocktest/config?mode=coding" className="item">
              <h3>Take Mock Test →</h3>
              <p>Test your skills under real-time interview conditions.</p>
            </a>

            <Link to="/notes" className="item">
              <h3>Learn →</h3>
              <p>Quick, clear explanations for brushing up concepts.</p>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="left-title">
            <h2>Practice Aptitude</h2>
            <p>
              Develop reasoning, accuracy, and confidence with essential
              aptitude exercises and test formats.
            </p>
          </div>

          <div className="right-content">
            <a href="/aptitude" className="item">
              <h3>Solve Problems →</h3>
              <p>
                Build quantitative and logical reasoning through curated sets.
              </p>
            </a>

            <a href="/mocktest/config?mode=aptitude" className="item">
              <h3>Take Mock Test →</h3>
              <p>Assess your accuracy and speed in competitive scenarios.</p>
            </a>

            <Link to="/notes" className="item">
              <h3>Learn →</h3>
              <p>
                Master aptitude faster with structured and simplified notes.
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
