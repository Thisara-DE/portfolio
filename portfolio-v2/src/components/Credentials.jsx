import React from 'react';
import { certifications, education } from '../data.js';

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="container reveal">
        <h2 className="section-title">Credentials</h2>
        <p className="section-sub">Certifications and formal education.</p>
        <div className="cred-grid">
          <div>
            <h3 style={{ marginBottom: 16 }}>Certifications</h3>
            <ul className="cred-list">
              {certifications.map((c) => (
                <li key={`${c.name}-${c.org}`}>
                  <span className="cred-badge">✓</span>
                  <span>
                    <span className="cred-name">{c.name}</span>
                    <br />
                    <span className="cred-org">
                      {c.org}
                      {c.id ? ` · ID ${c.id}` : ''}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: 16 }}>Education</h3>
            <ul className="cred-list">
              {education.map((e) => (
                <li key={e.degree}>
                  <span className="cred-badge">🎓</span>
                  <span>
                    <span className="cred-name">{e.degree}</span>
                    <br />
                    <span className="cred-org">{e.school}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
