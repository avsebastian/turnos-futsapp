const { DataTypes } = require('sequelize');
const db = require('./index');

const Bookings = db.define("Bookings", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: DataTypes.STRING,
});

module.exports = Bookings;