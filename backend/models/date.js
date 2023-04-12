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
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  currently: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
});
Date.hasMany(SoccerField);
SoccerField.belongsTo(Date);

module.exports = Date;