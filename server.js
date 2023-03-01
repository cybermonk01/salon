import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
const PORT = 5000 || process.env.PORT;

const connect = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("error", error);
  }
};

connect();
app.listen(PORT, () => {
  console.log(`app is listening on port : ${PORT}`);
});
