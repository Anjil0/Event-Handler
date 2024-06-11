import React, { useState } from 'react';
import axios from 'axios';

const HackathonForm = ({ event, onSuccess }) => {
    const [title, setTitle] = useState(event ? event.title : '');
    const [description, setDescription] = useState(event ? event.description : '');
    const [participants, setParticipants] = useState(event ? event.participants : '');
    const [startDate, setStartDate] = useState(event ? event.startDate : '');
    const [endDate, setEndDate] = useState(event ? event.endDate : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        const eventData = {
            title,
            description,
            participants,
            startDate,
            endDate,
        };

        if (event) {
            axios.put(`http://localhost:3001/events/${event.id}`, eventData)
                .then(onSuccess)
                .catch(console.error);
        } else {
            axios.post('http://localhost:3001/events', eventData)
                .then(onSuccess)
                .catch(console.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Participants:</label>
                <input type="number" value={participants} onChange={(e) => setParticipants(e.target.value)} required />
            </div>
            <div>
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div>
                <label>End Date:</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default HackathonForm;
