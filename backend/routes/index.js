const express = require("express");
const { route } = require("./bollywood");
const bollywoodRouter = require("./bollywood");
const fitnessRouter = require("./fitness");
const router = express.Router();
const foodRouter = require("./food");
const techRouter = require("./technology");
const tourismRouter = require("./tourism");

router.use("/food", foodRouter);
router.use("/tourism", tourismRouter);
router.use("/technology", techRouter);
router.use("/bollywood", bollywoodRouter);
router.use("/fitness", fitnessRouter);

module.exports = router;
