import "../styles/platformOverview.css";
import { useEffect, useRef } from "react";
import step1 from "../assets/step1.mp4";
import step2 from "../assets/step2.mp4";
import step3 from "../assets/step3.mp4";
import { useNavigate } from "react-router-dom";

export const PlatformOverview = () => {
  const stepRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observers = stepRefs.current.map((ref) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("visible", entry.isIntersecting);
          });
        },
        {
          threshold: 0.3,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const steps = [
    {
      number: "01",
      title: "Choose Your Challenge",
      description:
        "Select from coding problems, aptitude tests, or create custom mock interviews. Customize difficulty, timing, and question types to match your goals.",
      video: step1,
      align: "left",
    },
    {
      number: "02",
      title: "Practice & Solve",
      description:
        "Write code in your preferred language, solve aptitude questions, or simulate real interview conditions. Get instant feedback with automated test case evaluation.",
      video: step2,
      align: "right",
    },
    {
      number: "03",
      title: "Track Your Progress",
      description:
        "Monitor your performance with detailed analytics. Identify weak areas, track improvement over time, and watch your skills grow with comprehensive dashboards.",
      video: step3,
      align: "left",
    },
  ];

  return (
    <section className="platform-overview" id="overview">
      <h2 className="section-title">Platform Overview</h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-row ${step.align === "right" ? "reverse" : ""}`}
            ref={(el) => (stepRefs.current[index] = el)}
          >
            <div className="step-content">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>

            <div className="step-visual">
              <div className="video-container">
                <video autoPlay loop muted playsInline className="step-video">
                  <source src={step.video} type="video/mp4" />
                </video>

                <div className="video-glow"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cta-section">
        <div className="cta-inner">
          <h1>Feeling confident? Take your first test right now</h1>
          <button className="cta-btn" onClick={() => navigate("/mocktest")}>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};
