import { useState, useEffect } from 'react';
import { HAPPY_CLIENT_LOGOS } from '../data/potlaData.js';

export default function PartnerSlider({ showHeading = false }) {
  const [logoOffset, setLogoOffset] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLogoOffset((prev) => (prev + 1) % HAPPY_CLIENT_LOGOS.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  const visibleLogos = Array.from({ length: 5 }, (_, idx) => {
    const index = (logoOffset + idx) % HAPPY_CLIENT_LOGOS.length;
    return HAPPY_CLIENT_LOGOS[index];
  });

  return (
    <div className="py-10">
      <div className="mx-auto max-w-[1140px] px-4">
        {showHeading && (
          <h3 className="mb-10 text-left text-[32px] font-extrabold text-[#283a5e] sm:text-[36px]">
            Happy Clients
          </h3>
        )}

        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {visibleLogos.map((client) => (
            <div
              key={client.id}
              className="flex h-28 items-center justify-center rounded-[6px] bg-white p-4 shadow-[0_2px_12px_rgba(40,58,94,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="max-h-20 w-[135px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {HAPPY_CLIENT_LOGOS.map((logo, idx) => (
            <button
              key={logo.id}
              type="button"
              onClick={() => setLogoOffset(idx)}
              aria-label={`Partner slide ${idx + 1}`}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${
                logoOffset === idx
                  ? 'w-6 bg-[#b6396c]'
                  : 'w-2.5 bg-[#283a5e]/25 hover:bg-[#b6396c]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
