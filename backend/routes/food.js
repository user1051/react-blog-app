const express = require("express");
const foodRouter = express.Router();
const foodController = require("../controllers/food");

foodRouter.route("/").get(foodController.getFoodArticles);

module.exports = foodRouter;
