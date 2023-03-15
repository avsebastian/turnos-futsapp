const Booking = require("../models/booking.js");

const getAllBookings = async () => {
  const bookings = await Booking.findAll();

  return bookings;
};

const getBookingById = async (bookingId) => {
  const booking = await Booking.findByPk(bookingId);

  return booking;
};

/**
 * Crea reserva
 * @param {*} userData 
 * @returns 
 */
const createBooking = async (bookingData) => {
  try {
    const booking = await Booking.create(BookingData);

    return booking;
  } catch (error) {
    return error;
  }
};

const deleteBooking = async (bookingId) => {
  try {
    const booking = await Booking.destroy({
      where: {
        id: bookingId,
      },
    });

    return booking;
  } catch (error) {
    return error;
  }
};

const updateBooking = async (bookingData, bookingId) => {
  try {
    await Booking.update(bookingData, {
      where: {
        id: bookingId,
      },
    });

    const booking = await Booking.findByPk(bookingId);

    return booking;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getAllBookings,
  createBooking,
  deleteBooking,
  updateBooking,
  getBookingById,
};
