import { useState, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { IMAGES } from '../assets/imageRegistry.js';
import './NavbarAnimation.css';

const COMPANY_LINKS = [
  { page: 'potla-tech-solutions', label: 'Potla Tech Solutions' },
  { page: 'potla-consulting', label: 'Potla Consulting' },
  { page: 'potla-developers', label: 'Potla Developers' },
  { page: 'sree-technologies', label: 'Sree Technologies' },
  { page: 'teluguwebmedia', label: 'Telugu Web Media' },
];

export default function Navbar({
  currentPage,
  onNavigate,
  onOpenRightDrawer,
  rightDrawerOpen,
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [companiesDropdownOpen, setCompaniesDropdownOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleIntroComplete = () => setIntroComplete(true);
    window.addEventListener('potla:intro-complete', handleIntroComplete, {
      once: true,
    });
    return () =>
      window.removeEventListener('potla:intro-complete', handleIntroComplete);
  }, []);

  const isCompanyPage = COMPANY_LINKS.some((c) => c.page === currentPage);

  const handleGo = (page) => {
    setCompaniesDropdownOpen(false);
    onNavigate(page);
  };

  return (
    <nav
          className={`z-40 w-full bg-white transition-all duration-300 ${
        isSticky
          ? 'animate-fade-in-down fixed top-0 left-0 py-3.5 shadow-[0_7px_13px_0_rgba(0,0,0,0.1)]'
          : 'relative py-3 sm:py-4 shadow-[0_2px_10px_rgba(40,58,94,0.04)]'
      }`}
    >
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo and anniversary seal */}
          <button
            type="button"
            onClick={() => handleGo('home')}
            className={`navbar-brand flex shrink-0 cursor-pointer items-center gap-1.5 text-left sm:gap-2 ${
              introComplete ? 'navbar-brand--revealed' : ''
            }`}
          >
              <span className="navbar-brand__stamp-set gap-1.5 sm:gap-2">
                <span className="navbar-brand__logo-wrap">
                  <img
                    src={IMAGES.logo}
                    alt="Potla Group of Companies"
                    className="navbar-brand__logo w-[140px] sm:w-[210px] lg:w-[290px]"
                  />
                </span>
                <span
                  aria-label="9+ years of excellence"
                  className="navbar-brand__anniversary inline-flex shrink-0 items-center gap-1.5 sm:gap-2"
                >
                  <span className="navbar-brand__seal flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#c6ad70] text-[14px] leading-none font-extrabold sm:h-10 sm:w-10 sm:text-[15px]">
                    9+
                  </span>
                  <span className="navbar-brand__seal-copy text-[7px] leading-[1.05] font-extrabold sm:text-[8px]">
                    <span>YEARS OF</span>
                    <br />
                    <span>EXCELLENCE</span>
                  </span>
                </span>
              </span>
            </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0 lg:flex">
            <button
              type="button"
              onClick={() => handleGo('home')}
              className={`cursor-pointer px-2 py-2 text-[15px] font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-[#b6396c]'
                  : 'text-[#283a5e] hover:text-[#b6396c]'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleGo('about')}
              className={`cursor-pointer px-2 py-2 text-[15px] font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-[#b6396c]'
                  : 'text-[#283a5e] hover:text-[#b6396c]'
              }`}
            >
              About
            </button>

            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompaniesDropdownOpen(true)}
              onMouseLeave={() => setCompaniesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCompaniesDropdownOpen((prev) => !prev)}
                className={`inline-flex cursor-pointer items-center gap-1 px-2 py-2 text-[15px] font-medium transition-colors ${
                  isCompanyPage
                    ? 'text-[#b6396c]'
                    : 'text-[#283a5e] hover:text-[#b6396c]'
                }`}
              >
                <span>Companies</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    companiesDropdownOpen ? 'rotate-180 text-[#b6396c]' : ''
                  }`}
                />
              </button>

              {companiesDropdownOpen && (
                <div className="absolute top-full left-0 z-50 min-w-[240px] rounded-[10px] bg-white py-3 shadow-[7px_5px_30px_rgba(72,73,121,0.15)]">
                  {COMPANY_LINKS.map((item) => (
                    <button
                      key={item.page}
                      type="button"
                      onClick={() => handleGo(item.page)}
                      className={`block w-full cursor-pointer px-5 py-2.5 text-left text-[15px] font-medium transition-colors ${
                        currentPage === item.page
                          ? 'bg-[#fbf9f8] text-[#b6396c]'
                          : 'text-[#283a5e] hover:bg-[#fbf9f8] hover:text-[#b6396c]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleGo('careers')}
              className={`cursor-pointer px-2 py-2 text-[15px] font-medium transition-colors ${
                currentPage === 'careers'
                  ? 'text-[#b6396c]'
                  : 'text-[#283a5e] hover:text-[#b6396c]'
              }`}
            >
              Careers
            </button>

            <button
              type="button"
              onClick={() => handleGo('portfolio')}
              className={`cursor-pointer px-2 py-2 text-[15px] font-medium transition-colors ${
                currentPage === 'portfolio'
                  ? 'text-[#b6396c]'
                  : 'text-[#283a5e] hover:text-[#b6396c]'
              }`}
            >
              Portfolio
            </button>

            <button
              type="button"
              onClick={() => handleGo('contact')}
              className={`cursor-pointer px-2 py-2 text-[15px] font-medium transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#b6396c]'
                  : 'text-[#283a5e] hover:text-[#b6396c]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Company information drawer */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenRightDrawer}
              aria-label="Open company information"
              aria-expanded={rightDrawerOpen}
              aria-controls="company-info-drawer"
              className="flex h-11 w-13 cursor-pointer items-center justify-center border border-[#b6396c] text-[#df8057] transition-colors hover:bg-[#b6396c] hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
