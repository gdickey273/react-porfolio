import React from "react";
import "./style.css";
import pic from "./pourhouse-me.jpg";

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
              <p>My name is Graham Dickey and I am studying to be a Full-Stack Web Developer through a bootcamp at UNC Chapel Hill. I've also had training in java and CSCI Basics at UNC Asheville. When I'm not coding I enjoy playing music with my band, The Collection. I play trombone and trumpet in the band, and guitar on the side. Currently I work as a barista and bartender in Saxapahaw NC! Come and see me sometime.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default About;