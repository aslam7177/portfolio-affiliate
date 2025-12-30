import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '📋',
      link: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: '🌤️',
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media performance with detailed insights and reports.',
      technologies: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      image: '📊',
      link: '#',
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'An educational platform for online courses with video streaming and progress tracking.',
      technologies: ['React', 'Node.js', 'AWS', 'Video.js'],
      image: '🎓',
      link: '#',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      technologies: ['React', 'CSS3', 'Vite'],
      image: '💼',
      link: '#',
    },
  ];

  return (
    <div className="portfolio">
      <section className="portfolio-hero">
        <div className="container">
          <h1>My Portfolio</h1>
          <p className="subtitle">Projects I've built and worked on</p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;


