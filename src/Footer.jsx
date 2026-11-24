import { PROFILE } from "./data/data.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {PROFILE.name} {PROFILE.surname}</p>

        <nav aria-label="Footer navigation">
          <a href={PROFILE.github}>GitHub</a>
          <a href={PROFILE.linkedin}>LinkedIn</a>
          <a href="#home">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}