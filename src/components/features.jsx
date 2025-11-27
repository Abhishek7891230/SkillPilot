import React, { useEffect, useRef } from "react";
import "../styles/features.css";

export const FeaturesSection = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    const observers = featureRefs.current.map((ref) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const features = [
    {
      icon: "🎯",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      title: "Custom Mock Tests",
      description:
        "Create personalized tests with full control over timing, difficulty, and question types.",
    },
    {
      icon: "💻",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      title: "Coding Practice",
      description:
        "Solve coding problems with instant feedback and automated test case evaluation.",
    },
    {
      icon: "📊",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      title: "Progress Dashboard",
      description:
        "Track your performance, identify weak areas, and monitor improvement over time.",
    },
    {
      icon: "📚",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      title: "Comprehensive Notes",
      description:
        "Access structured notes on programming languages, DSA, and aptitude topics.",
    },
    {
      icon: "🔥",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      title: "Smart Analytics",
      description:
        "Get detailed insights on your strengths and areas that need improvement.",
    },
    {
      icon: "⚡",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      title: "Multiple Languages",
      description:
        "Practice in Python, Java, C++, JavaScript, and more with multi-language support.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2 className="section-title">Everything You Need to Excel</h2>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            ref={(el) => (featureRefs.current[index] = el)}
          >
            <div className="feature-card-inner">
              <div
                className="feature-glow"
                style={{ background: feature.gradient }}
              ></div>
              <div
                className="feature-icon-wrapper"
                style={{ background: feature.gradient }}
              >
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
