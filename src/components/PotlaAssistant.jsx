import { useEffect, useRef, useState } from 'react';
import { Bot, BriefcaseBusiness, Send, X } from 'lucide-react';
import { CAREER_ROLES, FAQ_COLUMNS, PORTFOLIO_WORKS } from '../data/potlaData.js';
import { COURSES } from '../pages/SreeTechnologiesPage.jsx';
import './PotlaAssistant.css';

const QUICK_PROMPTS = [
  'What services do you offer?',
  'List all five companies',
  'Show projects',
  'Open jobs',
  'Explore courses',
  'Contact the team',
];

const WELCOME_MESSAGE =
  "Hi! I'm the Potla Group assistant. Ask me about our five companies, services, projects, courses, careers, or contact information.";

const COMPANIES = [
  {
    names: ['potla tech solutions', 'potla tech', 'tech solutions'],
    name: 'Potla Tech Solutions',
    page: 'potla-tech-solutions',
    description:
      'Provides web design and development, mobile applications, custom software, telecom, SEO, digital marketing, IT and non-IT staffing, corporate training, and placement services.',
  },
  {
    names: ['potla consulting', 'consulting'],
    name: 'Potla Consulting',
    page: 'potla-consulting',
    description:
      'Supports organizations with recruitment, staffing, employee outsourcing, manpower supply, payroll and timesheet processes, training, internships, and placement guidance.',
  },
  {
    names: ['potla developers', 'developers', 'real estate', 'open plots'],
    name: 'Potla Developers',
    page: 'potla-developers',
    description:
      'Provides Hyderabad property services including residential open plots, residential and commercial construction, and real estate property advisory.',
  },
  {
    names: ['sree technologies', 'sree technology', 'sree'],
    name: 'Sree Technologies',
    page: 'sree-technologies',
    description:
      'A software training academy offering career-focused courses, practical labs, real-world projects, and placement support in current IT skills.',
  },
  {
    names: ['telugu web media', 'teluguwebmedia', 'telugu media'],
    name: 'Telugu Web Media',
    page: 'teluguwebmedia',
    description:
      'A Telugu digital news platform covering current affairs, entertainment, and regional stories from Andhra Pradesh and Telangana.',
    links: [{ label: 'Visit Telugu Web Media', href: 'https://teluguwebmedia.online/' }],
  },
];

const ADDITIONAL_SERVICES = [
  {
    names: ['potla overseas', 'study abroad', 'overseas education', 'overseas consulting'],
    name: 'Potla Overseas Education Consulting',
    page: 'potla-overseas',
    description:
      'Provides study-abroad guidance including country and university selection, admissions, visa and travel assistance, and IELTS/PTE preparation for destinations such as the USA, UK, Canada, Australia, and more.',
  },
  {
    names: ['dermishine', 'organic soap', 'handmade soap'],
    name: 'Dermishine',
    page: 'dermishine',
    description:
      'Offers handmade organic soaps made with natural ingredients, including aloe vera, cucumber, neem, papaya, sandal, and tulasi varieties.',
  },
];

function makeAction(label, page, section) {
  return { label, page, ...(section ? { section } : {}) };
}

function getAssistantReply(message) {
  const query = message.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, ' ');
  const matchedCompany = COMPANIES.find((company) =>
    company.names.some((name) => query.includes(name)),
  );
  const matchedCourse = COURSES.find((course) => {
    const courseName = course.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return query.includes(courseName);
  });

  if (matchedCompany) {
    return {
      text: `${matchedCompany.name}: ${matchedCompany.description}`,
      ...(matchedCompany.links ? { links: matchedCompany.links } : {}),
      action: makeAction(`Explore ${matchedCompany.name}`, matchedCompany.page),
    };
  }

  const matchedAdditionalService = ADDITIONAL_SERVICES.find((service) =>
    service.names.some((name) => query.includes(name)),
  );
  if (matchedAdditionalService) {
    return {
      text: `${matchedAdditionalService.name}: ${matchedAdditionalService.description}`,
      action: makeAction(`Explore ${matchedAdditionalService.name}`, matchedAdditionalService.page),
    };
  }

  if (/project|portfolio|product|case stud/.test(query)) {
    const matchedProject = PORTFOLIO_WORKS.find((work) =>
      query.includes(work.title.toLowerCase()) ||
      query.includes(work.id.replaceAll('-', ' ')),
    );

    if (matchedProject) {
      return {
        text: `${matchedProject.title}: ${matchedProject.description} ${matchedProject.objective} Key capabilities include ${matchedProject.capabilities.join('; ')}. Technologies: ${matchedProject.technology}.`,
        action: makeAction('View project details', 'portfolio', 'portfolio-gallery'),
      };
    }

    return {
      text: `The portfolio includes ${PORTFOLIO_WORKS.map((work) => work.title).join(', ')}. Ask about any project by name for its purpose, audience, capabilities, and technologies.`,
      action: makeAction('Explore portfolio projects', 'portfolio', 'portfolio-gallery'),
    };
  }

  if (matchedCourse || /course|training|class|learn|fee|price|generative ai|python|java|servicenow|devops|data science|data analyst/.test(query)) {
    if (matchedCourse) {
      return {
        text: `${matchedCourse.title} costs ${matchedCourse.fee}.${matchedCourse.originalFee ? ` The listed original fee is ${matchedCourse.originalFee}.` : ''} ${matchedCourse.description} Topics covered include ${matchedCourse.topics.join(', ')}.`,
        action: makeAction('View course and book a demo', 'sree-technologies', 'sree-programs'),
      };
    }

    return {
      text: `Sree Technologies offers ${COURSES.map((course) => `${course.title} (${course.fee})`).join(', ')}. The training includes practical labs and real-world projects. Ask for a course name to get its topics and details.`,
      action: makeAction('Browse all courses', 'sree-technologies', 'sree-programs'),
    };
  }

  if (/job|career|vacanc|opening|hiring|employment|role|position/.test(query)) {
    return {
      text: `Career opportunities listed on the website include ${CAREER_ROLES.map((role) => `${role.title} (${role.location}; confirm employment details with our team)`).join(', ')}. Sree Technologies also offers training and placement guidance.`,
      action: makeAction('Explore careers', 'careers'),
    };
  }

  if (/contact|phone|call|email|address|location|office|whatsapp|team/.test(query)) {
    return {
      text: 'Reach the Potla Group team at +91 99857 53789 or email@potlaservices.com. Our head office is at Manjeera Majestic Commercial, 815, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072.',
      links: [
        { label: 'Call us', href: 'tel:+919985753789' },
        { label: 'Email us', href: 'mailto:email@potlaservices.com' },
        { label: 'WhatsApp', href: 'https://wa.me/919985753789' },
      ],
      action: makeAction('Contact page', 'contact'),
    };
  }

  const faqMatch = FAQ_COLUMNS.flat().find((faq) => {
    const questionWords = faq.q.toLowerCase().match(/[a-z0-9]+/g) || [];
    const matchingWords = questionWords.filter(
      (word) => word.length > 3 && query.includes(word),
    );
    return matchingWords.length >= 2;
  });

  if (faqMatch) {
    return {
      text: faqMatch.a,
      action: makeAction('Contact us with another question', 'contact'),
    };
  }

  if (/about|group|who are you|potla|all companies|five companies|company list/.test(query)) {
    return {
      text: `Potla Group of Companies is based in Hyderabad and works across technology, consulting, staffing, property, media, and professional training. Its five companies are ${COMPANIES.map((company) => company.name).join(', ')}.`,
      action: makeAction('About Potla Group', 'about'),
      actions: COMPANIES.map((company) =>
        makeAction(company.name, company.page),
      ),
    };
  }

  if (/service|offer|business|company|companies|consult|staff|web|software|developer|plot|construction|media/.test(query)) {
    return {
      text: `Potla Group's five companies are ${COMPANIES.map((company) => `${company.name} — ${company.description}`).join(' ')}`,
      action: makeAction('Explore all projects', 'portfolio', 'portfolio-gallery'),
      actions: COMPANIES.map((company) =>
        makeAction(company.name, company.page),
      ),
    };
  }

  return {
    text: `I can answer questions about the website's five companies, ${PORTFOLIO_WORKS.length} portfolio projects, ${COURSES.length} training courses and fees, career listings, common service FAQs, and contact details. Try “Tell me about Potla Developers”, “Show projects”, “Generative AI fee”, or “How do I contact you?”.`,
    actions: [
      makeAction('Companies', 'about'),
      makeAction('Projects', 'portfolio', 'portfolio-gallery'),
      makeAction('Courses', 'sree-technologies', 'sree-programs'),
      makeAction('Careers', 'careers'),
    ],
  };
}

export default function PotlaAssistant({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 'welcome', role: 'assistant', text: WELCOME_MESSAGE },
  ]);
  const [reduceMotion, setReduceMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(preference.matches);
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const sendMessage = (value) => {
    const text = value.trim();
    if (!text) return;

    const reply = getAssistantReply(text);
    const timestamp = Date.now();
    setMessages((current) => [
      ...current,
      { id: `user-${timestamp}`, role: 'user', text },
      { id: `assistant-${timestamp}`, role: 'assistant', ...reply },
    ]);
    setInput('');
  };

  const followAction = (action) => {
    onNavigate(action.page);
    setOpen(false);
    if (action.section) {
      window.setTimeout(() => {
        document.getElementById(action.section)?.scrollIntoView({
          behavior: reduceMotion ? 'instant' : 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  return (
    <>
      {open && (
        <section
          className="potla-assistant__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="potla-assistant-title"
        >
          <header className="potla-assistant__header">
            <span className="potla-assistant__avatar">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 id="potla-assistant-title">Potla Assistant</h2>
              <p>Website information chat</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="potla-assistant__close"
              aria-label="Close assistant"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div
            ref={listRef}
            className="potla-assistant__messages"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`potla-assistant__message potla-assistant__message--${message.role}`}
              >
                <p>{message.text}</p>
                {message.links?.length > 0 && (
                  <div className="potla-assistant__links">
                    {message.links.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                {message.action && (
                  <button
                    type="button"
                    className="potla-assistant__action"
                    onClick={() => followAction(message.action)}
                  >
                    {message.action.label}
                    <BriefcaseBusiness className="h-3.5 w-3.5" />
                  </button>
                )}
                {message.actions?.length > 0 && (
                  <div className="potla-assistant__action-list">
                    {message.actions.map((action) => (
                      <button
                        type="button"
                        key={`${action.page}-${action.label}`}
                        className="potla-assistant__action"
                        onClick={() => followAction(action)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="potla-assistant__footer">
            <div className="potla-assistant__suggestions" aria-label="Suggested questions">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  type="button"
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form
              className="potla-assistant__form"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <label className="sr-only" htmlFor="potla-assistant-input">
                Ask about Potla Group
              </label>
              <input
                ref={inputRef}
                id="potla-assistant-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Potla Group..."
                autoComplete="off"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="potla-assistant__disclaimer">
              Answers are based on information available on this website.
            </p>
          </div>
        </section>
      )}

      <button
        type="button"
        className={`potla-assistant__launcher${open ? ' potla-assistant__launcher--open' : ''}`}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close Potla Assistant' : 'Open Potla Assistant'}
        aria-expanded={open}
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>
    </>
  );
}
