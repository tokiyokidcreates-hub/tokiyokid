import React, { useState } from 'react';
import '../styles/pages/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="contact-content">
        <section className="contact-info">
          <h2>Let's Connect</h2>
          <p>I'm always interested in hearing about new projects and opportunities.</p>
          <div className="info-item">
            <strong>Email:</strong> your.email@example.com
          </div>
          <div className="info-item">
            <strong>LinkedIn:</strong> <a href="#">linkedin.com/in/yourprofile</a>
          </div>
          <div className="info-item">
            <strong>GitHub:</strong> <a href="#">github.com/yourprofile</a>
          </div>
        </section>

        <section className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;