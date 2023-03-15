const express= require('express');
const {
	createPerson,
	deletePerson,
	getAllPersons,
	getPersonById,
	updatePerson,
  } = require("../controllers/Persons.js");

const personRoutes = express.Router();

personRoutes.get("/", getAllPersons);
personRoutes.get("/:personId", getPersonById);
personRoutes.post("/", createPerson);
personRoutes.put("/:personId", updatePerson);
personRoutes.delete("/:personId", deletePerson);

module.exports = personRoutes;