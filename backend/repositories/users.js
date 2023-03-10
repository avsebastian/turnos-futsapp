import Role from "../models/role.js";
import Booking from "../models/booking.js";
import User from "../models/user.js";
import roleRepository from "./roles.js";

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: Role
  });

  return user;
};

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    const role = await roleRepository.getRoleById(userData.roleId);

    await user.addRole(role);

    return user;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.destroy({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
};

const updateUser = async (userData, userId) => {
  try {
    await User.update(userData, {
      where: {
        id: userId,
      },
    });

    const user = await User.findByPk(userId);

    return user;
  } catch (error) {
    return error;
  }
};

const createUserBooking = async (bookingData, userId) => {
  const bookings = await Booking.create({ ...bookingData, UserId: userId });

  return bookings;
};

const getAllUserBookingsById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: {
      model: Booking,
    }
  });

  return user;
}

export default {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  createUserBooking,
  getAllUserBookingsById
};
