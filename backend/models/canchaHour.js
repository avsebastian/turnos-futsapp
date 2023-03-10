import { DataTypes } from "sequelize";
import db from "./index.js";

const CanchaHour = db.define("CanchaHour", {
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
  Status: DataTypes.ENUM("Habilitado", "Deshabilitado"),
});

export default CanchaHour;
