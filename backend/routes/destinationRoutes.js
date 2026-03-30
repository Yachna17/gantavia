import express from "express";
const router = express.Router();

import {
  getDestinations,
  getFeaturedDestinations,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination,
  toggleFeatured,
} from "../controllers/destinationController.js";

import { protect } from "../middleware/authMiddleware.js";

// ✅ Public routes
router.get("/", getDestinations);
router.get("/featured", getFeaturedDestinations); // 🔥 NEW
router.get("/:id", getDestinationById);

// ✅ Protected routes
router.post("/", protect, addDestination);
router.put("/:id", protect, updateDestination);
router.patch("/:id/featured", protect, toggleFeatured); // 🔥 NEW
router.delete("/:id", protect, deleteDestination);

export default router;