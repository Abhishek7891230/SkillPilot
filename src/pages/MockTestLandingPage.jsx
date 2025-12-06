import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/mockLanding.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function MockTestLandingPage() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="mock-landing-page">
        <div
          className="parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="bg-grid"></div>
          <div className="bg-gradient-1"></div>
          <div className="bg-gradient-2"></div>
          <div className="bg-gradient-3"></div>
        </div>

        <div className="page-container">
          <section ref={heroRef} className="hero-zone scroll-animate">
            <div className="floating-elements">
              <div className="float-element fe-1"></div>
              <div className="float-element fe-2"></div>
              <div className="float-element fe-3"></div>
            </div>

            <h1 className="hero-heading">
              <span className="heading-line">Performance Evaluation</span>
              <span className="heading-line heading-accent">
                Through Structured Testing
              </span>
            </h1>

            <p className="hero-description">
              Advanced assessment platform engineered for measuring technical
              proficiency and analytical capabilities through calibrated
              examination protocols.
            </p>
          </section>

          <section ref={cardsRef} className="assessments-section">
            <div className="section-header scroll-animate">
              <p className="section-subtitle">
                Select your evaluation track based on competency domain
              </p>
            </div>

            <div className="cards-container">
              <div className="assessment-module scroll-animate module-aptitude">
                <div className="module-overlay"></div>
                <div className="module-glow"></div>

                <div className="module-inner">
                  <div className="module-header">
                    <div className="module-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="module-tag">Cognitive Assessment</span>
                  </div>

                  <h3 className="module-name">Aptitude Evaluation</h3>

                  <p className="module-desc">
                    Comprehensive analytical reasoning assessment measuring
                    quantitative aptitude, logical deduction, and systematic
                    problem-solving capacity.
                  </p>

                  <div className="module-metadata">
                    <div className="metadata-row">
                      <span className="meta-key">Format</span>
                      <span className="meta-value">
                        Multiple Choice Questions
                      </span>
                    </div>
                    <div className="metadata-row">
                      <span className="meta-key">Duration</span>
                      <span className="meta-value">Customizable Timing</span>
                    </div>
                    <div className="metadata-row">
                      <span className="meta-key">Scoring</span>
                      <span className="meta-value">Automated Evaluation</span>
                    </div>
                  </div>

                  <button
                    className="launch-button"
                    onClick={() => navigate("/mocktest/config?mode=aptitude")}
                  >
                    <span className="button-bg"></span>
                    <span className="button-text">Initialize Assessment</span>
                    <span className="button-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className="assessment-module scroll-animate module-coding">
                <div className="module-overlay"></div>
                <div className="module-glow"></div>

                <div className="module-inner">
                  <div className="module-header">
                    <div className="module-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <span className="module-tag">Technical Assessment</span>
                  </div>

                  <h3 className="module-name">Coding Evaluation</h3>

                  <p className="module-desc">
                    Advanced programming assessment evaluating algorithm design,
                    data structure implementation, and computational
                    optimization skills.
                  </p>

                  <div className="module-metadata">
                    <div className="metadata-row">
                      <span className="meta-key">Format</span>
                      <span className="meta-value">
                        Live Code Implementation
                      </span>
                    </div>
                    <div className="metadata-row">
                      <span className="meta-key">Languages</span>
                      <span className="meta-value">Multi-Language Support</span>
                    </div>
                    <div className="metadata-row">
                      <span className="meta-key">Environment</span>
                      <span className="meta-value">Integrated IDE</span>
                    </div>
                  </div>

                  <button
                    className="launch-button"
                    onClick={() => navigate("/mocktest/config?mode=coding")}
                  >
                    <span className="button-bg"></span>
                    <span className="button-text">Initialize Assessment</span>
                    <span className="button-icon">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section ref={featuresRef} className="capabilities-section">
            <div className="section-header scroll-animate">
              <h2 className="section-title">What you get</h2>
            </div>

            <div className="capabilities-layout">
              <div className="capability-item scroll-animate">
                <div className="capability-visual">
                  <div className="visual-ring ring-1"></div>
                  <div className="visual-ring ring-2"></div>
                  <div className="visual-ring ring-3"></div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="capability-title">Accurate Timing Controls</h3>
                <p className="capability-text">
                  Reliable countdown and auto-submission behavior designed to
                  simulate real examination conditions
                </p>
              </div>

              <div className="capability-item scroll-animate">
                <div className="capability-visual">
                  <div className="visual-ring ring-1"></div>
                  <div className="visual-ring ring-2"></div>
                  <div className="visual-ring ring-3"></div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  </svg>
                </div>
                <h3 className="capability-title">Difficulty Handling</h3>
                <p className="capability-text">
                  Questions organized and delivered based on predefined
                  difficulty standards to ensure fair evaluation
                </p>
              </div>

              <div className="capability-item scroll-animate">
                <div className="capability-visual">
                  <div className="visual-ring ring-1"></div>
                  <div className="visual-ring ring-2"></div>
                  <div className="visual-ring ring-3"></div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <h3 className="capability-title">Clear Performance Insights</h3>
                <p className="capability-text">
                  Structured breakdown of your responses to help you understand
                  strengths, weaknesses, and improvement areas
                </p>
              </div>

              <div className="capability-item scroll-animate">
                <div className="capability-visual">
                  <div className="visual-ring ring-1"></div>
                  <div className="visual-ring ring-2"></div>
                  <div className="visual-ring ring-3"></div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <h3 className="capability-title">Protected Test Environment</h3>
                <p className="capability-text">
                  Session handling and submission processes designed to keep
                  your test data consistent and secure
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
