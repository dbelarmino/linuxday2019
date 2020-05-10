const express = require("express");
const ImovelController = require("./controllers/Imovel");

const routes = express.Router();

routes.get("/imovel", ImovelController.findAll);
routes.get("/imovel/:id", ImovelController.findOne);
routes.post("/imovel", ImovelController.create);
routes.put("/imovel/:id", ImovelController.update);
routes.delete("/imovel/:id", ImovelController.delete);

module.exports = routes;
