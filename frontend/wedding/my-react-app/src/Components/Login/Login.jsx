import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/Style/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("userToken", data.token);
      setIsSuccess(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (isSuccess) {
    return (
      <div className="login-success">
        <h2>Login Successful</h2>
        <p>Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="input-group">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account? <Link to="/sign">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
