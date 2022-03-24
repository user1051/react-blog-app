import React from "react";
import Banner from "../components/Banner";
import Latest from "../components/Latest";
import LatestArticles from "../components/LatestArticles";

const Home = () => {
	return (
		<>
			<Banner />
			<Latest />
			<LatestArticles />
		</>
	);
};

export default Home;
