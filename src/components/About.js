import React from "react";
import { ABOUT } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="text">{ABOUT}</p>
    </section>
  );
}
