import React from 'react';
import { profile, projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-sub reveal">
          Hands-on builds — AI applications engineered with tests, CI/CD, and security gates,
          plus the full-stack apps where I started. Proof I understand what I ask engineering
          teams to deliver.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card reveal" key={p.name}>
              <img className="project-img" src={p.img} alt={`${p.name} illustration`} loading="lazy" />
              <div className="project-body">
                {p.badge && <span className="project-badge">{p.badge}</span>}
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {(p.github || p.live) && (
                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        GitHub →
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live Demo →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="projects-more reveal">
          <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">
            More on GitHub →
          </a>
        </p>
      </div>
    </section>
  );
}
