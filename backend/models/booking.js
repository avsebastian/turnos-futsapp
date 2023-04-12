const { DataTypes } = require('sequelize');
const db = require('./index');
const BookingType = require("./bookingType.js");
const BookingStatus = require("./bookingStatus.js");
const BookingDate = require("./bookingDate.js");

const Bookings = db.define("Bookings", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  cod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});
Bookings.hasMany(BookingType);
BookingType.belongsTo(Bookings);

Bookings.hasMany(BookingStatus);
BookingStatus.belongsTo(Bookings);

Bookings.hasMany(BookingDate);
BookingDate.belongsTo(Bookings);

module.exports = Bookings;