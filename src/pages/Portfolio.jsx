import PageLayout from '../components/PageLayout';
import { projects } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <PageLayout>
      <div className="page-content portfolio-page">
        <header className="page-header">
          <h1>Portfolio</h1>
          <p className="page-subtitle">Projects I&apos;ve built</p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h2>{project.title}</h2>
              <p className="project-stack">{project.stack}</p>
              <p className="project-desc">{project.description}</p>

              {project.highlights?.length > 0 && (
                <ul className="project-highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="project-links">
                {project.isPrivate && (
                  <span className="project-note">{project.privateNote}</span>
                )}
                {project.isAcademic && (
                  <span className="project-note">{project.academicNote}</span>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub →
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Portfolio;
