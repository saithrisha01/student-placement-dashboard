import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    setMessage("");
    setMessageType("");

    if (name.trim() === "") {
      setMessage("Please enter your full name.");
      setMessageType("error");
      return;
    }

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

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    setMessage("Registration successful!");
    setMessageType("success");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          SP
        </div>

        <h1>
          Create Account
        </h1>

        <p className="auth-subtitle">
          Register for the Student Placement Dashboard
        </p>

        <form onSubmit={handleRegister}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="primary-button auth-button"
          >
            Create Account
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

          Already have an account?

          <button
            className="text-button"
            onClick={() => navigate("/")}
          >
            Login
          </button>

        </p>

      </div>

    </div>
  );
}

export default Register;