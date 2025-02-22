import express from 'express';
import { PORT } from './config/env.js';
import chalk from 'chalk';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Subcription Tracker API');
});

app.listen(PORT, () => {
  console.log(
    chalk.green.bold(`✅ Subscription Tracker API is running on:`),
    chalk.blue.underline(`http://localhost:${PORT}`),
  );
});
export default app;
