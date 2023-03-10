import { DataTypes } from "sequelize";
import db from "./index.js";

const Image = db.define("Image", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: DataTypes.STRING,
  Date: DataTypes.DATE,
});

export default Image;
