const { DataTypes } = require('sequelize');
const db = require('./index');
const Role = require("./roles.js");
const Person = require("./person.js");

const User = db.define("User", {
  id: {
    primaryKey: true,
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "No es un email valido",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: DataTypes.STRING,
  status: DataTypes.ENUM("habilitado", "bloqueado"),
});

User.belongsToMany(Role, { through: "RolesUsers" });
Role.belongsToMany(User, { through: "RolesUsers" });
User.belongsToMany(Person, { through: "PersonUsers" });
Person.belongsToMany(User, { through: "PersonUsers" });

module.exports = User;