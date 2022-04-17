import React, { useEffect, useState } from "react";
import axios from "../axios";
import TopPosts from "../components/TopPosts";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

const Tourism = () => {
	const [tourismData, setTourismData] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "...." : str;
	}
	useEffect(() => {
		axios.get("/tourism").then((res) => {
			if (res.data) {
				setLoading(false);
				setTourismData(res.data.tourismArticles);
			}
		});
	}, []);
	return (
		<div className="w-screen p-8 flex flex-col items-center">
			<div className="w-3/4 flex">
				{loading ? (
					<div className="flex w-full justify-center items-center">
						<ReactLoading
							type="bubbles"
							color="#f08080"
							height={"10%"}
							width={"10%"}
						/>
					</div>
				) : (
					<>
						<div className="w-3/4 flex flex-col">
							<div>
								<h1 className="text-3xl font-semibold">Food</h1>
								<div className="bg-red-400 w-20 h-1 mt-1"></div>
							</div>
							{tourismData.map((item) => {
								return (
									<div
										key={item.id}
										className="w-full flex h-64 border-b-2 border-slate-300 py-6 cursor-pointer"
										onClick={() =>
											navigate(`/${item.category}/article/${item.id}`, {
												state: item,
											})
										}
									>
										<img src={item.img} alt="" className="w-1/2 h-full " />
										<div className="flex flex-col h-full w-1/2 justify-between p-1 ml-2">
											<h1 className="text-xl font-bold">{item.title}</h1>
											<p className="text-base text-gray-500">
												{truncate(item.desc, 150)}
											</p>
											<p className="text-gray-400 text-lg">
												<span className=" text-black font-semibold">
													{item.category}
												</span>{" "}
												/ {item.timestamp}
											</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className="flex flex-col w-1/4 ml-12">
							<div>
								<h1 className="text-2xl font-semibold">Top Post</h1>
								<div className="bg-red-400 w-12 h-1 mt-1"></div>
							</div>
							{tourismData.map((item) => {
								return (
									<TopPosts
										key={item.id}
										id={item.id}
										title={item.title}
										state={item}
										category={item.category}
										img={item.img}
										timestamp={item.timestamp}
									/>
								);
							})}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Tourism;
