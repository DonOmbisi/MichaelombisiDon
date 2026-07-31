import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/projects',
  },
  {
    label: 'Experience',
    pathname: '/experience',
  },
  {
    label: 'Achievements',
    pathname: '/achievements',
  },
  {
    label: 'Certifications',
    pathname: '/certifications',
  },
  {
    label: 'Resume',
    pathname: '/resume',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/don-michael-64423b276/',
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
