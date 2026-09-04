const projects = [
  {
    name: 'AttendNG',
    meta: 'Ongoing — Personal project, built in public',
    desc: 'A teacher-facing web app for school attendance management. Teachers set up their school, class, and term info, then track daily and weekly attendance online, with full cross-device sync between a classroom PC and their phone.',
    stack: ['HTML', 'SCSS', 'JavaScript', 'Supabase', 'Chart.js', 'ExcelJS'],
    href: 'https://github.com/ademayowa123/attendng',
  },
  {
    name: 'Portfolio',
    meta: '2026 — Personal project',
    desc: 'A personal portfolio website showcasing my frontend development skills, projects, experience, and work in education technology.',
    stack: ['React', 'CSS', 'Vite'],
    href: 'https://github.com/ademayowa123/new-portfolio',
  },
  {
    name: 'Old Portfolio',
    meta: '2024 — Personal project',
    desc: 'An earlier version of this portfolio, built to showcase my early frontend work and mark how my skills and design sense have developed since.',
    stack: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    href: 'https://github.com/Ademayowa123/old-portfolio',
  },
  {
    name: 'Fauxica',
    meta: '2024 — Personal project',
    desc: 'A responsive, e-commerce-inspired fashion landing page focused on clean visual design, product presentation, and an engaging, mobile-friendly user experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Ademayowa123/fauxica-fashion-landing-page',
  },
]

const toolkit = [
  {
    category: 'Languages',
    items: ['JavaScript / TypeScript', 'HTML & CSS', 'Python'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Vue'],
  },
  {
    category: 'Tooling',
    items: ['Vite', 'Git'],
  },
]

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="nav-mark" href="#top">Adetona Ademayowa / frontend</a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#toolkit">Toolkit</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid corner-marks">
              <p className="hero-coords">
                <span>LAGOS, NG</span>
                <span>AVAILABLE FOR WORK</span>
              </p>
              <p className="hero-role">Frontend Developer</p>
              <h1>Adetona Ademayowa</h1>
              <p>
                I build fast, responsive interfaces and turn rough ideas into products
                people actually enjoy using. Currently focused on React and Next.js, with
                an eye for the small details that make an interface feel polished,
                purposeful, and considered.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#work">See my work</a>
                <a className="btn ghost" href="mailto:adetonaademayowa@gmail.com">Email me</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <h2>Selected work</h2>
              <span className="index">04 projects</span>
            </div>
            {projects.map((p) => (
              <article className="project" key={p.name}>
                <div>
                  <p className="project-meta">{p.meta}</p>
                  <h3 className="project-name">{p.name}</h3>
                </div>
                <div>
                  <p className="project-desc">{p.desc}</p>
                  <ul className="project-stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a className="project-link" href={p.href} target="_blank" rel="noreferrer">
                    View project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="toolkit">
          <div className="wrap">
            <div className="section-head">
              <h2>Toolkit</h2>
            </div>
            <div className="toolkit-grid">
              {toolkit.map((t) => (
                <div className="toolkit-cat" key={t.category}>
                  <h3>{t.category}</h3>
                  <ul>
                    {t.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <h2>About</h2>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  I got into frontend development because I enjoy turning ideas into
                  interactive experiences that solve real problems. My background in
                  education and IT showed me how technology can make everyday processes
                  simpler, and frontend development gave me the opportunity to build those
                  solutions myself.
                </p>

                <p>
                  I enjoy building clean, responsive interfaces and solving practical
                  problems with technology. One of my favorite projects is <strong>AttendNG</strong>,
                  a school attendance management platform I built to simplify attendance
                  tracking, student management, analytics, and reporting. I’m currently
                  focused on strengthening my JavaScript and modern frontend skills while
                  building useful products that combine technology with real-world needs.
                </p>

              </div>
              <dl className="about-facts">
                <div className="about-fact">
                  <dt>Based in</dt>
                  <dd>Lagos, Nigeria</dd>
                </div>
                <div className="about-fact">
                  <dt>Focus</dt>
                  <dd>React, Next.js, Javascript, UI Craft, Frontend Development</dd>
                </div>
                <div className="about-fact">
                  <dt>Currently</dt>
                  <dd>Open to opportunities</dd>
                </div>
                <div className="about-fact">
                  <dt>Resume</dt>
                  <dd><a href="https://drive.google.com/uc?export=download&id=16-bDexkCTGiA9b_bRJPRv3d9b0j3n55T">Download PDF</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap footer corner-marks">
            <h2>Let's build something.</h2>
            <div className="footer-links">
              <a href="mailto:adetonaademayowa@gmail.com">adetonaademayowa@gmail.com</a>
              <a href="https://github.com/ademayowa123" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/ademayowa-adetona-468640193" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com/ademayowa123" target="_blank" rel="noreferrer">Twitter / X</a>
              <a href="https://wa.me/2348091481196" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Adetona Ademayowa</span>
              <span>Built with React</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
