const express= require('express');
const {
	createUser,
	createUserBooking,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
	getAllBookingsByUserId,
	login
  } = require("../controllers/users.js");

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/create/", createUser);
userRoutes.put("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.post("/:userId/booking/create/", createUserBooking);
userRoutes.get("/:userId/bookings", getAllBookingsByUserId);
userRoutes.post("/login", login);

module.exports = userRoutes;