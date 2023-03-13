const express= require('express');
const {
	createRol,
	deleteRol,
	getAllRoles,
	getRolById,
	updateRol,
  } = require("../controllers/roles.js");

const rolRoutes = express.Router();

rolRoutes.get("/", getAllRoles);
rolRoutes.get("/:rolId", getRolById);
rolRoutes.post("/", createRol);
rolRoutes.put("/:rolId", updateRol);
rolRoutes.delete("/:rolId", deleteRol);

module.exports = rolRoutes;