import "./Navbar.css";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "./data/data.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="nav">
        <a href="#home" className="logo">
          Arjeta<span>{"</>"}</span>
        </a>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn small" onClick={close}>
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}