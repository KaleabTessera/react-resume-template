import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <div>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>A beautiful, responsive, react app written with ES2016.</p>
        </div>
      </div>
      <p>
        {" "}
        Welcome to my website. Please feel free to read more{" "}
        <Link to="/about">about me</Link>, or you can check out my{" "}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{" "}
        view <Link to="/stats">site statistics</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {" "}
        Source available{" "}
        <a href="https://github.com/mldangelo/mldangelo">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
