const express = require("express");
const fitnessRouter = express.Router();
const fitnessController = require("../controllers/fitness");

fitnessRouter.route("/").get(fitnessController.getFitnessArticles);

module.exports = fitnessRouter;
