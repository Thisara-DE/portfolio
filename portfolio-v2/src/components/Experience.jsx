import React from 'react';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>
        <p className="section-sub reveal">
          Banking, insurance, and manufacturing — from business analysis to product ownership.
        </p>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item reveal" key={`${job.company}-${job.period}`}>
              <div className="timeline-header">
                <span className="timeline-role">{job.role}</span>
                <span className="timeline-company">@ {job.company}</span>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-domain">{job.domain}</p>
              <ul className="timeline-highlights">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
