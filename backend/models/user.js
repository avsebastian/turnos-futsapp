import { DataTypes } from "sequelize";
import db from "./index.js";
import Role from "./role.js";
import Booking from "./booking.js";

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
  lastName: DataTypes.STRING,
  status: DataTypes.ENUM("habilitado", "bloqueado"),
});

User.hasMany(Booking);
Booking.belongsTo(User);
User.belongsToMany(Role, { through: "RolesUsers" });
Role.belongsToMany(User, { through: "RolesUsers" });

export default User;
