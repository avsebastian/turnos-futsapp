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
  description: DataTypes.STRING,
  status: DataTypes.ENUM("pedido", "rechazado", "confirmado", "finalizado"),
});

module.exports = Bookings;