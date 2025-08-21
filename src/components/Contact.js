import React, { useState } from "react";
import { CONTACT } from "../data";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  // simple mailto form (no backend required)
  const mailtoHref =
    `mailto:${CONTACT.email}?subject=` +
    encodeURIComponent(`Portfolio contact from ${values.name}`) +
    `&body=` +
    encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrap">
        <div className="contact-card">
          <label>Name</label>
          <input name="name" value={values.name} onChange={onChange} placeholder="Your name" />
        </div>
        <div className="contact-card">
          <label>Email</label>
          <input name="email" value={values.email} onChange={onChange} placeholder="you@example.com" />
        </div>
        <div className="contact-card">
          <label>Message</label>
          <textarea name="message" rows="5" value={values.message} onChange={onChange} placeholder="Say hello…" />
        </div>
        <div className="actions">
          <a className="btn primary" href={mailtoHref}>Send Email</a>
          <a className="btn" href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
