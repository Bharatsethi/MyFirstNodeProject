// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Sample user data
const users = [
  { userId: 1, userName: 'John', userAddress: '123 Main St', userDescription: 'Lorem ipsum dolor sit amet' },
  { userId: 2, userName: 'Jane', userAddress: '456 Elm St', userDescription: 'Consectetur adipiscing elit' },
  { userId: 1, userName: 'Bharat Sethi', userAddress: 'Australias', userDescription: 'Lorem ipsum dolor sit amet' },
  { userId: 2, userName: 'Rita', userAddress: 'Delhi', userDescription: 'Consectetur adipiscing elit' }
];

// Endpoint to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
