export type Project = {
  number: string
  name: string
  subtitle: string
  description: string
  stack: string[]
  className: 'commerce' | 'hishabi' | 'tea' | 'shikkha'
  href?: string
}

export type SkillGroup = {
  title: string
  items: string
}

export type Experience = {
  period: string
  role: string
  company: string
  detail: string
}

export const PORTFOLIO = {
  name: 'Mohammad Zahirul Islam',
  email: 'zahirulismal15@gmail.com',
  location: 'Dhaka, Bangladesh',
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Commerce, connected',
    subtitle: 'E-commerce & POS platform',
    description:
      'A unified commerce experience bringing product management, checkout, payments, and inventory operations into one dependable workflow.',
    stack: ['Next.js', 'Laravel', 'PostgreSQL', 'Typesense'],
    className: 'commerce',
  },
  {
    number: '02',
    name: 'A clearer view of every order',
    subtitle: 'Hishabi · Distributor management',
    description:
      'A B2B operations platform for authentication, inventory oversight, order tracking, and reporting across the distribution journey.',
    stack: ['NestJS', 'Next.js', 'MongoDB', 'Docker'],
    className: 'hishabi',
    href: 'https://hishabi.com/',
  },
  {
    number: '03',
    name: 'Make every wait count',
    subtitle: 'London Tea Exchange · Queue management',
    description:
      'A queue and ticketing system that helps teams manage reservations, counters, and a smoother customer experience.',
    stack: ['Laravel', 'MySQL', 'JavaScript', 'Blade'],
    className: 'tea',
    href: 'https://www.londonteaexchange.com/',
  },
  {
    number: '04',
    name: 'Better care, behind the scenes',
    subtitle: 'Shikkha · Diagnostic center management',
    description:
      'A connected system for appointments, doctors, stock, accounts, and test results that supports the day to day work of a diagnostic center.',
    stack: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
    className: 'shikkha',
    href: 'https://shikkha.one/',
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: 'React · Next.js · Vue.js · Nuxt.js · TypeScript · HTML · CSS · Tailwind · GSAP' },
  { title: 'Backend', items: 'PHP · Laravel · Node.js · NestJS · Express.js · REST APIs · Service integrations' },
  { title: 'Data', items: 'PostgreSQL · MySQL · MongoDB · Prisma · Supabase' },
  { title: 'Tools & workflow', items: 'Git · GitHub Actions · Docker · Vercel · Postman · Jira · Agile / Scrum' },
]

export const experience: Experience[] = [
  {
    period: 'Dec 2023 — Now',
    role: 'Associate Software Engineer',
    company: 'Softzino Technologies',
    detail: 'Building and maintaining production commerce and POS applications with Next.js, React, and TypeScript.',
  },
  {
    period: 'Sep 2022 — Nov 2023',
    role: 'Junior Software Engineer',
    company: 'Codecell LTD',
    detail: 'Turned client requirements and designs into responsive web experiences, working as part of a collaborative sprint team.',
  },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zahirul-islam-4241971b5/' },
  { label: 'GitHub', href: 'https://github.com/zahirulislam15' },
  { label: 'GitLab', href: 'https://gitlab.com/zahirulSoftzino' },
]
