const express = require("express");
const usersRoutes = require("./users");
const bookingsRoutes = require("./bookings");
const rolesRoutes = require("./roles");
const imagesRoutes = require("./images");
const personsRoutes = require("./persons");
const soccerfieldsRoutes = require("./soccerfields");

const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/bookings", bookingsRoutes);
apiRoutes.use("/roles", rolesRoutes);
apiRoutes.use("/images", imagesRoutes);
apiRoutes.use("/persons", personsRoutes);
apiRoutes.use("/soccerfields", soccerfieldsRoutes);

module.exports = apiRoutes;