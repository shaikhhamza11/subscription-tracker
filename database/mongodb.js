import mongoose from 'mongoose';
import chalk from 'chalk';
import { DB_URI, NODE_ENV } from '../config/env.js';

if (!DB_URI) {
  throw new Error(
    chalk.red(
      'Please define the MONGODB_URI variable inside .env.<development/production>.local',
    ),
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(chalk.magenta.bold(`Database connected in ${NODE_ENV} mode.`));
  } catch (error) {
    console.error(chalk.red(`Error connecting to the database: ${error}`));
    process.exit(1);
  }
};

export default connectToDatabase;
