import React from 'react';
import HackathonForm from '../components/HackathonForm';

const Main = () => {
    const handleSuccess = () => {
        // Logic to handle successful form submission
        console.log('Event saved successfully');
    };

    return (
        <div>
            <h1>Create / Edit Event</h1>
            <HackathonForm onSuccess={handleSuccess} />
        </div>
    );
};

export default Main;
