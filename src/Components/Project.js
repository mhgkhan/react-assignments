import React from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  const { img, link, name } = props;

  return (
    <div className="project">
      <img src={img} alt="projectimg" />
      <div className="content-project">
        <h2>{name} </h2>
        <Link to={link}><button>OPEN NOW</button></Link>
      </div>
    </div>
  );
};

export default Project;
