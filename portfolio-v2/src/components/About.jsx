import React from 'react';
import { profile } from '../data.js';
import avatar from '../assets/avatar.jpg';

export default function About() {
  return (
    <section id="about">
      <div className="container reveal">
        <h2 className="section-title">About</h2>
        <p className="section-sub">The short version of an 11-year story.</p>
        <div className="about-grid">
          <img className="about-avatar" src={avatar} alt={profile.name} />
          <div className="about-text">
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
