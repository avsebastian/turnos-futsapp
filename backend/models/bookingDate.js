import { DataTypes } from "sequelize";
import db from "./index.js";

const BookingDate = db.define("BookingDate", {
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

export default BookingDate;
