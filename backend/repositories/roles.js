const Rol = require("../models/roles.js");

const getAllRoles = async () => {
  const roles = await Rol.findAll();

  return roles;
};

const getRolById = async (rolId) => {
  const rol = await Rol.findByPk(rolId);

  return rol;
};

/**
 * Crea rol
 * @param {*} userData 
 * @returns 
 */
const createRol = async (rolData) => {
  try {
    const rol = await Rol.create(rolData);

    return rol;
  } catch (error) {
    return error;
  }
};

const deleteRol = async (rolId) => {
  try {
    const rol = await Rol.destroy({
      where: {
        id: rolId,
      },
    });

    return rol;
  } catch (error) {
    return error;
  }
};

const updateRol = async (rolData, rolId) => {
  try {
    await Rol.update(rolData, {
      where: {
        id: rolId,
      },
    });

    const rol = await Role.findByPk(rolId);

    return rol;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getAllRoles,
  createRol,
  deleteRol,
  updateRol,
  getRolById,
};
