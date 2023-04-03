const express = require("express");
const apiRoutes = require("./routes");
const db = require("./models");
const app = express();
const config = require("./config.js")


app.use(express.json()); //aceptar recibir y enviar json en nuestra api

app.use("/api", apiRoutes);

app.get("/api", (req, res) => {
	res.send("Bienvenido a la api, Registrate!!");
})

db.sync().then(() => {
	console.log("Conectado a la base de datos")
}).catch(() => {
	console.log("Hubo un error al conectarse a la base de datos")
})

app.listen(config.SERVER_PORT, "localhost", () => {
	console.log("Servidor funcionando en puerto", process.env.SERVER_PORT);
});