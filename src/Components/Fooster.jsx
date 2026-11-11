
import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

function Footer() {
  // Get the current year automatically.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section-container">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            kamal<span>.</span>
          </a>

          <p>
            Building digital experiences, learning continuously,
            and turning ideas into practical solutions.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>QUICK LINKS</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <h3>CONNECT</h3>

          <a
            href="https://github.com/kamalayomide92-topboi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>

          <a href="mailto:kamalayomide92@gmail.com">
            Email <ArrowUpRight size={14} />
          </a>

          <a href="tel:+2349160897654">
            Phone <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Kamal. All rights reserved.</p>

        <a href="#home">
          BACK TO TOP ↑
        </a>

        <p>DESIGNED & BUILT WITH PURPOSE.</p>
      </div>
    </footer>
  );
}

export default Footer;
