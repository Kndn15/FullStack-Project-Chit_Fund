// utils/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`📡 MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to DB: ${error.message}`);
    process.exit(1); // stop the server if DB is not connected
  }
};

module.exports = connectDB;
