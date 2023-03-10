const express = require("express");
const usersRoutes = require("./users");

const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);

module.exports = apiRoutes;