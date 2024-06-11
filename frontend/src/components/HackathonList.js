import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HackathonList = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/lists')
            .then((response) => {
                setLists(response.data);
            })
            .catch((error) => {
                console.error('Error fetching the Hackathon lists!', error);
            });
    }, []);

    return (
        <div>
            <h1>Hackathon Events</h1>
            <ul>
                {lists.map(list => (
                    <li key={list.id}>
                        <h2>{list.title}</h2>
                        <p>{list.description}</p>
                        <p>Participants: {list.participants}</p>
                        <p>Start Date: {list.startDate}</p>
                        <p>End Date: {list.endDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HackathonList;
