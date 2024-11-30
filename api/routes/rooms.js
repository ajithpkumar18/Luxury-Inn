import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getRoom,
  searchRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

const router = express.Router();

router.post("/:hotelid", createRoom);

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelid", deleteRoom);
router.get("/:id", verifyAdmin, searchRoom);

router.get("/", getRoom);

export default router;
