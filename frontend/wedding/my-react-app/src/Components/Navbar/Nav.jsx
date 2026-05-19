import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import "../../assets/Style/Nav.css";

const Nav = ({ user, logout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-custom ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="container">

        {/* LOGO */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </NavLink>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR MENU */}
        <div className="collapse navbar-collapse" id="navMenu">

          {/* NAV LINKS */}
          <ul className="navbar-nav mx-auto gap-lg-4 text-center">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/wedding" className="nav-link">
                WEDDING
              </NavLink>
            </li>
              <li className="nav-item">
              <NavLink to="/venue" className="nav-link">
                VENUE
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                BLOG
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/faqqq" className="nav-link">
                FAQ
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>

              {/* <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  ABOUT US
                </NavLink>
              </li> */}

            <li className="nav-item">
              <NavLink to="/host" className="nav-link">
                BECOME A HOST
              </NavLink>
            </li>

          </ul>

          {/* AUTH BUTTONS */}
          {!user ? (
            <div className="d-flex gap-3 auth-buttons">

              <NavLink
                to="/login"
                style={{ color: "#fff", textDecoration: "none",paddingTop:"15px", marginBottom:"-10px" }}
              >
                <b>Login</b>
              </NavLink>

              <NavLink
                to="/sign"
                 style={{ color: "#fff", textDecoration: "none",paddingTop:"15px", marginBottom:"-10px" }}
              >
               <b>Sign Up</b> 
              </NavLink>

            </div>
          ) : (
            <div className="d-flex gap-2 auth-buttons">

              <NavLink
                to="/dashboard"
                className="btn login-btn px-4"
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/profile"
                className="btn login-btn px-4"
              >
                Profile
              </NavLink>

              <button
                className="btn signup-btn px-4"
                onClick={logout}
              >
                Logout
              </button>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Nav;