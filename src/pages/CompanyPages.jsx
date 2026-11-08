import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  Eye,
  FileCheck2,
  Handshake,
  Home,
  KeyRound,
  MapPin,
  Search,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import PageTitleBanner from '../components/PageTitleBanner.jsx';
import PartnerSlider from '../components/PartnerSlider.jsx';
import { DERMISHINE_SOAPS } from '../data/potlaData.js';
import { IMAGES } from '../assets/imageRegistry.js';

export function PotlaTechSolutionsPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Potla Tech Solutions"
        breadcrumb="Potla Tech Solutions"
        externalLinkHref="https://potlatechsolutions.com/"
        externalLinkLabel="Visit Potla Tech Solutions"
        onNavigate={onNavigate}
      />

      <section className="py-12">
        <div className="mx-auto max-w-[1140px] space-y-4 px-4">
          <p className="text-justify text-[16px] leading-[1.7] text-[#828893]">
            Potla Tech Solutions is world class IT and Telecom Company with
            competence in providing strategic solutions to client’s needs &amp;
            which can spring up client business.
          </p>
          <p className="text-justify text-[16px] leading-[1.7] text-[#828893]">
            We always aim at the latest technologies for advancements of
            website &amp; mobile application development &amp; training and
            placements. Potla Tech Solutions has an excellent &amp; experienced
            team of professionals from various backgrounds &amp; academics. We
            are perfectly poised to partner the clients business to take it to
            the new levels of efficient profitability &amp; growths.
          </p>

          <h3 className="pt-4 text-[28px] font-extrabold text-[#283a5e]">
            Who we Are?
          </h3>
          <p className="text-justify text-[16px] leading-[1.7] text-[#828893]">
            Potla Tech Solutions has an Excellent &amp; Experienced team of
            Professionals from various Backgrounds &amp; Academics. We always aim
            at the latest technologies for the advancement of Best Web
            Development Services, Android Application Development, Telecom
            Services, Best SEO Services, IT / Non-IT Staffing, Corporate
            Training &amp; Placements.
          </p>
        </div>

        <PartnerSlider />

        <div className="mx-auto max-w-[1140px] space-y-20 px-4 pt-8 pb-12">
          {/* Web Design & Development */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Web Design &amp; Development
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                Design services are one of the most necessities of today’s
                business world. Our team at Potla Services has years of
                experience in producing world-class website designs that are all
                novel and attractive.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'The type of business you perform.',
                  'The kind/age group of customers/visitors that you are focusing on.',
                  'The size of your focused consumer base.',
                  'The past achievements, present needs and future goals of your business.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15.5px] font-medium text-[#283a5e]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="potla-btn-primary"
                >
                  <span>Portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('webdesignandwebdevelopment')}
                  className="potla-btn-primary"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={IMAGES.potlaWebDevelopment}
                alt="Web development technologies and services"
                className="h-auto max-h-[360px] w-full max-w-[530px] object-contain"
              />
            </div>
          </div>

          {/* Mobile Application Development */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="order-2 flex justify-center lg:order-1 lg:col-span-6">
              <img
                src={IMAGES.potlaMobileAppDevelopment}
                alt="Mobile app development across phone platforms"
                className="h-auto max-h-[360px] w-full max-w-[530px] object-contain"
              />
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Mobile Application Development
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                Potla tech solutions, mobile application development provides
                customers with an end-to-end solution (apps) that includes
                analysis, design, development, testing, and delivery.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'iPhone Applications',
                  'Android Applications.',
                  'Windows Mobile Applications.',
                  'Cross-Platform Mobile Applications.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15.5px] font-medium text-[#283a5e]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="potla-btn-primary"
                >
                  <span>Portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('mobileapplicationdevelopment')}
                  className="potla-btn-primary"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Digital Marketing
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#828893]">
                The world of digital marketing, though complex, is exciting.
                Businesses small or big use digital marketing strategies to grow
                their presence online and gain new customers. In the modern age,
                every online entity must have a digital marketing strategy to be
                competitive in the internet marketplace.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Search Engine Optimization (S.E.O)',
                  'Search Engine Marketing (S.E.M)',
                  'Social Media Optimization (S.M.O)',
                  'Social Media Marketing (S.M.M)',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15.5px] font-medium text-[#283a5e]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="potla-btn-primary"
                >
                  <span>Portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('digitalmarketing')}
                  className="potla-btn-primary"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={IMAGES.potlaDigitalMarketing}
                alt="Digital marketing channels and services"
                className="h-auto max-h-[360px] w-full max-w-[530px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PotlaOverseasPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Potla Overseas Education Consulting"
        breadcrumb="Potla Study Abroad"
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-20 px-4">
          {/* Block 1 */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Large International Collaborations
              </h3>
              <p className="mt-4 text-justify text-[16px] leading-[1.7] text-[#828893]">
                Potla Tech Solution is the best Overseas Education Consultancy
                in India. We have placed a large number of understudies in
                different Universities across the United States. We have an
                order on schooling openings around the world. Our center
                movement lies in helping understudies to settle on the correct
                decision concerning seeking after training in abroad instructive
                foundations. Potla Tech Solutions gives data in regards to
                advanced education in different nations like UK, USA, Canada,
                Australia, New Zealand, Singapore, Ireland, France, Germany,
                Dubai, Switzerland, Malaysia, and some more.
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="potla-btn-primary"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={IMAGES.overseas1}
                alt="Large International Collaborations"
                className="max-h-[360px] w-auto rounded-[6px] shadow-md"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="order-2 flex justify-center lg:order-1 lg:col-span-6">
              <img
                src={IMAGES.overseas2}
                alt="Undergraduation and Postgraduation degrees"
                className="max-h-[360px] w-auto rounded-[6px] shadow-md"
              />
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Undergraduation and Postgraduation degrees across multiple
                disciplines
              </h3>
              <p className="mt-4 text-justify text-[16px] leading-[1.7] text-[#828893]">
                Potla Tech Solution is a leading Overseas Education Consultant
                in India. We render start to finish administrations in visa
                help, travel help, and affirmations at the undergrad and
                postgraduate levels alongside instructional exercise
                administrations for IELTS/PTE accordingly making us an
                all-inclusive resource for abroad schooling.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-[28px] font-bold text-[#283a5e] sm:text-[32px]">
                Expert advisory guidance and assistance for tests and university
                selection
              </h3>
              <p className="mt-4 text-justify text-[16px] leading-[1.7] text-[#828893]">
                The Potla Tech Solution is a main Overseas Education
                Consultancy. We at the expectation consistently strived to shape
                a hopefuls profession. Our master advisors direct understudies
                to settle on an educated decision in wording regarding
                specialization, University, pre-imperative tests, and the nation
                of decision concerning competitor profession objectives and
                ambitions.
              </p>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <img
                src={IMAGES.overseas3}
                alt="Expert advisory guidance"
                className="max-h-[360px] w-auto rounded-[6px] shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PotlaConsultingPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Potla Consulting Services"
        breadcrumb="Potla Consulting"
        onNavigate={onNavigate}
      />

      <section className="py-12">
        <div className="mx-auto max-w-[1140px] space-y-4 px-4">
          <p className="text-justify text-[16px] leading-[1.7] text-[#828893]">
            Potla Consulting works seamlessly with Telecom Carriers/Operators
            and OEMs in Network Planning and Deployment Services, Network
            Operations Services &amp; Network Performance Services.
          </p>
          <p className="text-justify text-[16px] leading-[1.7] text-[#828893]">
            We handle effectively the Installation of towers, signaling devices
            &amp; commissioning of work for the world’s leading telecom
            operators. A strong team of employees is always our backbone to
            deliver the quality &amp; timely services to our clients
            irrespective of climatic conditions. Our goal is to perceive the
            client’s future requests today and provide the best service with
            each touch point, in each market in which we work together. Potla
            Consulting provides business Enterprise Communication Networks to
            the Small, Medium and Large Enterprises in India.
          </p>

          <h3 className="pt-4 text-[28px] font-extrabold text-[#283a5e]">
            Who we Are?
          </h3>
          <p className="text-justify text-[16px] leading-[1.7] text-[#828893]">
            Potla Consulting is a staffing solutions company that provides
            manpower sourcing services for organizations across Telangana and
            AP. The company offers recruitment and placement solutions for
            companies seeking to find high-performance individuals and possibly
            the most qualified professionals. These services are provided using
            cutting-edge technology, a committed team, and revitalized
            processes.
          </p>
        </div>

        <PartnerSlider />

        <section
          aria-labelledby="potla-tech-solutions-heading"
          className="mx-auto mt-12 max-w-[1140px] px-4 pb-8"
        >
          <div className="rounded-2xl bg-[#fbf9f8] px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#b6396c] uppercase">
              Potla Group technology services
            </p>
            <h2
              id="potla-tech-solutions-heading"
              className="mt-2 text-[28px] font-extrabold text-[#283a5e] sm:text-[34px]"
            >
              Potla Tech Solutions
            </h2>
            <p className="mt-4 max-w-[900px] text-[16px] leading-[1.75] text-[#737b88]">
              Potla Tech Solutions helps organizations address their technology
              needs with tailored software and product development, cloud
              services, cybersecurity, IT consulting, and staff augmentation.
              Its teams work with clients to shape practical solutions around
              their goals and support their digital growth.
            </p>
            <ul className="mt-6 grid gap-3 text-[15px] font-semibold text-[#283a5e] sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                Software and product development
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                Cloud computing and cybersecurity
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                IT consulting and staff augmentation
              </li>
            </ul>
            <a
              href="https://potlatechsolutions.com/"
              target="_blank"
              rel="noreferrer"
              className="potla-btn-primary mt-7 inline-flex"
            >
              Visit Potla Tech Solutions
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

      </section>
    </div>
  );
}

export function TeluguWebMediaPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Teluguwebmedia"
        logoSrc={IMAGES.teluguWebMediaHero}
        compact
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-5 px-4">
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Teluguwebmedia.com is based in Hyderabad, Telangana and started in
            2018 as a web news portal. It has been expanding its wings to a
            plethora of happenings in film, political and general world of AP
            &amp; Telangana in the years of passage.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Teluguwebmedia.com&apos;s independent editorial team and contributors
            stand on their own and over the years the site has won immense
            popularity with serious attention and regard of the people living in
            India and abroad.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Teluguwebmedia.com is swift in bringing the news close to the
            public. The half a minutely updates in the portal is unique and
            special. Teluguwebmedia.com is regarded as the fastest news body.
            The news provided from Andhra Pradesh and Telangana is uploaded at
            the Website.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Srinu Potla hold the responsibilities of teluguwebmedia.com from
            Telangana, India.
          </p>
          <div className="pt-4">
            <a
              href="https://teluguwebmedia.online/"
              target="_blank"
              rel="noreferrer"
              className="potla-btn-primary"
            >
              Visit Telugu Web Media
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function DermishinePage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Dermishine"
        logoSrc={IMAGES.ds}
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-5 px-4">
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Dermishine products helps to take care of your skin and get rid of
            all those harsh chemicals. Wide range of handmade soaps are packaged
            in completely plastic free and comes within your budget.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            We are engaged in manufacturing of Dermishine Organic Soap,
            Dermishine handmade soap, and Glycerin transparent soap.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Potla Organic products are manufactured under the guidance of
            qualified Ayurveda Doctors and made up of Herbal active ingredients
            which are formulated from organically grown pure plant extracts.
            Potla Organic products are made to WHO, GMP, and ISO standards and
            incorporate the principles of a preservative recipe for everyday
            use.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Our Organic products are 100% natural and use the highest quality of
            natural ingredients. This means - No artificial colours. No
            artificial fragrance. No petrochemicals, parabens, urea, propylene
            glycol or other harmful additives. All our organic products are
            internationally certified.
          </p>

          {/* 6 Dermishine Organic Soaps Showcase */}
          <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3 lg:grid-cols-6">
            {DERMISHINE_SOAPS.map((soap) => (
              <div
                key={soap.id}
                className="potla-card-shadow flex flex-col items-center rounded-[6px] bg-white p-4 text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={soap.src}
                  alt={soap.name}
                  className="h-36 w-auto object-contain"
                />
                <span className="mt-3 text-[13.5px] font-bold text-[#283a5e]">
                  {soap.name}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="potla-btn-primary"
            >
              Visit Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PotlaDevelopersPage({ onNavigate }) {
  const services = [
    {
      number: '01',
      title: 'Open Plots',
      description:
        'Discover premium residential plots in Hyderabad, carefully selected to help you build your dream home. We focus on locations with excellent connectivity, infrastructure and future growth potential.',
      features: [
        'Strategic locations',
        'Clear property documentation',
        'Flexible plot options',
      ],
      image: IMAGES.developersOpenPlots,
      imageAlt: 'Residential open plots and property development',
      Icon: Home,
    },
    {
      number: '02',
      title: 'Constructions',
      description:
        'Turn your vision into reality with our expert construction services. We deliver quality residential and commercial construction with a focus on modern design, superior materials, timely execution and customer satisfaction.',
      features: [
        'Residential and commercial construction',
        'Modern architectural designs',
        'Quality materials and workmanship',
        'On-time project delivery',
      ],
      image: IMAGES.developersConstruction,
      imageAlt: 'Construction project and modern building development',
      Icon: Building2,
    },
    {
      number: '03',
      title: 'Real Estate Property Advisory',
      description:
        'We help investors identify promising real estate opportunities. Our team provides location insights, property guidance and assistance to help you make informed investment decisions.',
      features: [
        'Investment guidance',
        'Location analysis',
        'Future development insights',
        'Personalized property assistance',
      ],
      image: IMAGES.developersPropertyAdvisory,
      imageAlt: 'Residential apartment community and real estate investment opportunity',
      Icon: Compass,
    },
  ];

  const commitments = [
    {
      title: 'Customer-focused guidance',
      description:
        'We start by understanding your needs, priorities, and budget.',
      Icon: UsersRound,
    },
    {
      title: 'Location insight',
      description:
        'Compare connectivity, nearby facilities, and area development.',
      Icon: MapPin,
    },
    {
      title: 'Clear communication',
      description:
        'We help you ask the right questions and understand the details.',
      Icon: Eye,
    },
    {
      title: 'Practical support',
      description:
        'Get assistance as you review options and arrange property visits.',
      Icon: Handshake,
    },
    {
      title: 'Documentation awareness',
      description:
        'Know which property details and documents to review as you proceed.',
      Icon: FileCheck2,
    },
    {
      title: 'Long-term relationships',
      description:
        'Our goal is to make the experience helpful well beyond your first enquiry.',
      Icon: ShieldCheck,
    },
  ];

  const journey = [
    { title: 'Understand', description: 'Share your plans, priorities, and budget.', Icon: Search },
    { title: 'Discover', description: 'Review options suited to your requirements.', Icon: Compass },
    { title: 'Visit', description: 'Explore the location and surrounding area.', Icon: MapPin },
    { title: 'Review', description: 'Consider the property details and documentation.', Icon: FileCheck2 },
    { title: 'Decide', description: 'Compare your options and choose what fits.', Icon: Handshake },
    { title: 'Move forward', description: 'Get guidance on the next steps.', Icon: KeyRound },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-[#f7f8fb]">
        <div className="pointer-events-none absolute -top-40 -right-36 h-[560px] w-[560px] rounded-full bg-[#f5eaf0]" />
        <div className="relative mx-auto grid min-h-[530px] max-w-[1140px] grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#737b88]">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="cursor-pointer hover:text-[#b6396c]"
              >
                Home
              </button>
              <span className="mx-2 text-[#b6396c]" aria-hidden="true">/</span>
              <span>Potla Developers</span>
            </nav>
            <p className="text-[14px] font-extrabold tracking-[0.12em] text-[#567c43] uppercase">
              Discover our company
            </p>
            <h1 className="mt-4 max-w-[540px] text-[38px] leading-[1.12] font-extrabold text-[#283a5e] sm:text-[48px]">
              Welcome to Potla Developers
            </h1>
            <p className="mt-5 max-w-[510px] text-[17px] leading-[1.75] text-[#737b88]">
              Explore property opportunities with a team ready to help you
              understand your options and take the next step with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#developers-services" className="potla-btn-primary">
                Explore our services
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-full border border-[#b6396c] px-6 py-3 text-sm font-bold text-[#b6396c] transition-colors hover:bg-[#b6396c] hover:text-white"
              >
                Talk to our team
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-3 rotate-2 rounded-2xl bg-white shadow-[0_20px_55px_rgba(40,58,94,0.12)]" />
            <img
              src={IMAGES.potlaDevelopersBanner}
              alt="Potla Developers and Managing Director Srinu Potla"
              className="relative z-10 aspect-[2.4/1] w-full rounded-xl object-cover"
            />
            <div className="absolute right-4 bottom-4 z-20 rounded-lg bg-[#b6396c] px-5 py-3 text-white shadow-lg">
              <strong className="block text-2xl leading-none">2022</strong>
              <span className="mt-1 block text-xs">Established</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="max-w-[850px]">
            <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#b6396c] uppercase">
              Our purpose
            </p>
            <h2 className="mt-2 text-[30px] font-extrabold text-[#283a5e] sm:text-[38px]">
              Helping you find a place to build your future
            </h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-[#737b88]">
              Potla Developers is a real estate venture within the Potla Group.
              We help people explore residential property and development
              opportunities by making the search more understandable, personal,
              and straightforward.
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#737b88]">
              Whether you are planning a home, considering an investment, or
              learning about a new location, our team can help you compare
              options, arrange visits, and understand the details that matter
              to your decision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#b6396c] uppercase">
              Who we are
            </p>
            <h2 className="mt-2 text-[30px] font-extrabold text-[#283a5e] sm:text-[38px]">
              Your partner for informed property decisions
            </h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-[#737b88]">
              Established in 2022, Potla Developers brings together local
              knowledge and customer-focused support to help make property
              exploration easier. We believe good decisions begin with clear
              conversations, thoughtful research, and time to review each option.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Understand your requirements before suggesting options.',
                'Share useful context about locations and connectivity.',
                'Support you as you explore and evaluate properties.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] font-semibold text-[#283a5e]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b6396c]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={IMAGES.potlaDevelopersBanner}
            alt="Potla Developers team and leadership"
            className="h-auto max-h-[330px] w-full rounded-xl object-contain"
          />
        </div>
      </section>

      <section id="developers-services" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-10 max-w-[650px] text-center">
            <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#b6396c] uppercase">
              What we do
            </p>
            <h2 className="mt-2 text-[30px] font-extrabold text-[#283a5e] sm:text-[38px]">
              Property services for your next chapter
            </h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#737b88]">
              Explore the support available for residential, construction, and
              property advisory needs.
            </p>
          </div>
          <div className="space-y-12 sm:space-y-16">
            {services.map(({ number, title, description, features, image, imageAlt, Icon }, index) => (
              <article
                key={number}
                className={`grid items-center gap-8 rounded-2xl bg-[#f7f8fb] p-5 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-14 ${
                  index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <span className="text-sm font-extrabold tracking-[0.16em] text-[#b6396c]">
                    {number}
                  </span>
                  <h3 className="mt-2 text-[26px] font-extrabold text-[#283a5e] sm:text-[32px]">
                    {title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.8] text-[#737b88] sm:text-[16px]">
                    {description}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[14px] font-semibold text-[#283a5e] sm:text-[15px]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#b6396c]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="potla-read-more mt-6 cursor-pointer"
                  >
                    Read More
                  </button>
                </div>

                <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-xl bg-white sm:min-h-[280px]">
                  {image ? (
                    <img
                      src={image}
                      alt={imageAlt}
                      className="h-full max-h-[360px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#fff] via-[#f8edf2] to-[#f4e3eb] p-8 text-center sm:min-h-[280px]">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#b6396c] shadow-[0_12px_30px_rgba(40,58,94,0.1)]">
                        <Icon className="h-10 w-10" />
                      </span>
                      <span className="mt-5 text-lg font-extrabold text-[#283a5e]">
                        Property guidance, tailored to you
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf9f8] py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-10 max-w-[650px] text-center">
            <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#b6396c] uppercase">
              Our commitment
            </p>
            <h2 className="mt-2 text-[30px] font-extrabold text-[#283a5e] sm:text-[38px]">
              A property experience built around you
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map(({ title, description, Icon }) => (
              <article key={title} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#b6396c]" />
                <div>
                  <h3 className="font-extrabold text-[#283a5e]">{title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-[#737b88]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-10 max-w-[650px] text-center">
            <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#b6396c] uppercase">
              How we work
            </p>
            <h2 className="mt-2 text-[30px] font-extrabold text-[#283a5e] sm:text-[38px]">
              From first conversation to next steps
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journey.map(({ title, description, Icon }, index) => (
              <article key={title} className="relative rounded-xl border border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b6396c] text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon className="h-5 w-5 text-[#b6396c]" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#283a5e]">{title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-[#737b88]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#283a5e] py-14 text-center text-white sm:py-16">
        <div className="mx-auto max-w-[800px] px-4">
          <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#f2bd78] uppercase">
            Start a conversation
          </p>
          <h2 className="mt-2 text-[30px] font-extrabold text-white sm:text-[38px]">
            Ready to explore your property options?
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-white/75">
            Tell us what you are looking for and our team will help you consider
            the next steps.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="potla-btn-primary mt-7 border-white bg-white text-[#283a5e] hover:border-white hover:bg-white/90 hover:text-[#283a5e]"
          >
            Contact Potla Developers
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

export function WebDesignDetailPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Web Designing & Development"
        breadcrumb="Web Designing & Development"
        onNavigate={onNavigate}
      />
      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-5 px-4">
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Potla is a leading Web Designing Service Providers in Hyderabad. We
            create websites like Static Website, Dynamic Website, Responsive
            Website, Website Redesign, One page website, e-commerce website and
            CMS based website that can engage your customers. Low cost website
            designing across the globe. A creative designing based company in
            Hyderabad. We make tailored website design for the user-friendly
            application and exactly of the clients need.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Potla Creates 100% unique and original logo designs with ownership
            rights. We strive hard to create best, most unique and wide range of
            catchy technologies to design logo for our clients. We are badly
            needed for the start ups who want to start innovative business
            across the globe. Our logo creation services includes business logo
            design, corporate logo design, designer logo design and others which
            are very much relevant to your business. To create persona of the
            brand we do the logo design about visualizing to the clients target
            audience.
          </p>

          <h2 className="pt-4 text-[26px] font-extrabold text-[#283a5e]">
            What is web Design ?
          </h2>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Web designing is the process of creating website. A web designer
            converts clients brand and ideas making a virtual presence with
            online experience. Designing usually refers to the user experience
            of the website development than saying it as software development.
            Website designs services is for the users to make smooth and
            hassle-free experience from the form-filling through to the final
            submission process. A unique website design will offer you the
            engaging audience.
          </p>

          <h2 className="pt-4 text-[26px] font-extrabold text-[#283a5e]">
            What is web Development?
          </h2>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Among web professionals, &quot;web development&quot; usually refers
            to the main non-design aspects of building web sites: writing markup
            and coding. Web development may use content management system (CMS)
            to make content changes easier and available with basic technical
            skills.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            For large organizations and businesses, web development teams can
            consist of hundreds of people (web developers) and follow standard
            methods like Agile methodologies while developing websites. Smaller
            organizations may only require a single permanent or contract
            developer, or secondary assignment to related job positions such as
            a graphic designer or information system technician. Web development
            may be a collaborative effort between departments rather than the
            domain of a designated department. There are three kinds of web
            developers: front-end developer, back-end developer, and full-stack
            developer. Front-end developers responsible for behavior and visuals
            that run in the user browser, while back-end developers deal with
            the servers.
          </p>
        </div>
      </section>
    </div>
  );
}

export function MobileAppDetailPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Mobile Application Development"
        breadcrumb="Mobile Application Development"
        onNavigate={onNavigate}
      />
      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-5 px-4">
          <h2 className="text-[26px] font-extrabold text-[#283a5e]">
            What is Mobile App Development?
          </h2>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Mobile app development is the act or process by which a mobile app
            is developed for mobile devices, such as personal digital
            assistants, enterprise digital assistants or mobile phones. These
            applications can be pre-installed on mobiles during manufacturing
            platform, or delivered as web applications using server-side or
            client-side processing to provide an &quot;application-like&quot;
            experience within a Web browser. Application software developers
            also must consider a long array of screen sizes, hardware
            specifications, and configurations because of intense competition in
            mobile software and changes within each of the platforms. Mobile app
            development has been steadily growing, in revenues and jobs. A 2013
            analyst report estimates there are 529,000 direct app economy jobs
            within the EU 28 members, 60% of which are mobile app developers.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            As part of the development process, mobile user interface (UI)
            design is also essential in the creation of mobile apps. Mobile UI
            considers constraints, contexts, screen, input, and mobility as
            outlines for design. The user is often the focus of interaction with
            their device, and the interface entails components of both hardware
            and software. User input allows for the users to manipulate a
            system, and device&apos;s output allows the system to indicate the
            effects of the users&apos; manipulation.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Mobile UI contexts signal cues from user activity, such as location
            and scheduling that can be shown from user interactions within a
            mobile app. Overall, mobile UI design goal is mainly for an
            understandable, user-friendly interface. The UI of mobile apps
            should consider users&apos; limited attention, minimize keystrokes,
            and be task-oriented with a minimum set of functions. This
            functionality is supported by mobile enterprise application
            platforms or integrated development environments (IDEs).
          </p>
        </div>
      </section>
    </div>
  );
}

export function DigitalMarketingDetailPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Digital Marketing"
        breadcrumb="Digital Marketing"
        onNavigate={onNavigate}
      />
      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-5 px-4">
          <h2 className="text-[26px] font-extrabold text-[#283a5e]">
            What is Digital Marketing?
          </h2>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Web based advertising, otherwise called digital marketing, is the
            key business instrument for business today as it empowers them to
            outfit the intensity of the web to take their business to the next
            level. It causes them gain authority over the web crawlers, help the
            site traffic, and draw in clients with the goal that they get
            changed over into customers. With the vast majority of the rivals in
            the market putting resources into an advanced methodology, it gets
            basic for the business to remain in the race. These days having a
            vigorous computerized presence has developed as an incredible
            technique that moves the business higher than ever. Each business,
            accordingly, necessities to benefit web based promoting
            administrations to get the triumphant edge.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Potla group offers a complete range of digital marketing services to
            ensure that your business reaches to the more audience and is able
            to stay there despite the competition in the market. From SEO to
            SMO, SMM, PPC, ORM, content marketing and more, Potla excel at every
            aspect of online marketing and create perfect strategies to bring a
            result-oriented digital plan for your business.
          </p>
        </div>
      </section>
    </div>
  );
}
