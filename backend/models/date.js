import { DataTypes } from "sequelize";
import db from "./index.js";

const Date = db.define("Date", {
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

export default Date;
