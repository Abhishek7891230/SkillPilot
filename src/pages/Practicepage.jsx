import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/practice.css";

export function PracticePage() {
  return (
    <>
      <Navbar />
      <main class="container">
        <section class="practice-area coding-area">
          <div class="area-header">
            <i class="fas fa-code"></i>
            <h2>Practice Coding</h2>
          </div>
          <div class="sub-options">
            <a href="#" class="option-card">
              <i class="fas fa-terminal"></i>
              <h3>Solve Problems→</h3>
              <p>Solve problems focused on DSA and sharpen your skills.</p>
            </a>
            <a href="#" class="option-card">
              <i class="fas fa-clipboard-list"></i>
              <h3>Take Mock Test→</h3>
              <p>Simulate interviews and track progress.</p>
            </a>
            <Link to="/notes" class="option-card">
              <i class="fas fa-book-open"></i>
              <h3>Learn→</h3>
              <p>Forgot a concept? Explore notes</p>
            </Link>
          </div>
        </section>

        <hr />

        <section class="practice-area aptitude-area">
          <div class="area-header">
            <i class="fas fa-brain"></i>
            <h2>Practice Aptitude</h2>
          </div>
          <div class="sub-options">
            <a href="#" class="option-card">
              <i class="fas fa-calculator"></i>
              <h3>Solve Problems→</h3>
              <p>Practice quantitative and logical reasoning.</p>
            </a>
            <a href="#" class="option-card">
              <i class="fas fa-clipboard-check"></i>
              <h3>Take Mock Test→</h3>
              <p>Test your speed and accuracy under pressure.</p>
            </a>
            <Link to="/notes" class="option-card">
              <i class="fas fa-graduation-cap"></i>
              <h3>Learn→</h3>
              <p>Master concepts with detailed guides.</p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
