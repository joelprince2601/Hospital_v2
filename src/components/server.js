const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/calculate-bill', (req, res) => {
  const { service } = req.body;

  // Define costs
  const visitCost = service === 'Doctor Visit' || service === 'Both' ? 40 : 0;
  const medCost = service === 'Meds' || service === 'Both' ? 20 : 0;
  const tax = 20;
  const total = visitCost + medCost + tax;

  // Send back calculated bill details
  res.json({ visitCost, medCost, tax, total });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
