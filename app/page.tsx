const projects = [
  {
    number: '01',
    name: 'Commerce, connected',
    subtitle: 'E-commerce & POS platform',
    description:
      'A unified commerce experience bringing product management, checkout, payments, and inventory operations into one dependable workflow.',
    stack: ['Next.js', 'Laravel', 'PostgreSQL', 'Typesense'],
    className: 'commerce',
    visual: 'commerce-visual',
  },
  {
    number: '02',
    name: 'A clearer view of every order',
    subtitle: 'Hishabi · Distributor management',
    description:
      'A B2B operations platform for authentication, inventory oversight, order tracking, and reporting across the distribution journey.',
    stack: ['NestJS', 'Next.js', 'MongoDB', 'Docker'],
    className: 'hishabi',
    visual: 'hishabi-visual',
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
    visual: 'tea-visual',
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
    visual: 'shikkha-visual',
    href: 'https://shikkha.one/',
  },
]

const skillGroups = [
  { title: 'Frontend', items: 'React · Next.js · Vue.js · Nuxt.js · TypeScript · HTML · CSS · Tailwind · GSAP' },
  { title: 'Backend', items: 'PHP · Laravel · Node.js · NestJS · Express.js · REST APIs · Service integrations' },
  { title: 'Data', items: 'PostgreSQL · MySQL · MongoDB · Prisma · Supabase' },
  { title: 'Tools & workflow', items: 'Git · GitHub Actions · Docker · Vercel · Postman · Jira · Agile / Scrum' },
]

const experience = [
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

export default function Home() {
  const projectItems = Array.isArray(projects) && projects.length > 0 ? projects : []
  const skillItems = Array.isArray(skillGroups) && skillGroups.length > 0 ? skillGroups : []
  const experienceItems = Array.isArray(experience) && experience.length > 0 ? experience : []

  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#home" aria-label="Mohammad Zahirul Islam home">
          <span className="wordmark-icon">zi<span>.</span></span>
          <span className="wordmark-name">Mohammad Zahirul Islam</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="mailto:zahirulismal15@gmail.com">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="availability"><span /> Open to new opportunities</div>
          <p className="eyebrow">FULL STACK SOFTWARE ENGINEER · DHAKA, BANGLADESH</p>
          <h1>I make complex work feel <span>simple.</span></h1>
          <p className="hero-intro">
            I’m Zahirul, a software engineer building useful, thoughtful products for the people who rely on them every day.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="mailto:zahirulismal15@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="A graphic showing connected ideas becoming a clear system" role="img">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-center"><span>z</span><i /></div>
          <span className="art-node node-one">IDEA</span>
          <span className="art-node node-two">PEOPLE</span>
          <span className="art-node node-three">SYSTEMS</span>
          <span className="art-node node-four">IMPACT</span>
          <div className="art-caption"><span>01 / 04</span><span>Build with purpose</span></div>
        </div>
        <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span className="footnote-line" /><span>4+ YEARS BUILDING FOR THE WEB</span></div>
      </section>

      <section className="intro-strip">
        <div className="shell intro-inner">
          <p className="section-kicker">A LITTLE ABOUT MY APPROACH</p>
          <p className="intro-statement">Good software isn’t just built to work. <span>It makes the work around it work better.</span></p>
          <div className="intro-mark" aria-hidden="true">↗</div>
        </div>
      </section>

      <section className="work-section shell section-space" id="work">
        <div className="section-heading">
          <div><p className="section-kicker">SELECTED WORK <span>2022 — 2026</span></p><h2>Made to move<br />things forward.</h2></div>
          <p className="section-aside">A few products and systems I’ve helped bring to life, from the first user flow to the details that keep it running.</p>
        </div>
        <div className="project-grid">
          {projectItems.map((project) => (
            <article className={`project-card ${project.className}`} key={`${project.number}-${project.name}`}>
              <div className={`project-visual ${project.visual}`} aria-hidden="true">
                {project.className === 'commerce' && <div className="mini-store"><div className="mini-top"><span>STUDIO / SHOP</span><span>☰</span></div><div className="mini-head">Objects for<br />the everyday.</div><div className="mini-product"><i /><i /><i /></div><div className="mini-bottom"><span>01—03</span><span>COLLECTION</span></div></div>}
                {project.className === 'hishabi' && <div className="dash-card"><div className="dash-top"><span>OVERVIEW</span><span className="dash-dots">•••</span></div><div className="dash-value">৳ 84,260 <span>+12.8%</span></div><div className="dash-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="dash-labels"><span>MON</span><span>WED</span><span>FRI</span><span>SUN</span></div></div>}
                {project.className === 'tea' && <div className="queue-board"><div className="queue-brand">LONDON <b>TEA EXCHANGE</b></div><div className="queue-number">04<span>NOW SERVING</span></div><div className="queue-bottom"><span>PLEASE TAKE A SEAT</span><span>↗</span></div></div>}
                {project.className === 'shikkha' && <div className="care-card"><div className="care-top"><span>CARE / IN MOTION</span><span>✳</span></div><div className="care-plus">+</div><div className="care-wave"><svg viewBox="0 0 360 75" fill="none" role="presentation"><path d="M0 40h66l19-28 27 53 31-48 21 31h37l17-21 21 17h121" /></svg></div><div className="care-bottom"><span>PEOPLE FIRST</span><span>ALWAYS</span></div></div>}
              </div>
              <div className="project-content">
                <div className="project-title-row"><span className="project-number">{project.number}</span><span className="project-subtitle">{project.subtitle}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tag-list">{Array.isArray(project.stack) && project.stack.length > 0 && project.stack.map((tag, index) => <li key={`${project.number}-${tag}-${index}`}>{tag}</li>)}</ul>
                {'href' in project && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a>}
              </div>
            </article>
          ))}
        </div>
        <div className="other-projects"><span>ALSO BUILT</span><p>Gokiiw restaurant management · School management system · Jibonsheba</p></div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-heading"><p className="section-kicker">A PRACTICAL MIND, A HUMAN APPROACH</p><h2>Curious by nature.<br /><span>Careful by craft.</span></h2></div>
          <div className="about-copy"><p>I enjoy working across the stack, connecting the details behind the interface with the experience a person actually has. That means asking good questions, keeping systems understandable, and sweating the small things that make a product feel considered.</p><p>From a first sketch to a production release, I like working closely with teams and clients to turn real needs into software that’s clear, reliable, and ready to grow.</p><div className="about-note"><span className="note-star">✳</span><span>Currently building commerce experiences at Softzino Technologies, Dhaka.</span></div></div>
          <div className="skill-panel"><div className="skill-panel-heading"><span>TOOLS I REACH FOR</span><span>01 — 04</span></div><div className="skill-groups">{skillItems.map((group, index) => <div className="skill-group" key={`${group.title}-${index}`}><h3>{group.title}</h3><p>{group.items}</p></div>)}</div></div>
        </div>
      </section>

      <section className="experience-section shell section-space" id="experience">
        <div className="section-heading experience-heading"><div><p className="section-kicker">THE PATH SO FAR</p><h2>Good work is<br />a team sport.</h2></div><p className="section-aside">A little over four years of learning, shipping, and getting better alongside good people.</p></div>
        <div className="experience-list">{experienceItems.map((item, index) => <article className="experience-item" key={`${item.company}-${item.role}-${index}`}><div className="experience-period">{item.period}</div><div className="experience-role"><h3>{item.role}</h3><p>{item.company} <span>·</span> Dhaka, Bangladesh</p></div><p className="experience-detail">{item.detail}</p><span className="experience-arrow" aria-hidden="true">↗</span></article>)}</div>
        <div className="education-row"><div><p className="section-kicker">EDUCATION</p><h3>B.Sc. in Computer Science & Engineering</h3><p>International University of Business Agriculture and Technology <span>·</span> CGPA 3.53 / 4.00</p></div><div className="language-card"><span>LANGUAGES</span><p>Bengali <i>Native</i><b>·</b> English <i>Professional</i></p></div></div>
      </section>

      <footer className="footer-section" id="contact">
        <div className="shell footer-inner"><p className="section-kicker">HAVE SOMETHING GOOD IN MIND?</p><h2>Let’s make it<br /><span>work beautifully.</span></h2><a className="footer-email" href="mailto:zahirulismal15@gmail.com">zahirulismal15@gmail.com <span aria-hidden="true">↗</span></a><div className="footer-bottom"><a className="wordmark footer-mark" href="#home"><span className="wordmark-icon">zi<span>.</span></span><span className="wordmark-name">Mohammad Zahirul Islam</span></a><span>BASED IN DHAKA, BANGLADESH</span><div className="footer-links"><a href="https://www.linkedin.com/in/zahirul-islam-4241971b5/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/zahirulislam15" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://gitlab.com/zahirulSoftzino" target="_blank" rel="noreferrer">GITLAB ↗</a><a href="#home">TOP ↑</a></div></div></div>
      </footer>
    </main>
  )
}
