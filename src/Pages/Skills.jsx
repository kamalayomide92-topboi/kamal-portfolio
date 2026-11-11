import "./Skills.css";

function Skills() {
  // Each object represents one technology.
  const skills = [
    {
      number: "01",
      name: "HTML",
      category: "Frontend",
      description: "Structuring web pages with clean and meaningful markup.",
      status: "Working with",
    },
    {
      number: "02",
      name: "CSS",
      category: "Frontend",
      description: "Creating responsive layouts and styling user interfaces.",
      status: "Working with",
    },
    {
      number: "03",
      name: "JavaScript",
      category: "Frontend",
      description: "Adding logic and interactive behaviour to websites.",
      status: "Developing",
    },
    {
      number: "04",
      name: "React",
      category: "Frontend",
      description: "Building reusable components and interactive interfaces.",
      status: "Developing",
    },
    {
      number: "05",
      name: "Python",
      category: "Backend",
      description: "Learning programming fundamentals and backend development.",
      status: "Developing",
    },
    {
      number: "06",
      name: "Django",
      category: "Backend",
      description: "Building server-side applications and working with APIs.",
      status: "Developing",
    },
    {
      number: "07",
      name: "Vite",
      category: "Tools",
      description: "Setting up and running modern frontend projects.",
      status: "Working with",
    },
  ];

  return (
    <section className="skills-section section-container" id="skills">
      <div className="skills-heading">
        <p className="section-label">02 — MY SKILLS</p>

        <h2>
          Technologies I use
          <br />
          <span>to bring ideas to life.</span>
        </h2>

        <p className="skills-intro">
          These are the technologies I'm currently working with as I continue
          to grow as a developer.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.number}>
            <div className="skill-card-top">
              <span className="skill-number">{skill.number}</span>
              <span className="skill-category">{skill.category}</span>
            </div>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

            <div className="skill-card-bottom">
              <span className="skill-status-dot"></span>
              <span>{skill.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;