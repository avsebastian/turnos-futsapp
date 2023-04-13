const { DataTypes } = require('sequelize');
const db = require('./index');
const BookingType = require("./bookingType.js");
const BookingStatus = require("./bookingStatus.js");
const SoccerField = require("./soccerField.js");
const Date = require("./date.js");


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
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});
Bookings.hasMany(BookingType);
BookingType.belongsTo(Bookings);

Bookings.hasMany(BookingStatus);
BookingStatus.belongsTo(Bookings);

SoccerField.hasMany(Bookings);
Bookings.belongsTo(SoccerField);

Date.hasMany(Bookings);
Bookings.belongsTo(Date);

module.exports = Bookings;