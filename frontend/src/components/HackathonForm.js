import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Form.css"; // Import the CSS file

const HackathonForm = ({ eventId, onSuccess }) => {
    
const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [participants, setParticipants] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (eventId) {
      axios
        .get(`http://localhost:3001/hackathon/edit${eventId}`)
        .then((response) => {
          const eventData = response.data;
          setTitle(eventData.title);
          setDescription(eventData.description);
          setParticipants(eventData.participants);
          setStartDate(eventData.startDate);
          setEndDate(eventData.endDate);
        })
        .catch(console.error);
    }
  }, [eventId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title,
      description,
      participants,
      startDate,
      endDate,
    };
    if (eventId) {
      axios
        .put(`http://localhost:3001/hackathon/update${eventId}`, eventData)
        .then(onSuccess)
        .catch(console.error);
    } else {
      axios
        .post("http://localhost:3001/hackathon/addEvent", eventData)
        .then(onSuccess)
        .catch(console.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hackathon-form">
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-textarea"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="participants" className="form-label">
          Participants:
        </label>
        <input
          type="number"
          id="participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate" className="form-label">
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate" className="form-label">
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        Save
      </button>
      <button
        type="cancel"
        className="form-button"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
    </form>
  );
};

export default HackathonForm;
