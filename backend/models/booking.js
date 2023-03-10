import { DataTypes } from "sequelize";
import db from "./index.js";

const Booking = db.define("Booking", {
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
  estado: DataTypes.ENUM("creado", "en proceso", "finalizado"),
});

export default Booking;
