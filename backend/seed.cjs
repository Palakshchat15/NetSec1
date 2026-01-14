require("dotenv").config();
const mongoose = require("mongoose");
const City = require("./models/City").default;

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await City.insertMany([
      {
        name: "Delhi",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5"
      },
      {
        name: "Bangalore",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2"
      }
    ]);
    console.log("Cities seeded");
    process.exit();
  });
