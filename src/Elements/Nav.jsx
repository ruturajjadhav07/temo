import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Atri from "../assets/Atri.jpg";
import Content from "../Components/Sections/Content";
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Atri})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          opacity: "0.8",
        }}
      >
        {/* Nav + HR wrapper */}
        <div
          className={`sticky-top ${scrolled ? "navbar-blur" : ""}`}
          style={{ zIndex: 1000 }}
        >
          <nav className="container navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between">
              <div>
                <a className="navbar-brand" href="#">
                  Water Tank
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/ulogin">
                      User
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/alogin">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr className="text-dark mt-0 mb-0" />
        </div>

        <Content />
      </div>
    </div>
  );
};

export default Nav;
