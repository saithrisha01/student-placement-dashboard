import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    setMessage("");
    setMessageType("");

    if (email.trim() === "") {
      setMessage("Please enter your email address.");
      setMessageType("error");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    if (password.trim() === "") {
      setMessage("Please enter your password.");
      setMessageType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      setMessageType("error");
      return;
    }

    setMessage("Login Successful!");
    setMessageType("success");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          SP
        </div>

        <h1>
          Student Placement
        </h1>

        <p className="auth-subtitle">
          Sign in to your placement dashboard
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="primary-button auth-button"
          >
            Login
          </button>

        </form>

        {message && (

          <p
            className={
              messageType === "success"
                ? "login-message success-message"
                : "login-message error-message"
            }
          >
            {message}
          </p>

        )}

        <p className="register-text">

          Don't have an account?

          <button
            className="text-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

        </p>

      </div>

    </div>
  );
}

export default Login;