import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Preloader from './components/Preloader.jsx';
import HeaderBar from './components/HeaderBar.jsx';
import Navbar from './components/Navbar.jsx';
import RightInfoModal from './components/RightInfoModal.jsx';
import PotlaAssistant from './components/PotlaAssistant.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SreeTechnologiesPage from './pages/SreeTechnologiesPage.jsx';
import {
  PotlaTechSolutionsPage,
  PotlaOverseasPage,
  PotlaConsultingPage,
  TeluguWebMediaPage,
  DermishinePage,
  PotlaDevelopersPage,
  WebDesignDetailPage,
  MobileAppDetailPage,
  DigitalMarketingDetailPage,
} from './pages/CompanyPages.jsx';
import {
  CareersPage,
  PortfolioPage,
  ContactPage,
  TestimonialsPage,
  BlogPage,
  FaqPage,
  PrivacyPolicyPage,
  TermsConditionsPage,
} from './pages/SecondaryPages.jsx';

const VALID_PAGES = new Set([
  'home',
  'about',
  'potla-tech-solutions',
  'potla-overseas',
  'potla-consulting',
  'potla-developers',
  'sree-technologies',
  'teluguwebmedia',
  'dermishine',
  'webdesignandwebdevelopment',
  'mobileapplicationdevelopment',
  'digitalmarketing',
  'careers',
  'portfolio',
  'contact',
  'testimonials',
  'blog',
  'faq',
  'privacy-policy',
  'terms-conditions',
]);

function readPageFromHash() {
  const cleaned = window.location.hash.replace(/^#\/?/, '').trim();
  if (VALID_PAGES.has(cleaned)) return cleaned;
  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(readPageFromHash);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(readPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    const nextPage = VALID_PAGES.has(page) ? page : 'home';
    setCurrentPage(nextPage);
    window.location.hash = nextPage === 'home' ? '' : `/${nextPage}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'potla-tech-solutions':
        return <PotlaTechSolutionsPage onNavigate={handleNavigate} />;
      case 'potla-overseas':
        return <PotlaOverseasPage onNavigate={handleNavigate} />;
      case 'potla-consulting':
        return <PotlaConsultingPage onNavigate={handleNavigate} />;
      case 'potla-developers':
        return <PotlaDevelopersPage onNavigate={handleNavigate} />;
      case 'sree-technologies':
        return <SreeTechnologiesPage onNavigate={handleNavigate} />;
      case 'teluguwebmedia':
        return <TeluguWebMediaPage onNavigate={handleNavigate} />;
      case 'dermishine':
        return <DermishinePage onNavigate={handleNavigate} />;
      case 'webdesignandwebdevelopment':
        return <WebDesignDetailPage onNavigate={handleNavigate} />;
      case 'mobileapplicationdevelopment':
        return <MobileAppDetailPage onNavigate={handleNavigate} />;
      case 'digitalmarketing':
        return <DigitalMarketingDetailPage onNavigate={handleNavigate} />;
      case 'careers':
        return <CareersPage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'testimonials':
        return <TestimonialsPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms-conditions':
        return <TermsConditionsPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#283a5e]">
      <Preloader />

      {/* Top Magenta Header Strip */}
      <HeaderBar onNavigate={handleNavigate} />

      {/* Sticky Main Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRightDrawer={() => setRightDrawerOpen(true)}
        rightDrawerOpen={rightDrawerOpen}
      />

      {/* Active Page Content */}
      <main>{renderCurrentPage()}</main>

      {/* 4-Column Footer + Copyright + Go Top Button */}
      <Footer onNavigate={handleNavigate} />

      {/* Right Slide-Over Company Info Modal (#myModal2) */}
      <RightInfoModal
        open={rightDrawerOpen}
        onClose={() => setRightDrawerOpen(false)}
      />

      <div
        aria-label="Contact Potla Group"
        className="fixed right-5 bottom-20 z-40 flex flex-col gap-2.5"
      >
        <PotlaAssistant onNavigate={handleNavigate} />
        <div className="flex items-center gap-2.5">
          <a
            href="https://wa.me/919985753789?text=Hello%20Potla%20Group%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Potla Group on WhatsApp"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#20c56a] text-white shadow-lg transition-transform hover:scale-105"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-8 w-8 fill-current"
            >
              <path d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.43 28.5l6.2-1.63A12.8 12.8 0 1 0 16.02 3.2Zm0 23.3c-1.92 0-3.8-.5-5.45-1.46l-.39-.23-3.68.97.98-3.58-.25-.4a10.52 10.52 0 1 1 8.79 4.7Zm5.78-7.88c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.22.33-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.17-1.36-.5-2.59-1.6-.96-.86-1.6-1.91-1.79-2.24-.19-.33-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.2.21-.33.32-.54.1-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.7 0 1.6 1.17 3.14 1.33 3.36.16.21 2.3 3.5 5.58 4.9.78.34 1.39.54 1.86.69.78.25 1.5.21 2.06.13.63-.1 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
            </svg>
          </a>
          <a
            href="tel:+919985753789"
            aria-label="Call Potla Group at +91 99857 53789"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#c13069] text-white shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="h-6 w-6 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
}
