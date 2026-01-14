import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import cityRoutes from "./routes/city.routes.js";
import listingRoutes from "./routes/listing.routes.js";
import bookingRoutes from "./routes/booking.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// mongo connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Mongo error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
