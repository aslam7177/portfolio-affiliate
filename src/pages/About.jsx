import './About.css';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python', 'HTML/CSS', 
    'Git', 'MongoDB', 'Express', 'TypeScript', 'UI/UX'
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Me</h1>
          <p className="subtitle">Get to know me better</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Hello! I'm a Developer</h2>
              <p>
                I'm passionate about creating digital experiences that are both beautiful 
                and functional. With a strong foundation in web development, I specialize 
                in building modern, responsive applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, I love exploring new technologies, sharing knowledge 
                with the community, and discovering amazing products that can help others 
                in their journey.
              </p>
              <p>
                This portfolio showcases my work and the products I personally use and 
                recommend. Every product featured here has been carefully selected based 
                on my own experience and genuine value.
              </p>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">My Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality First</h3>
              <p>I believe in delivering high-quality work that exceeds expectations.</p>
            </div>
            <div className="value-card">
              <h3>Continuous Learning</h3>
              <p>Technology evolves rapidly, and I'm committed to staying current.</p>
            </div>
            <div className="value-card">
              <h3>Honest Recommendations</h3>
              <p>I only recommend products I've personally used and found valuable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

