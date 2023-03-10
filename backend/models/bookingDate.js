const { DataTypes } = require('sequelize');
const db = require('./index');

const BookingsDate = db.define("BookingsDate", {
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

module.exports = BookingsDate;