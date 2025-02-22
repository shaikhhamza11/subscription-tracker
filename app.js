import express from 'express';
import { PORT } from './config/env.js';
import chalk from 'chalk';
import {
  authRouter,
  userRouter,
  subscriptionRouter,
} from './routes/index.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subcription', subscriptionRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Subcription Tracker API');
});

app.listen(PORT, async () => {
  console.log(
    chalk.green.bold(`Subscription Tracker API is running on:`),
    chalk.blue.underline(`http://localhost:${PORT}`),
  );
  await connectToDatabase();
});
export default app;
