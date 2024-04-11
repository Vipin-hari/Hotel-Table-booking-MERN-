import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:3001/contact', {
        name,
        email,
        message
      });

      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
      
      // Set success message
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      alert("Message Sent Successfully")
    } catch (error) {
      // Log and display error message
      console.error('Error submitting message:', error.response.data.message);
      setSuccessMessage('');
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>If you have any questions or inquiries, please feel free to contact us using the form below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <h3>Contact Information:</h3>
        <p>Email: beefbbqadmin@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </div>
    </div>
  );
};

export default Contact;
