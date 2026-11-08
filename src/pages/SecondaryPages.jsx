import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Plus,
  Minus,
  Code2,
  Smartphone,
  Cloud,
  BrainCircuit,
  Megaphone,
  BriefcaseBusiness,
  ExternalLink,
  ZoomIn,
  X,
  MapPin,
  Phone,
  Mail,
  Quote,
  User,
  Upload,
  ArrowDownRight,
} from 'lucide-react';
import PageTitleBanner from '../components/PageTitleBanner.jsx';
import {
  CAREER_ROLES,
  PORTFOLIO_WORKS,
  CLIENT_TESTIMONIALS,
  BLOG_POSTS,
  FAQ_COLUMNS,
} from '../data/potlaData.js';
import { IMAGES } from '../assets/imageRegistry.js';

const CAREER_ROLE_ICONS = {
  'python-full-stack': Code2,
  'aws-cloud-engineer': Cloud,
  'ai-ml-engineer': BrainCircuit,
  'role-java': Code2,
  'role-mobile': Smartphone,
  'role-dm': Megaphone,
};

export function CareersPage({ onNavigate }) {
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const selectedRole = CAREER_ROLES.find((role) => role.id === selectedRoleId);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    website: '',
  });
  const [resume, setResume] = useState(null);
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!selectedRole) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedRoleId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedRole]);

  const handleApply = (event) => {
    event.preventDefault();
    if (form.website.trim()) return;
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.role) {
      setFormError('Please complete your name, email, phone, and role.');
      return;
    }
    if (resume && resume.size > 5 * 1024 * 1024) {
      setFormError('Your resume must be 5 MB or smaller.');
      return;
    }
    if (resume && !/\.(pdf|doc|docx)$/i.test(resume.name)) {
      setFormError('Upload your resume as a PDF, DOC, or DOCX file.');
      return;
    }
    setFormError('');
    setFormMessage(
      'Thanks for your interest. This preview has no application service, so your details were not sent or stored.'
    );
    setForm({ name: '', email: '', phone: '', role: '', website: '' });
    setResume(null);
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-[#f8f8fb]">
        <div className="pointer-events-none absolute top-[-160px] right-[-330px] h-[740px] w-[820px] rounded-[48%] bg-[#f8edf2]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1140px] grid-cols-1 items-center gap-8 px-4 py-12 md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-2 lg:gap-14 lg:py-14 xl:max-w-[1140px]">
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-9 text-[14px] text-[#737b88]">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="cursor-pointer hover:text-[#b6396c]"
              >
                Home
              </button>
              <span className="mx-2 text-[#b6396c]" aria-hidden="true">&bull;</span>
              <span>Careers</span>
            </nav>
            <p className="text-[13px] font-extrabold text-[#b6396c] uppercase">
              Build what comes next
            </p>
            <h1 className="mt-3 max-w-[560px] text-[38px] leading-[1.12] font-extrabold text-[#283a5e] sm:text-[44px] lg:text-[50px]">
              Make your next move count.
            </h1>
            <p className="mt-5 max-w-[540px] text-[16px] leading-[1.75] text-[#737b88] sm:text-[17px]">
              Join a team building thoughtful technology and creating
              opportunities for people and businesses to grow.
            </p>
            <a href="#careers-openings" className="potla-btn-primary mt-7 inline-flex">
              Explore open roles <ArrowRight className="h-4 w-4" />
            </a>
            <div aria-label="Career areas" className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-semibold text-[#283a5e]">
              <span>Software engineering</span><span className="text-[#b6396c]">•</span>
              <span>Cloud &amp; AI</span><span className="text-[#b6396c]">•</span>
              <span>Digital growth</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
            <div className="absolute -top-5 -right-5 h-full w-full rounded-[4px] border border-[#d6c6a2] sm:-top-7 sm:-right-7" />
            <img
              src={IMAGES.hiringBanner}
              alt="We are hiring — join our team"
              className="relative z-10 aspect-[4/3.5] w-full rounded-[4px] bg-white object-contain"
            />
          </div>
        </div>
      </section>

      <section id="careers-openings" className="scroll-mt-24 bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-end lg:gap-12">
            <div>
              <p className="text-[14px] font-bold text-[#b6396c]">Opportunities to grow</p>
              <h2 className="mt-2 text-[30px] leading-tight font-extrabold text-[#283a5e] sm:text-[36px]">
                Find your next opportunity
              </h2>
            </div>
            <p className="text-[15px] leading-[1.7] text-[#737b88]">
              Explore current openings across engineering, cloud, AI, mobile,
              and digital marketing. Choose a role to learn more, then send us
              your details.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Current openings">
              {CAREER_ROLES.map((role) => {
                const RoleIcon = CAREER_ROLE_ICONS[role.id] || BriefcaseBusiness;
                return (
                  <article key={role.id} className="flex min-h-[290px] flex-col border border-[#e7e8eb] bg-white p-5 shadow-[0_3px_15px_rgba(40,58,94,0.04)]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf3f9] text-[#283a5e]">
                      <RoleIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#172e4d]">{role.title}</h3>
                    <p className="mt-2 text-[13px] font-medium text-[#172e4d]">
                      Experience: {role.experience}
                    </p>
                    <p className="mt-3 line-clamp-4 text-[13px] leading-[1.65] text-[#66758a]">
                      {role.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedRoleId(role.id)}
                      className="mt-auto inline-flex cursor-pointer items-center gap-1 pt-5 text-left text-[14px] font-bold text-[#172e4d] hover:text-[#b6396c]"
                      aria-label={`Read more about ${role.title}`}
                    >
                      Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </article>
                );
              })}
            </div>

            <div id="career-application" className="mx-auto w-full max-w-[760px] bg-[#f8f8fb] p-6 sm:p-8">
              <p className="text-[14px] font-bold text-[#b6396c]">Take the next step</p>
              <h2 className="mt-1 text-[25px] font-extrabold text-[#283a5e]">
                Apply to join our team
              </h2>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#737b88]">
                This preview does not send or store applications. See our{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('privacy-policy')}
                  className="cursor-pointer font-semibold text-[#b6396c] underline"
                >
                  Privacy Policy
                </button>.
              </p>

              {formMessage && (
                <div role="status" className="mt-4 border border-emerald-200 bg-emerald-50 p-3 text-[13px] leading-[1.5] text-emerald-900">
                  {formMessage}
                </div>
              )}
              {formError && (
                <div role="alert" className="mt-4 border border-rose-200 bg-rose-50 p-3 text-[13px] text-rose-800">
                  {formError}
                </div>
              )}

              <form onSubmit={handleApply} className="mt-5 space-y-3.5">
                <label className="sr-only" htmlFor="career-name">Full name</label>
                <input
                  id="career-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Full name*"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="h-12 w-full border border-slate-200 bg-white px-4 text-[14px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none"
                />
                <label className="sr-only" htmlFor="career-email">Email address</label>
                <input
                  id="career-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email address*"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="h-12 w-full border border-slate-200 bg-white px-4 text-[14px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none"
                />
                <label className="sr-only" htmlFor="career-phone">Phone number</label>
                <input
                  id="career-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone number*"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="h-12 w-full border border-slate-200 bg-white px-4 text-[14px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none"
                />
                <label className="sr-only" htmlFor="career-role">Select a role</label>
                <select
                  id="career-role"
                  required
                  value={form.role}
                  onChange={(event) => setForm({ ...form, role: event.target.value })}
                  className="h-12 w-full border border-slate-200 bg-white px-4 text-[14px] text-[#283a5e] focus:border-[#b6396c] focus:outline-none"
                >
                  <option value="">Select a role*</option>
                  {CAREER_ROLES.map((role) => (
                    <option key={role.id} value={role.title}>{role.title}</option>
                  ))}
                </select>

                <div>
                  <label htmlFor="career-resume" className="mb-1.5 block text-[13px] font-semibold text-[#283a5e]">
                    Resume (PDF, DOC, or DOCX; max 5 MB)
                  </label>
                  <label htmlFor="career-resume" className="flex min-h-11 cursor-pointer items-center gap-2 border border-slate-200 bg-white px-4 text-[13px] font-semibold text-[#283a5e] hover:border-[#b6396c]">
                    <Upload className="h-4 w-4 text-[#b6396c]" />
                    <span className="truncate">{resume?.name || 'Choose a resume file'}</span>
                  </label>
                  <input
                    id="career-resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) => {
                      setResume(event.target.files?.[0] || null);
                      setFormError('');
                    }}
                    className="sr-only"
                  />
                </div>

                <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="career-website">Leave this field empty</label>
                  <input
                    id="career-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) => setForm({ ...form, website: event.target.value })}
                  />
                </div>

                <button type="submit" className="potla-btn-primary w-full">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {selectedRole && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-[#17243b]/75 p-3 sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedRoleId(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-role-title"
            className="relative my-auto max-h-[92vh] w-full max-w-[680px] overflow-y-auto rounded-2xl bg-white px-6 py-8 shadow-2xl sm:px-10 sm:py-10"
          >
            <button
              type="button"
              onClick={() => setSelectedRoleId(null)}
              aria-label="Close job details"
              className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#f3eff3] text-[#b6396c] hover:bg-[#f8e9ef]"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="pr-12 text-[12px] font-extrabold tracking-[0.16em] text-[#b6396c] uppercase">
              Current opening · {selectedRole.employment}
            </p>
            <h2 id="career-role-title" className="mt-3 pr-8 text-[30px] leading-tight font-bold text-[#172e4d] sm:text-[36px]">
              {selectedRole.title}
            </h2>
            <p className="mt-2 text-[14px] font-medium text-[#b6396c]">
              {selectedRole.location} <span className="mx-2">·</span> {selectedRole.employment}
            </p>
            <p className="mt-4 text-[14px] font-semibold text-[#172e4d]">
              Experience: {selectedRole.experience}
            </p>
            <p className="mt-3 text-[15px] leading-[1.8] text-[#66758a]">
              {selectedRole.description}
            </p>
            <h3 className="mt-5 text-[16px] font-bold text-[#172e4d]">Responsibilities</h3>
            <ul className="mt-2 space-y-2.5">
              {selectedRole.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2.5 text-[14px] leading-[1.7] text-[#66758a]">
                  <span className="font-bold text-[#b6396c]" aria-hidden="true">✓</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-5 text-[16px] font-bold text-[#172e4d]">Qualifications</h3>
            <ul className="mt-2 space-y-2.5">
              {selectedRole.qualifications.map((qualification) => (
                <li key={qualification} className="flex gap-2.5 text-[14px] leading-[1.7] text-[#66758a]">
                  <span className="font-bold text-[#b6396c]" aria-hidden="true">✓</span>
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setForm((currentForm) => ({ ...currentForm, role: selectedRole.title }));
                setSelectedRoleId(null);
                window.setTimeout(() => {
                  document.getElementById('career-application')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }, 0);
              }}
              className="potla-btn-primary mt-7 inline-flex"
            >
              Apply for this role <ArrowRight className="h-4 w-4" />
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export function PortfolioPage({ onNavigate }) {
  const [filter, setFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'business', label: 'Business & Careers' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'events', label: 'Events' },
  ];

  const filteredWorks = PORTFOLIO_WORKS.filter(
    (work) => filter === 'all' || work.categories.includes(filter)
  );
  const selectedGallery = selectedWork
    ? selectedWork.gallery?.length
      ? selectedWork.gallery
      : [{ src: selectedWork.image, caption: `${selectedWork.title} product screen` }]
    : [];
  const activeScreenshot = selectedGallery[selectedImageIndex] || selectedGallery[0];

  return (
    <div>
      <section className="relative overflow-hidden bg-[#f8f8fb]">
        <div className="pointer-events-none absolute top-[-160px] right-[-330px] h-[740px] w-[820px] rounded-[48%] bg-[#f8edf2]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1140px] grid-cols-1 items-center gap-8 px-4 py-12 md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-2 lg:gap-14 lg:py-14 xl:max-w-[1140px]">
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-9 text-[14px] text-[#737b88]">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="cursor-pointer hover:text-[#b6396c]"
              >
                Home
              </button>
              <span className="mx-2 text-[#b6396c]" aria-hidden="true">&bull;</span>
              <span>Portfolio</span>
            </nav>
            <p className="text-[13px] font-extrabold text-[#b6396c] uppercase">
              Potla Group products
            </p>
            <h1 className="mt-3 max-w-[560px] text-[38px] leading-[1.12] font-extrabold text-[#283a5e] sm:text-[44px] lg:text-[50px]">
              Digital products for everyday progress.
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.75] text-[#737b88] sm:text-[17px]">
              Discover platforms designed to help businesses, schools,
              hospitals, and communities work smarter and connect with the
              people they serve.
            </p>
            <a href="#portfolio-gallery" className="potla-btn-primary mt-7 inline-flex">
              Explore our products <ArrowDownRight className="h-4 w-4" />
            </a>
            <div aria-label="Our product areas" className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] font-semibold text-[#283a5e]">
              <span>Business &amp; careers</span><span className="text-[#b6396c]">•</span>
              <span>Education &amp; healthcare</span><span className="text-[#b6396c]">•</span>
              <span>Commerce &amp; events</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
            <div className="absolute -top-5 -right-5 h-full w-full rounded-[4px] border border-[#d6c6a2] sm:-top-7 sm:-right-7" />
            <img
              src={IMAGES.portfolioHeroTeam}
              alt="Software development team collaborating at their computers"
              className="relative z-10 aspect-[4/3.5] w-full rounded-[4px] object-cover shadow-[0_20px_45px_rgba(40,58,94,0.12)]"
            />
            <div className="absolute right-0 bottom-0 z-20 bg-white px-4 py-3 text-[13px] font-bold text-[#283a5e] shadow-lg sm:px-5 sm:py-4 sm:text-[14px]">
              Practical digital solutions for real needs
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio-gallery" className="scroll-mt-24 bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-[740px]">
              <p className="text-[14px] font-bold text-[#b6396c]">Our digital products</p>
              <h2 className="mt-2 text-[29px] leading-tight font-extrabold text-[#283a5e] sm:text-[36px]">
                Purpose-built platforms for work, learning, care, and commerce
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#737b88]">
                Each product is shaped around a distinct everyday need, from
                organizing operations and finding opportunities to learning,
                shopping, and discovering local services.
              </p>
            </div>
            <span className="shrink-0 text-[14px] font-bold text-[#283a5e]">
              {filteredWorks.length} {filteredWorks.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          <div role="group" aria-label="Filter products by category" className="mb-8 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
                className={`min-h-10 cursor-pointer border px-4 text-[13px] font-bold transition-colors ${
                  filter === item.id
                    ? 'border-[#b6396c] bg-[#b6396c] text-white'
                    : 'border-slate-200 bg-white text-[#283a5e] hover:border-[#b6396c] hover:text-[#b6396c]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredWorks.map((work) => (
              <article key={work.id} className="flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-shadow hover:shadow-[0_10px_30px_rgba(40,58,94,0.10)]">
                <img
                  src={work.image}
                  alt={`${work.title} product screen`}
                  className="aspect-[16/9] w-full bg-[#f2f4f8] object-cover object-top"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[12px] font-bold text-[#b6396c]">
                    {work.audience}
                  </p>
                  <h3 className="mt-2 text-[19px] leading-snug font-extrabold text-[#283a5e]">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#737b88]">
                    {work.description}
                  </p>
                  <p className="mt-4 text-[12px] leading-relaxed text-[#737b88]">
                    <span className="font-bold text-[#283a5e]">Technology</span>
                    <span className="mx-2 text-[#b6396c]">·</span>{work.technology}
                  </p>
                  <div className="mt-4">
                    <p className="text-[12px] font-bold text-[#283a5e]">Project capabilities</p>
                    <ul className="mt-2 space-y-1.5">
                      {work.capabilities.map((capability) => (
                        <li key={capability} className="flex gap-2 text-[13px] leading-[1.5] text-[#737b88]">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b6396c]" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul aria-label="Product areas" className="mt-4 flex flex-wrap gap-1.5">
                    {work.areas.map((area) => (
                      <li key={area} className="border border-slate-200 px-2 py-1 text-[11px] font-semibold text-[#596273]">
                        {area}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImageIndex(0);
                      setSelectedWork(work);
                    }}
                    aria-label={`View ${work.title} project details`}
                    className="mt-5 inline-flex items-center gap-2 self-start text-[13px] font-bold text-[#b6396c] hover:text-[#8f2854]"
                  >
                    Explore project <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-14 flex flex-col items-start justify-between gap-5 bg-[#f7f8fb] p-6 sm:p-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-[14px] font-bold text-[#b6396c]">Have a requirement in mind?</p>
              <h2 className="mt-2 text-[25px] leading-tight font-extrabold text-[#283a5e] sm:text-[30px]">
                Let’s find the right digital solution for you.
              </h2>
              <p className="mt-2 max-w-[620px] text-[14px] leading-[1.65] text-[#737b88]">
                Tell us what you’re looking to improve. Our team can help you
                explore the product that best fits your organization or community.
              </p>
            </div>
            <button type="button" onClick={() => onNavigate('contact')} className="potla-btn-primary shrink-0">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </button>
          </aside>
        </div>
      </section>

      {selectedWork && activeScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#17243b]/70 p-4"
          onClick={() => setSelectedWork(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-detail-title"
            className="relative my-auto grid max-h-[92vh] w-full max-w-[1100px] grid-cols-1 overflow-y-auto bg-white shadow-2xl md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              aria-label="Close project details"
              className="absolute top-3 right-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center bg-white text-[#283a5e] shadow-sm hover:text-[#b6396c]"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="bg-white p-5 sm:p-7 md:overflow-y-auto">
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border border-slate-200 bg-white">
                <img
                  src={activeScreenshot.src}
                  alt={`${selectedWork.title}: ${activeScreenshot.caption}`}
                  className="h-full w-full object-contain"
                />
              </div>
              {selectedGallery.length > 1 && (
                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  {selectedGallery.map((screenshot, index) => (
                    <button
                      key={screenshot.src}
                      type="button"
                      aria-label={`Show ${screenshot.caption}`}
                      aria-pressed={selectedImageIndex === index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`overflow-hidden border-2 text-left transition-colors ${
                        selectedImageIndex === index
                          ? 'border-[#b6396c]'
                          : 'border-slate-100 hover:border-[#b6396c]/50'
                      }`}
                    >
                      <img
                        src={screenshot.src}
                        alt=""
                        className="aspect-[16/9] w-full object-cover object-top"
                      />
                      <span className="block truncate px-2 py-1.5 text-[10px] font-semibold text-[#737b88] sm:text-[11px]">
                        {screenshot.caption}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="max-h-[92vh] overflow-y-auto px-6 py-7 sm:px-8">
              <p className="text-[13px] font-bold text-[#b6396c]">{selectedWork.audience}</p>
              <h2 id="portfolio-detail-title" className="mt-2 pr-8 text-[25px] leading-tight font-extrabold text-[#283a5e] sm:text-[28px]">
                {selectedWork.title}
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-[#737b88]">
                {selectedWork.description}
              </p>

              <div className="mt-5 space-y-4">
                <section>
                  <h3 className="text-[14px] font-extrabold text-[#283a5e]">Project objective</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.65] text-[#737b88]">{selectedWork.objective}</p>
                </section>
                <section>
                  <h3 className="text-[14px] font-extrabold text-[#283a5e]">The challenge</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.65] text-[#737b88]">{selectedWork.challenge}</p>
                </section>
                <section>
                  <h3 className="text-[14px] font-extrabold text-[#283a5e]">Solution approach</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.65] text-[#737b88]">{selectedWork.approach}</p>
                </section>
                <section>
                  <h3 className="text-[14px] font-extrabold text-[#283a5e]">Key features</h3>
                  <ul className="mt-1.5 space-y-1.5">
                    {selectedWork.capabilities.map((capability) => (
                      <li key={capability} className="flex gap-2 text-[13px] leading-[1.55] text-[#737b88]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b6396c]" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <p className="mt-5 text-[12px] leading-[1.6] text-[#737b88]">
                <span className="font-bold text-[#283a5e]">Technology:</span>{' '}
                {selectedWork.technology}
              </p>
              <button type="button" onClick={() => { setSelectedWork(null); onNavigate('contact'); }} className="potla-btn-primary mt-5">
                Discuss a similar project <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export function ContactPage({ onNavigate }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormMessage(
      'Thanks for getting in touch. This preview does not send or store messages. Please use the phone or email links to reach the team.'
    );
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-[#f8f8fb]">
        <div className="pointer-events-none absolute top-[-160px] right-[-330px] h-[740px] w-[820px] rounded-[48%] bg-[#f8edf2]" />
        <div className="relative mx-auto grid min-h-[520px] max-w-[1140px] grid-cols-1 items-center gap-8 px-4 py-12 md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-2 lg:gap-14 lg:py-14 xl:max-w-[1140px]">
          <div className="relative z-10">
            <nav aria-label="Breadcrumb" className="mb-9 text-[14px] text-[#737b88]">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="cursor-pointer hover:text-[#b6396c]"
              >
                Home
              </button>
              <span className="mx-2 text-[#b6396c]" aria-hidden="true">&bull;</span>
              <span>Contact</span>
            </nav>
            <p className="text-[13px] font-extrabold text-[#b6396c] uppercase">
              We’re ready to listen
            </p>
            <h1 className="mt-3 max-w-[560px] text-[38px] leading-[1.12] font-extrabold text-[#283a5e] sm:text-[44px] lg:text-[50px]">
              Let’s start a conversation.
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.75] text-[#737b88] sm:text-[17px]">
              Tell us what you’re working on, where you need support, or how we
              can help your organization take the next step.
            </p>
            <a href="#contact-form" className="potla-btn-primary mt-7 inline-flex">
              Get in touch <ArrowDownRight className="h-4 w-4" />
            </a>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <a href="tel:+919985753789" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#283a5e] hover:text-[#b6396c]">
                <Phone className="h-4 w-4 text-[#b6396c]" /> +91 99857 53789
              </a>
              <a href="mailto:email@potlaservices.com" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#283a5e] hover:text-[#b6396c]">
                <Mail className="h-4 w-4 text-[#b6396c]" /> email@potlaservices.com
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
            <div className="absolute -top-5 -right-5 h-full w-full rounded-[4px] border border-[#d6c6a2] sm:-top-7 sm:-right-7" />
            <img
              src={IMAGES.contactHero}
              alt="Contact us by email, phone, or message"
              className="relative z-10 aspect-[3/2] w-full rounded-[4px] bg-white object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-4 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <div className="mb-8 max-w-[650px]">
            <p className="text-[14px] font-bold text-[#b6396c]">Visit or reach out</p>
            <h2 className="mt-2 text-[30px] leading-tight font-extrabold text-[#283a5e] sm:text-[36px]">
              Our offices and contact details
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#737b88]">
              Connect with our team at one of our offices in Hyderabad, Guntur,
              or Kuala Lumpur.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                type: 'Head office',
                city: 'Hyderabad',
                address: 'Manjeera Majestic Commercial, 815, KPHB Phase 3, Kukatpally, Hyderabad Telangana 500072',
              },
              {
                type: 'Branch office',
                city: 'Hyderabad',
                address: '301 Sudarshan Plaza, Opposite Pills Pharmacy, KPHB 6th Phase, Hyderabad',
              },
              {
                type: 'Branch office',
                city: 'Guntur',
                address: 'Annapurna Nagar, Gorantla, near Inner Ring Road, Guntur-522034',
              },
              {
                type: 'Malaysia office',
                city: 'Kuala Lumpur, Malaysia',
                address: 'Level 11-05, Menara K1 Commerce One, No. 1 Lorong 3/137C, Off Jalan Kelang Lama, 58200 Kuala Lumpur, Malaysia',
              },
            ].map((office) => (
              <article key={`${office.type}-${office.city}`} className="border-t border-slate-200 pt-5">
                <MapPin className="h-5 w-5 text-[#b6396c]" aria-hidden="true" />
                <p className="mt-4 text-[13px] font-bold text-[#b6396c]">{office.type}</p>
                <h3 className="mt-1 text-[18px] font-extrabold text-[#283a5e]">{office.city}</h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#737b88]">{office.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-8 px-4 md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 xl:max-w-[1140px]">
          <div>
            <p className="text-[14px] font-bold text-[#b6396c]">Find us in Hyderabad</p>
            <h2 className="mt-2 text-[30px] leading-tight font-extrabold text-[#283a5e] sm:text-[34px]">
              Our head office
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#737b88]">
              Manjeera Majestic Commercial, 815, KPHB Phase 3, Kukatpally,
              Hyderabad Telangana 500072
            </p>
          </div>
          <div className="h-[300px] overflow-hidden border border-slate-200 bg-white sm:h-[360px]">
            <iframe
              title="Map showing Potla Group head office in Hyderabad"
              src="https://www.google.com/maps?q=Manjeera%20Majestic%20Commercial%2C%20KPHB%20Phase%203%2C%20Kukatpally%2C%20Hyderabad&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-4 md:max-w-[720px] lg:max-w-[960px] lg:grid-cols-2 lg:gap-16 xl:max-w-[1140px]">
          <div>
            <p className="text-[14px] font-bold text-[#b6396c]">Tell us about it</p>
            <h2 className="mt-2 text-[30px] leading-tight font-extrabold text-[#283a5e] sm:text-[36px]">
              How can we help?
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#737b88]">
              Share a few details and the right person on our team will be in touch.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f8edf2] text-[#b6396c]">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#737b88]">Call our team</p>
                  <a href="tel:+919985753789" className="text-[15px] font-bold text-[#283a5e] hover:text-[#b6396c]">+91 99857 53789</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f8edf2] text-[#b6396c]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#737b88]">Email us</p>
                  <a href="mailto:email@potlaservices.com" className="text-[15px] font-bold text-[#283a5e] hover:text-[#b6396c]">email@potlaservices.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f8edf2] text-[#b6396c]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#737b88]">Careers and recruitment</p>
                  <a href="mailto:hr@potlaservices.com" className="text-[15px] font-bold text-[#283a5e] hover:text-[#b6396c]">hr@potlaservices.com</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-[#f7f8fb] p-6 sm:p-8">
            {formMessage && (
              <div role="status" className="border border-emerald-200 bg-emerald-50 p-3 text-[13px] leading-[1.5] text-emerald-900">
                {formMessage}
              </div>
            )}
            <label className="sr-only" htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              required
              placeholder="Full name*"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="h-12 w-full border border-slate-200 bg-white px-4 text-[14px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none"
            />
            <label className="sr-only" htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address*"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="h-12 w-full border border-slate-200 bg-white px-4 text-[14px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none"
            />
            <label className="sr-only" htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              placeholder="What can we help with?"
              value={form.subject}
              onChange={(event) => setForm({ ...form, subject: event.target.value })}
              className="h-12 w-full border border-slate-200 bg-white px-4 text-[14px] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none"
            />
            <label className="sr-only" htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              rows={5}
              required
              placeholder="Tell us a little about your project or question*"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="w-full resize-y border border-slate-200 bg-white p-4 text-[14px] leading-[1.6] text-[#283a5e] placeholder-[#828893] focus:border-[#b6396c] focus:outline-none"
            />
            <button type="submit" className="potla-btn-primary w-full">
              Send message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export function TestimonialsPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Testimonials"
        breadcrumb="Testimonials"
        onNavigate={onNavigate}
      />

      <section className="relative overflow-hidden bg-[#fbf9f8] py-16">
        <img
          src={IMAGES.vectorBg}
          alt="vector"
          className="pointer-events-none absolute right-0 bottom-0 w-72 opacity-50"
        />

        <div className="relative z-10 mx-auto max-w-[1140px] px-4">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <h3 className="text-[32px] font-extrabold text-[#283a5e] sm:text-[36px]">
              What our client are saying
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {CLIENT_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-[6px] bg-white p-7 pt-9 shadow-[0_2px_15px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2.5 hover:bg-[#b6396c]"
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
        </div>
      </section>
    </div>
  );
}

export function BlogPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Blog"
        breadcrumb="Blog"
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-[6px] bg-white shadow-[0_2px_15px_0_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-0 left-0 rounded-tr-[10px] bg-[#b6396c] px-4 py-1.5 text-sm font-bold text-white uppercase">
                    {post.date}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#828893]">
                    <User className="h-3.5 w-3.5 text-[#b6396c]" />
                    <span>{post.author}</span>
                  </div>
                  <h4 className="mt-2.5 text-[20px] leading-snug font-bold text-[#283a5e]">
                    {post.title}
                  </h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#828893]">
                    {post.excerpt}
                  </p>
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="potla-read-more cursor-pointer"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function FaqPage({ onNavigate }) {
  const [openQuestion, setOpenQuestion] = useState(FAQ_COLUMNS[0][0].q);

  return (
    <div>
      <PageTitleBanner
        title="Frequently Asked Questions"
        breadcrumb="FAQ"
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {FAQ_COLUMNS.map((col, colIdx) => (
              <ul key={colIdx} className="space-y-4">
                {col.map((item) => {
                  const isOpen = openQuestion === item.q;
                  return (
                    <li
                      key={item.q}
                      className="overflow-hidden rounded-[5px] bg-white shadow-[0_2px_15px_rgba(40,58,94,0.08)]"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenQuestion(isOpen ? null : item.q)
                        }
                        className={`flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-[17.5px] font-bold transition-colors ${
                          isOpen
                            ? 'bg-[#b6396c] text-white'
                            : 'bg-white text-[#283a5e] hover:text-[#b6396c]'
                        }`}
                      >
                        <span>{item.q}</span>
                        {isOpen ? (
                          <Minus className="h-5 w-5 shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <p className="px-6 py-4 text-[15.5px] leading-[1.7] text-[#828893]">
                          {item.a}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function PrivacyPolicyPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-5 px-4">
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Potla Group of Companies (&quot;us&quot;, &quot;we&quot;, or
            &quot;our&quot;) operates the www.potlaservices.com website (the
            &quot;Service&quot;). This page informs you of our policies
            regarding the collection, use, and disclosure of personal data when
            you use our Service and the choices you have associated with that
            data. We use your data to provide and improve the Service.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            By using the Service, you agree to the collection and use of
            information in accordance with this policy. Unless otherwise defined
            in this Privacy Policy, terms used in this Privacy Policy have the
            same meanings as in our Terms and Conditions, accessible from
            www.potlaservices.com.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (&quot;Personal Data&quot;), including Email address,
            First name and last name, Phone number, and Usage Data.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent.
          </p>
        </div>
      </section>
    </div>
  );
}

export function TermsConditionsPage({ onNavigate }) {
  return (
    <div>
      <PageTitleBanner
        title="Terms & Conditions"
        breadcrumb="Terms & Conditions"
        onNavigate={onNavigate}
      />

      <section className="py-16">
        <div className="mx-auto max-w-[1140px] space-y-5 px-4">
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Welcome to Potla Group of Companies! These terms and conditions
            outline the rules and regulations for the use of Potla Group of
            Companies&apos;s Website, located at www.potlaservices.com.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            Approved organizations may hyperlink to our Website so long as the
            link: (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products and/or services; and (c) fits within the context of the
            linking party&apos;s site.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            <b>iFrames:</b> Without prior approval and written permission, you
            may not create frames around our Webpages that alter in any way the
            visual presentation or appearance of our Website.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            <b>Content Liability:</b> We shall not be hold responsible for any
            content that appears on your Website. You agree to protect and
            defend us against all claims that is rising on your Website.
          </p>
          <p className="text-justify text-[16px] leading-[1.75] text-[#828893]">
            <b>Reservation of Rights:</b> We reserve the right to request that
            you remove all links or any particular link to our Website. You
            approve to immediately remove all links to our Website upon request.
          </p>
        </div>
      </section>
    </div>
  );
}
