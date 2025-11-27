import "../styles/heroSection.css";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Ready to build your{" "}
          <span className="highlight">perfect practice test ?</span>
        </h1>
        <p>
          A personalized platform to practice coding problems and aptitude, take
          mock tests, and track your progress. Customize tests how you like and
          ace your skills.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Start Practicing →</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-window">
          <div className="window-header">
            <span className="window-dot dot-red"></span>
            <span className="window-dot dot-yellow"></span>
            <span className="window-dot dot-green"></span>
            <span className="window-title">solution.js</span>
          </div>
          <div className="code-content">
            <div className="code-line line-1">
              <span className="keyword">function</span>{" "}
              <span className="function">twoSum</span>(nums, target) {"{"}
            </div>
            <div className="code-line line-2">
              &nbsp;&nbsp;<span className="keyword">const</span> map ={" "}
              <span className="keyword">new</span> Map();
            </div>
            <div className="code-line line-3">
              &nbsp;&nbsp;<span className="keyword">for</span> (
              <span className="keyword">let</span> i = 0; i {"<"} nums.length;
              i++) {"{"}
            </div>
            <div className="code-line line-4">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span>{" "}
              complement = target - nums[i];
            </div>
            <div className="code-line line-5">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span>{" "}
              (map.has(complement)) <span className="keyword">return</span>{" "}
              [map.get(complement), i];
            </div>
            <div className="code-line line-6">
              &nbsp;&nbsp;&nbsp;&nbsp;map.set(nums[i], i);
            </div>
            <div className="code-line line-7">&nbsp;&nbsp;{"}"}</div>
            <div className="code-line line-8">{"}"}</div>
          </div>
          <button className="run-button">▶ Run Code</button>
          <div className="test-results">
            <div className="test-result-item">
              <span className="checkmark">✓</span> Test Case 1: Passed
            </div>
            <div className="test-result-item">
              <span className="checkmark">✓</span> Test Case 2: Passed
            </div>
            <div className="test-result-item">
              <span className="checkmark">✓</span> All Tests Passed!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
