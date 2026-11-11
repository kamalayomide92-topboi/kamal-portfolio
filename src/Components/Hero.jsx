
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero section-container" id="home">

      {/* Main introduction */}
      <div className="hero-content">

        <div className="availability">
          <span className="status-dot"></span>
          Open to opportunities
        </div>

        <p className="hero-eyebrow">
          HELLO, I'M KAMAL
        </p>

        <h1>
          I build digital
          <br />
          products that
          <br />
          <span>make a difference.</span>
        </h1>

        <p className="hero-description">
          I'm a developer focused on building modern web experiences,
          solving real-world problems and turning ideas into useful products.
        </p>

        {/* Action buttons */}
        <div className="hero-actions">

          <a href="#projects" className="primary-button">
            Explore my work
            <ArrowUpRight size={18} />
          </a>

          <a href="#about" className="secondary-button">
            More about me
            <ArrowDownRight size={18} />
          </a>

        </div>

        {/* Social links */}
        <div className="hero-socials">

          <span>FIND ME ON</span>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>
      </div>

      {/* Developer profile card */}
      <div className="hero-visual">

        <div className="visual-glow"></div>

        <div className="profile-card">

          <div className="card-top">
            <span>DEVELOPER PROFILE</span>
            <span className="card-indicator">● ACTIVE</span>
          </div>

          <div className="profile-avatar">
            <img src="/Kamal-profile.jpg" alt="Portrait of Kamal" />
          </div>

          <h2>Kamal</h2>

          <p className="profile-role">
            Software Developer
          </p>

          <div className="card-divider"></div>

          <div className="profile-details">

            <div>
              <span>FOCUS</span>
              <strong>Web Development</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>React · Django</strong>
            </div>

            <div>
              <span>BASED IN</span>
              <strong>Nigeria</strong>
            </div>

          </div>

          <div className="card-bottom">
            <span>CREATING WITH PURPOSE</span>
            <ArrowUpRight size={18} />
          </div>

        </div>

        <div className="floating-tag tag-one">
          {"<Developer />"}
        </div>

        <div className="floating-tag tag-two">
          Building the future.
        </div>

      </div>

      {/* Bottom scroll indicator */}
      <div className="hero-footer">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
        <span>01 — 05</span>
      </div>

    </section>
  );
}

export default Hero;
