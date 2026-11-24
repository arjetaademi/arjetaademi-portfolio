import "./Experience.css";
import { EXPERIENCE, SKILLS } from "./data/data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Background</span>
          <h2>Experience</h2>
          <p>My internship and ongoing web development projects.</p>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <Reveal className="item" key={e.title}>
              <div className="meta">{e.meta}</div>
              <h3>{e.title}</h3>
                <div className="date">{e.date}</div>
              <div className="org">{e.org}</div>
              <p>{e.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills">
          <h3>Skills</h3>
          <div className="tags">
            {SKILLS.map((s) => <span key={s}>{s}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
