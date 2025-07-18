const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// API endpoint to check if the content should be shown
app.get('/api/check-access', (req, res) => {
    const targetDate = new Date('2025-07-24T00:00:00+05:30');
    const currentDate = new Date();
    
    if (currentDate >= targetDate) {
        res.json({ accessGranted: true });
    } else {
        res.json({ 
            accessGranted: false,
            message: 'Access denied. Content will be available on July 24, 2025 at 12:00 AM.',
            timeRemaining: {
                days: Math.floor((targetDate - currentDate) / (1000 * 60 * 60 * 24)),
                hours: Math.floor(((targetDate - currentDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor(((targetDate - currentDate) % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor(((targetDate - currentDate) % (1000 * 60)) / 1000)
            }
        });
    }
});

// Serve the main page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
