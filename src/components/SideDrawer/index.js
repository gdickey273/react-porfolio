import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function SideDrawer(props) {
  return (
    <nav className={`side-drawer ${props.show ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="assets/resume.pdf" download>Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer;