const express = require('express');

const app = express();
app.use(express.json());

// Mean route
app.get('/mean', (req, res) => {
  const nums = req.query.nums;
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }
  const numbers = nums.split(',').map(Number);
  if (numbers.some(isNaN)) {
    return res.status(400).json({ error: 'Invalid number(s) provided' });
  }
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  res.status(200).json({ operation: 'mean', value: mean });
});

// Median route
app.get('/median', (req, res) => {
  const nums = req.query.nums;
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }
  const numbers = nums.split(',').map(Number);
  if (numbers.some(isNaN)) {
    return res.status(400).json({ error: 'Invalid number(s) provided' });
  }
  const sorted = numbers.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0
      ? (sorted[middle - 1] + sorted[middle]) / 2
      : sorted[middle];
  res.status(200).json({ operation: 'median', value: median });
});

// Mode route
app.get('/mode', (req, res) => {
  const nums = req.query.nums;
  if (!nums) {
    return res.status(400).json({ error: 'nums are required' });
  }
  const numbers = nums.split(',').map(Number);
  if (numbers.some(isNaN)) {
    return res.status(400).json({ error: 'Invalid number(s) provided' });
  }
  const counts = {};
  let maxCount = 0;
  let mode = [];
  numbers.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = [num];
    } else if (counts[num] === maxCount) {
      mode.push(num);
    }
  });
  res.status(200).json({ operation: 'mode', value: mode });
});

app.listen(3000, function () {
  console.log('App on port 3000');
});
