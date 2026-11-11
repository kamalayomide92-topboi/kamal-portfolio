import "./About.css";

function About() {
  return (
    <section className="about-section section-container" id="about">
      <div className="about-heading">
        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          More than writing code.
          <br />
          <span>I'm building solutions.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <p className="about-lead">
            I'm Kamal, an aspiring software developer from Nigeria with an
            interest in building useful digital products.
          </p>

          <p>
            My journey into technology comes from a desire to solve real
            problems. I'm currently developing my skills in web development,
            learning how frontend and backend systems work together, and
            turning ideas into practical projects.
          </p>

          <p>
            I believe good software should do more than look impressive. It
            should solve a problem, be easy to use, and create real value.
          </p>
        </div>

        <div className="about-details">
          <div className="about-detail">
            <span>01</span>
            <div>
              <h3>My approach</h3>
              <p>
                Learn by building, solve problems, and improve through
                consistent practice.
              </p>
            </div>
          </div>

          <div className="about-detail">
            <span>02</span>
            <div>
              <h3>My focus</h3>
              <p>
                Modern websites, web applications, and practical software
                solutions.
              </p>
            </div>
          </div>

          <div className="about-detail">
            <span>03</span>
            <div>
              <h3>My direction</h3>
              <p>
                Grow as a developer while building products that solve
                meaningful problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;