import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import Footer from './footer';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    //to implement storing logic
  
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>Feel free to contact us any time. We will get back to you as soon as we can.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Info:</h2>
        <p>
          <FaEnvelope /> Email: info.digaga@gmail.com
        </p>
        <p>
          <FaPhone /> Telephone: +254 717393483
        </p>
        <p>
          <FaMapMarker /> Location: Nairobi, Biashara street, Baraka Shopping Mall 
        </p>
      </div>
    </div>
  );
}

export default Contact;
