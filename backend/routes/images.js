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
imageRoutes.post("/", createImage);
imageRoutes.put("/:imageId", updateImage);
imageRoutes.delete("/:imageId", deleteImage);

module.exports = imageRoutes;