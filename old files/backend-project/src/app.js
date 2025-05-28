const express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
setRoutes(app);

// Add this POST route for your contact form:
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', name, email, message);
    res.send('Thank you for your message!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});