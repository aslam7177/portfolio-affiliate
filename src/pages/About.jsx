import './About.css';

const About = () => {
  return (
    <div className="about-knowledge-panel">
      <div className="knowledge-container">
        <div className="knowledge-layout">
          {/* Left Column - Image Gallery */}
          <div className="knowledge-left">
            <div className="image-gallery">
              <div className="gallery-image">
                <span>Profile Photo</span>
              </div>
              <div className="gallery-image">
                <span>Photo 2</span>
              </div>
              <div className="gallery-image">
                <span>Photo 3</span>
              </div>
            </div>
          </div>

          {/* Center Column - Main Content */}
          <div className="knowledge-center">
            <h1 className="knowledge-name">Mohammad Aslam</h1>
            <p className="knowledge-subtitle">
              Computer Science Engineering Undergraduate · Co-Founder of Botter
            </p>
            
            <div className="knowledge-tabs">
              <button className="tab-pill active">Overview</button>
              <button className="tab-pill">Projects</button>
              <button className="tab-pill">Posts</button>
            </div>

            <div className="knowledge-about">
              <p>
                I am Aslam, a Computer Science Engineering undergraduate. I love artificial intelligence, computer networks, and computers in general. I enjoy thinking deeply, innovating, and exploring ideas while trying to understand the purpose of life and work. Almost everything in technology feels interesting to me.
              </p>
              <p>
                It's not about the money.
              </p>
              <p>
                i sell soap and others thing take a look if you care
              </p>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="knowledge-right">
            <div className="info-card">
              <div className="info-label">Born</div>
              <div className="info-value">23 October 2004</div>
              <div className="info-detail">Born at home</div>
            </div>

            <div className="info-card">
              <div className="info-label">Location</div>
              <div className="info-value">Pulivendula, Andhra Pradesh, India</div>
            </div>

            <div className="info-card">
              <div className="info-label">Education</div>
              <div className="info-value">GITAM University</div>
            </div>

            <div className="info-card club-card">
              <div className="info-label">Club</div>
              <div className="info-value">Botter</div>
            </div>

            <div className="info-card">
              <div className="info-label">Net Worth</div>
              <div className="info-value">Future goal — Multi-billionaire</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


