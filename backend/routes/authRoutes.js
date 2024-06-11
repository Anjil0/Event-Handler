const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const USERS_FILE_PATH = './dataUsers.json';

const readUserData = () => {
    const data = fs.readFileSync(USERS_FILE_PATH);
    return JSON.parse(data);
};

const writeUserData = (data) => {
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(data, null, 2));
};

const register = (req, res) => {
    const { email, password } = req.body;
    const users = readUserData();

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user object
    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        email,
        password: hashedPassword,
    };

    // Add the new user to the users array
    users.push(newUser);

    // Write the updated user data to the JSON file
    writeUserData(users);

    res.status(201).json({ message: 'User registered successfully' });
};

router.post('/register', register);

const login = (req, res) => {
    const { email, password } = req.body;
    const users = readUserData();

    const user = users.find((user) => user.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
};

router.post('/login', login);

module.exports = router;
