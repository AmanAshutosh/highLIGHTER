import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="highlight-text">high</span>LIGHTER
      </Link>

      <div className="nav-links">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/" className="nav-link">
          Login
        </Link>

        <Link to="/" className="nav-link">
          Sign Up
        </Link>

        <Link to="/create" className="nav-link active-btn">
          New Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
