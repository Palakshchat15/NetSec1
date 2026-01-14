import express from "express";
import Booking from "../models/Booking.js";
import Listing from "../models/Listing.js";
import { protect } from "../middleware/auth.js";


const router = express.Router();

//creation
router.post("/", protect, async (req, res) => {
  const { eventId, seats } = req.body;

  const event = await Listing.findById(eventId);
  if (!event) return res.status(404).json({ message: "Event not found" });

  const totalAmount = seats * event.price;

  const booking = await Booking.create({
    userId: req.user.id,
    eventId,
    seats,
    totalAmount,
  });

  res.status(201).json(booking);
});

// fetch bookings
router.get("/my", protect, async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id })
    .populate("eventId");

  res.json(bookings);
});

export default router;
