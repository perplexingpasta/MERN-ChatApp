import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to DB, ", error.message);
    process.exit(0);
  }
};

export default connectToDb;