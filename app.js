import express from 'express';
import cors from 'cors'
import connectDB from './db/connection.js'

import studentRouter from './routes/student.js';
const PORT = process.env.PORT || 5400;

async function startApp() {
  const db = await connectDB();

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/', studentRouter);
  
  app.listen(PORT, ()=>{
    console.log(`app running on port http://localhost:${PORT}`);
  });
  
}

startApp();