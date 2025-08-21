import React from "react";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className="project-card" key={i}>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <a className="btn link" href={p.link} target="_blank" rel="noreferrer">View on GitHub ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
}
