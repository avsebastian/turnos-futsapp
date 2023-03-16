const express= require('express');
const {
	createImage,
	deleteImage,
	getAllImages,
	getImageById,
	updateImage,
  } = require("../controllers/Images.js");

const imageRoutes = express.Router();

imageRoutes.get("/", getAllImages);
imageRoutes.get("/:imageId", getImageById);
imageRoutes.post("/create/", createImage);
imageRoutes.put("/:imageId", updateImage);
imageRoutes.delete("/:imageId", deleteImage);

module.exports = imageRoutes;