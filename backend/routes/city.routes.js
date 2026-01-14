import express from "express";
import City from "../models/City.js";
import adminOnly from "../middleware/admin.middleware.js";

const router = express.Router();

// get city
router.get("/", async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cities" });
  }
});

// add city
router.post("/", adminOnly, async (req, res) => {
  try {
    const { name, image } = req.body;

    if (!name || !image) {
      return res.status(400).json({ message: "Name and image required" });
    }

    const city = await City.create({ name, image });
    res.status(201).json(city);

  } catch (err) {
    res.status(500).json({ message: "Failed to create city" });
  }
});

export default router;
