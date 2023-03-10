const { DataTypes } = require('sequelize');
const db = require('./index');

const Roles = db.define("Roles", {
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

module.exports = Roles;