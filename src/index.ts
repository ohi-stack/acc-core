import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'acc-core running' });
});

app.listen(4100, () => {
  console.log('ACC Core running on port 4100');
});
