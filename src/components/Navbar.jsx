import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div>
        <a href="/" className="logo">
          SkillPilot
        </a>
      </div>

      <div className="right-section">
        <div className="nav-links">
          <Link to="/notes">Notes</Link>
          <Link to="/mocktest">Mock Test</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/dashboard">Dashboard</Link>

          <div className="dropdown" onClick={() => setOpen(!open)}>
            <span className="dropdown-trigger">Contact ▾</span>

            <div className={`dropdown-menu ${open ? "open" : ""}`}>
              <a
                href="https://github.com/Abhishek7891230"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/abhishek-poojary777"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:abhishekpoojary720@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <button className="login-btn">Login/Sign up</button>
      </div>
    </div>
  );
}
