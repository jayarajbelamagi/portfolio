import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubRepos from "./components/GithubRepos";
import Comedy from "./components/Comedy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // smooth scroll for hash links
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const el = document.querySelector(link.getAttribute("href"));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Home />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <GithubRepos username="jayarajbelamagi" show={false} />
        <Comedy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
