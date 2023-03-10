const { DataTypes } = require('sequelize');
const db = require('./index');
const SoccerField = require("./soccerField.js");

const Date = db.define("Date", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  vigente: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
});

Date.belongsToMany(SoccerField, { through: "DateSoccerField" });
SoccerField.belongsToMany(Date, { through: "DateSoccerField" });

module.exports = Date;