import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-container">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="contact-form-title">Send a Message</h2>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="form-button">
              Send Message
            </button>
            {sent && (
              <p className="success-message">
                Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-card">
            <h2 className="contact-card-title">Contact Information</h2>
            <ul className="contact-list">
              <li className="contact-list-item">
                <Mail size={24} className="contact-icon" />
                <a href="mailto:example@example.com" className="contact-link">
                  example@example.com
                </a>
              </li>
              <li className="contact-list-item">
                <Phone size={24} className="contact-icon" />
                <a href="tel:+1234567890" className="contact-link">
                  +1234567890
                </a>
              </li>
              <li className="contact-list-item">
                <Instagram size={24} className="contact-icon" />
                <a href="tel:+1234567890" className="contact-link">
                 Insta_id
                </a>
              </li>
              <li className="contact-list-item">
                <MapPin size={24} className="contact-icon" />
                <address className="contact-address">
                  Innovation Lab, Chennai Institute of Technology
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
