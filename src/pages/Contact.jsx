import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message…' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send your message.');

      setStatus({ type: 'success', message: 'Thanks — your message has been sent.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please email me directly.' });
    }
  };

  return (
    <PageLayout>
      <div className="page-content contact-page">
        <header className="page-header">
          <p className="eyebrow">Let&apos;s connect</p>
          <h1>Build something meaningful.</h1>
          <p className="page-subtitle">I&apos;m open to thoughtful collaborations, ambitious products, and opportunities to learn.</p>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-links">
              <a href={`mailto:${site.email}`} className="contact-link-item"><span className="contact-icon">@</span><div><strong>Email</strong><span>{site.email}</span></div></a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact-link-item"><span className="contact-icon">GH</span><div><strong>GitHub</strong><span>github.com/aslam7177</span></div></a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item"><span className="contact-icon">in</span><div><strong>LinkedIn</strong><span>linkedin.com/in/mullaaslam</span></div></a>
              <div className="contact-link-item"><span className="contact-icon">IN</span><div><strong>Location</strong><span>{site.location}</span></div></div>
            </div>

            <a href={site.resumeUrl} className="resume-btn" download onClick={(event) => {
              if (site.resumeUrl === '#') {
                event.preventDefault();
                alert('Add your resume PDF link in src/data/site.js');
              }
            }}>Download Resume</a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required maxLength="100" placeholder="Your name" /></div>
            <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required maxLength="254" placeholder="your.email@example.com" /></div>
            <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required maxLength="5000" rows="5" placeholder="Tell me a little about your project…" /></div>
            {status.message && <p className={`form-status form-status-${status.type}`} role="status">{status.message}</p>}
            <button type="submit" className="btn-submit" disabled={status.type === 'loading'}>{status.type === 'loading' ? 'Sending…' : 'Send Message'}</button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
