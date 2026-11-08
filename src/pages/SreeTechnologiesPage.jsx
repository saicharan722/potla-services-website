import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Handshake,
  Laptop,
  Lightbulb,
  Search,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';
import { IMAGES } from '../assets/imageRegistry.js';
import './SreeTechnologiesPage.css';

const SERVICES = [
  {
    number: '01',
    title: 'Training & Placement',
    description:
      'Each one of us has hidden skills and abilities to contribute towards humanity. We, at Potla Consulting, with our skill enhancement techniques, enable you to keep growing with the ever-changing educational and industrial needs of the challenging world and make your future ready.',
    features: [
      'Skill Enhancement',
      'On Job Training',
      'Internships',
      'Career Guidance',
    ],
    image: IMAGES.sreeTrainingPlacement,
    imageAlt: 'Students building practical skills with career guidance',
  },
  {
    number: '02',
    title: 'Staff Augmentation',
    description:
      'At Potla Consulting we treat the outsourcing opportunities provided by our clients as business partnerships. We cater to a wide variety of clients ranging from new businesses to established organizations and entrepreneurs.',
    features: [
      'Employee Outsourcing',
      'Manpower Supply',
      'Payroll Process',
      'Time Sheet Management',
    ],
    image: IMAGES.sreeStaffAugmentation,
    imageAlt: 'Professionals collaborating on staffing and business needs',
  },
];

export const COURSES = [
  {
    title: 'Generative AI',
    fee: '₹50,000',
    originalFee: '₹75,000',
    description:
      'Learn LLMs, Prompt Engineering, RAG, Vector DBs, LangChain, AI Agents, CrewAI, AutoGPT, API Integration and AI Tools.',
    topics: [
      'LLMs',
      'Prompt Engineering',
      'RAG',
      'Vector DBs',
      'LangChain',
      'AI Agents',
      'CrewAI',
      'AutoGPT',
      'API Integration',
      'AI Tools',
    ],
  },
  {
    title: 'Data Science',
    fee: '₹52,000',
    description:
      'Build practical data science skills, from preparing and exploring data to creating machine-learning models and communicating results.',
    topics: ['Python', 'Statistics', 'Data Cleaning', 'Data Visualization', 'Machine Learning', 'Model Evaluation'],
  },
  {
    title: 'Java Full Stack',
    fee: '₹50,000',
    description:
      'Develop full-stack application skills with Java, modern backend frameworks, databases, and frontend technologies.',
    topics: ['Core Java', 'Spring Boot', 'REST APIs', 'SQL', 'HTML & CSS', 'JavaScript', 'Application Projects'],
  },
  {
    title: 'Python Full Stack',
    fee: '₹55,000',
    description:
      'Learn to build and connect responsive web interfaces, Python applications, and data-backed services.',
    topics: ['Python', 'Django', 'REST APIs', 'SQL', 'HTML & CSS', 'JavaScript', 'Full-Stack Projects'],
  },
  {
    title: 'AWS DevOps',
    fee: '₹50,000',
    description:
      'Practice cloud deployment and DevOps workflows using AWS infrastructure, automation, and delivery pipelines.',
    topics: ['AWS Fundamentals', 'Linux', 'Git', 'CI/CD', 'Docker', 'Kubernetes', 'Monitoring'],
  },
  {
    title: 'Data Analyst',
    fee: '₹50,000',
    description:
      'Learn to turn business data into useful insights with spreadsheets, SQL, visualization, and analytical methods.',
    topics: ['Excel', 'SQL', 'Data Cleaning', 'Power BI', 'Statistics', 'Dashboards', 'Business Reporting'],
  },
  {
    title: 'Frontend Development',
    fee: '₹50,000',
    description:
      'Create accessible, responsive web experiences with modern frontend tools and project-based practice.',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'Accessibility', 'Git'],
  },
  {
    title: 'Python with AI/ML',
    fee: '₹50,000',
    description:
      'Build a foundation in Python programming, machine learning concepts, and applied AI projects.',
    topics: ['Python', 'Data Handling', 'Statistics', 'Machine Learning', 'Model Evaluation', 'AI Projects'],
  },
  {
    title: 'QA Testing',
    fee: '₹40,000',
    description:
      'Learn software quality practices for planning, executing, and documenting effective tests.',
    topics: ['Testing Fundamentals', 'Test Cases', 'Manual Testing', 'Bug Reporting', 'API Testing', 'Automation Basics'],
  },
  {
    title: 'ServiceNow',
    fee: '₹39,000',
    description:
      'Get introduced to the ServiceNow platform, service workflows, configuration, and application development.',
    topics: ['Platform Fundamentals', 'Forms & Lists', 'Service Catalog', 'Workflows', 'Scripting', 'Application Development'],
  },
  {
    title: 'Cyber Security',
    fee: '₹45,000',
    description:
      'Explore foundational security practices, common threats, risk awareness, and defensive techniques.',
    topics: ['Security Fundamentals', 'Networking', 'Threat Awareness', 'Access Control', 'Risk Management', 'Security Practices'],
  },
  {
    title: 'Digital Marketing',
    fee: '₹54,000',
    description:
      'Learn digital channels and campaign skills for reaching audiences, creating content, and measuring results.',
    topics: ['SEO', 'Social Media', 'Content Marketing', 'Paid Campaigns', 'Analytics', 'Campaign Planning'],
  },
];

const CAREER_PHASES = [
  {
    phase: 'PHASE 01',
    title: 'Learn',
    subtitle: 'AI Powered Virtual Learning',
    Icon: GraduationCap,
    features: [
      'Structured Curriculum',
      'Live + Recorded Sessions',
      'Study Material & Practice Labs',
    ],
    outcome: 'Build Strong Fundamentals',
  },
  {
    phase: 'PHASE 02',
    title: 'Mentor',
    subtitle: '1:1 Expert Guidance',
    Icon: UsersRound,
    features: [
      'Personal Mentorship',
      'Weekly Doubt Sessions',
      'Career Planning',
    ],
    outcome: 'No Confusion. Only Direction.',
  },
  {
    phase: 'PHASE 03',
    title: 'Build',
    subtitle: 'Real Industry Projects',
    Icon: Laptop,
    features: ['Live Projects', 'GitHub Portfolio', 'Business Case Studies'],
    outcome: 'Companies Hire What You Build.',
  },
  {
    phase: 'PHASE 04',
    title: 'Experience',
    subtitle: 'Internship with Personal Mentorship',
    Icon: BriefcaseBusiness,
    features: [
      'Real Work Environment',
      'Team Collaboration',
      'Performance Tracking',
    ],
    outcome: 'From Learner to Professional.',
  },
  {
    phase: 'PHASE 05',
    title: 'Launch',
    subtitle: 'Resume + Portfolio + Mock Interviews',
    Icon: Sparkles,
    features: [
      'ATS Friendly Resume',
      'LinkedIn Optimization',
      'HR & Technical Mock Interviews',
    ],
    outcome: 'Be Interview Ready.',
  },
  {
    phase: 'PHASE 06',
    title: 'Get Hired',
    subtitle: 'Placement Drives & Certifications',
    Icon: BadgeCheck,
    features: [
      'Placement Assistance',
      'Hiring Drives',
      'Industry Certifications',
    ],
    outcome: 'Your Career Starts Here!',
  },
];

const BENEFITS = [
  { title: 'Industry Relevant Curriculum', Icon: Code2 },
  { title: '1:1 Mentorship', Icon: UsersRound },
  { title: 'Real Projects', Icon: Lightbulb },
  { title: 'Placement Assistance', Icon: Handshake },
];

export default function SreeTechnologiesPage({ onNavigate }) {
  const [courseSearch, setCourseSearch] = useState('');
  const [expandedCourse, setExpandedCourse] = useState('');
  const [activeCourse, setActiveCourse] = useState(COURSES[0]);
  const [drawer, setDrawer] = useState('');
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: COURSES[0].title,
    message: '',
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const drawerRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const filteredCourses = useMemo(() => {
    const searchTerm = courseSearch.trim().toLowerCase();
    return COURSES.filter((course) =>
      course.title.toLowerCase().includes(searchTerm),
    );
  }, [courseSearch]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(preference.matches);
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  const isDrawerOpen = Boolean(drawer);

  useEffect(() => {
    if (!isDrawerOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setDrawer('');
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isDrawerOpen]);

  const openCourseDetails = (course) => {
    setActiveCourse(course);
    setDrawer('details');
  };

  const openDemoForm = (course = activeCourse) => {
    setActiveCourse(course);
    setDemoForm((current) => ({ ...current, course: course.title }));
    setDemoSubmitted(false);
    setDrawer('demo');
  };

  const submitDemoForm = (event) => {
    event.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <div className="sree-page">
      <section
        aria-label="Sree Technologies introduction"
        className="sree-intro relative overflow-hidden bg-[#f7f8fb]"
      >
        <div className="sree-intro__glow pointer-events-none absolute -top-32 -right-36 h-[440px] w-[440px] rounded-full" />
        <div className="relative mx-auto grid max-w-[1140px] items-center gap-9 px-4 py-12 md:grid-cols-2 md:py-14 lg:gap-16 lg:py-16">
          <div>
            <p className="text-[14px] font-extrabold tracking-[0.12em] text-[#527c42] uppercase">
              Discover our company
            </p>
            <h1 className="mt-4 text-[34px] leading-[1.14] font-extrabold text-[#283a5e] sm:text-[42px]">
              Welcome to
              <span className="block text-[#b6396c]">Sree Technologies</span>
            </h1>
            <p className="mt-5 max-w-[510px] text-[16px] leading-[1.75] text-[#737b88]">
              Explore our work, values and the solutions we provide.
            </p>
          </div>
          <div className="sree-video-frame relative overflow-hidden rounded-2xl bg-[#172039] shadow-[0_24px_60px_rgba(40,58,94,0.2)]">
            <video
              className="aspect-video w-full object-cover"
              src="/videos/sree-intro.mp4"
              poster={IMAGES.sreeAcademy}
              controls
              autoPlay={!reduceMotion}
              muted
              playsInline
              loop={!reduceMotion}
              preload="metadata"
              aria-label="Sree Technologies introduction video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1140px] items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[13px] font-extrabold tracking-[0.14em] text-[#b6396c] uppercase">
              Learn. Practice. Grow.
            </p>
            <h2 className="mt-3 text-[32px] leading-[1.15] font-extrabold text-[#283a5e] sm:text-[42px]">
              Learn In-Demand Skills.
              <span className="sree-heading-accent block">
                Build a Future Without Limits.
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#737b88] sm:text-[16px]">
              Sree Technologies is a leading software training academy
              dedicated to providing industry-focused education in today&apos;s
              most in-demand technologies. We offer career-oriented training in
              Python Full Stack Development, Java Full Stack Development,
              ServiceNow, Agentic AI, Generative AI, Data Science, AWS DevOps,
              and Frontend Development, helping students and professionals
              build successful IT careers.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#737b88] sm:text-[16px]">
              Our courses are delivered by experienced industry professionals
              and combine practical learning with hands-on lab sessions,
              real-world projects, and live assignments. With a strong focus on
              industry readiness, we equip learners with the technical skills,
              confidence, and practical experience needed to succeed in
              today&apos;s competitive job market.
            </p>
            <button
              type="button"
              onClick={() => openDemoForm(COURSES[0])}
              className="potla-btn-primary mt-7"
            >
              Request Demo <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="sree-academy-frame relative">
            <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-[#f1d4df] sm:-top-6 sm:-left-6" />
            <img
              src={IMAGES.sreeAcademy}
              alt="Sree Technologies course offer flyer featuring its training programs"
              className="relative mx-auto max-h-[620px] w-full rounded-2xl bg-[#f7f8fb] object-contain shadow-[0_18px_50px_rgba(40,58,94,0.14)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-10 max-w-[680px] text-center">
            <p className="text-[13px] font-extrabold tracking-[0.14em] text-[#b6396c] uppercase">
              Potla Group capabilities
            </p>
            <h2 className="mt-2 text-[30px] font-extrabold text-[#283a5e] sm:text-[38px]">
              Our Consulting Services
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#737b88] sm:text-[16px]">
              Career preparation, recruitment training and staffing support
              from across the Potla Group.
            </p>
          </div>
          <div className="space-y-7">
            {SERVICES.map((service, index) => (
              <article
                key={service.number}
                className="grid overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(40,58,94,0.08)] md:grid-cols-2"
              >
                <div
                  className={`p-6 sm:p-9 lg:p-11 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <span className="text-sm font-extrabold tracking-[0.16em] text-[#b6396c]">
                    {service.number}
                  </span>
                  <h3 className="mt-2 text-[25px] font-extrabold text-[#283a5e] sm:text-[30px]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.75] text-[#737b88]">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-[14px] font-semibold text-[#283a5e]"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#b6396c]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#sree-programs"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#b6396c] transition-colors hover:text-[#8f2854]"
                  >
                    View Courses <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className={`h-full min-h-[230px] w-full object-cover sm:min-h-[300px] ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sree-programs" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[13px] font-extrabold tracking-[0.14em] text-[#b6396c] uppercase">
                Learn what&apos;s next
              </p>
              <h2 className="mt-2 text-[30px] font-extrabold text-[#283a5e] sm:text-[38px]">
                Our Training Programs
              </h2>
              <p className="mt-2 text-[15px] text-[#737b88]">
                Industry-focused programs crafted for modern technology and AI
                careers.
              </p>
            </div>
            <label className="flex w-full items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#737b88] shadow-sm sm:max-w-[300px]">
              <Search className="h-4 w-4 shrink-0" />
              <span className="sr-only">Find a course</span>
              <input
                type="search"
                value={courseSearch}
                onChange={(event) => setCourseSearch(event.target.value)}
                placeholder="Find a course"
                className="w-full bg-transparent text-sm text-[#283a5e] outline-none placeholder:text-[#8b929e]"
              />
            </label>
          </div>
          {filteredCourses.length ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => {
                const isExpanded = expandedCourse === course.title;
                return (
                  <article
                    key={course.title}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
                  >
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedCourse(isExpanded ? '' : course.title)
                      }
                      className="flex w-full items-center gap-3 px-5 py-4 text-left"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f8edf2] text-lg font-bold text-[#b6396c]">
                        {isExpanded ? '−' : '+'}
                      </span>
                      <span className="flex-1 text-[15px] font-bold text-[#283a5e]">
                        {course.title}
                      </span>
                      <span className="text-[14px] font-extrabold text-[#b6396c]">
                        {course.fee}
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="border-t border-slate-100 bg-[#fffdfd] px-5 py-4 text-[14px] leading-[1.7] text-[#53677f]">
                        <p>{course.description}</p>
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <p className="flex items-center gap-3">
                            <span>Program fee</span>
                            <strong className="text-[16px] font-extrabold text-[#b6396c]">
                              {course.fee}
                            </strong>
                            {course.originalFee && (
                              <del className="text-xs text-slate-400">
                                {course.originalFee}
                              </del>
                            )}
                          </p>
                        <button
                          type="button"
                          onClick={() => openCourseDetails(course)}
                          className="rounded-md border border-[#283a5e] px-3 py-2 text-xs font-bold text-[#283a5e] transition-colors hover:bg-[#283a5e] hover:text-white"
                        >
                            View full details
                        </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="rounded-xl bg-[#f7f8fb] px-5 py-8 text-center text-sm text-[#737b88]">
              No courses match “{courseSearch}”. Try another search.
            </p>
          )}
        </div>
      </section>

      <section className="sree-journey-bg py-14 text-white sm:py-20">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-10 max-w-[720px] text-center">
            <p className="text-[13px] font-extrabold tracking-[0.16em] text-[#f3c7d7] uppercase">
              Your Career Journey
            </p>
            <h2 className="mt-2 text-[30px] font-extrabold sm:text-[40px]">
              <span className="inline-block rounded-xl bg-[#f3c7d7] px-3 py-1 text-[#283a5e] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                Career Transformation Pathway
              </span>
            </h2>
            <h3 className="mt-3 text-[17px] font-semibold text-white/85 sm:text-[19px]">
              A Proven 6-Phase Journey from Learning to Placement
            </h3>
            <p className="mt-2 text-sm font-semibold tracking-wide text-[#f3c7d7]">
              Learn <span aria-hidden="true">•</span> Build{' '}
              <span aria-hidden="true">•</span> Get Hired
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAREER_PHASES.map(({ phase, title, subtitle, Icon, features, outcome }) => (
              <article
                key={phase}
                className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.12] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold tracking-[0.14em] text-[#f3c7d7]">
                    {phase}
                  </span>
                  <Icon className="h-6 w-6 text-[#f3c7d7]" />
                </div>
                <h3 className="mt-4 text-[22px] font-extrabold">{title}</h3>
                <h4 className="mt-1 min-h-10 text-[14px] font-semibold text-white/80">
                  {subtitle}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-white/85"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f3c7d7]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/15 pt-4 text-sm font-extrabold text-white">
                  {outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-10 sm:py-12">
        <div className="mx-auto grid max-w-[1140px] gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-xl bg-white px-4 py-5 shadow-[0_8px_24px_rgba(40,58,94,0.06)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8edf2] text-[#b6396c]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-[14px] font-extrabold text-[#283a5e]">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {drawer && (
        <div
          className="sree-drawer-overlay fixed inset-0 z-[70] flex justify-end bg-[#142039]/50"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDrawer('');
          }}
        >
          <aside
            ref={drawerRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby={
              drawer === 'details' ? 'sree-course-details-title' : 'sree-demo-title'
            }
            className="sree-drawer-panel flex h-full w-full max-w-[620px] flex-col overflow-y-auto bg-white px-6 pb-8 pt-5 shadow-2xl outline-none sm:px-8 sm:pt-6"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setDrawer('')}
                aria-label="Close panel"
                className="rounded-full p-1 text-[#173c5d] transition-colors hover:bg-slate-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {drawer === 'details' ? (
              <div className="mt-1">
                <p className="text-[20px] font-extrabold tracking-[0.12em] text-[#b6396c]">
                  COURSE DETAILS
                </p>
                <h2
                  id="sree-course-details-title"
                  className="mt-3 text-[27px] font-extrabold text-[#173c5d] sm:text-[30px]"
                >
                  {activeCourse.title}
                </h2>
                <p className="mt-3 text-[14px] leading-[1.7] text-[#53677f]">
                  {activeCourse.description}
                </p>
                <h3 className="mt-6 text-[16px] font-extrabold text-[#173c5d]">
                  Topics covered
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-x-7 gap-y-2.5 text-[14px] text-[#53677f] sm:grid-cols-2">
                  {activeCourse.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#53677f]" aria-hidden="true">
                        •
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="flex flex-wrap items-center gap-3 text-[14px] text-[#53677f]">
                    Course fee
                    <strong className="text-[19px] font-extrabold text-[#173c5d]">
                      {activeCourse.fee}
                    </strong>
                    {activeCourse.originalFee && (
                      <del className="text-sm text-slate-400">
                        {activeCourse.originalFee}
                      </del>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => openDemoForm(activeCourse)}
                    className="mt-4 w-full rounded-md bg-[#173c5d] px-4 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#b6396c]"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-1">
                <p className="text-[12px] font-extrabold tracking-[0.18em] text-[#b6396c]">
                  START YOUR LEARNING JOURNEY
                </p>
                <h2
                  id="sree-demo-title"
                  className="mt-3 text-[27px] font-extrabold text-[#173c5d] sm:text-[30px]"
                >
                  Book Your Free Demo
                </h2>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#53677f]">
                  Connect with our team and discover the right course for your
                  career goals.
                </p>
                {demoSubmitted ? (
                  <div
                    role="status"
                    className="mt-7 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-[1.7] text-emerald-900"
                  >
                    Thank you, {demoForm.name.trim()}! Your demo request is
                    ready. This form is not connected to a submission service
                    yet, so your information has not been sent.
                  </div>
                ) : (
                  <form onSubmit={submitDemoForm} className="mt-6 space-y-4">
                    <label className="block text-[13px] font-bold text-[#173c5d]">
                      Your Name *
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        value={demoForm.name}
                        onChange={(event) =>
                          setDemoForm({ ...demoForm, name: event.target.value })
                        }
                        placeholder="Enter your name"
                        className="sree-form-field mt-2"
                      />
                    </label>
                    <label className="block text-[13px] font-bold text-[#173c5d]">
                      Email Address *
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        value={demoForm.email}
                        onChange={(event) =>
                          setDemoForm({ ...demoForm, email: event.target.value })
                        }
                        placeholder="Enter your email"
                        className="sree-form-field mt-2"
                      />
                    </label>
                    <label className="block text-[13px] font-bold text-[#173c5d]">
                      Phone Number *
                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        value={demoForm.phone}
                        onChange={(event) =>
                          setDemoForm({ ...demoForm, phone: event.target.value })
                        }
                        placeholder="Enter your phone number"
                        className="sree-form-field mt-2"
                      />
                    </label>
                    <label className="block text-[13px] font-bold text-[#173c5d]">
                      Select Course *
                      <select
                        required
                        value={demoForm.course}
                        onChange={(event) =>
                          setDemoForm({ ...demoForm, course: event.target.value })
                        }
                        className="sree-form-field mt-2"
                      >
                        {COURSES.map((course) => (
                          <option key={course.title} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block text-[13px] font-bold text-[#173c5d]">
                      Message
                      <textarea
                        rows={3}
                        value={demoForm.message}
                        onChange={(event) =>
                          setDemoForm({ ...demoForm, message: event.target.value })
                        }
                        placeholder="Your message"
                        className="sree-form-field mt-2 resize-y"
                      />
                    </label>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-[#173c5d] px-4 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#b6396c]"
                    >
                      Submit Demo Request
                    </button>
                  </form>
                )}
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
