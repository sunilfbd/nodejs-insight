const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');


async function startApp() {
  const db = await connectDB();

  const app = express();
  // MIDDLEWARES
  app.use(cors());
//   app.use('/posts', postRoutes);
  app.listen(process.env.PORT)
}

startApp();