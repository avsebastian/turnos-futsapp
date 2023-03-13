const { DataTypes } = require('sequelize');
const db = require('./index');
const Date = require("./date.js");
const Booking = require("./booking.js");

const BookingsDate = db.define("BookingsDate", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  }
});

BookingsDate.belongsToMany(Date, { through: "BookingsDate" });
Date.belongsToMany(BookingsDate, { through: "BookingsDate" });
BookingsDate.belongsToMany(Booking, { through: "BookingsDateBooking" });
Booking.belongsToMany(BookingsDate, { through: "BookingsDateBooking" });

module.exports = BookingsDate;