import { ndotoni, stays, resume } from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'tech',
    title: 'Technologies',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
  },
  {
    title: 'Entrepreneur',
  },
  {
    title: 'Full-Stack Developer',
  },
  {
    title: 'Mobile Developer',
  },
];

const technologies = [
  {
    name: 'java',
    short: 'JV',
    color: '#F89820',
  },
  {
    name: 'TypeScript',
    short: 'TS',
    color: '#3178C6',
  },
  {
    name: 'python',
    short: 'PY',
    color: '#3776AB',
  },
  {
    name: 'React JS',
    short: 'RJ',
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    short: 'NX',
    color: '#111827',
  },
  {
    name: 'Node JS',
    short: 'ND',
    color: '#339933',
  },
  {
    name: 'JavaScript',
    short: 'JS',
    color: '#F0DB4F',
  },
  {
    name: 'Tailwind CSS',
    short: 'TW',
    color: '#06B6D4',
  },
  {
    name: 'postgresql',
    short: 'PG',
    color: '#336791',
  },
  {
    name: 'git',
    short: 'GIT',
    color: '#F05033',
  },
  {
    name: 'HTML 5',
    short: 'H5',
    color: '#E34F26',
  },
  {
    name: 'CSS 3',
    short: 'C3',
    color: '#1572B6',
  },
  {
    name: 'Redux Toolkit',
    short: 'RX',
    color: '#764ABC',
  },
];

const experiences = [
  {
    title: 'Software Development Engineer',
    company_name: 'Amazon',
    date: 'May 2024 - Present',
  },
  {
    title: 'Founder & CEO',
    company_name: 'Ndotoni',
    date: '2023 - Present',
    link: 'https://www.ndotoni.com',
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Neatify',
    date: 'September 2023 - May 2024',
  },
  {
    title: 'Resident Assistant',
    company_name: 'Case Western Reserve University',
    date: 'Aug 2021 - May 2024',
  },
  {
    title: 'Alumni Engagement Intern',
    company_name: 'African Leadership Academy',
    date: 'Jan 2021 - Jun 2021',
  },
];

const projects = [
  {
    id: 'project-0',
    name: 'Ndotoni',
    description: "Ndotoni is Tanzania's verified property rental platform. We physically visit, photograph, and list properties, connecting tenants with safe housing and landlords with reliable tenants.",
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
    appStore: 'https://apps.apple.com/us/app/ndotoni/id6767931205',
    playStore: 'https://play.google.com/store/apps/details?id=com.ndotoni.app',
  },
];

export { services, technologies, experiences, projects, resume };
