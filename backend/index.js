// backend/index.js
import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URL } from "./config.js";
import booksRouter from "./routes/books.route.js";
import cors from "cors";

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// Routes as middleware
app.use("/api", booksRouter);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
