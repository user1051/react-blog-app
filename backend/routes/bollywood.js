const express = require("express");
const bollywoodRouter = express.Router();
const bollywoodController = require("../controllers/bollywood");

bollywoodRouter.route("/").get(bollywoodController.getBollywoodArticles);

module.exports = bollywoodRouter;
