const express = require('express');

const { getAllDates } = require('../controllers/date');

const dateRoutes = express.Router();

dateRoutes.get('/', getAllDates);
// dateRoutes.get("/:dateId", getdateById);
// dateRoutes.post("/create/", createdate);
// dateRoutes.put("/:dateId", updatedate);
// dateRoutes.delete("/:dateId", deletedate);

module.exports = dateRoutes;
