import { useState } from "react";
import { login, signup } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Auth() {
  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = { email: "", password: "", confirm: "" };
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (mode === "signup") {
      if (!confirm.trim()) {
        newErrors.confirm = "Confirm your password";
        isValid = false;
      } else if (password !== confirm) {
        newErrors.confirm = "Passwords do not match";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await signup(email, password);
      }

      navigate("/");
    } catch (err) {
      setErrors((prev) => ({ ...prev, email: "Invalid credentials" }));
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-inner">
          <h2 className="auth-title">
            {mode === "login" ? "Welcome Back" : "Create Your Account"}
          </h2>

          <p className="auth-subtitle">
            {mode === "login"
              ? "Login to continue your journey"
              : "Sign up and start exploring"}
          </p>

          <div className="auth-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.email && <p className="input-error">{errors.email}</p>}
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
              />
              {errors.password && (
                <p className="input-error">{errors.password}</p>
              )}
            </div>

            {mode === "signup" && (
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirm(e.target.value);
                    setErrors({ ...errors, confirm: "" });
                  }}
                />
                {errors.confirm && (
                  <p className="input-error">{errors.confirm}</p>
                )}
              </div>
            )}
          </div>

          <button className="auth-submit" onClick={handleSubmit}>
            {mode === "login" ? "Login" : "Sign Up"}
          </button>

          <p
            className="auth-switch"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setErrors({ email: "", password: "", confirm: "" });
            }}
          >
            {mode === "login"
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-bg-overlay"></div>

        <div className="auth-right-content">
          <h1>{mode === "login" ? "Welcome Back!" : "Join Us!"}</h1>
          <p>
            {mode === "login"
              ? "Access your dashboard, continue your journey, and keep making progress."
              : "Create your account and unlock tools designed to help you grow and achieve more."}
          </p>
        </div>
      </div>
    </div>
  );
}
