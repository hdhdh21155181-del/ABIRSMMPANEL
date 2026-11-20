const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/webhook', (req, res) => {
  console.log('Payment data received:', req.body);
  res.status(200).send('Webhook received successfully.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
