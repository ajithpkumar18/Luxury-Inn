import React, { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingApp</span>
        </Link>
        {user ? (
          `Welcome ${user.username}`
        ) : (
          <div className="navItems">
            <button onClick={() => navigate("/register")} className="navButton">Register</button>
            <button onClick={() => navigate("/login")} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
