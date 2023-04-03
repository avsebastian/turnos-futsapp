const { DataTypes } = require('sequelize');
const db = require('./index');

const SoccerFieldType = db.define("SoccerFieldType", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  type: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = SoccerFieldType;