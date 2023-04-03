const { DataTypes } = require("sequelize");
const db = require("./index.js");

const Role = db.define("Role", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,
});
// Agregar roles
Role.bulkCreate([
  { id:"1",name: 'admin', description: 'Administrador' },
  { id:"2",name: 'superadmin', description: 'Super Administrador' },
  { id:"3",name: 'user', description: 'Usuario' }
])
  .then(() => {
    console.log('Se agregaron roles correctamente');
  })
  .catch(error => {
    console.error('Error al agregar los roles', error);
  });

module.exports = Role;