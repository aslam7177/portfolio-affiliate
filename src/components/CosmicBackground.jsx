import { useEffect, useRef } from 'react';
import './CosmicBackground.css';

const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      }));
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const flicker = 0.5 + Math.sin(time * 0.001 * star.speed * 60 + star.twinkle) * 0.5;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${star.opacity * flicker})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="cosmic-background" aria-hidden="true">
      <div className="cosmic-smoke cosmic-smoke-1" />
      <div className="cosmic-smoke cosmic-smoke-2" />
      <div className="cosmic-smoke cosmic-smoke-3" />
      <canvas ref={canvasRef} className="cosmic-stars" />
    </div>
  );
};

export default CosmicBackground;
