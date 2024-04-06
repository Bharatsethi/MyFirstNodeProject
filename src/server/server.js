const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const users = [
  { userId: 1, userName: 'John', userAddress: '123 Main St', userDescription: 'Lorem ipsum' },
  { userId: 2, userName: 'Neha', userAddress: '456 Elm St', userDescription: 'Dolor sit amet' },
  // Add more users as needed
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});