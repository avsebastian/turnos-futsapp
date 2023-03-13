const { DataTypes } = require('sequelize');
const db = require('./index');
const Image = require("./image");

const Person = db.define("Person", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 50],
        msg: "No es un nombre valido",
      },
    },
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 50],
        msg: "No es un nombre valido",
      },
    },
  },
  documento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cuil: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Person.belongsToMany(Image, { through: "ImagePerson" });
Image.belongsToMany(Person, { through: "ImagePerson" });

module.exports = Person;