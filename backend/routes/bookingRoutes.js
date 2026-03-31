import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// POST booking
router.post("/", async (req, res) => {
  console.log("Incoming booking data:", req.body); // 👈 ADD THIS

  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error); // 👈 ADD THIS
    res.status(500).json({ success: false });
  }
});

export default router;