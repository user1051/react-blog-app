import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import rythm from "../assets/rythm.svg";
import { foodData, techData, tourismData } from "../data";

const Article = () => {
	const location = useLocation();
	const [tourismPost, setTourismPost] = useState([]);
	const [techPost, setTechPost] = useState([]);
	const [foodPost, setFoodPost] = useState([]);

	const navigate = useNavigate();
	useEffect(() => {
		setTechPost(techData[Math.floor(Math.random() * techData.length)]);
		setFoodPost(foodData[Math.floor(Math.random() * foodData.length)]);

		setTourismPost(tourismData[Math.floor(Math.random() * tourismData.length)]);
	}, []);

	return (
		<div className="w-screen px-8 flex flex-col items-center mt-2 h-full">
			<div className="w-3/4 flex flex-col justify-center items-center h-full">
				<div className="flex flex-col w-1/2 h-max">
					<h1 className="text-xl mb-4 font-bold">{location.state.title}</h1>

					<img src={location.state.img} alt="" className="w-full h-1/2" />

					<p className="mt-6 font-semibold">{location.state.desc}</p>
				</div>
				<div className="flex w-1/2 mt-6 pb-4 justify-between items-center border-b-2 border-slate-400">
					<div className="bg-gray-300 p-2 rounded">
						<p className="text-base text-slate-600">
							{location.state.category}
						</p>
					</div>
					<div className="flex items-center">
						<img src={rythm} alt="" className="w-6 h-6 mr-2 cursor-pointer" />
						<h1 className="font-bold">95K</h1>
					</div>
				</div>
				<div className="w-1/2 justify-start my-4">
					<div className="flex items-center">
						<img src={require("../assets/avatar.png")} alt="" />
						<div className="flex flex-col ml-3">
							<h2 className="text-slate-500 font-semibold">WRITTEN BY</h2>
							<h2 className="text-black font-bold">Mike Ross</h2>
							<h2 className="text-slate-500 font-semibold">
								{location.state.timestamp}
							</h2>
						</div>
					</div>
				</div>

				<div className="w-full mt-4">
					<h1 className="text-black font-bold text-2xl">More From The Siren</h1>
					<div className="flex justify-between w-full border-t-2 border-slate-400 my-6">
						<div
							className="flex flex-col w-1/3 h-full cursor-pointer mt-12"
							onClick={() =>
								navigate(`/${tourismPost.category}/article/${tourismPost.id}`, {
									state: tourismPost,
								})
							}
						>
							<h1 className="font-semibold text-gray-400">Related Reads</h1>
							<img src={tourismPost.img} alt="" className="h-56 mt-2" />
							<div className="my-4">
								<h1 className="font-bold text-xl">{tourismPost.title}</h1>
							</div>
							<div className="justify-start">
								<div className="flex items-center">
									<img
										src={require("../assets/avatar.png")}
										alt=""
										className="h-20 w-20"
									/>
									<div className="flex flex-col ml-3">
										<h2 className="text-black font-bold">Mike Ross</h2>
										<h2 className="text-slate-500 font-semibold">
											{tourismPost.timestamp}
										</h2>
									</div>
								</div>
							</div>
						</div>

						<div
							className="flex flex-col w-1/3 h-full cursor-pointer mt-12 mx-8"
							onClick={() =>
								navigate(`/${techPost.category}/article/${techPost.id}`, {
									state: techPost,
								})
							}
						>
							<h1 className="font-semibold text-gray-400">Related Reads</h1>
							<img src={techPost.img} alt="" className="h-56 mt-2" />
							<div className="my-4">
								<h1 className="font-bold text-xl">{techPost.title}</h1>
							</div>
							<div className="justify-start">
								<div className="flex items-center">
									<img
										src={require("../assets/avatar.png")}
										alt=""
										className="h-20 w-20"
									/>
									<div className="flex flex-col ml-3">
										<h2 className="text-black font-bold">Mike Ross</h2>
										<h2 className="text-slate-500 font-semibold">
											{techPost.timestamp}
										</h2>
									</div>
								</div>
							</div>
						</div>

						<div
							className="flex flex-col w-1/3 h-full cursor-pointer mt-12"
							onClick={() =>
								navigate(`/${foodPost.category}/article/${foodPost.id}`, {
									state: foodPost,
								})
							}
						>
							<h1 className="font-semibold text-gray-400">Related Reads</h1>
							<img src={foodPost.img} alt="" className="h-56 mt-2" />
							<div className="my-4">
								<h1 className="font-bold text-xl">{foodPost.title}</h1>
							</div>
							<div className="justify-start">
								<div className="flex items-center">
									<img
										src={require("../assets/avatar.png")}
										alt=""
										className="h-20 w-20"
									/>
									<div className="flex flex-col ml-3">
										<h2 className="text-black font-bold">Mike Ross</h2>
										<h2 className="text-slate-500 font-semibold">
											{foodPost.timestamp}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
