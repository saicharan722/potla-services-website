import { IMAGES } from '../assets/imageRegistry.js';

export const HERO_SLIDES = [
  {
    id: 'slide-it',
    bgImage: IMAGES.mainBg1,
    heroImage: IMAGES.mainBanner,
    title: 'Best IT Software Company in Hyderabad',
    description:
      'We give your business the quality online support it needs to survive the highly competitive market online.',
    ctaLabel: 'Get Started',
    targetPage: 'potla-tech-solutions',
    videoUrl: 'https://www.youtube.com/embed/eE5zFt37sFw?autoplay=1',
  },
  {
    id: 'slide-overseas',
    bgImage: IMAGES.mainBg2,
    heroImage: IMAGES.overseasMainBanner,
    title: 'Best Overseas Education Consulting',
    description:
      'Potla Tech Solution is the Top Overseas Education Consultant in India. We have put a great many understudies in various Universities across the United States.',
    ctaLabel: 'Get Started',
    targetPage: 'potla-overseas',
    videoUrl: 'https://www.youtube.com/embed/eE5zFt37sFw?autoplay=1',
  },
  {
    id: 'slide-consulting',
    bgImage: IMAGES.mainBg3,
    heroImage: IMAGES.consul,
    title: 'Best IT Consulting Services in Hyderabad',
    description:
      'Best in Manpower Supply, Industrial Training and Campus Recruitment Trainings',
    ctaLabel: 'Get Started',
    targetPage: 'potla-consulting',
    videoUrl: 'https://www.youtube.com/embed/eE5zFt37sFw?autoplay=1',
  },
];

export const ABOUT_COLLAGE_IMAGES = [
  { src: IMAGES.aboutImg1, alt: 'Potla Group Office' },
  { src: IMAGES.aboutImg2, alt: 'Potla Tech Team' },
  { src: IMAGES.aboutImg3, alt: 'Potla Corporate Strategy' },
  { src: IMAGES.aboutImg4, alt: 'Potla Consulting & Training' },
];

export const HOME_DIVISIONS = [
  {
    id: 'software-industry',
    title: 'Software Industry',
    description:
      'Potla Tech Solutions is a start-up technology development company headquarters in Hyderabad. We add exceptional business value with the digital work on application design, development, testing services. We aim at understanding clients requirement and provide engineering services.',
    bullets: [
      'Web Designing.',
      'Digital Marketing.',
      'Software Product Development.',
      'Custom Software Development.',
      'Cross Platform Mobile Application Development.',
    ],
    image: IMAGES.mainBanner,
    imagePosition: 'right',
    targetPage: 'potla-tech-solutions',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description:
      'Our business consulting services can help you adapt to today’s market trends and stay ahead of the competetion. We are focused exclusively on extension of your team and ensure companies meeting their goals. Our training is delivered exclusively by highly experienced experts who don’t simply teach the topics but make sure your crew to put them into practice.',
    bullets: [
      'IT Trainings and Placements.',
      'Staff Augmentation and Direct Placements.',
      'Contract Staffing and Resource Outsourcing.',
    ],
    image: IMAGES.consul,
    imagePosition: 'right',
    targetPage: 'potla-consulting',
  },
  {
    id: 'dermishine',
    title: 'Dermishine',
    description:
      'Dermishine - Handmade Soap is leading manufacturer, exporter, and supplier for Potla Organic Products with the coverage of total 2 states and 15 authorized distributors in all over India.',
    bullets: [
      '100% Pure Organic and Natural.',
      'Handmade Soap with varieties of fragrance.',
      'Designed according to skin types like Dry, Oil and Normal Skins.',
    ],
    image: IMAGES.dermishine,
    imagePosition: 'left',
    targetPage: 'dermishine',
  },
  {
    id: 'overseas-education',
    title: 'Overseas Education Consulting',
    description:
      'Potla Tech Solution is the Top Overseas Education Consultant in India. We have put a great many understudies in various Universities across the United States. At Potla Tech Solutions, we go past abroad schooling consultancy. We help understudies in building the professions. We deal with the understudies’ privilege from picking the University till the understudy lands securely at the university and past.',
    bullets: [],
    image: IMAGES.overseasHome,
    imagePosition: 'right',
    targetPage: 'potla-overseas',
  },
];

export const ABOUT_TIMELINE = [
  {
    title: 'Potla Telecom',
    description:
      'Telecom operators are waging a war for connectivity and customer intimacy. As profit pools decline, mobile and fixed services converge, and business boundaries in the broader ecosystem blur, Potla Telecom can help.',
    period: '2015 - Present',
    inverted: false,
  },
  {
    title: 'Inspirom Technologies',
    description:
      'Inspirom Technologies is a leading Digital Solution Company for the development of highly-integrated platforms. We deliver custom solutions that meet customer’s technology for the sustainable competitive differentiation in their digital lifecycle.',
    period: '2017 - Present',
    inverted: true,
  },
  {
    title: 'Potla Tech Solutions',
    description:
      'Potla Tech Solutions has world class IT, Telecom and Consulting company with competence in providing strategic solutions to client’s needs & which can spring up client business.',
    period: '2018 - Present',
    inverted: false,
  },
  {
    title: 'Potla Consulting',
    description:
      'Potla Consulting is a staffing solutions company that provides manpower sourcing services for organizations across Telangana and AP. We offer recruitment and placement solutions for companies seeking to find high-performance individuals and possibly the most qualified professionals.',
    period: '2018 - Present',
    inverted: true,
  },
  {
    title: 'Telugu Web Media',
    description:
      'Teluguwebmedia.com is based in Hyderabad, Telangana and started in 2018 as a web news portal. It has been expanding its wings to a plethora of happenings in film, political and general world of AP & Telangana in the years of passage.',
    period: '2019',
    inverted: false,
  },
  {
    title: 'Dermishine',
    description:
      'Dermishine - Handmade Soap is leading manufacturer, exporter, and supplier for Potla Organic Products with the coverage of total 2 states and 15 authorized distributors in all over India.',
    period: '2019',
    inverted: true,
  },
];

export const DERMISHINE_SOAPS = [
  { id: 'soap-alovera', src: IMAGES.soaps.alovera, name: 'Aloe Vera Handmade Soap' },
  { id: 'soap-cucumber', src: IMAGES.soaps.cucumber, name: 'Cucumber Handmade Soap' },
  { id: 'soap-neem', src: IMAGES.soaps.neem, name: 'Neem Handmade Soap' },
  { id: 'soap-papaya', src: IMAGES.soaps.papaya, name: 'Papaya Handmade Soap' },
  { id: 'soap-sandal', src: IMAGES.soaps.sandal, name: 'Sandal Handmade Soap' },
  { id: 'soap-tulasi', src: IMAGES.soaps.tulasi, name: 'Tulasi Handmade Soap' },
];

export const CORE_VALUES = [
  {
    id: 'customer-focus',
    icon: 'search-user',
    title: 'Customer Focus',
    description:
      "The orientation of an organization or a company towards serving its client's need.",
  },
  {
    id: 'team-work',
    icon: 'users',
    title: 'Team Work',
    description:
      "It's a collaborative effort of a team to achieve a common goal or task an efficient way.",
  },
  {
    id: 'commitment',
    icon: 'badge',
    title: 'Commitment',
    description:
      'Customer Satisfaction is our most committed word, the customer is our priority.',
  },
  {
    id: 'innovative',
    icon: 'bulb',
    title: 'Innovative',
    description:
      'We believe top companies will have innovative people where they achieve their dreams.',
  },
  {
    id: 'quality',
    icon: 'like',
    title: 'Quality',
    description:
      'Providing quality service for the customers or business is our highest priority.',
  },
  {
    id: 'work-life',
    icon: 'handshake',
    title: 'Work Life Balance',
    description:
      'To create thoughts into implementation is the best to process in our Potla Group of Companies.',
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 't1',
    name: 'Vishnu Boppana',
    company: 'VB Entertainments',
    avatar: IMAGES.clientAvatar1,
    quote:
      'Everything was simple and organized well. They lead you through the whole process seamlessly. So we have every high likelihood of getting a design that you love.',
  },
  {
    id: 't2',
    name: 'Suman',
    company: 'Dhamari Estates',
    avatar: IMAGES.clientAvatar2,
    quote:
      'It’s my privilege to extend a heart felt and warm thanks to everybody involved in making this project complete on time.',
  },
  {
    id: 't3',
    name: 'Veeru Potla',
    company: 'Film Director',
    avatar: IMAGES.clientAvatar5,
    quote:
      'I have contracted my movie promotions with Potla Tech twice (so far) and have found them to be extremely competent, dedicated, hard-working and professional.',
  },
  {
    id: 't4',
    name: 'Mahathi',
    company: 'Mahathi Dream Production',
    avatar: IMAGES.clientAvatar3,
    quote:
      'It really marks a major milestone in evolution of project, as there have been a numerous key developments since the inception to finale.',
  },
  {
    id: 't5',
    name: 'Govind Rao',
    company: 'Sai Consultants',
    avatar: IMAGES.clientAvatar4,
    quote:
      'I have been involved in big projects for major corporations and the team at Potla Tech is the best that I have worked with.',
  },
  {
    id: 't6',
    name: 'Guru Raj',
    company: 'Sukhibhava Group',
    avatar: IMAGES.clientAvatar6,
    quote:
      'We have been working with Potla Tech for two years to develop a robust software application that supports the company’s daily activities.',
  },
];

export const FUN_FACTS = [
  {
    id: 'clients',
    icon: 'users',
    label: 'Active Clients:',
    target: 150,
    suffix: '+',
  },
  {
    id: 'retention',
    icon: 'rocket',
    label: 'Retention Rate:',
    target: 90,
    suffix: '%',
  },
  {
    id: 'projects',
    icon: 'laptop',
    label: 'Projects Done:',
    target: 210,
    suffix: '+',
  },
  {
    id: 'companies',
    icon: 'award',
    label: 'Our Companies:',
    target: 5,
    suffix: '+',
  },
];

export const HAPPY_CLIENT_LOGOS = [
  { id: 'c1', src: IMAGES.clients.c1, alt: 'Partner 1' },
  { id: 'c4', src: IMAGES.clients.c4, alt: 'Partner 2' },
  { id: 'c5', src: IMAGES.clients.c5, alt: 'Partner 3' },
  { id: 'c7', src: IMAGES.clients.c7, alt: 'Partner 4' },
  { id: 'c8', src: IMAGES.clients.c8, alt: 'Partner 5' },
  { id: 'c9', src: IMAGES.clients.c9, alt: 'Partner 6' },
  { id: 'c10', src: IMAGES.clients.c10, alt: 'Partner 7' },
  { id: 'c11', src: IMAGES.clients.c11, alt: 'Partner 8' },
  { id: 'c12', src: IMAGES.clients.c12, alt: 'Partner 9' },
];

export const PORTFOLIO_WORKS = [
  {
    id: 'event-spaces',
    title: 'Potla Event Spaces',
    categories: ['events'],
    audience: 'Event planners and venue seekers',
    description: 'A venue-booking marketplace for discovering and booking banquet halls, convention centers, and wedding lawns.',
    objective: 'Make it easier for people to discover suitable event venues and complete their booking in one place.',
    challenge: 'Finding verified venues, comparing availability, and coordinating a booking can involve disconnected steps.',
    approach: 'A shared marketplace brings venue discovery, availability, and booking workflows together.',
    technology: 'React · Python · Django · Django REST Framework',
    capabilities: ['Venue discovery and search across event spaces', 'Real-time availability and booking-slot locking', 'Venue verification workflows'],
    areas: ['Venue discovery', 'Event planning', 'Booking'],
    image: IMAGES.portfolio.eventSpaces,
  },
  {
    id: 'localmart',
    title: 'LocalMart',
    categories: ['ecommerce'],
    audience: 'Local merchants and online shoppers',
    description: 'A multi-vendor marketplace that helps local merchants reach shoppers through one convenient online storefront.',
    objective: 'Promote local businesses, centralize multiple merchants, simplify product discovery and ordering, improve stock management, and provide a responsive shopping experience.',
    challenge: 'Independent local merchants need a practical way to present products online and keep catalogs, stock, and orders organized.',
    approach: 'A shared marketplace connects product discovery and shopping with merchant inventory and order-management tools.',
    technology: 'React · Python · Django · Django REST Framework',
    capabilities: ['Browse products from multiple local merchants', 'Compare products and prices', 'Shopping cart and convenient order placement', 'Merchant product, inventory, and order management'],
    areas: ['Ecommerce', 'Local retail', 'Multi-vendor'],
    image: IMAGES.portfolio.localMart,
    gallery: [
      { src: IMAGES.portfolio.localMart, caption: 'Browse marketplace categories' },
      { src: IMAGES.portfolio.localMart2, caption: 'Explore restaurant and food listings' },
      { src: IMAGES.portfolio.localMart3, caption: 'Shop products by category' },
    ],
  },
  {
    id: 'medicore',
    title: 'MediCore Hospital Management System',
    categories: ['healthcare'],
    audience: 'Hospitals, clinicians, patients, and operations teams',
    description: 'An integrated hospital platform connecting patient access, clinical workflows, diagnostics, and administrative operations.',
    objective: 'Connect patient access, clinical workflows, diagnostics, and hospital operations in one platform.',
    challenge: 'Care teams and administrators need shared access to schedules, patient workflows, and operational information.',
    approach: 'Role-based tools bring appointments, clinical tasks, and administrative workflows into one system.',
    technology: 'HTML · CSS · Bootstrap · JavaScript',
    capabilities: ['Separate access for patients, doctors, and hospital staff', 'Doctor discovery, appointment booking, and live appointment tracking', 'Doctor availability calendars, custom time slots, and leave controls'],
    areas: ['Patient care', 'Clinical workflows', 'Hospital operations'],
    image: IMAGES.portfolio.mediCore,
  },
  {
    id: 'styleverse',
    title: 'StyleVerse',
    categories: ['ecommerce'],
    audience: 'Fashion retailers and style-conscious shoppers',
    description: 'A fashion and lifestyle marketplace connecting customers, sellers, and delivery partners in one shopping experience.',
    objective: 'Bring fashion discovery, seller operations, and delivery into one shopping experience.',
    challenge: 'Customers and sellers need coordinated product discovery, order management, and delivery workflows.',
    approach: 'A multi-role marketplace supports browsing, purchases, and fulfillment across the shopping journey.',
    technology: 'Python · Django · Django REST Framework · HTML',
    capabilities: ['Customer, seller, administrator, and delivery-partner roles', 'Product browsing, search, and filtering', 'Wishlists, shopping carts, order placement, and purchase tracking'],
    areas: ['Ecommerce', 'Fashion', 'Lifestyle'],
    image: IMAGES.portfolio.styleVerse,
  },
  {
    id: 'hrms',
    title: 'HRMS',
    categories: ['business'],
    audience: 'HR teams and growing organizations',
    description: 'A unified HR platform for automating workforce administration, improving transparency, and supporting organizations as they grow.',
    objective: 'Reduce administrative effort and give teams a consistent view of workforce operations.',
    challenge: 'Employee records, attendance, leave, shifts, and onboarding can be difficult to manage across separate processes.',
    approach: 'A unified HR workspace centralizes employee records and day-to-day workforce workflows.',
    technology: 'Spring Boot MVC',
    capabilities: ['Employee onboarding and digital joining', 'Employee master records and profile management', 'Attendance, leave, shifts, and roster management'],
    areas: ['Human resources', 'Workforce', 'Enterprise'],
    image: IMAGES.portfolio.hrms,
  },
  {
    id: 'job-portal',
    title: 'Job Portal Application',
    categories: ['business'],
    audience: 'Employers and job seekers',
    description: 'A secure recruitment platform that brings job discovery, candidate applications, and employer hiring workflows together.',
    objective: 'Connect job discovery, candidate applications, and employer hiring workflows.',
    challenge: 'Job seekers and employers need a clear way to manage listings, applications, and candidate information.',
    approach: 'A recruitment platform brings profiles, job search, applications, and hiring updates into one flow.',
    technology: 'Python · Django · HTML · CSS',
    capabilities: ['Candidate registration, profiles, and resume management', 'Search and filter job openings', 'Online job applications and application-status tracking'],
    areas: ['Hiring', 'Career discovery', 'Recruitment'],
    image: IMAGES.portfolio.jobPortal,
  },
  {
    id: 'teachvion',
    title: 'Teachvion',
    categories: ['education'],
    audience: 'Students, trainers, and education administrators',
    description: 'A full-stack learning platform that connects course content, assessments, certification, live training, and career opportunities.',
    objective: 'Support learning from course discovery through assessment, certification, and career development.',
    challenge: 'Learners and trainers need course material, progress, assessments, and live learning in one accessible place.',
    approach: 'A role-based learning platform connects course content, training, assessments, and certificates.',
    technology: 'Python · Django 5.2 · HTML · CSS',
    capabilities: ['Student, trainer, and administrator dashboards', 'Course discovery, enrollment, and UPI/card payments through Razorpay', 'Lessons with hosted video, YouTube, Vimeo, PDFs, and notes'],
    areas: ['E-learning', 'Online courses', 'Certification'],
    image: IMAGES.portfolio.teachvion,
  },
  {
    id: 'school-management',
    title: 'School Management System (SMS)',
    categories: ['education'],
    audience: 'Schools, educators, and administrators',
    description: 'A centralized school platform for organizing student, staff, academic, and family communication workflows.',
    objective: 'Make core school administration and communication easier to coordinate.',
    challenge: 'Student records, attendance, fees, and family communication often live across disconnected processes.',
    approach: 'A central platform organizes student, staff, academic, and school operations data.',
    technology: 'Python · Django · MySQL',
    capabilities: ['Student admissions and records', 'Attendance tracking', 'Fee collection and financial records'],
    areas: ['School operations', 'Academic records', 'Communication'],
    image: IMAGES.portfolio.schoolManagement,
  },
  {
    id: 'grambazaar',
    title: 'GramBazaar',
    categories: ['ecommerce'],
    audience: 'Rural vendors, neighborhood shops, and local customers',
    description: 'A local vendor marketplace designed to connect customers with nearby shops and help rural merchants build an online presence.',
    objective: 'Help neighborhood vendors reach local customers and establish an online storefront.',
    challenge: 'Small and rural merchants need practical tools to be discovered and manage local orders.',
    approach: 'Location-aware discovery connects nearby shoppers with verified vendors and delivery options.',
    technology: 'Python · Django 4.x · Django REST Framework · HTML5',
    capabilities: ['Customer, vendor, delivery partner, and administrator roles', 'GPS and pincode-based shop discovery with delivery-radius filters', 'Vendor verification and business onboarding'],
    areas: ['Ecommerce', 'Community', 'Local discovery'],
    image: IMAGES.portfolio.gramBazaar,
  },
];

export const CAREER_ROLES = [
  {
    id: 'python-full-stack',
    title: 'Python Full Stack Developer',
    location: 'Hyderabad, Telangana',
    employment: 'Confirm with our team',
    experience: 'Relevant experience preferred',
    description: 'Build and maintain full-stack web applications using Python-based backend services and modern frontend technologies.',
    responsibilities: [
      'Design, develop, test, and maintain web applications using Python and Django or similar frameworks.',
      'Build REST APIs and connect backend services with responsive frontend interfaces.',
      'Work with relational databases, troubleshoot issues, and improve application performance.',
      'Collaborate with teammates through code reviews, documentation, and iterative delivery.',
    ],
    qualifications: [
      'Knowledge of Python and web frameworks such as Django or Flask.',
      'Understanding of HTML, CSS, JavaScript, REST APIs, and relational databases.',
      'A problem-solving mindset and willingness to learn and collaborate.',
    ],
  },
  {
    id: 'aws-cloud-engineer',
    title: 'AWS Cloud Engineer',
    location: 'Hyderabad, Telangana',
    employment: 'Confirm with our team',
    experience: 'Relevant experience preferred',
    description: 'Help design, deploy, and support secure, reliable cloud infrastructure and services on AWS.',
    responsibilities: [
      'Configure and maintain AWS services for application hosting, storage, networking, and monitoring.',
      'Support deployments, troubleshoot cloud infrastructure issues, and improve system reliability.',
      'Apply access controls and security practices to cloud resources.',
      'Document infrastructure and collaborate with development teams on delivery needs.',
    ],
    qualifications: [
      'Working knowledge of core AWS services and cloud computing concepts.',
      'Understanding of networking, Linux fundamentals, and cloud security basics.',
      'Scripting or infrastructure-as-code experience is an advantage.',
    ],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    location: 'Hyderabad, Telangana',
    employment: 'Confirm with our team',
    experience: 'Relevant experience preferred',
    description: 'Develop and evaluate machine-learning solutions that address practical product and business needs.',
    responsibilities: [
      'Prepare datasets and build, evaluate, and refine machine-learning models.',
      'Use Python-based data and machine-learning tools to run experiments and measure results.',
      'Work with product and engineering teammates to integrate models into applications.',
      'Document model behavior, limitations, and evaluation findings.',
    ],
    qualifications: [
      'Strong Python fundamentals and familiarity with common data-science libraries.',
      'Understanding of machine-learning concepts, data preparation, and model evaluation.',
      'Analytical thinking and clear communication of technical findings.',
    ],
  },
  {
    id: 'role-java',
    title: 'Java Developer',
    location: 'Hyderabad, Telangana',
    employment: 'Full-time',
    experience: '2–4 years',
    description: 'Design, develop, test, and maintain scalable backend applications and enterprise-level software solutions. The candidate should have a strong understanding of Java programming, object-oriented concepts, database management, and application development practices.',
    responsibilities: [
      'Design, develop, and maintain backend applications using Java, Spring Boot, and related technologies.',
      'Build scalable RESTful APIs and integrate them with frontend applications and third-party services.',
      'Work with relational databases such as MySQL, PostgreSQL, or Oracle to manage application data efficiently.',
      'Write unit tests, troubleshoot issues, and participate in code reviews.',
    ],
    qualifications: [
      '2–4 years of experience developing Java applications.',
      'Strong understanding of Java, object-oriented programming, and Spring Boot.',
      'Experience with REST APIs and relational databases such as MySQL or PostgreSQL.',
    ],
  },
  {
    id: 'role-mobile',
    title: 'Mobile Application Developer',
    location: 'Hyderabad, Telangana',
    employment: 'Full-time',
    experience: '2–4 years',
    description: 'Create innovative, reliable, and user-friendly mobile applications for Android and iOS platforms. The candidate will be responsible for developing new features, integrating backend services, and ensuring excellent application performance and user experience.',
    responsibilities: [
      'Develop and maintain mobile applications for Android and iOS devices.',
      'Build new features and integrate applications with backend APIs and services.',
      'Test, debug, and optimize applications for performance, reliability, and usability.',
      'Collaborate with designers and engineers to deliver polished mobile experiences.',
    ],
    qualifications: [
      '2–4 years of mobile application development experience.',
      'Experience with Android, iOS, or cross-platform frameworks such as Flutter or React Native.',
      'Understanding of API integration, mobile testing, and application release workflows.',
    ],
  },
  {
    id: 'role-dm',
    title: 'Digital Marketer',
    location: 'Hyderabad, Telangana',
    employment: 'Confirm with our team',
    experience: 'Relevant experience preferred',
    description: 'Plan and deliver digital marketing campaigns that improve brand visibility, audience engagement, and measurable online growth.',
    responsibilities: [
      'Plan and coordinate campaigns across search, social media, and other digital channels.',
      'Create and optimize content with SEO and audience needs in mind.',
      'Track campaign performance and prepare clear reports with actionable insights.',
      'Coordinate with design, content, and business teams to keep campaigns on schedule.',
    ],
    qualifications: [
      'Understanding of digital marketing, SEO, social media, and web analytics.',
      'Strong written communication and attention to detail.',
      'Experience with campaign analytics or advertising platforms is an advantage.',
    ],
  },
];

export const FAQ_COLUMNS = [
  [
    {
      q: 'Are your Websites Custom?',
      a: 'Yes, everything we build is 100% Custom with unlimited revisions to the design. We are custom starting from the design all the way to your administration area to manage the website yourself.',
    },
    {
      q: 'Do you provide hosting to my website?',
      a: 'Yes, we do provide hosting for our customers but it does not means you are obligated to host with us.',
    },
    {
      q: 'Do you do graphics design and logo design?',
      a: 'Yes, we do graphic design and logo design, business card design, flyer design, brochure design, stationary, banners and much more as we help you build your brand.',
    },
  ],
  [
    {
      q: 'What if I need HELP, Do you offer support?',
      a: 'Yes, we offer LIFETIME SUPPORT You will have access to our developers for any questions you might need.',
    },
    {
      q: 'How much does a website cost?',
      a: 'We have nothing to hide as we know our prices are fair and affordable when comparing with other companies. Please visit our office for knowing all the prices.',
    },
    {
      q: 'Can you help me with Digital Marketing?',
      a: "100% Yes! We don't just build your website but, we also do Digital Marketing to your website",
    },
  ],
];

export const BLOG_POSTS = [
  {
    id: 'blog-1',
    title: 'How Custom Software & Digital Presence Scale Modern Indian Enterprises',
    date: 'August 14',
    author: 'Potla Tech Solutions',
    image: IMAGES.aboutImg2,
    excerpt:
      'Discover how integrated web applications, automated workflows, and targeted SEO help Hyderabad startups compete globally.',
  },
  {
    id: 'blog-2',
    title: 'Complete Roadmap for Fall & Spring Admissions in Top US Universities',
    date: 'July 28',
    author: 'Potla Study Abroad',
    image: IMAGES.overseasHome,
    excerpt:
      'From IELTS/PTE preparation and university shortlisting to visa interview readiness—everything Indian students need to know.',
  },
  {
    id: 'blog-3',
    title: 'Bridging the Campus-to-Corporate Skill Gap with CRT Programmes',
    date: 'July 09',
    author: 'Potla Consulting',
    image: IMAGES.aboutImg4,
    excerpt:
      'Why hands-on aptitude training, mock interviews, and practical lab sessions accelerate campus placement readiness.',
  },
];
