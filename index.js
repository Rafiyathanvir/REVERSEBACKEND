const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/reverse', (req, res) => {
  const { number } = req.body;
  const reversedNumber = number.toString().split('').reverse().join('');
  res.json({ reversedNumber });
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
