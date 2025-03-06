const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to my simple Node.js API!');
});

// Sample data route
app.get('/data', (req, res) => {
    res.json({ message: 'Hello from Node.js!', data: [1, 2, 3, 4, 5] });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
