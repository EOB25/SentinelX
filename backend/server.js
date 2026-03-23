const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = [];
let devices = [];
let locations = [];
let commands = [];

// Register User
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = {
        id: uuidv4(),
        name,
        email,
        password,
        created_at: new Date()
    };

    users.push(newUser);
    res.json({ message: 'User registered', user: newUser });
});

// Register Device
app.post('/device/register', (req, res) => {
    const { userId, name, type } = req.body;

    const newDevice = {
        id: uuidv4(),
        user_id: userId,
        name,
        type,
        status: 'ACTIVE',
        last_seen: new Date()
    };

    devices.push(newDevice);
    res.json({ message: 'Device registered', device: newDevice });
});

// Update Location
app.post('/device/location', (req, res) => {
    const { deviceId, latitude, longitude } = req.body;

    const newLocation = {
        id: uuidv4(),
        device_id: deviceId,
        latitude,
        longitude,
        timestamp: new Date()
    };

    locations.push(newLocation);

    res.json({ message: 'Location updated' });
});

// Send Command
app.post('/device/command', (req, res) => {
    const { deviceId, command } = req.body;

    const newCommand = {
        id: uuidv4(),
        device_id: deviceId,
        command,
        status: 'PENDING'
    };

    commands.push(newCommand);

    res.json({ message: 'Command sent', command: newCommand });
});

// Get Commands
app.get('/device/commands/:deviceId', (req, res) => {
    const deviceCommands = commands.filter(c => c.device_id === req.params.deviceId);
    res.json(deviceCommands);
});

app.listen(3000, () => {
    console.log('🚀 SentinelX backend running on port 3000');
});