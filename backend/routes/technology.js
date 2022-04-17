const express = require("express");
const techRouter = express.Router();
const techController = require("../controllers/technology");

techRouter.route("/").get(techController.getTechArticles);

module.exports = techRouter;
