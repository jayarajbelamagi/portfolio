import React from "react";

export default function Comedy() {
  const comedyLinks = [
    {
      platform: "Instagram",
      description: "Follow my meme page for laughs!",
      url: "https://www.instagram.com/benstookesbin/?hl=ene"
    },
    {
      platform: "YouTube",
      description: "Watch my stand-up comedy video",
      url: "https://www.youtube.com/watch?v=GAnP_CMCfpA&t=227s"
    }
  ];

  return (
    <section id="comedy">
      <h2>Comedy</h2>
      <div className="grid grid-2" style={{ marginTop: "16px" }}>
        {comedyLinks.map((item) => (
          <div key={item.platform} className="card" style={{ textAlign: "center" }}>
            <h3>{item.platform}</h3>
            <p>{item.description}</p>
            <a className="btn" href={item.url} target="_blank" rel="noreferrer">
              Visit
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
