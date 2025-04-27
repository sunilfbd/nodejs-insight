require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    await client.connect();
    console.log('✅ MongoDB Connected Successfully');
    return client.db(process.env.DB_NAME);

  } catch (err) {
    console.error('❌ MongoDB Connection Failed:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
