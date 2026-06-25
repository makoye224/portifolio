import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  ndotoni,
  stays,
  java,
  resume,
  python,
  next,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: backend,
  },
  {
    title: 'Entrepreneur',
    icon: prototyping,
  },
  {
    title: 'Full-Stack Developer',
    icon: frontend,
  },
  {
    title: 'Mobile Developer',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next.js',
    icon: next,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
];

const experiences = [
  {
    title: 'Software Development Engineer',
    company_name: 'Amazon',
    icon: microverse,
    iconBg: '#EEFBF3',
    date: 'May 2024 - Present',
  },
  {
    title: 'Founder & CEO',
    company_name: 'Ndotoni',
    icon: kelhel,
    iconBg: '#EEFBF3',
    date: '2023 - Present',
    link: 'https://www.ndotoni.com',
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Neatify',
    icon: kelhel,
    iconBg: '#EEFBF3',
    date: 'September 2023 - May 2024',
  },
  {
    title: 'Resident Assistant',
    company_name: 'Case Western Reserve University',
    icon: coverhunt,
    iconBg: '#EEFBF3',
    date: 'Aug 2021 - May 2024',
  },
  {
    title: 'Alumni Engagement Intern',
    company_name: 'African Leadership Academy',
    icon: dcc,
    iconBg: '#EEFBF3',
    date: 'Jan 2021 - Jun 2021',
  },
];

const projects = [
  {
    id: 'project-0',
    name: 'Ndotoni',
    description: "Ndotoni is Tanzania's verified property rental platform. We physically visit, photograph, and list properties — connecting tenants with safe housing and landlords with reliable tenants.",
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'AWS',
        color: 'green-text-gradient',
      },
      {
        name: 'React Native',
        color: 'pink-text-gradient',
      },
    ],
    image: ndotoni,
    repo: 'https://github.com/makoye224',
    demo: 'https://www.ndotoni.com',
  },
  {
    id: 'project-1',
    name: 'Ndotoni Stays',
    description: "Ndotoni Stays is a short-term rental booking platform for Tanzania. Book nightly stays, party venues, photoshoot locations, and event spaces with instant booking and flexible cancellation.",
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'AWS',
        color: 'pink-text-gradient',
      },
    ],
    image: stays,
    repo: 'https://github.com/makoye224',
    demo: 'https://www.ndotonistays.com',
  },
];

export { services, technologies, experiences, projects, resume };
