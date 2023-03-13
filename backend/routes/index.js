const express = require("express");
const usersRoutes = require("./users");
const rolesRoutes = require("./roles");

const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/roles", rolesRoutes);

module.exports = apiRoutes;