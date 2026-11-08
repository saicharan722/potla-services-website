import { useState, useEffect, useRef } from 'react';
import { Users, Rocket, Laptop, Award } from 'lucide-react';
import { FUN_FACTS } from '../data/potlaData.js';

const FACT_ICONS = {
  users: Users,
  rocket: Rocket,
  laptop: Laptop,
  award: Award,
};

export default function FunFactsSection() {
  const [countersStarted, setCountersStarted] = useState(false);
  const [counterValues, setCounterValues] = useState(
    FUN_FACTS.map(() => 0)
  );
  const funFactsRef = useRef(null);

  useEffect(() => {
    const node = funFactsRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setCountersStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!countersStarted) return undefined;
    const duration = 1400;
    const steps = 40;
    let currentStep = 0;

    const timer = window.setInterval(() => {
      currentStep += 1;
      const ratio = Math.min(1, currentStep / steps);
      setCounterValues(
        FUN_FACTS.map((item) => Math.round(item.target * ratio))
      );
      if (currentStep >= steps) {
        window.clearInterval(timer);
      }
    }, duration / steps);

    return () => window.clearInterval(timer);
  }, [countersStarted]);

  return (
    <section
      ref={funFactsRef}
      className="relative bg-[#b6396c] py-12 text-white"
    >
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FUN_FACTS.map((fact, idx) => {
            const IconComp = FACT_ICONS[fact.icon] || Award;
            return (
              <div
                key={fact.id}
                className="group relative pl-16 transition-transform duration-300 hover:-translate-y-2"
              >
                <IconComp className="animate-movebounce absolute top-1 left-0 h-11 w-11 text-white" />
                <p className="text-[18px] font-medium text-white/95">
                  {fact.label}
                </p>
                <h3 className="mt-2 text-[42px] leading-none font-extrabold text-white">
                  {counterValues[idx]}
                  {fact.suffix}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
