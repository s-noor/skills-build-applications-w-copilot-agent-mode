import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: Error) => {
    console.error('MongoDB connection error:', error.message);
  });

// Basic route
app.get('/health', (_req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker Backend is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
