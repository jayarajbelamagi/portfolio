import React from "react";

export default function Resume() {
  return (
    <section id="resume" style={{ textAlign: "center", padding: "2rem" }}>
      <h2>My Resume</h2>
      <p>Download my resume to know more about my skills and experience.</p>
      <a
        href="jay.pdf"
        download
        className="btn"
        style={{ padding: "0.5rem 1rem", backgroundColor: "#4CAF50", color: "white", borderRadius: "5px", textDecoration: "none" }}
      >
        Download Resume
      </a>
    </section>
  );
}
