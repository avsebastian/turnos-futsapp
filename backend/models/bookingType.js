const { DataTypes } = require('sequelize');
const db = require('./index');

const BookingsType = db.define("BookingsType", {
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

module.exports = BookingsType;