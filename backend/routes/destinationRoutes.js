import express from "express";
import { getAll, getOne } from "../controllers/destinationController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

export default router;