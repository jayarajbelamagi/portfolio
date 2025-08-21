import React from "react";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-grid">
        {SKILLS.map((skill, i) => (
          <li key={i} className="skill-card">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
