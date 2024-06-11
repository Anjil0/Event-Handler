import React from 'react';
import HackathonList from '../components/HackathonList';
import HackathonFilter from '../components/HackathonFilter';

const HomePage = () => {
    const handleFilter = (filters) => {
        // Implement the logic to filter events based on filters
        console.log(filters);
    };

    return (
        <div>
            <h1>Event Management</h1>
            <HackathonFilter onFilter={handleFilter} />
            <HackathonList />
        </div>
    );
};

export default HomePage;
