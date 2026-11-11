
import "./Projects.css";

function Projects() {
  // Project information is stored separately from the card design.
  const projects = [
    {
      number: "01",
      name: "FeeFlow",
      category: "EDTECH · SAAS",
      status: "In development",
      description:
        "A school payment management platform designed to help schools track fees, monitor outstanding balances, manage payment records and communicate with parents.",
      technologies: ["React", "Django", "Python", "Payment APIs"],
      className: "feeflow",
    },
    {
      number: "02",
      name: "First Signal",
      category: "AI · MEDIA TECHNOLOGY",
      status: "Concept / planning",
      description:
        "A news discovery platform designed to help bloggers and content creators identify timely stories around the topics their audiences care about.",
      technologies: ["React", "AI", "News APIs"],
      className: "first-signal",
    },
    {
      number: "03",
      name: "HexagonTechHub",
      category: "EDTECH · WEB DEVELOPMENT",
      status: "Development project",
      description:
        "A web learning platform built as a practical project to develop my skills in frontend development, backend systems, authentication and course management.",
      technologies: ["React", "Django", "Python", "REST API"],
      className: "hexagon",
    },
  ];

  return (
    <section className="projects-section section-container" id="projects">
      <div className="projects-heading">
        <div>
          <p className="section-label">03 — SELECTED PROJECTS</p>

          <h2>
            Ideas turned into
            <br />
            <span>digital experiences.</span>
          </h2>
        </div>

        <p className="projects-intro">
          A selection of products and practical projects I'm working on as I
          grow as a developer and problem solver.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.className}`}
            key={project.number}
          >
            <div className="project-visual">
              <div className="project-visual-top">
                <span>{project.category}</span>
                <span>{project.number}</span>
              </div>

              <div className="project-visual-center">
                <span>{project.name}</span>
                <span className="project-visual-arrow">↗</span>
              </div>

              <div className="project-visual-bottom">
                <span>PRODUCT DESIGN & DEVELOPMENT</span>
              </div>
            </div>

            <div className="project-information">
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <span className="project-status">{project.status}</span>
              </div>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer">
        <p>MORE PROJECTS AND IMPROVEMENTS COMING.</p>
        <a
          href="https://github.com/kamalayomide92-topboi"
          target="_blank"
          rel="noreferrer"
        >
          Explore my GitHub <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
