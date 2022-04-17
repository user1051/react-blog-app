import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestStories = () => {
	const [tourismPost, setTourismPost] = useState([]);
	const [fitnessPost, setFitnessPost] = useState([]);
	const [bollyPost, setBollyPost] = useState([]);
	const navigate = useNavigate();
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "...." : str;
	}
	useEffect(() => {
		axios
			.get("/bollywood")
			.then((res) =>
				setBollyPost(
					res.data.bollywoodArticles[
						Math.floor(Math.random() * res.data.bollywoodArticles.length)
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
		axios
			.get("/tourism")
			.then((res) =>
				setTourismPost(
					res.data.tourismArticles[
						Math.floor(Math.random() * res.data.tourismArticles.length)
					]
				)
			);
	}, []);
	return (
		<div className="w-screen px-8 flex flex-col items-center mt-6">
			<div className="w-3/4 ">
				<div>
					<h1 className="text-3xl font-semibold">Latest Stories</h1>
					<div className="bg-red-400 w-16 h-1 mt-1"></div>
				</div>
				<div className="w-full flex justify-between pt-6 border-t-2 border-slate-300 mt-6">
					{
						<div
							className="flex flex-col w-1/3 h-full cursor-pointer mx-2"
							onClick={() =>
								navigate(`/${fitnessPost.category}/article/${fitnessPost.id}`, {
									state: fitnessPost,
								})
							}
						>
							<img
								src={fitnessPost.img}
								alt=""
								className="h-48 rounded-tl-md rounded-tr-md"
							/>
							<div className="p-4">
								<h1 className="font-bold text-xl">{fitnessPost.title}</h1>
								<p className="mt-4">{truncate(fitnessPost.desc, 240)}</p>
								<p className="text-base mt-6">
									<span className="font-bold">{fitnessPost.category}</span> /{" "}
									{fitnessPost.timestamp}
								</p>
							</div>
						</div>
					}
					{
						<div
							className="flex flex-col w-1/3 h-full cursor-pointer mx-2"
							onClick={() =>
								navigate(`/${bollyPost.category}/article/${bollyPost.id}`, {
									state: bollyPost,
								})
							}
						>
							<img
								src={bollyPost.img}
								alt=""
								className="h-48 rounded-tl-md rounded-tr-md"
							/>
							<div className="p-4">
								<h1 className="font-bold text-xl">{bollyPost.title}</h1>
								<p className="mt-4">{truncate(bollyPost.desc, 240)}</p>
								<p className="text-base mt-6">
									<span className="font-bold">{bollyPost.category}</span> /{" "}
									{bollyPost.timestamp}
								</p>
							</div>
						</div>
					}
					{
						<div
							className="flex flex-col w-1/3 h-full cursor-pointer mx-2"
							onClick={() =>
								navigate(`/${tourismPost.category}/article/${tourismPost.id}`, {
									state: tourismPost,
								})
							}
						>
							<img
								src={tourismPost.img}
								alt=""
								className="h-48 rounded-tl-md rounded-tr-md"
							/>
							<div className="p-4">
								<h1 className="font-bold text-xl">{tourismPost.title}</h1>
								<p className="mt-4">{truncate(tourismPost.desc, 240)}</p>
								<p className="text-base mt-6">
									<span className="font-bold">{tourismPost.category}</span> /{" "}
									{tourismPost.timestamp}
								</p>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

export default LatestStories;
