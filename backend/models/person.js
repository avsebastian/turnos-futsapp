import { DataTypes } from "sequelize";
import db from "./index.js";

const Person = db.define("Person", {
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
  lastName: DataTypes.STRING,
  Phone: DataTypes.INTEGER,
  DNI: DataTypes.INTEGER,
});

export default Person;
