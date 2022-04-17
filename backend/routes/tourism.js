const express = require("express");
const tourismRouter = express.Router();
const tourismController = require("../controllers/tourism");

tourismRouter.route("/").get(tourismController.getTourismArticles);

module.exports = tourismRouter;
