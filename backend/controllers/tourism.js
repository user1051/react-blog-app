const { tourismData } = require("../../src/data");
const getTourismArticles = (req, res) => {
	res.send({ tourismArticles: tourismData });
};

module.exports.getTourismArticles = getTourismArticles;
