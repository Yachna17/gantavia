import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  location: String,
  price: Number,
});

export default mongoose.model("Destination", destinationSchema);