import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  type: String, // any event or movie or show or workshop
  cityId: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
  category: String,
  date: Date,
  venue: String,
  price: Number,
  image: String,
  description: String
});

export default mongoose.model("Listing", listingSchema);
