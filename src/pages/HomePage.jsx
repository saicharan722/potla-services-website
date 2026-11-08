import { useState } from 'react';
import {
  CheckCircle2,
  UserSearch,
  Users,
  Award,
  Lightbulb,
  ThumbsUp,
  Handshake,
  Quote,
} from 'lucide-react';
import {
  ABOUT_COLLAGE_IMAGES,
  HOME_DIVISIONS,
  CORE_VALUES,
  CLIENT_TESTIMONIALS,
} from '../data/potlaData.js';
import PartnerSlider from '../components/PartnerSlider.jsx';
import FunFactsSection from '../components/FunFactsSection.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import { IMAGES } from '../assets/imageRegistry.js';

const CORE_VALUE_ICONS = {
  'search-user': UserSearch,
  users: Users,
  badge: Award,
  bulb: Lightbulb,
  like: ThumbsUp,
  handshake: Handshake,
};

const HOME_HERO_SLIDES = [
  {
    id: 'potla-tech-solutions',
    established: '2017',
    title: 'Potla Tech Solutions',
    description:
      'Engineering web, mobile, and custom software solutions that help businesses work smarter and grow.',
    targetPage: 'potla-tech-solutions',
    image: IMAGES.aboutImg3,
    imageAlt: 'Technology professionals working together',
  },
  {
    id: 'potla-consulting',
    established: '2018',
    title: 'Potla Consulting',
    description:
      'Connecting organizations with skilled talent through recruitment, staffing, corporate training, and placement support.',
    targetPage: 'potla-consulting',
    image: IMAGES.aboutImg4,
    imageAlt: 'Business professionals discussing a growth plan',
  },
  {
    id: 'telugu-web-media',
    established: '2020',
    title: 'Telugu Web Media',
    description:
      'Sharing timely Telugu news and stories from Andhra Pradesh and Telangana, spanning current affairs, entertainment, and culture.',
    targetPage: 'teluguwebmedia',
    image: IMAGES.twmHomeLogo,
    imageAlt: 'Telugu Web Media logo and Telugu-language branding',
    imageFit: 'contain',
  },
  {
    id: 'potla-developers',
    established: '2022',
    title: 'Potla Developers',
    description:
      'Supporting property decisions through open plots, construction, real estate, and advisory services.',
    targetPage: 'potla-developers',
    image: IMAGES.potlaDevelopersBanner,
    imageAlt: 'Potla Developers and Managing Director Srinu Potla',
    imageFit: 'contain',
  },
  {
    id: 'sree-technologies',
    established: '2025',
    title: 'Sree Technologies',
    description:
      'Supporting business and career growth through technology services, staffing, and practical training.',
    targetPage: 'sree-technologies',
    image: IMAGES.sreeTechnologiesBanner,
    imageAlt: 'Sree Technologies logo on a blue light background',
    imageFit: 'contain',
  },
];

export default function HomePage({ onNavigate }) {
  // Business Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [enquiryError, setEnquiryError] = useState('');
  const [enquirySuccess, setEnquirySuccess] = useState('');

  // Testimonials Carousel State
  const [testimonialPage, setTestimonialPage] = useState(0);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    if (
      !enquiryForm.name.trim() ||
      !enquiryForm.email.trim() ||
      !enquiryForm.phone.trim()
    ) {
      setEnquiryError('Please enter your Name, Email, and Phone number.');
      return;
    }
    setEnquiryError('');
    setEnquirySuccess(
      `Thank you ${enquiryForm.name.trim()}! Your enquiry has been submitted to Potla Group of Companies.`
    );
    setEnquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }
    setNewsletterMsg(
      `Thank you for subscribing (${newsletterEmail.trim()}) to our newsletter!`
    );
    setNewsletterEmail('');
  };

  const totalTestimonialPages = Math.ceil(CLIENT_TESTIMONIALS.length / 3);
  const visibleTestimonials = CLIENT_TESTIMONIALS.slice(
    testimonialPage * 3,
    testimonialPage * 3 + 3
  );

  return (
    <div>
      <HeroCarousel slides={HOME_HERO_SLIDES} onNavigate={onNavigate} />

      <FunFactsSection />

      {/* 2. Features Area 1: About Collage + Potla Group of Companies + Software Industry */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <img
          src={IMAGES.rocket}
          alt="rocket"
          className="animate-movebounce pointer-events-none absolute right-6 bottom-[36rem] hidden w-16 opacity-85 xl:block"
        />
        <img
          src={IMAGES.vectorBg}
          alt="vector"
          className="pointer-events-none absolute bottom-0 left-0 w-72 opacity-50"
        />

        <div className="relative z-10 mx-auto max-w-[1140px] px-4">
          {/* 2x2 Image Grid + Potla Group Overview */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <img
                    src={ABOUT_COLLAGE_IMAGES[0].src}
                    alt={ABOUT_COLLAGE_IMAGES[0].alt}
                    className="w-full rounded-[5px] shadow-md"
                  />
                </div>
                <div>
                  <img
                    src={ABOUT_COLLAGE_IMAGES[1].src}
                    alt={ABOUT_COLLAGE_IMAGES[1].alt}
                    className="w-full rounded-[5px] shadow-md"
                  />
                </div>
                <div className="mt-4">
                  <img
                    src={ABOUT_COLLAGE_IMAGES[2].src}
                    alt={ABOUT_COLLAGE_IMAGES[2].alt}
                    className="w-full rounded-[5px] shadow-md"
                  />
                </div>
                <div className="mt-4">
                  <img
                    src={ABOUT_COLLAGE_IMAGES[3].src}
                    alt={ABOUT_COLLAGE_IMAGES[3].alt}
                    className="w-full rounded-[5px] shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="block text-[16px] font-bold text-[#b6396c]">
                People, purpose, progress
              </span>
              <h3 className="mt-2.5 text-[28px] leading-[1.25] font-extrabold text-[#283a5e] sm:text-[34px]">
                A group built around your next step
              </h3>

              <p className="mt-4 text-justify text-[16px] leading-[1.7] text-[#828893]">
                Potla Group brings together businesses in technology, consulting,
                digital media, and professional services. Our teams focus on
                practical solutions, thoughtful service, and long-term relationships.
              </p>

              <p className="mt-4 text-justify text-[16px] leading-[1.7] text-[#828893]">
                From digital products and training to media and talent services,
                each company contributes a distinct capability while sharing a
                commitment to dependable work and meaningful growth.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="potla-read-more cursor-pointer"
                >
                  View More About us.
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="cursor-pointer text-[15px] font-bold text-[#283a5e] transition-colors hover:text-[#b6396c]"
                >
                  Meet Our CEO <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Software Industry Row */}
          <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="mb-2 text-[14px] font-bold text-[#b6396c] uppercase">
                Technology services
              </p>
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Software built for business
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                Potla Tech Solutions helps organizations design, build, and
                improve digital products. We take time to understand each
                requirement and shape the right solution around it.
              </p>
              <ul className="mt-5 space-y-2.5">
                {HOME_DIVISIONS[0].bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15.5px] font-medium text-[#283a5e]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onNavigate(HOME_DIVISIONS[0].targetPage)}
                  className="potla-btn-primary"
                >
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={HOME_DIVISIONS[0].image}
                alt={HOME_DIVISIONS[0].title}
                className="max-h-[370px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Area 2: Consulting, Dermishine & Overseas Education Consulting */}
      <section className="relative overflow-hidden py-12 lg:py-16">
        <img
          src={IMAGES.rocket}
          alt="rocket"
          className="animate-movebounce pointer-events-none absolute right-6 bottom-60 hidden w-16 opacity-85 xl:block"
        />

        <div className="relative z-10 mx-auto max-w-[1140px] space-y-20 px-4">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="text-[14px] font-bold text-[#b6396c] uppercase">
              Across our group
            </p>
            <h2 className="mt-2 text-[30px] leading-tight font-extrabold text-[#283a5e] sm:text-[36px]">
              Expertise for every stage of growth
            </h2>
            <p className="mt-3 text-[16px] text-[#828893]">
              Meet the teams helping organizations and professionals move forward.
            </p>
          </div>

          {/* Consulting */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] capitalize sm:text-[32px]">
                {HOME_DIVISIONS[1].title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                {HOME_DIVISIONS[1].description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {HOME_DIVISIONS[1].bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15.5px] font-medium text-[#283a5e]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onNavigate(HOME_DIVISIONS[1].targetPage)}
                  className="potla-btn-primary"
                >
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={HOME_DIVISIONS[1].image}
                alt={HOME_DIVISIONS[1].title}
                className="max-h-[370px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Telugu Web Media */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Telugu Web Media
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                Telugu Web Media covers current affairs, entertainment, and
                regional stories for readers across Andhra Pradesh and Telangana.
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onNavigate('teluguwebmedia')}
                  className="potla-btn-primary"
                >
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={IMAGES.twmHomeLogo}
                alt="Telugu Web Media logo and Telugu-language branding"
                className="max-h-[180px] max-w-full object-contain"
              />
            </div>
          </div>

          {/* Potla Developers */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Potla Developers
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                Potla Developers brings together property and advisory services
                to help clients explore real estate opportunities with clarity.
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onNavigate('potla-developers')}
                  className="potla-btn-primary"
                >
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={IMAGES.potlaDevelopersBanner}
                alt="Potla Developers and Managing Director Srinu Potla"
                className="h-auto max-h-[300px] w-full max-w-[620px] object-contain"
              />
            </div>
          </div>

          {/* Sree Technologies */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Sree Technologies
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                Practical technology services, staffing, and career-focused
                training help businesses and professionals keep moving forward.
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="potla-btn-primary"
                >
                  Contact the Team
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={IMAGES.sreeTechnologiesBanner}
                alt="Sree Technologies logo on a blue light background"
                className="h-auto max-h-[300px] w-full max-w-[620px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Area: Our Core Values */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <h3 className="text-[32px] font-extrabold text-[#283a5e] sm:text-[36px]">
              Our Core Values
            </h3>
            <p className="mt-3 text-[16px] text-[#828893]">
              Potla Group of Companies believes in the best outcome for the
              customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((item) => {
              const IconComp = CORE_VALUE_ICONS[item.icon] || Award;
              return (
                <div
                  key={item.id}
                  className="potla-card-shadow group rounded-[5px] bg-white px-7 py-9 text-center transition-all duration-300 hover:-translate-y-2.5 hover:bg-[#b6396c]"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[5px] bg-[#f4f6fd] text-[#b6396c] transition-all duration-300 group-hover:rounded-full group-hover:bg-white">
                    <IconComp className="h-9 w-9" />
                  </div>
                  <h3 className="mt-7 mb-4 text-[22px] font-bold text-[#283a5e] transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-[1.65] text-[#828893] transition-colors group-hover:text-white/95">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Analysis Area: Business Enquiry + Kick start your business */}
      <section className="bg-[#fbf9f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="potla-card-shadow rounded-[5px] bg-white p-7 sm:p-10">
                <h3 className="mb-7 text-center text-[28px] font-extrabold text-[#283a5e]">
                  Business Enquiry
                </h3>

                {enquirySuccess && (
                  <div className="mb-4 rounded-[5px] border border-emerald-200 bg-emerald-50 p-3.5 text-sm font-semibold text-emerald-900">
                    {enquirySuccess}
                  </div>
                )}

                {enquiryError && (
                  <div className="mb-4 rounded-[5px] border border-rose-200 bg-rose-50 p-3 text-sm font-medium text-rose-700">
                    {enquiryError}
                  </div>
                )}

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={enquiryForm.name}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, name: e.target.value })
                    }
                    className="h-[50px] w-full rounded-[5px] border border-slate-200 bg-[#f9fafc] px-4 text-[15px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:bg-white focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    value={enquiryForm.email}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, email: e.target.value })
                    }
                    className="h-[50px] w-full rounded-[5px] border border-slate-200 bg-[#f9fafc] px-4 text-[15px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:bg-white focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Phone*"
                    value={enquiryForm.phone}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                    }
                    className="h-[50px] w-full rounded-[5px] border border-slate-200 bg-[#f9fafc] px-4 text-[15px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:bg-white focus:outline-none"
                  />
                  <textarea
                    rows={4}
                    placeholder="Message"
                    value={enquiryForm.message}
                    onChange={(e) =>
                      setEnquiryForm({
                        ...enquiryForm,
                        message: e.target.value,
                      })
                    }
                    className="w-full rounded-[5px] border border-slate-200 bg-[#f9fafc] p-4 text-[15px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:bg-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-[5px] bg-[#b6396c] py-3.5 text-[15px] font-bold tracking-wider text-white uppercase shadow-[0_15px_25px_0_rgba(182,57,108,0.25)] transition-colors hover:bg-[#9c2d5b]"
                  >
                    Enquire Now
                  </button>
                </form>
              </div>
            </div>

            <div className="text-center lg:col-span-6 lg:text-left">
              <h3 className="text-[28px] leading-[1.3] font-extrabold text-[#283a5e] sm:text-[34px]">
                Kick start your business with our services.
              </h3>
              <img
                src={IMAGES.tandp}
                alt="Kick start your business"
                className="mx-auto mt-6 max-h-[380px] w-auto object-contain lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial Area */}
      <section
        id="testimonial"
        className="relative overflow-hidden bg-[#fbf9f8] py-16 lg:py-20"
      >
        <img
          src={IMAGES.vectorBg}
          alt="vector"
          className="pointer-events-none absolute right-0 bottom-0 w-72 opacity-50"
        />

        <div className="relative z-10 mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <h3 className="text-[32px] font-extrabold text-[#283a5e] sm:text-[36px]">
              What our clients are saying
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className="group relative mt-6 rounded-[6px] bg-white p-7 pt-9 shadow-[0_2px_15px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2.5 hover:bg-[#b6396c]"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 rounded-full border-2 border-[#b6396c]/20 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:border-white"
                  />
                  <div>
                    <h4 className="text-[19px] font-bold text-[#283a5e] transition-colors group-hover:text-white">
                      {item.name}
                    </h4>
                    <span className="text-[14px] font-semibold text-[#b6396c] transition-colors group-hover:text-white/90">
                      {item.company}
                    </span>
                  </div>
                </div>

                <p className="relative z-10 mt-5 text-justify text-[15.5px] leading-[1.7] text-[#828893] transition-colors group-hover:text-white">
                  {item.quote}
                </p>

                <Quote className="pointer-events-none absolute right-6 bottom-5 h-16 w-16 text-[#6f8ba4]/15 transition-colors group-hover:text-white/20" />
              </div>
            ))}
          </div>

          {/* Testimonial Pagination */}
          <div className="mt-9 flex items-center justify-center gap-2.5">
            {Array.from({ length: totalTestimonialPages }, (_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTestimonialPage(idx)}
                aria-label={`Testimonial page ${idx + 1}`}
                className={`h-3 cursor-pointer rounded-full transition-all ${
                  testimonialPage === idx
                    ? 'w-7 bg-[#b6396c]'
                    : 'w-3 bg-[#283a5e]/25 hover:bg-[#b6396c]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partner Area (Happy Clients) */}
      <section className="relative overflow-hidden bg-[#fbf9f8] pt-8 pb-12">
        <img
          src={IMAGES.vectorBg}
          alt="vector"
          className="pointer-events-none absolute bottom-0 left-0 w-64 opacity-45"
        />
        <div className="relative z-10">
          <PartnerSlider showHeading />
        </div>
      </section>

      {/* 9. Subscribe Area (Join Our Newsletter) */}
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[780px] px-4 text-center">
          <h4 className="text-[28px] font-extrabold text-[#283a5e] sm:text-[32px]">
            Join Our Newsletter
          </h4>

          <form
            onSubmit={handleNewsletterSubmit}
            className="mx-auto mt-7 flex max-w-[600px] flex-col gap-3 sm:flex-row sm:items-center sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-[0_5px_25px_rgba(72,73,121,0.14)]"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-12 flex-1 rounded-full border border-slate-200 bg-white px-6 text-[15px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none sm:border-none"
            />
            <button type="submit" className="potla-btn-primary shrink-0">
              Subscribe
            </button>
          </form>

          {newsletterMsg && (
            <p className="mt-3 text-sm font-semibold text-[#b6396c]">
              {newsletterMsg}
            </p>
          )}
        </div>
      </section>

    </div>
  );
}
