import React from "react";
import "../App.css";
import { FiCloud } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "#2c3e50",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "18px",
  };
  const iconStyle = {
    fontSize: "1.8em",
  };
  return (
    <nav>
      <h3 className="nav-icon">
        <FiCloud style={iconStyle} />
      </h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/weatherapp">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/weatherapp/forecast">
          <li>Forecast</li>
        </Link>

        <a
          style={navStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/andreeasteriu/Weather-Application"
        >
          <li>GitHub</li>{" "}
        </a>
      </ul>
    </nav>
  );
}
