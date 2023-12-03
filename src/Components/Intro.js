import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="content-welcome">
          <span className="hi">Hi </span>
          <h3>And Welcome </h3>
          <h1>
            In My React.<span className="js">Js</span> <br /> Class Assignments{" "}
          </h1>
          <p>
            Scroll now or click on the button below to explor my projects Scroll
            now or click on the button below to explor my projects{" "}
          </p>
          <button>Explorar</button>
        </div>
        <div className="slideshow-pics">
          <div className="pics">
            <img src="img.jpg" alt="project-pictures" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
