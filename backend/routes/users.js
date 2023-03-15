const express= require('express');
const {
	createUser,
	createUserBooking,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
	getAllBookingsByUserId
  } = require("../controllers/users.js");

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/", createUser);
userRoutes.put("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.post("/:userId/booking", createUserBooking)
userRoutes.get("/:userId/bookings", getAllBookingsByUserId)

module.exports = userRoutes;