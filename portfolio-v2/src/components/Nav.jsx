import React from 'react';
import { profile } from '../data.js';
import { trackEvent } from '../analytics.js';

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Credentials', '#credentials'],
  ['Contact', '#contact'],
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          TE<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a
          className="nav-cta"
          href={`${import.meta.env.BASE_URL}${profile.resume}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent('resume-download', 'Resume download (nav)')}
        >
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
