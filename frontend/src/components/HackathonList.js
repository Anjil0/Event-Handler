import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/HackathonList.css'; // Import the CSS file

const HackathonList = ({ filters }) => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/hackathon/')
            .then((response) => {
                setLists(response.data);
            })
            .catch((error) => {
                console.error('Error fetching the Hackathon lists!', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/hackathon/delete${id}`)
            .then(() => {
                setLists(lists.filter(list => list.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting the Hackathon list!', error);
            });
    };

    const filteredLists = lists.filter((list) => {
        return (
            (!filters.title || list.title.includes(filters.title)) &&
            (!filters.startDate || new Date(list.startDate) >= new Date(filters.startDate)) &&
            (!filters.endDate || new Date(list.endDate) <= new Date(filters.endDate))
        );
    });

    return (
        <div className="hackathon-list-container">
            <h1 className="hackathon-list-title">Hackathon Events</h1>
            <Link to={"/addHackathonEvent"} className="add-event-link">
                ADD New Event
            </Link>
            <ul className="hackathon-list">
                {filteredLists.map(list => (
                    <li key={list.id} className="hackathon-list-item">
                        <h2 className="hackathon-title">{list.title}</h2>
                        <p className="hackathon-description">{list.description}</p>
                        <p className="hackathon-participants">Participants: {list.participants}</p>
                        <p className="hackathon-date">Start Date: {list.startDate}</p>
                        <p className="hackathon-date">End Date: {list.endDate}</p>
                        <div className="hackathon-actions">
                            <button onClick={() => handleDelete(list.id)} className="delete-button">
                                Delete
                            </button>
                            <Link to={`/editHackathonEvent/${list.id}`} className="edit-link">
                                Edit
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HackathonList;