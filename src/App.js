import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function drawerToggleClickHandler() {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  function backdropClickHandler() {
    setSideDrawerOpen(false);
  }
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <div>
          <Navbar drawerToggleClickHandler={drawerToggleClickHandler}/>
          <SideDrawer show={sideDrawerOpen}/>
          {sideDrawerOpen &&
              <Backdrop click={backdropClickHandler}/>
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
