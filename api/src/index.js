const express = require('express');
const users = require('./users');

const PORT = 9000;

const app = express();

app.get('/', (req, res) => {
  res.send('DEMO API');
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const user = users.filter((user) => user.id == userId);

  console.log(user);

  res.status(200).json(user);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
