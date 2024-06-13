const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/receive-token', (req, res) => {
    const { session_token } = req.body; // Extract session_token from the JSON object
    console.log('Received access token:', session_token);
    res.send('Token received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
