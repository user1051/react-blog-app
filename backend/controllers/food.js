const { foodData } = require("../../src/data");
const getFoodArticles = (req, res) => {
	res.send({ foodArticles: foodData });
};

module.exports.getFoodArticles = getFoodArticles;
