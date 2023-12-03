import React from "react";
import { useState } from "react";
import Project from "../Components/Project";
import Intro from "../Components/Intro";

const Home = () => {
  // eslint-disable-next-line
  const [projects, setProjects] = useState([
    {
      name: "Dynamic Table Assignmnet",
      img: "dtable.png",
      link: "/dtable",
    },
    {
      name: "Simple Search Clear Button",
      img: "home.png",
      link: "/searchbar",
    },
    {
      name: "TODO LIST ",
      img: "todolist.png",
      link: "/todolist",
    },
  ])

  return (
    <main>
      <Intro />

      <section className="projects">
        <div className="container">
          <h1>Solved Assignments</h1>
          <div className="projects-container">
            {projects.map((project, index) => {
              return (
                <Project
                  name={project.name}
                  link={project.link}
                  img={project.img}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
