import React, { useState } from 'react';
import { profile } from '../data.js';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed

  const hasForm = Boolean(profile.formspreeId);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return setError('Name is required.');
    if (!emailRe.test(form.email)) return setError('Please enter a valid email address.');
    if (!form.message.trim()) return setError('Message is required.');

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('failed');
      setError('Something went wrong — please email me directly instead.');
    }
  }

  return (
    <section id="contact">
      <div className="container reveal">
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">
          Hiring for a product role that needs technical depth? Let&apos;s talk.
        </p>
        <div className="contact-wrap">
          {hasForm && status !== 'sent' && (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={form.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
              </div>
              {error && <p className="error-text">{error}</p>}
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
          {status === 'sent' && (
            <p className="success-text">Thanks — your message is on its way. I&apos;ll reply soon.</p>
          )}
          <div className="contact-direct">
            <a className="btn btn-outline" href={`mailto:${profile.email}`}>
              ✉️ {profile.email}
            </a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
