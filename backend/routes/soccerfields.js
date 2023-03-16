const express= require('express');
const {
	createSoccerField,
	deleteSoccerField,
	getAllSoccerFields,
	getSoccerFieldById,
	updateSoccerField,
  } = require("../controllers/soccerFields.js");

const soccerfieldRoutes = express.Router();

soccerfieldRoutes.get("/", getAllSoccerFields);
soccerfieldRoutes.get("/:soccerfieldId", getSoccerFieldById);
soccerfieldRoutes.post("/create/", createSoccerField);
soccerfieldRoutes.put("/:soccerfieldId", updateSoccerField);
soccerfieldRoutes.delete("/:soccerfieldId", deleteSoccerField);

module.exports = soccerfieldRoutes;