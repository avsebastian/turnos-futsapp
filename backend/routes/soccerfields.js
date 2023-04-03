const express= require('express');
const authorization = require('../middlewares/authorization');

const {
	createSoccerField,
	deleteSoccerField,
	getAllSoccerFields,
	getSoccerFieldById,
	updateSoccerField,
  } = require("../controllers/soccerFields.js");

const soccerfieldRoutes = express.Router();

soccerfieldRoutes.get("/", authorization, getAllSoccerFields);
soccerfieldRoutes.get("/:soccerfieldId", authorization, getSoccerFieldById);
soccerfieldRoutes.post("/create/", authorization, createSoccerField);
soccerfieldRoutes.put("/:soccerfieldId", authorization, updateSoccerField);
soccerfieldRoutes.delete("/:soccerfieldId", authorization, deleteSoccerField);

module.exports = soccerfieldRoutes;