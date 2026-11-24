import "./Contact.css";
import { PROFILE } from "./data/data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal className="container">
        <h2>Let's get in touch </h2>
        <p>I'm  open to web development roles and freelance projects.</p>
        <a
  href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(PROFILE.email)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  Send me an email
</a>
      </Reveal>
    </section>
  );
}
