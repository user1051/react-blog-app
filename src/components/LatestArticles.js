import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	bollywoodData,
	fitnessData,
	foodData,
	techData,
	tourismData,
} from "../data";
import Advertisement from "./Advertisement";
import TopPosts from "./TopPosts";

const LatestArticles = () => {
	const [techPost, setTechPost] = useState([]);
	const [foodPost, setFoodPost] = useState([]);
	const [bollyPost, setBollyPost] = useState([]);
	const [tourismPost, setTourismPost] = useState([]);
	const [fitnessPost, setFitnessPost] = useState([]);

	const navigate = useNavigate();
	useEffect(() => {
		setTechPost(techData[Math.floor(Math.random() * techData.length)]);
		setFoodPost(foodData[Math.floor(Math.random() * foodData.length)]);
		setBollyPost(
			bollywoodData[Math.floor(Math.random() * bollywoodData.length)]
		);
		setTourismPost(tourismData[Math.floor(Math.random() * tourismData.length)]);
		setFitnessPost(fitnessData[Math.floor(Math.random() * fitnessData.length)]);
	}, []);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "...." : str;
	}
	return (
		<div className="w-screen px-8 flex flex-col items-center mt-6">
			<div className="w-3/4 ">
				<div>
					<h1 className="text-3xl font-semibold">Latest Articles</h1>
					<div className="bg-red-400 w-16 h-1 mt-1"></div>
				</div>
				<div className="flex w-full">
					<div className="w-3/4">
						{
							<div
								className="w-full flex h-64 border-t-2 border-slate-300 mt-6 py-6 px-4 cursor-pointer"
								onClick={() =>
									navigate(
										`${tourismPost.category}/article/${tourismPost.id}`,
										{ state: tourismPost }
									)
								}
							>
								<img src={tourismPost.img} alt="" className="w-1/2 h-full " />
								<div className="flex flex-col h-full w-1/2 justify-between p-1 ml-2">
									<h1 className="text-xl font-bold">{tourismPost.title}</h1>
									<p className="text-base text-gray-500">
										{truncate(tourismPost.desc, 150)}
									</p>
									<p className="text-gray-400 text-lg">
										<span className=" text-black font-semibold">
											{tourismPost.category}
										</span>{" "}
										/ {tourismPost.timestamp}
									</p>
								</div>
							</div>
						}
						{
							<div
								className="w-full flex h-64 border-t-2 border-slate-300 py-6 px-4 cursor-pointer"
								onClick={() =>
									navigate(`${foodPost.category}/article/${foodPost.id}`, {
										state: foodPost,
									})
								}
							>
								<img src={foodPost.img} alt="" className="w-1/2 h-full " />
								<div className="flex flex-col h-full w-1/2 justify-between p-1 ml-2">
									<h1 className="text-xl font-bold">{foodPost.title}</h1>
									<p className="text-base text-gray-500">
										{truncate(foodPost.desc, 150)}
									</p>
									<p className="text-gray-400 text-lg">
										<span className=" text-black font-semibold">
											{foodPost.category}
										</span>{" "}
										/ {foodPost.timestamp}
									</p>
								</div>
							</div>
						}
						{
							<div
								className="w-full flex h-64 border-t-2 border-slate-300 py-6 px-4 cursor-pointer"
								onClick={() =>
									navigate(
										`${fitnessPost.category}/article/${fitnessPost.id}`,
										{ state: fitnessPost }
									)
								}
							>
								<img src={fitnessPost.img} alt="" className="w-1/2 h-full " />
								<div className="flex flex-col h-full w-1/2 justify-between p-1 ml-2">
									<h1 className="text-xl font-bold">{fitnessPost.title}</h1>
									<p className="text-base text-gray-500">
										{truncate(fitnessPost.desc, 150)}
									</p>
									<p className="text-gray-400 text-lg">
										<span className=" text-black font-semibold">
											{fitnessPost.category}
										</span>{" "}
										/ {fitnessPost.timestamp}
									</p>
								</div>
							</div>
						}
						{
							<div
								className="w-full flex h-64 border-t-2 border-slate-300 py-6 px-4 cursor-pointer"
								onClick={() =>
									navigate(`${techPost.category}/article/${techPost.id}`, {
										state: techPost,
									})
								}
							>
								<img src={techPost.img} alt="" className="w-1/2 h-full " />
								<div className="flex flex-col h-full w-1/2 justify-between p-1 ml-2">
									<h1 className="text-xl font-bold">{techPost.title}</h1>
									<p className="text-base text-gray-500">
										{truncate(techPost.desc, 150)}
									</p>
									<p className="text-gray-400 text-lg">
										<span className=" text-black font-semibold">
											{techPost.category}
										</span>{" "}
										/ {techPost.timestamp}
									</p>
								</div>
							</div>
						}
						{
							<div
								className="w-full flex h-64 border-t-2 border-slate-300 py-6 px-4 cursor-pointer"
								onClick={() =>
									navigate(`${bollyPost.category}/article/${bollyPost.id}`, {
										state: bollyPost,
									})
								}
							>
								<img src={bollyPost.img} alt="" className="w-1/2 h-full " />
								<div className="flex flex-col h-full w-1/2 justify-between p-1 ml-2">
									<h1 className="text-xl font-bold">{bollyPost.title}</h1>
									<p className="text-base text-gray-500">
										{truncate(bollyPost.desc, 150)}
									</p>
									<p className="text-gray-400 text-lg">
										<span className=" text-black font-semibold">
											{bollyPost.category}
										</span>{" "}
										/ {bollyPost.timestamp}
									</p>
								</div>
							</div>
						}
					</div>
					<div className="w-1/4 mt-4 ml-2">
						<div>
							<h1 className="text-2xl font-semibold">Top Posts</h1>
							<div className="bg-red-400 w-12 h-1 mt-2"></div>
						</div>
						<TopPosts
							id={tourismPost.id}
							title={tourismPost.title}
							state={tourismPost}
							category={tourismPost.category}
							img={tourismPost.img}
							timestamp={tourismPost.timestamp}
						/>
						<TopPosts
							id={foodPost.id}
							title={foodPost.title}
							state={foodPost}
							category={foodPost.category}
							img={foodPost.img}
							timestamp={foodPost.timestamp}
						/>
						<TopPosts
							id={fitnessPost.id}
							title={fitnessPost.title}
							state={fitnessPost}
							category={fitnessPost.category}
							img={fitnessPost.img}
							timestamp={fitnessPost.timestamp}
						/>
						<TopPosts
							id={techPost.id}
							title={techPost.title}
							state={techPost}
							category={techPost.category}
							img={techPost.img}
							timestamp={techPost.timestamp}
						/>
						<TopPosts
							id={bollyPost.id}
							title={bollyPost.title}
							state={bollyPost}
							category={bollyPost.category}
							img={bollyPost.img}
							timestamp={bollyPost.timestamp}
						/>
						<div className="w-full h-max mt-6 border-2 border-slate-700 flex items-center justify-center">
							<Advertisement
								slot="5889949871"
								style={{ display: "block", width: "300px", height: "250px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestArticles;
