import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bollywoodData, foodData, techData } from "../data";

const Latest = () => {
	const [techPost, setTechPost] = useState([]);
	const [foodPost, setFoodPost] = useState([]);
	const [bollyPost, setBollyPost] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		setTechPost(techData[Math.floor(Math.random() * techData.length)]);
		setFoodPost(foodData[Math.floor(Math.random() * foodData.length)]);
		setBollyPost(
			bollywoodData[Math.floor(Math.random() * bollywoodData.length)]
		);
	}, []);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "...." : str;
	}
	return (
		<div className="w-screen px-8 flex flex-col items-center -mt-6">
			<div className="w-3/4">
				<div>
					<h1 className="text-3xl font-semibold">The Latest</h1>
					<div className="bg-red-400 w-20 h-1 mt-1"></div>
				</div>
				<div className="mt-6 flex justify-between">
					{
						<div
							className="flex flex-col w-1/3 cursor-pointer mx-2"
							onClick={() =>
								navigate(`/${techPost.category}/${techPost.id}`, {
									state: techPost,
								})
							}
						>
							<img
								src={techPost.img}
								alt=""
								className="h-1/3 rounded-tl-md rounded-tr-md"
							/>
							<div className="p-4">
								<h1 className="font-bold text-xl">{techPost.title}</h1>
								<p className="mt-4">{truncate(techPost.desc, 240)}</p>
								<p className="text-base mt-6">
									<span className="font-bold">{techPost.category}</span> /{" "}
									{techPost.timestamp}
								</p>
							</div>
						</div>
					}
					{
						<div
							className="flex flex-col w-1/3 cursor-pointer mx-2"
							onClick={() =>
								navigate(`/${foodPost.category}/${foodPost.id}`, {
									state: foodPost,
								})
							}
						>
							<img
								src={foodPost.img}
								alt=""
								className="h-1/3 rounded-tl-md rounded-tr-md"
							/>
							<div className="p-4">
								<h1 className="font-bold text-xl">{foodPost.title}</h1>
								<p className="mt-4">{truncate(foodPost.desc, 240)}</p>
								<p className="text-base mt-6">
									<span className="font-bold ">{foodPost.category}</span> /{" "}
									{foodPost.timestamp}
								</p>
							</div>
						</div>
					}
					{
						<div
							className="flex flex-col w-1/3 cursor-pointer mx-2"
							onClick={() =>
								navigate(`/${bollyPost.category}/${bollyPost.id}`, {
									state: bollyPost,
								})
							}
						>
							<img
								src={bollyPost.img}
								alt=""
								className="h-1/3 rounded-tl-md rounded-tr-md"
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
				</div>
			</div>
		</div>
	);
};

export default Latest;
