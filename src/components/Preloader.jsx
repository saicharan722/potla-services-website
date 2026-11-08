import { useEffect, useState } from 'react';
import './Preloader.css';
import { IMAGES } from '../assets/imageRegistry.js';
import lionImage from '../assets/images/lion-intro.png';

const PARTICLES = Array.from({ length: 22 }, (_, index) => ({
  left: `${(index * 47 + 13) % 100}%`,
  top: `${(index * 31 + 7) % 100}%`,
  delay: `${(index % 8) * -0.3}s`,
  size: `${2 + (index % 3)}px`,
}));

export default function Preloader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const exitTimer = window.setTimeout(
      () => setIsExiting(true),
      prefersReducedMotion ? 550 : 5450
    );
    const finishTimer = window.setTimeout(
      () => {
        document.body.style.overflow = originalOverflow;
        window.dispatchEvent(new Event('potla:intro-complete'));
        setIsComplete(true);
      },
      prefersReducedMotion ? 1000 : 6000
    );

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      className={`preloader${isExiting ? ' preloader--exiting' : ''}`}
      aria-hidden="true"
    >
      <div className="preloader__lighting" />
      <img className="preloader__lion" src={lionImage} alt="" />
      <div className="preloader__smoke" />
      <div className="preloader__flash" />

      <div className="preloader__particles">
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            className="preloader__particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      <div className="preloader__brand">
        <div className="preloader__logo-stage">
          <span className="preloader__ring" />
          <img className="preloader__logo" src={IMAGES.logo} alt="" />
        </div>
        <div className="preloader__anniversary">
          <span className="preloader__nine">9+</span>
          <span className="preloader__years">
            {'YEARS OF EXCELLENCE'.split('').map((letter, index) => (
              <span
                className="preloader__letter"
                key={`${letter}-${index}`}
                style={{ animationDelay: `${2.85 + index * 0.035}s` }}
              >
                {letter === ' ' ? '\u00a0' : letter}
              </span>
            ))}
          </span>
          <span className="preloader__underline" />
          <span className="preloader__tagline">
            Innovating Today, Inspiring Tomorrow
          </span>
        </div>
      </div>
    </div>
  );
}
