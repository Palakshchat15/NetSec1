import express from "express";
import Listing from "../models/Listing.js";
import adminOnly from "../middleware/admin.middleware.js";

const router = express.Router();

// next 30 days and search
router.get("/", async (req, res) => {
  const { cityId, type, search, minPrice, maxPrice } = req.query;

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setDate(today.getDate() + 30);

  let query = {
    cityId,
    type,
    date: { $gte: today, $lte: nextMonth }
  };

  if (search) query.title = { $regex: search, $options: "i" };
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;
  }

  res.json(await Listing.find(query));
});

router.get("/:id", async (req, res) => {
  res.json(await Listing.findById(req.params.id));
});

router.post("/", adminOnly, async (req, res) => {
  const event = await Listing.create(req.body);
  res.status(201).json(event);
});
router.get("/admin/all", adminOnly, async (req, res) => {
  const listings = await Listing.find().sort({ createdAt: -1 });
  res.json(listings);
});
router.delete("/:id", adminOnly, async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
});

router.put("/:id", adminOnly, async (req, res) => {
  const updated = await Listing.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

export default router;
