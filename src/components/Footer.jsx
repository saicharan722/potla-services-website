import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { IMAGES } from '../assets/imageRegistry.js';

export default function Footer({ onNavigate }) {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowGoTop(window.scrollY > 320);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#fbf9f8] pt-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Column 1: Important Links */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[22px] font-bold text-[#283a5e]">
                Important Links
              </h3>
              <ul className="space-y-3 text-[15.5px] font-medium text-[#283a5e]">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('privacy-policy')}
                    className="cursor-pointer transition-colors hover:text-[#b6396c]"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('terms-conditions')}
                    className="cursor-pointer transition-colors hover:text-[#b6396c]"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('faq')}
                    className="cursor-pointer transition-colors hover:text-[#b6396c]"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('careers')}
                    className="cursor-pointer transition-colors hover:text-[#b6396c]"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Head Office */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[22px] font-bold text-[#283a5e]">
                Head Office
              </h3>
              <ul className="space-y-2.5 text-[15px] leading-[1.6] text-[#283a5e]">
                <li>
                  <span className="font-bold">Address:</span> Manjeera Majestic
                  Commercial, 815, KPHB Phase 3, Kukatpally, Hyderabad Telangana
                  500072
                </li>
                <li>
                  <span className="font-bold">Website:</span>{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="cursor-pointer text-[#283a5e] transition-colors hover:text-[#b6396c]"
                  >
                    potlaservices.com
                  </button>
                </li>
                <li>
                  <span className="font-bold">Email:</span>{' '}
                  <a
                    href="mailto:email@potlaservices.com"
                    className="text-[#283a5e] transition-colors hover:text-[#b6396c]"
                  >
                    email@potlaservices.com
                  </a>
                </li>
                <li>
                  <span className="font-bold">Landline:</span>{' '}
                  <a
                    href="tel:+914035699217"
                    className="text-[#283a5e] transition-colors hover:text-[#b6396c]"
                  >
                    +91 40 3569 9217
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Branch Office */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[22px] font-bold text-[#283a5e]">
                Branch Offices
              </h3>
              <ul className="space-y-2.5 text-[15px] leading-[1.6] text-[#283a5e]">
                <li>
                  <span className="font-bold">Address:</span> Annapurna Nagar,
                  Gorantla, near inner ring road, Guntur-34.
                </li>
                <li>
                  <span className="font-bold">Address:</span> 301 Sudarshan
                  Plazza, Opposite Pills Pharmacy, KPHB 6TH PHASE HYDERABAD
                </li>
                <li>
                  <span className="font-bold">Landline:</span>{' '}
                  <a
                    href="tel:+914035699217"
                    className="text-[#283a5e] transition-colors hover:text-[#b6396c]"
                  >
                    +91 40 3569 9217
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Like us on Social */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[22px] font-bold text-[#283a5e]">
                Like us on Social
              </h3>

              <ul aria-label="Social media" className="flex items-center gap-1">
                <li>
                  <a
                    href="https://www.facebook.com/potlaservices/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white"
                  >
                    <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/potla-group-of-companies/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#283a5e] text-[#283a5e] transition-colors hover:border-[#b6396c] hover:bg-[#b6396c] hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 bg-[#283a5e] py-7">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-center text-[15px] text-white sm:text-left">
                © 2020–2026 Potla Group of Companies. All rights reserved.
              </p>

              <div className="shrink-0">
                <img
                  src={IMAGES.pay}
                  alt="Accepted Payment Methods"
                  className="h-9 w-auto rounded-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Go Top Button */}
      {showGoTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed right-0 bottom-7 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-l-[10px] bg-black text-white shadow-lg transition-colors hover:bg-[#b6396c]"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
