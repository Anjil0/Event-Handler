const fs = require('fs');
const path = './dataEvents.json';

// Read event data from JSON file
const readEventData = () => {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
};

// Write event data to JSON file
const writeEventData = (data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

const getAllEvents = (req, res) => {
    const events = readEventData();
    res.json(events);
};

const getEventById = (req, res) => {
    const events = readEventData();
    const event = events.find((event) => event.id === parseInt(req.params.id));
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
};

const createEvent = (req, res) => {
    console.log('Creating event');
    const events = readEventData();
    const newEvent = {
        id: events.length ? events[events.length - 1].id + 1 : 1,
        ...req.body,
    };
    events.push(newEvent);
    writeEventData(events);
    res.status(201).json(newEvent);
};

const updateEvent = (req, res) => {
    const events = readEventData();
    const index = events.findIndex((event) => event.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Event not found' });

    events[index] = { ...events[index], ...req.body };
    writeEventData(events);
    res.json(events[index]);
};

const deleteEvent = (req, res) => {
    let events = readEventData();
    events = events.filter((event) => event.id !== parseInt(req.params.id));
    writeEventData(events);
    res.status(204).end();
};

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
};
