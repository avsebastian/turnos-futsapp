const { DataTypes } = require('sequelize');
const db = require('./index');
const Image = require("./image");
const SoccerFieldType = require("./soccerFieldType.js");

const SoccerField = db.define("SoccerField", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,

  amountPlayers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

SoccerField.belongsToMany(Image, { through: "ImageSoccerField" });
Image.belongsToMany(SoccerField, { through: "ImageSoccerField" });
SoccerField.belongsToMany(SoccerFieldType, { through: "ImageSoccerField" });
SoccerFieldType.belongsToMany(SoccerField, { through: "ImageSoccerField" });

module.exports = SoccerField;