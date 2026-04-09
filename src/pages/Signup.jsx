import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const navigate = useNavigate();

  const signupHandler = (e) => {
    e.preventDefault();

    
    if (
      fullName.trim() === "" ||
      emailValue.trim() === "" ||
      passValue.trim() === ""
    ) {
      toast.error("Please fill out all fields!");
      return;
    }

    
    toast.success("Account created successfully!");
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2
        className="section-title"
        style={{ textAlign: "center", border: "none" }}
      >
        Create an Account
      </h2>

      <form className="form-container" onSubmit={signupHandler}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>

          <input
            type="text"
            id="name"
            className="form-input"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder="e.g., Ashutosh Aman"
          />
        </div>

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
            placeholder="Create a strong password"
          />
        </div>

        <button type="submit" className="btn btn-submit">
          Sign Up
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "0.9rem",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "var(--text-main)", fontWeight: "bold" }}
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
