import React from "react";
import { YOUR_NAME, TAGLINE } from "../data";

export default function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-inner">
        <img src="post2y.jpg" alt="Profile" className="profile" />
        <h1 className="title">Hi, I'm <span className="accent">{YOUR_NAME}</span></h1>
        <p className="subtitle">{TAGLINE}</p>
        <div className="actions">
          <a className="btn primary" href="rename.docs" download>Download Resume</a>
          <a className="btn" href="#projects">View Projects</a>
        </div>
      </div>
    </section>
  );
}
