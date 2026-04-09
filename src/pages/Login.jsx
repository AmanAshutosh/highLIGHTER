import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    // basic validation
    if (emailValue.trim() === "" || passValue.trim() === "") {
      toast.error("Please enter both email and password!");
      return;
    }

    // fake login success
    toast.success("Welcome back to HIGHLIGHTER!");
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2
        className="section-title"
        style={{ textAlign: "center", border: "none" }}
      >
        Welcome Back
      </h2>

      <form className="form-container" onSubmit={loginHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            className="form-input"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            className="form-input"
            value={passValue}
            onChange={(e) => {
              setPassValue(e.target.value);
            }}
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="btn btn-submit">
          Log In
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "0.9rem",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "var(--text-main)", fontWeight: "bold" }}
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
