import React, { useState } from "react";

const TIME_SLOTS = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !date || !timeSlot) return;
    onSubmit({
      name,
      phoneNumber,
      date,
      timeSlot,
      doctorName,
      doctorSpeciality,
    });
    setName("");
    setPhoneNumber("");
    setDate("");
    setTimeSlot("");
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h3>Book Appointment</h3>
      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          placeholder="Enter your phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Date of Appointment</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Book Time Slot:</label>
        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          required
        >
          <option value="">Select a time slot</option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Book Now
      </button>
    </form>
  );
};

export default AppointmentForm;
