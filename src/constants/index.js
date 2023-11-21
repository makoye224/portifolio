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
  figma,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mindscribe, 
  neat, 
  sokoni,
  resume,
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
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
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
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Resident Assistant',
    company_name: 'Case Western Reserve University',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - now',
  },
  {
    title: 'Comprehensive Web and Mobile Developer',
    company_name: 'Neatify',
    icon: kelhel,
    iconBg: '#333333',
    date: 'September 2023 - Now',
  },
  {
    title: 'Customer Service Assistant',
    company_name: 'Case Western Reserve University',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2021 - Aug 2023',
  },
  {
    title: 'Alumni Engagement Intern',
    company_name: 'African Leadership Academy',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2021 - Jun 2021',
  },
  {
    title: 'Short Summer Course Program Facilitator',
    company_name: 'African Leadership Academy',
    icon: kelhel,
    iconBg: '#333333',
    date: 'July 2020 - Sept 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Neatify',
    description: "a Tanzanian cleaning service, streamlining customer engagement with appointment booking and work showcase",
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: neat,
    repo: 'https://github.com/makoye224/next-neat',
    demo: 'https://www.neatifytz.com/',
  },
  {
    id: 'project-2',
    name: 'Mindscribe',
    description:
      'Mindscribe is a structured and versatile journaling platform that enables users to record their daily activities, emotions, goals, and observations, prioritizing mental well-being through a modern solution that re-imagines and digitizes the traditional journaling experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: mindscribe,
    repo: 'https://github.com/makoye224/mindscribe23',
    demo: 'https://mindscribe-70op.onrender.com',
  },
  {
    id: 'project-3',
    name: 'Sokoni',
    description: 'a full-stack e-commerce website for Sokoni, enabling entrepreneurs to showcase and sell their products. The site is built using React.js, Django, PostgreSQL, and amazon s3 bucket',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: sokoni,
    repo: 'https://github.com/makoye224/django-sokoni',
    demo: 'https://sokoni-django.onrender.com',
  },
];

export { services, technologies, experiences, projects, resume };
