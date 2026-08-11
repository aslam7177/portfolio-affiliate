import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import './About.css';

const skills = [
  {
    category: 'Languages',
    items: ['Python'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'Computer Networking'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQLite', 'SQL (Joins, CTEs, Window Functions)'],
  },
  {
    category: 'Backend/APIs',
    items: ['Flask', 'REST APIs', 'MVC Architecture', 'Postman'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Selenium WebDriver'],
  },
  {
    category: 'Data/ML',
    items: ['NLP', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
];

const About = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <PageLayout>
      <div className="page-content about-page">
        <header className="page-header">
          <h1>About</h1>
          <p className="page-subtitle">Who I am & what I build</p>
        </header>

        <div className="about-grid">
          <div className="about-photo-wrap">
            {!photoError ? (
              <img
                src="/profile.jpg"
                alt="Mulla Aslam"
                className="about-photo"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="about-photo-placeholder" aria-label="Profile photo placeholder">
                <span>MA</span>
                <p>Add profile.jpg to public/</p>
              </div>
            )}
          </div>

          <div className="about-bio">
            <p className="about-intro">
              I&apos;m Mulla Aslam, a Computer Science Engineering graduate (B.Tech, 2022–2026)
              from GITAM Deemed to be University, Bengaluru. I build backend systems, AI-powered
              tools, and data-driven applications — with hands-on experience across Python, Flask,
              SQL, and Docker. I enjoy turning messy real-world data into working, deployable
              products, from air quality intelligence platforms to trading bots.
            </p>
          </div>
        </div>

        <section className="about-section">
          <h2>Education</h2>
          <ul className="timeline">
            <li>
              <strong>B.Tech – Computer Science Engineering</strong>
              <span>GITAM Deemed to be University, Bengaluru</span>
              <span className="timeline-date">June 2022 – May 2026</span>
            </li>
            <li>
              <strong>Intermediate – MPC (Mathematics, Physics, Chemistry)</strong>
              <span>Sri Chaitanya Junior College, Tirupati</span>
              <span className="timeline-date">June 2020 – May 2022</span>
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
