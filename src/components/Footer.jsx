import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © 2025 <span className="footer-brand">SkillPilot</span>. All rights
          reserved.
        </p>

        <div className="footer-links">
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms of Service
          </a>
          <a
            href="https://linkedin.com/in/abhishek-poojary777"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
