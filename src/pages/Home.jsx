import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const planets = [
    {
      id: 1,
      name: 'Portfolio',
      path: '/portfolio',
      color: '#6366f1',
      glowColor: 'rgba(99, 102, 241, 0.6)',
      position: { top: '20%', left: '15%' },
      size: '120px',
      delay: '0s',
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
      color: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.6)',
      position: { top: '35%', right: '20%' },
      size: '100px',
      delay: '1s',
    },
    {
      id: 3,
      name: 'Products',
      path: '/affiliate',
      color: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.6)',
      position: { bottom: '30%', left: '25%' },
      size: '110px',
      delay: '2s',
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact',
      color: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.6)',
      position: { bottom: '20%', right: '15%' },
      size: '95px',
      delay: '3s',
    },
  ];

  const handlePlanetClick = (path) => {
    navigate(path);
  };

  return (
    <div className="space-home">
      {/* Animated Stars Background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Welcome Text */}
      <div className="space-welcome">
        <h1 className="space-title">Explore My Universe</h1>
        <p className="space-subtitle">Navigate through the cosmos to discover my work</p>
      </div>

      {/* Floating Planets */}
      <div className="planets-container">
        {planets.map((planet) => (
          <div
            key={planet.id}
            className={`planet ${hoveredPlanet === planet.id ? 'hovered' : ''}`}
            style={{
              ...planet.position,
              '--planet-size': planet.size,
              '--planet-color': planet.color,
              '--planet-glow': planet.glowColor,
              '--animation-delay': planet.delay,
            }}
            onMouseEnter={() => setHoveredPlanet(planet.id)}
            onMouseLeave={() => setHoveredPlanet(null)}
            onClick={() => handlePlanetClick(planet.path)}
            role="button"
            tabIndex={0}
            aria-label={`Navigate to ${planet.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlanetClick(planet.path);
              }
            }}
          >
            <div className="planet-core"></div>
            <div className="planet-glow"></div>
            <div className="planet-label">{planet.name}</div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default Home;


