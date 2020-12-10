import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import DrawerToggleButton from "../DrawerToggleButton";


function Navbar(props) {

  return (
    <header className = "toolbar">
      <nav className="toolbar-nav">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={props.drawerToggleClickHandler}/>
        </div>
        <div></div>
        <Link className="toolbar-logo" to="/">Graham Dickey</Link>
        <div className="spacer"></div>
        <div className="toolbar-nav-items mr-5">
          <ul>
            <li>
              <Link to="/react-portfolio">About</Link>
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
        </div>
      </nav>
    </header>
  )
}

export default Navbar;