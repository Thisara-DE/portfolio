import React from 'react';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills</h2>
        <p className="section-sub reveal">
          Product leadership backed by hands-on technical depth.
        </p>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card reveal" key={group.group}>
              <h3>{group.group}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
