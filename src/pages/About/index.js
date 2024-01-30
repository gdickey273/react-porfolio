import React from "react";
import "./style.css";
import pic from "./me.JPG";

function About(props) {
  return (
    <main className="container">
      <div className="row">
        <div className="content about col-lg-8 col-md-8 col-sm-12 col-xs-12">

          <div className="row">
            <header className="ml-2 mt-4 col-md-12">
              <h3>About Me</h3>
            </header>
          </div>

          <div className="row">
            <div className="col-md-12">
              <hr className="solid mx-2" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <img src={pic} alt="Graham Dickey" />
              <p>My name is Graham Dickey and I am a Full-Stack Web Developer with a knack for learning and applying new skills as needed. I am patient, amicable, and work extremely well in teams. I'm flexible and quick to adapt when faced with obstacles.  </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default About;