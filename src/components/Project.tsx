import { useState } from 'react';

type Props = {
  project: {
    title: string;
    year: number;
    summary: string;
    points: string[];
    stack: string[];
    images: { src: string; alt: string }[];
    demo: string;
    source: string;
  };
};

export default function Project({ project }: Props) {
  const [active, setActive] = useState(0);

  return (
    <article className="project">
      <div className="screen">
        <img className="ambient" src={project.images[active].src} alt="" aria-hidden="true" />
        <div className="screen-frame">
          {project.images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={index === active ? 'is-active' : ''}
              loading={index === 0 ? 'eager' : 'lazy'}
              width={1600}
              height={900}
            />
          ))}
        </div>
        <div className="thumbs" role="tablist" aria-label={`${project.title} screenshots`}>
          {project.images.map((image, index) => (
            <button
              key={image.src}
              role="tab"
              aria-selected={index === active}
              aria-label={image.alt}
              className={`thumb ${index === active ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
            >
              <img src={image.src} alt="" loading="lazy" width={160} height={90} />
            </button>
          ))}
        </div>
      </div>

      <div className="project-body">
        <div className="project-head">
          <h3>{project.title}</h3>
          <span className="year">{project.year}</span>
        </div>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ul className="stack" aria-label="Built with">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {(project.demo || project.source) && (
          <div className="project-links">
            {project.demo && (
              <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">
                Open live demo
              </a>
            )}
            {project.source && (
              <a className="button" href={project.source} target="_blank" rel="noreferrer">
                View code on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
