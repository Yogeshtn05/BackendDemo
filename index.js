import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute.js'; // Import your router

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Body parser middleware for JSON data

// Routes
app.use('/api', userRouter); // API routes defined in userRoute.js

// Connect to MongoDB
const PORT = process.env.PORT || 3500;
const MONGO_URI = process.env.MONGO_URL  // MongoDB connection URL
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log('Server running on port ',{PORT});
    });
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });
