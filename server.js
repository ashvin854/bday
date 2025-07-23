const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// API endpoint to check if the content should be shown
// This endpoint now always grants access, removing the date-based restriction.
app.get('/api/check-access', (req, res) => {
    // Always grant access as per the user's request.
    res.json({ accessGranted: true });
});

// Add /api/message endpoint to serve the birthday message
app.get('/api/message', (req, res) => {
    // Here you can add logic to control when the message is available
    // For example, you can check the current date/time and only allow access after a certain time

    // For now, always return the message
    const message = "Happy Birthday Baa! Wishing you lots of love and happiness on your special day! ❤️";

    res.json({
        success: true,
        message: message
    });
});

// Serve the main page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
