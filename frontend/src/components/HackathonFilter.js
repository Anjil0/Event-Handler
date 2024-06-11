import React, { useState } from 'react';

const HackathonFilter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter({ title, startDate, endDate });
    };

    return (
        <form onSubmit={handleFilter}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
                <label>End Date:</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <button type="submit">Filter</button>
        </form>
    );
};

export default HackathonFilter;
