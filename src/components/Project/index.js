import React from "react";

function Project(props) {
  return (
    <a className="project" href={props.deployedLink}>
      <div className="card">
        <img className="card-img" src={props.src} alt={`${props.title} Application`} />
        <div className="card-img-overlay px-0">
          <div className="c-title">
            <h5 className="card-title">{props.title}</h5>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;