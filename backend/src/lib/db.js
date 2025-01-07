import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const database = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongodb connected: ${database.connection.host}`);
  } catch (error) {
    console.log(`mongodb connection error: ${error}`);
  }
};
