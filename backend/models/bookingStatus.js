const { DataTypes } = require('sequelize');
const db = require('./index');

const BookingsStatus = db.define("BookingsStatus", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,
});

module.exports = BookingsStatus;