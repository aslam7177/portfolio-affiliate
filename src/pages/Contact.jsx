import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="subtitle">I'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, feel free to reach out. I'm always open to 
                discussing new opportunities and ideas.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>your.email@example.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">🐙</span>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="form-success">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button type="submit" className="btn-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


