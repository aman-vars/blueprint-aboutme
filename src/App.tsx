import { profile } from './data/profile'
import { useProjects } from './hooks/useProjects'

function ProjectLink({ url, label, project }: { url: string | null; label: string; project: string }) {
  return url ? (
    <a href={url} target="_blank" rel="noreferrer" aria-label={`${project}: ${label} (opens in a new tab)`}>
      {label} <span aria-hidden="true">↗</span>
    </a>
  ) : <span className="placeholder">{label} URL: pending</span>
}

export default function App() {
  const projects = useProjects()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page">
        <main id="main">
          <section className="intro" aria-labelledby="intro-heading">
            <p className="eyebrow">{profile.interests}</p>
            <h1 id="intro-heading">{profile.name}</h1>
            <p className="bio">{profile.bio}</p>
            <div className="social-links">
              {profile.links.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={`${link.label} (opens in a new tab)`}>
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section id="projects" className="section" aria-labelledby="projects-heading">
            <div className="section-heading">
              <h2 id="projects-heading">Featured projects</h2>
            </div>
            {projects === null ? (
              <p className="project-description" role="status">Loading projects…</p>
            ) : projects.length === 0 ? (
              <p className="project-description" role="status">No featured projects are published yet.</p>
            ) : <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project" key={project.id}>
                  <div className="project-topline"><span className="project-number">0{index + 1}</span><span>{project.category}</span></div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="contribution"><span className="small-label">My contribution</span>{project.contribution}</p>
                  <div className="project-bottom">
                    <p className="highlight"><span aria-hidden="true">↳</span> {project.highlight}</p>
                    <ul className="tags" aria-label={`${project.name} technologies and methods`}>
                      {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
                    </ul>
                    <div className="project-links">
                      <ProjectLink url={project.repositoryUrl} label="Code" project={project.name} />
                      <ProjectLink url={project.demoUrl} label="Demo" project={project.name} />
                    </div>
                  </div>
                </article>
              ))}
            </div>}
          </section>

          <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
            <div className="section-heading"><h2 id="experience-heading">Experience</h2></div>
            <div className="experience-grid">
              {profile.experience.map(experience => (
                <article className="experience" key={experience.organization}>
                  <div><h3>{experience.organization}</h3><p className="experience-focus">{experience.focus}</p></div>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
        <footer><span>{profile.name}</span><a href="#main">Back to top <span aria-hidden="true">↑</span></a></footer>
      </div>
    </>
  )
}
