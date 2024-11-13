const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the frontend directory
app.use('/', express.static(path.join(__dirname, 'frontend/public')));
app.use('/src', express.static(path.join(__dirname, 'frontend/src')));

// Log all requests to help with debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Handle all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Serving files from: ${path.join(__dirname, 'frontend')}`);
}); 