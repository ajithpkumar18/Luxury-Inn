import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotelRooms,
  getHotels,
  searchHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createHotel);

router.put("/:id", updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/find/:id", searchHotel);

router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
