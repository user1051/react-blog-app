import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const [tourismPost, setTourismPost] = useState([]);
	const [fitnessPost, setFitnessPost] = useState([]);
	const [foodPost, setFoodPost] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("/food")
			.then((res) =>
				setFoodPost(
					res.data.foodArticles[
						Math.floor(Math.random() * res.data.foodArticles.length)
					]
				)
			);
		axios
			.get("/tourism")
			.then((res) =>
				setTourismPost(
					res.data.tourismArticles[
						Math.floor(Math.random() * res.data.tourismArticles.length)
					]
				)
			);
		axios
			.get("/fitness")
			.then((res) =>
				setFitnessPost(
					res.data.fitnessArticles[
						Math.floor(Math.random() * res.data.fitnessArticles.length)
					]
				)
			);
	}, []);

	return (
		<div className="w-screen px-8 flex flex-col items-center ">
			<div className="flex w-3/4">
				<div
					className="w-2/3 relative"
					onClick={() =>
						navigate(`/${tourismPost.category}/article/${tourismPost.id}`, {
							state: tourismPost,
						})
					}
				>
					<img
						src={tourismPost.img}
						alt=""
						className="w-full h-5/6 rounded-md cursor-pointer"
					/>
					<h1 className="absolute top-1/2 left-12 text-3xl font-bold text-white">
						{tourismPost.title}
					</h1>
					<p className="absolute top-1/2 left-12 text-xl font-semibold text-white mt-12">
						<span>{tourismPost.category}</span> / {tourismPost.timestamp}
					</p>
				</div>
				<div className="w-1/3 ml-4 flex-flex-col">
					<img
						src={foodPost.img}
						alt=""
						className="w-full h-2/5 rounded-md cursor-pointer"
						onClick={() =>
							navigate(`/${foodPost.category}/article/${foodPost.id}`, {
								state: foodPost,
							})
						}
					/>
					<img
						src={fitnessPost.img}
						alt=""
						className="w-full h-2/5 rounded-md mt-4 cursor-pointer"
						onClick={() =>
							navigate(`/${fitnessPost.category}/article/${fitnessPost.id}`, {
								state: fitnessPost,
							})
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
