import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../data/site';
import './SphereNav.css';

const orbitSpecs = [
  { width: 650, height: 370, duration: 24, delay: -4 },
  { width: 500, height: 490, duration: 19, delay: -11 },
  { width: 760, height: 280, duration: 29, delay: -17 },
  { width: 390, height: 360, duration: 16, delay: -7 },
  { width: 590, height: 440, duration: 33, delay: -23 },
];

const CentralMonogram = () => (
  <Link to="/" className="central-monogram" aria-label="Return to home">
    <svg viewBox="0 0 180 190" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="monogram-metal" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="42%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <ellipse className="monogram-ring" cx="90" cy="99" rx="66" ry="70" />
      <path className="monogram-a" d="M29 157 87 26l56 131M52 103h72" />
      <path className="monogram-energy" d="M18 165 96 10" />
    </svg>
  </Link>
);

const Sphere = ({ link, duration, delay }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === link.path;

  return (
    <button
      type="button"
      className={`sphere ${isActive ? 'active' : ''}`}
      style={{
        '--sphere-color': link.color,
        '--sphere-glow': link.glow,
        '--orbit-duration': `${duration}s`,
        '--orbit-delay': `${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => navigate(link.path)}
      aria-label={`Go to ${link.label}`}
    >
      <span className="sphere-trail" aria-hidden="true" />
      <span className="sphere-core" aria-hidden="true" />
      {hovered && <span className="sphere-label">{link.label}</span>}
    </button>
  );
};

const SphereNav = ({ variant = 'compact' }) => {
  const location = useLocation();

  return (
    <>
      <nav className={`sphere-nav sphere-nav-${variant}`} aria-label="Main navigation">
        <div className="orbit-system">
          <div className="orbital-stage">
            <CentralMonogram />
            {navLinks.map((link, index) => {
              const orbit = orbitSpecs[index];
              return (
                <div
                  className="orbit"
                  key={link.path}
                  style={{
                    '--orbit-width': `${orbit.width}px`,
                    '--orbit-height': `${orbit.height}px`,
                    '--orbit-duration': `${orbit.duration}s`,
                    '--orbit-delay': `${orbit.delay}s`,
                  }}
                >
                  <Sphere link={link} duration={orbit.duration} delay={orbit.delay} />
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        <div className="mobile-tab-bar">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
              style={{ '--accent': link.color }}
              aria-label={link.label}
            >
              <span className="mobile-tab-dot" />
              <span className="mobile-tab-label">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SphereNav;
