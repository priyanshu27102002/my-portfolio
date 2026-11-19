
import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Gate to the Sky",
    category: "Full Stack Web Application",
    description:
      "A college recommendation platform that helps students explore suitable colleges using psychometric assessments and alumni academic data.",
    technologies: [
      "React.js",
      "Laravel 11",
      "MySQL",
      "MongoDB",
      "Tailwind CSS",
      "Sanctum",
      "MySQL",
      "MongoDB",
      "Axios"
    ],
    github: "https://github.com/priyanshu27102002/College_project"
  },
  {
    number: "02",
    title: "Amazon RPA BOT",
    category: "Robotic Process Automation",
    description:
      "Built an automated Amazon product-scraping bot using UiPath Studio to extract laptop names, prices, and URLs within a specified budget. Automated data storage in Excel and email delivery using SMTP, reducing manual data-collection effort by 70%.",
    technologies: [
      "UiPath Studio",
      "UiPath Web Scraping",
      "DataTables",
      "Microsoft Excel",
      "SMTP",
      "Web Automation"
    ],
    github: "https://github.com/priyanshu27102002/AMAZON-BOT-RPA-"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      <div className="section-heading">
        <p className="section-subtitle">WHAT I'VE BUILT</p>
        <h2>Featured Projects</h2>
        <p className="section-description">
          A selection of projects showcasing my skills
          in software development and automation.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            <div className="project-number">
              {project.number}
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span className="project-tech" key={`${project.title}-${tech}-${index}`}>
              {tech}
              </span>
              ))}
            </div>

            <div className="project-links">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={18} />
                  Source Code
                </a>
              )}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
};

export default Projects;