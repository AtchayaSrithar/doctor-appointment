// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectToDB = () => {
//   const dbURI = process.env.MONGO_DB;

//   if (!dbURI) return console.error('MongoDB URI is not defined') & process.exit(1);

//   mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => {
//       console.error(`Error: ${err.message}`);
//       process.exit(1);
//     });
// };

// module.exports = connectToDB;

// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Use the new connection management engine
    });
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  // Exit the process if the connection fails
  }
};

module.exports = connectDB;
