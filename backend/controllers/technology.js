const { techData } = require("../../src/data");
const getTechArticles = (req, res) => {
	res.send({ techArticles: techData });
};

module.exports.getTechArticles = getTechArticles;
