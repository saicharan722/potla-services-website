import {
  ArrowDownRight,
  ArrowRight,
  Compass,
  Lightbulb,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import FunFactsSection from '../components/FunFactsSection.jsx';
import { IMAGES } from '../assets/imageRegistry.js';

const PRINCIPLES = [
  {
    title: 'People first',
    description:
      'We value collaboration, opportunity, and the people behind every successful outcome.',
    Icon: UsersRound,
  },
  {
    title: 'Built on trust',
    description:
      'We work with care and accountability to earn lasting relationships with clients and partners.',
    Icon: ShieldCheck,
  },
  {
    title: 'Made to evolve',
    description:
      'We keep learning and applying technology to solve practical, changing business needs.',
    Icon: Lightbulb,
  },
];

const JOURNEY = [
  {
    year: '2017',
    name: 'Potla Tech Solutions',
    description:
      'Software development and digital services that help organizations build useful, reliable digital experiences.',
    page: 'potla-tech-solutions',
  },
  {
    year: '2018',
    name: 'Potla Consulting',
    description:
      'Staffing, recruitment, training, and placement support for organizations and professionals.',
    page: 'potla-consulting',
  },
  {
    year: '2020',
    name: 'Telugu Web Media',
    description:
      'A Telugu digital news platform covering current affairs, entertainment, and regional stories.',
    page: 'teluguwebmedia',
  },
  {
    year: '2022',
    name: 'Potla Developers',
    description:
      'Property services spanning open plots, construction, real estate, and advisory.',
    page: 'potla-developers',
  },
  {
    year: '2025',
    name: 'Sree Technologies',
    description:
      'Technology services, staffing, and practical career-focused learning for businesses and professionals.',
    page: 'sree-technologies',
  },
];

export default function AboutPage({ onNavigate }) {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#f8f8fb]">
        <div className="pointer-events-none absolute top-[-160px] right-[-330px] h-[740px] w-[820px] rounded-[48%] bg-[#f8edf2]" />
        <div className="relative mx-auto grid min-h-[570px] max-w-[1140px] grid-cols-1 items-center gap-10 px-4 py-14 md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-2 lg:gap-16 lg:py-16 xl:max-w-[1140px]">
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-10 text-[14px] text-[#737b88]">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="cursor-pointer hover:text-[#b6396c]"
              >
                Home
              </button>
              <span className="mx-2 text-[#b6396c]" aria-hidden="true">&bull;</span>
              <span>About Us</span>
            </nav>
            <p className="text-[13px] font-extrabold text-[#b6396c] uppercase">
              People, purpose, progress
            </p>
            <h1 className="mt-3 max-w-[560px] text-[38px] leading-[1.12] font-extrabold text-[#283a5e] sm:text-[42px] lg:text-[48px]">
              Built on trust. Growing through technology.
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.75] text-[#737b88] sm:text-[17px]">
              Potla Group brings together businesses across technology, talent,
              and media, focused on thoughtful service, lasting relationships,
              and meaningful growth.
            </p>
            <a
              href="#about-story"
              className="potla-btn-primary mt-7 inline-flex"
            >
              Discover our story <ArrowDownRight className="h-4 w-4" />
            </a>
            <div aria-label="Our focus" className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-semibold text-[#283a5e]">
              <span>Technology</span><span className="text-[#b6396c]">•</span>
              <span>People</span><span className="text-[#b6396c]">•</span>
              <span>Partnership</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="absolute -top-5 -right-5 h-full w-full rounded-[4px] border border-[#d6c6a2] sm:-top-7 sm:-right-7" />
            <img
              src={IMAGES.aboutHeroNetworking}
              alt="Business professional presenting connected technology devices and a global network"
              className="relative z-10 aspect-[3/2] w-full rounded-[4px] object-cover shadow-[0_20px_45px_rgba(40,58,94,0.12)]"
            />
            <div className="absolute right-0 bottom-0 z-20 flex items-center gap-3 bg-white px-4 py-3 shadow-lg sm:px-5 sm:py-4">
              <Compass className="h-5 w-5 text-[#b6396c]" />
              <span className="text-[13px] font-bold text-[#283a5e] sm:text-[14px]">
                Potla Group of Companies
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="about-story" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[14px] font-bold text-[#b6396c]">Who we are</p>
              <h2 className="mt-2 max-w-[470px] text-[30px] leading-[1.2] font-extrabold text-[#283a5e] sm:text-[36px]">
                A group with a shared purpose
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-[16px] leading-[1.75] text-[#737b88]">
                Headquartered in Hyderabad, Potla Group is a multi-business group
                serving organizations and communities through software
                development, consulting, staffing, digital media, and technology
                services.
              </p>
              <p className="text-[16px] leading-[1.75] text-[#737b88]">
                We bring together skilled teams and practical experience to
                understand each client&apos;s goals, deliver dependable work, and
                build partnerships that grow over time.
              </p>
            </div>
          </div>

          <div aria-label="Our principles" className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {PRINCIPLES.map(({ title, description, Icon }) => (
              <article key={title} className="border-t border-slate-200 pt-6">
                <Icon className="h-7 w-7 text-[#b6396c]" aria-hidden="true" />
                <h3 className="mt-4 text-[20px] font-bold text-[#283a5e]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#737b88]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Our mission and vision" className="bg-[#f7f8fb] py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-0 px-4 md:max-w-[720px] md:grid-cols-2 lg:max-w-[960px] xl:max-w-[1140px]">
          <article className="border-b border-slate-200 py-7 md:border-r md:border-b-0 md:pr-12 md:py-4">
            <p className="text-[14px] font-bold text-[#b6396c]">Our mission</p>
            <h2 className="mt-2 text-[27px] leading-[1.2] font-extrabold text-[#283a5e] sm:text-[32px]">
              Make meaningful progress possible.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-[#737b88]">
              We bring people, practical expertise, and technology together to
              deliver dependable services that help organizations and
              communities move forward.
            </p>
          </article>
          <article className="py-7 md:pl-12 md:py-4">
            <p className="text-[14px] font-bold text-[#b6396c]">Our vision</p>
            <h2 className="mt-2 text-[27px] leading-[1.2] font-extrabold text-[#283a5e] sm:text-[32px]">
              Build lasting value through opportunity.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-[#737b88]">
              We aim to grow a trusted group of businesses that creates useful
              digital experiences, supports professional growth, and strengthens
              long-term partnerships.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="mb-10 max-w-[650px]">
            <p className="text-[14px] font-bold text-[#b6396c]">Our journey</p>
            <h2 className="mt-2 text-[30px] leading-tight font-extrabold text-[#283a5e] sm:text-[36px]">
              Five companies. One shared commitment.
            </h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#737b88]">
              Each business brings a distinct capability to the group, with the
              same focus on dependable service and long-term value.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {JOURNEY.map((company) => (
              <article key={company.name} className="flex min-h-[260px] flex-col border-t-2 border-[#b6396c] bg-[#f8f8fb] p-5 sm:p-6">
                <span className="text-[14px] font-extrabold text-[#b6396c]">
                  {company.year}
                </span>
                <h3 className="mt-4 text-[19px] leading-snug font-bold text-[#283a5e]">
                  {company.name}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-[#737b88]">
                  {company.description}
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate(company.page)}
                  className="mt-5 inline-flex items-center gap-2 text-left text-[13px] font-bold text-[#b6396c] hover:text-[#8f2854]"
                >
                  Explore {company.name} <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-12 px-4 md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-2 lg:gap-10 xl:max-w-[1140px]">
          <article className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[190px_1fr]">
            <img
              src={IMAGES.rajeswariFounder}
              alt="Rajeshwari Potla, founder of Potla Group"
              className="aspect-[4/4.5] w-full max-w-[230px] object-cover"
            />
            <div>
              <p className="text-[14px] font-bold text-[#b6396c]">Our founder</p>
              <h2 className="mt-2 text-[26px] font-extrabold text-[#283a5e]">
                Rajeshwari Potla
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#737b88]">
                Rajeshwari Potla founded the group with a belief in quality,
                trust, and creating opportunities for people. Her vision
                continues to shape a culture grounded in values, service, and
                meaningful work.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#737b88]">
                That commitment to opportunity and community remains central as
                the group grows across Andhra Pradesh, Telangana, and beyond.
              </p>
            </div>
          </article>

          <article className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[190px_1fr]">
            <img
              src={IMAGES.srinuPotla}
              alt="Srinu Potla, managing director of Potla Group"
              className="aspect-[4/4.5] w-full max-w-[230px] object-cover"
            />
            <div>
              <p className="text-[14px] font-bold text-[#b6396c]">Managing director</p>
              <h2 className="mt-2 text-[26px] font-extrabold text-[#283a5e]">
                Srinu Potla
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#737b88]">
                Srinu Potla leads the group&apos;s work across technology, digital
                marketing, recruitment, corporate training, and telecom
                services. He brings experienced teams together to support
                clients with thoughtful planning and dependable delivery.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#737b88]">
                With a focus on collaboration and lasting partnerships, the
                group continues to build practical services around the needs of
                its clients and communities.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-[#b6396c] hover:text-[#8f2854]"
              >
                Meet Our CEO <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        </div>
      </section>

      <FunFactsSection />
    </div>
  );
}
