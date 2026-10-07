import site from './data/site.json';
import ThemeToggle from './components/ThemeToggle';
import Project from './components/Project';

export default function App() {
  const { links } = site;

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true" />
            {site.name}
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Available for freelance projects
          </p>
          <h1 className="hero-title">Streaming apps for the web and the&nbsp;TV&nbsp;screen.</h1>
          <p className="hero-lead">
            I'm Keti, a full-stack developer in Tbilisi. I build video players and Smart TV apps you drive with a remote,
            plus the dashboards, web apps and Node.js APIs around them.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See my work
            </a>
            {links.upwork && (
              <a className="button" href={links.upwork} target="_blank" rel="noreferrer">
                Hire me on Upwork
              </a>
            )}
          </div>
        </section>

        <section id="work" className="section wrap" aria-labelledby="work-title">
          <h2 id="work-title" className="section-title">
            Selected work
          </h2>
          <div className="projects">
            {site.projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="about" className="section wrap about" aria-labelledby="about-title">
          <h2 id="about-title" className="section-title">
            About
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Day to day I work on a production streaming platform: the Angular web app, the Samsung Tizen TV app, a
                React admin panel and the Node.js backend that serves them all.
              </p>
              <p>
                That makes me comfortable jumping into an existing codebase, finding the bug and fixing it without
                rewriting everything around it. On freelance work I keep it simple: honest estimates, regular updates
                and code that fits the project you already have.
              </p>
            </div>
            <dl className="skills">
              {site.skills.map((group) => (
                <div key={group.group} className="skill-group">
                  <dt>{group.group}</dt>
                  <dd>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="experience" className="section wrap" aria-labelledby="experience-title">
          <h2 id="experience-title" className="section-title">
            Experience
          </h2>
          <ol className="timeline">
            {site.experience.map((job) => (
              <li key={job.company} className="job">
                <div className="job-period">{job.period}</div>
                <div className="job-body">
                  <h3>
                    {job.role} <span>at {job.company}</span>
                  </h3>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <h2 className="footer-title">Have a project in mind?</h2>
          <p className="footer-lead">Send me the details and I'll reply with an honest estimate.</p>
          <div className="footer-row">
            <div className="hero-actions">
              {links.upwork && (
                <a className="button button-primary" href={links.upwork} target="_blank" rel="noreferrer">
                  Message me on Upwork
                </a>
              )}
              {links.github && (
                <a className="button" href={links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {links.linkedin && (
                <a className="button" href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
            <p className="copyright">
              © {new Date().getFullYear()} {site.name}, {site.location}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
