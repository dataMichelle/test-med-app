require("dotenv").config();

const mongoose = require("mongoose");

// Set your MongoDB URI here
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async (retryCount) => {
  const MAX_RETRIES = 3;
  const count = retryCount ?? 0;
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    if (count < MAX_RETRIES) {
      console.log(
        `Retrying MongoDB connection (${count + 1}/${MAX_RETRIES})...`
      );
      await connectToMongo(count + 1);
    } else {
      console.error("Failed to connect to MongoDB:", err);
      process.exit(1);
    }
  }
};

module.exports = connectToMongo;
