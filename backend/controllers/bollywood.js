const { bollywoodData } = require("../../src/data");
const getBollywoodArticles = (req, res) => {
	res.send({ bollywoodArticles: bollywoodData });
};

module.exports.getBollywoodArticles = getBollywoodArticles;
