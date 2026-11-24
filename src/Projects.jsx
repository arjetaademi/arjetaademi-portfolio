import "./Projects.css";
import { PROJECTS } from "./data/data.js";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Projects</h2>
          <p>A few things I have designed and built.</p>
        </Reveal>

        <div className="grid">
          {PROJECTS.map((p, i) => (
            <Reveal as="article" className="card" key={p.title}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            <div className="links">
           {p.demo && <a href={p.demo}>Live demo ↗</a>}
          {p.code && <a href={p.code}>View code ↗</a>}
           </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
