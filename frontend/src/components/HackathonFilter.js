import React, { useState } from 'react';
import '../css/HackathonFilter.css'; // Import the CSS file

const HackathonFilter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleFilter = () => {
        onFilter({ title, startDate, endDate });
    };

    return (
        <div className="hackathon-filter-container">
            <h2 className="hackathon-filter-title">Filter Events</h2>
            <div className="hackathon-filter-form">
                <div className="hackathon-filter-group">
                    <label htmlFor="title" className="hackathon-filter-label">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="hackathon-filter-input"
                    />
                </div>
                <div className="hackathon-filter-group">
                    <label htmlFor="startDate" className="hackathon-filter-label">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="hackathon-filter-input"
                    />
                </div>
                <div className="hackathon-filter-group">
                    <label htmlFor="endDate" className="hackathon-filter-label">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="hackathon-filter-input"
                    />
                </div>
                <button onClick={handleFilter} className="hackathon-filter-button">Apply Filter</button>
            </div>
        </div>
    );
};

export default HackathonFilter;