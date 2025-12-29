import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="hero-description">
              I build beautiful, functional web applications and share amazing products 
              that can help transform your digital experience.
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Web Development</h3>
              <p>Building responsive and modern web applications using the latest technologies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and beautiful user interfaces that provide great experiences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Product Recommendations</h3>
              <p>Curating and sharing the best tools and products that I use and trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Check Out My Recommended Products</h2>
            <p>Discover tools and products that I personally use and recommend</p>
            <Link to="/affiliate" className="btn btn-primary btn-large">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

