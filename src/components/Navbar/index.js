import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <Link className="navbar-brand" to="/">Graham Dickey</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link p-2"
                to="/"
                >
                  About
                </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link p-2"
                to="/portfolio"
                >
                  Portfolio
                </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link p-2"
                to="/contact"
                >
                  Contact
                </Link>
            </li>
            <li className="nav-item">
              <a
              className="nav-link p-2"
              href="assets/resume.pdf" download>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;