import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import './HeroCarousel.css';

const PARTICLES = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 67 + 11) % 100}%`,
  top: `${(index * 43 + 17) % 100}%`,
  delay: `${(index % 7) * -0.6}s`,
}));

export default function HeroCarousel({ slides, onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);
  const transitionTimer = useRef(null);
  const nextSlideRef = useRef(null);

  const goToSlide = useCallback((nextIndex) => {
    if (
      nextIndex < 0 ||
      nextIndex >= slides.length ||
      nextIndex === activeIndex ||
      previousIndex !== null
    ) return;
    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
  }, [activeIndex, previousIndex, slides.length]);

  const goNext = useCallback(() => {
    if (previousIndex !== null || slides.length < 2) return;
    setPreviousIndex(activeIndex);
    setActiveIndex((activeIndex + 1) % slides.length);
  }, [activeIndex, previousIndex, slides.length]);

  const goPrevious = useCallback(() => {
    if (previousIndex !== null || slides.length < 2) return;
    setPreviousIndex(activeIndex);
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, previousIndex, slides.length]);

  nextSlideRef.current = goNext;

  useEffect(() => {
    if (previousIndex === null) return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    transitionTimer.current = window.setTimeout(() => {
      setPreviousIndex(null);
    }, reducedMotion ? 0 : 1350);
    return () => window.clearTimeout(transitionTimer.current);
  }, [previousIndex]);

  useEffect(() => {
    if (
      slides.length < 2 ||
      isPaused ||
      isHovered ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }
    const timer = window.setInterval(() => nextSlideRef.current?.(), 5000);
    return () => window.clearInterval(timer);
  }, [isHovered, isPaused, slides.length]);

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 48) {
      if (distance < 0) goNext();
      else goPrevious();
    }
    touchStartX.current = null;
  };

  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];

  const renderContent = (slide, isLeaving = false) => (
    <div
      key={slide.id}
      className={`hero-carousel__content ${
        isLeaving ? 'hero-carousel__content--leaving' : 'hero-carousel__content--entering'
      }`}
      aria-hidden={isLeaving ? 'true' : undefined}
      inert={isLeaving}
    >
      <span className="hero-carousel__established">
        <span />
        Established {slide.established}
      </span>
      <h1 className="hero-carousel__title" aria-label={slide.title}>
        {slide.title.split(' ').map((word, index) => (
          <span
            className="hero-carousel__word"
            key={`${word}-${index}`}
            style={{ animationDelay: `${0.08 + index * 0.1}s` }}
          >
            {word}
          </span>
        ))}
      </h1>
      <p className="hero-carousel__eyebrow">Potla Group of Companies</p>
      <p className="hero-carousel__description">{slide.description}</p>
      <button
        type="button"
        onClick={() => onNavigate(slide.targetPage)}
        className="hero-carousel__cta"
      >
        Explore Company
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <section
      className="hero-carousel"
      aria-label="Potla Group companies"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-carousel__backdrop" />

      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const isPrevious = index === previousIndex;
        if (!isActive && !isPrevious) return null;

        return (
          <div
            key={slide.id}
            className={`hero-carousel__image-layer ${
              isActive
                ? 'hero-carousel__image-layer--entering'
                : 'hero-carousel__image-layer--leaving'
            }`}
            aria-hidden="true"
          >
            <img
              src={slide.image}
              alt=""
              style={{
                objectFit: slide.imageFit ?? 'cover',
                objectPosition: slide.imagePosition ?? 'center',
              }}
            />
          </div>
        );
      })}

      <div className="hero-carousel__shade" />
      <div className="hero-carousel__glow" />
      {previousIndex !== null && (
        <div className="hero-carousel__light-sweep" aria-hidden="true" />
      )}
      <div className="hero-carousel__particles" aria-hidden="true">
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="hero-carousel__content-wrap">
        {previousIndex !== null && renderContent(slides[previousIndex], true)}
        {renderContent(activeSlide)}
      </div>

      <button
        type="button"
        onClick={goPrevious}
        aria-label="Previous slide"
        className="hero-carousel__arrow hero-carousel__arrow--previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="hero-carousel__arrow hero-carousel__arrow--next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="hero-carousel__controls">
        <div className="hero-carousel__dots" aria-label="Choose a slide">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`hero-carousel__dot${index === activeIndex ? ' hero-carousel__dot--active' : ''}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-label={isPaused ? 'Resume automatic slide rotation' : 'Pause automatic slide rotation'}
          className="hero-carousel__pause"
        >
          {isPaused ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5" />}
          {isPaused ? 'Play' : 'Pause'}
        </button>
      </div>
    </section>
  );
}
