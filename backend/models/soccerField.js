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
// Agregar canchas predeterminadas
SoccerField.bulkCreate([
  { id:"1",name: 'futbol5', description: '5 jugadores', amountPlayers: '5'},
  { id:"2",name: 'futbol6', description: '6 jugadores',amountPlayers: '6'},
  { id:"3",name: 'futbol11', description: '11 jugadores',amountPlayers: '11'}
])
  .then(() => {
    console.log('Se agregaron canchas correctamente');
  })
  .catch(error => {
    console.error('Error al agregar canchas', error);
  });

SoccerField.belongsToMany(Image, { through: "ImageSoccerField" });
Image.belongsToMany(SoccerField, { through: "ImageSoccerField" });
SoccerField.belongsToMany(SoccerFieldType, { through: "ImageSoccerField" });
SoccerFieldType.belongsToMany(SoccerField, { through: "ImageSoccerField" });

module.exports = SoccerField;