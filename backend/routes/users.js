import { Router } from "express";
import {
  createUser,
  createUserBooking,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  getAllBookingsByUserId
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/", createUser);
userRoutes.put("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.post("/:userId/booking", createUserBooking)
userRoutes.get("/:userId/booking", getAllBookingsByUserId)

export default userRoutes;
