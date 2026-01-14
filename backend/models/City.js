import { Schema, model } from "mongoose";

const citySchema = new Schema({
  name: String,
  image: String
});

export default model("City", citySchema);
