const express = require('express');
const {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
} = require('../controllers/hackathonController');
const router = express.Router();

router.get('/', getAllEvents);
router.post('/addEvent', createEvent);
router.get('/edit:id', getEventById);
router.delete('/delete:id', deleteEvent);
router.put('/update:id', updateEvent);

module.exports = router;
