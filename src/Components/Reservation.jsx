import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/Reservation.css"

const Reservation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  // Remove the unused errorMessage state
  // const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:3001/requests', {
        name,
        email,
        date,
        time,
        headCount,
        contactNumber
      });

      console.log(response.data); // Log success message from backend

      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setDate('');
      setTime('');
      setHeadCount('');
      setContactNumber('');
      // setErrorMessage(''); // Clear any previous error message
      alert("Request submitted. You will receive call from us.")
    } catch (error) {
      // Log and display error message
      console.error('Error submitting reservation:', error.response.data.message);
      // setErrorMessage(error.response.data.message);
    }
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    // Check if selected time is within the allowed range
    const startTime = '11:00';
    const endTime = '22:00';
    if (selectedTime < startTime || selectedTime > endTime) {
      // Reset the time field
      setTime('');
      // You can also display an error message or handle the validation as per your requirement
    } else {
      // Set the selected time
      setTime(selectedTime);
    }
  };

  return (
    <div className="reservation">
      <h2>Make a Reservation</h2>
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
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" value={time} onChange={handleTimeChange} required />
        </div>
        <div className="form-group">
          <label>Head Count:</label>
          <input type="number" value={headCount} onChange={(e) => setHeadCount(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        </div>
        <button type="submit" style={{marginBottom:'100px'}}>Submit</button>

      </form>
    </div>
  );
};

export default Reservation;
