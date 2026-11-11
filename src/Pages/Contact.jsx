
import { ArrowUpRight, Mail, Phone, } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-heading">
        <p className="section-label">04 — GET IN TOUCH</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's build something.</span>
        </h2>

        <p className="contact-description">
          Whether you have a project in mind, an opportunity, or simply want
          to connect, I'd be happy to hear from you.
        </p>
      </div>

      <div className="contact-content">
        <a
          href="mailto:kamalayomide92@gmail.com"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <Mail size={22} />
          </div>

          <div className="contact-card-info">
            <span>EMAIL ME</span>
            <h3>kamalayomide92@gmail.com</h3>
          </div>

          <ArrowUpRight size={22} className="contact-arrow" />
        </a>

        <a
          href="tel:+2349160897654"
          className="contact-card"
        >
          <div className="contact-card-icon">
            <Phone size={22} />
          </div>

          <div className="contact-card-info">
            <span>CALL ME</span>
            <h3>+234 916 089 7654</h3>
          </div>

          <ArrowUpRight size={22} className="contact-arrow" />
        </a>

        <a
          href="https://github.com/kamalayomide92-topboi"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-card-icon">
            GH
          </div>

          <div className="contact-card-info">
            <span>EXPLORE MY CODE</span>
            <h3>GitHub Profile</h3>
          </div>

          <ArrowUpRight size={22} className="contact-arrow" />
        </a>
      </div>

      <div className="contact-bottom">
        <p>BASED IN NIGERIA · AVAILABLE FOR CONNECTIONS</p>
        <span>LET'S CREATE SOMETHING MEANINGFUL.</span>
      </div>
    </section>
  );
}

export default Contact;
