// Create web server
// Run server
// Open browser
// Go to http://localhost:3000
// Send POST request to http://localhost:3000/comments
// Send GET request to http://localhost:3000/comments
// Send GET request to http://localhost:3000/comments/1
// Send PUT request to http://localhost:3000/comments/1
// Send DELETE request to http://localhost:3000/comments/1
// Stop server

// Step 1
// Create a new file named comments.js
// Open comments.js
// Import express
const express = require('express');
// Create an express app
const app = express();
// Define a port
const port = 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Step 2
// Create a new route that accepts POST requests
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage');
});

// Step 3
// Create a new route that accepts GET requests
app.get('/comments', (req, res) => {
  res.send('GET request to the homepage');
});

// Step 4
// Create a new route that accepts GET requests with a dynamic parameter
app.get('/comments/:id', (req, res) => {
  res.send(`GET request for comment with id ${req.params.id}`);
});

// Step 5
// Create a new route that accepts PUT requests with a dynamic parameter
app.put('/comments/:id', (req, res) => {
  res.send(`PUT request for comment with id ${req.params.id}`);
});

// Step 6
// Create a new route that accepts DELETE requests with a dynamic parameter
app.delete('/comments/:id', (req, res) => {
  res.send(`DELETE request for comment with id ${req.params.id}`);
});

// Step 7
// Stop the server
// Open the terminal
// Run the server
// Open the browser
// Go to http://localhost:3000
// Open Postman
// Send a POST request to http://localhost:3000/comments
// Send a GET request to http://localhost:3000/comments
// Send a GET request to http://localhost:3000/comments/1
// Send a PUT request to http://localhost:3000/comments/1
// Send a