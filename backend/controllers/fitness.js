const { fitnessData } = require("../../src/data");
const getFitnessArticles = (req, res) => {
	res.send({ fitnessArticles: fitnessData });
};

module.exports.getFitnessArticles = getFitnessArticles;
