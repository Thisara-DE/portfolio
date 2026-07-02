import React from 'react';
import { profile, stats } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-kicker">{profile.title}</p>
        <h1>{profile.name}</h1>
        <p className="hero-tagline">
          <strong>{profile.tagline}</strong> 11+ years driving digital transformation in
          enterprise banking, SAFe-certified and fluent in the APIs my teams build. Latest
          work: a live NASA RAG chatbot, multi-agent systems with CrewAI and LangGraph, and
          agentic n8n workflows — all on GitHub.
        </p>
        <p className="hero-location">📍 {profile.location}</p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={`${import.meta.env.BASE_URL}${profile.resume}`}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
          <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-outline" href="#projects">
            AI Projects ↓
          </a>
          <a className="btn btn-outline" href="#contact">
            Get in Touch
          </a>
        </div>
        <div className="stats reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
