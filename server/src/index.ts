import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { connectDB } from './config/database';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', database: 'connected' });
});

const PORT = process.env.PORT || 5000;

// Connect to database then start server
const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer().catch(console.error);
