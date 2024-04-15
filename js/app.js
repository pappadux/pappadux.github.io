// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Set up middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
    // Extract form data from the request body
    const { firstname, lastname, phonenumber, numbertype, email, comments } = req.body;

    // Do something with the form data (e.g., save to a database, send email, etc.)
    // For now, let's just log the data to the console
    console.log('Form submitted:');
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Phone Number:', phonenumber);
    console.log('Number Type:', numbertype);
    console.log('Email:', email);
    console.log('Comments:', comments);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});