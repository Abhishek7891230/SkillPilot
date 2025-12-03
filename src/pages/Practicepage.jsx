import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/practice.css";

export function PracticePage() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="practice-area coding-area">
          <div className="area-header">
            <i className="fas fa-code"></i>
            <h2>Practice Coding</h2>
          </div>
          <div className="sub-options">
            <a href="/coding" className="option-card">
              <i className="fas fa-terminal"></i>
              <div className="option-text">
                <h3>Solve Problems →</h3>
                <p>Solve problems focused on DSA and sharpen your skills.</p>
              </div>
            </a>
            <a href="#" className="option-card">
              <i className="fas fa-clipboard-list"></i>
              <div className="option-text">
                <h3>Take Mock Test→</h3>
                <p>Simulate interviews and track progress.</p>
              </div>
            </a>
            <Link to="/notes" className="option-card">
              <i className="fas fa-book-open"></i>
              <div className="option-text">
                <h3>Learn→</h3>
                <p>Forgot a concept? Explore notes</p>
              </div>
            </Link>
          </div>
        </section>

        <hr />

        <section className="practice-area aptitude-area">
          <div className="area-header">
            <i className="fas fa-brain"></i>
            <h2>Practice Aptitude</h2>
          </div>
          <div className="sub-options">
            <a href="/aptitude" className="option-card">
              <i className="fas fa-calculator"></i>
              <div className="option-text">
                <h3>Solve Problems→</h3>
                <p>Practice quantitative and logical reasoning.</p>
              </div>
            </a>
            <a href="#" className="option-card">
              <i className="fas fa-clipboard-check"></i>
              <div className="option-text">
                <h3>Take Mock Test→</h3>
                <p>Test your speed and accuracy under pressure.</p>
              </div>
            </a>
            <Link to="/notes" className="option-card">
              <i className="fas fa-graduation-cap"></i>
              <div className="option-text">
                <h3>Learn→</h3>
                <p>Master concepts with detailed notes.</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
