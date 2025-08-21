import React, { useEffect, useState } from "react";

export default function GithubRepos({ username = "", show = false }) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!show || !username) return;
    setStatus("loading");
    fetch(`https://api.github.com/users/${username}/repos?per_page=12&sort=updated`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data
            .filter((r) => !r.fork)
            .slice(0, 6)
            .map((r) => ({
              name: r.name,
              url: r.html_url,
              desc: r.description || "No description",
              stars: r.stargazers_count,
              lang: r.language
            }));
          setRepos(filtered);
          setStatus("done");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [username, show]);

  if (!show) return null;

  return (
    <section className="section">
      <h2 className="section-title">Latest GitHub Repos</h2>
      {status === "loading" && <p>Loading…</p>}
      {status === "error" && <p>Couldn’t load repos.</p>}
      <div className="projects-grid">
        {repos.map((r, i) => (
          <div key={i} className="project-card">
            <h3 className="project-title">{r.name}</h3>
            <p className="project-meta">
              {r.lang ? <span>{r.lang}</span> : null}
              {typeof r.stars === "number" ? <span>★ {r.stars}</span> : null}
            </p>
            <p className="project-desc">{r.desc}</p>
            <a className="btn link" href={r.url} target="_blank" rel="noreferrer">
              Open ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
