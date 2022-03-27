import React from "react";
import Banner from "../components/Banner";
import Latest from "../components/Latest";
import LatestArticles from "../components/LatestArticles";
import LatestStories from "../components/LatestStories";

const Home = () => {
	return (
		<>
			<Banner />
			<Latest />
			<LatestArticles />
			<LatestStories />
		</>
	);
};

export default Home;
