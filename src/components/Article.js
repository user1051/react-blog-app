import React from "react";
import { useLocation } from "react-router-dom";
import rythm from "../assets/rythm.svg";

const Article = () => {
	const location = useLocation();
	//console.log(location);
	let talkText = location.state.desc;
	let periods = talkText.match(/\./g, " ").length;

	let indices = [];

	for (var v = 0; v < talkText.length; v++) {
		if (talkText[v] === ". ") {
			indices.push(v);
		}
	}
	let index1 = Math.round(periods / 8);
	let index11 = indices[index1];
	let index2 = index1 * 2;
	let index22 = indices[index2];
	let index3 = index1 * 3;
	let index33 = indices[index3];
	let str1 = talkText.substring(0, index11);
	let str2 = talkText.substring(index11, index22);
	let str3 = talkText.substring(index22, index33);
	return (
		<div className="w-screen px-8 flex flex-col items-center mt-2 h-full">
			<div className="w-3/4 flex flex-col justify-center items-center h-full">
				<div className="flex flex-col w-1/2 h-full ">
					<h1 className="text-xl mb-4 font-bold">{location.state.title}</h1>

					<img src={location.state.img} alt="" className="w-full h-1/2" />

					<p className="mt-6 font-semibold">{str1}</p>
					<p className="mt-4 font-semibold">{str2}</p>
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
				</div>
			</div>
		</div>
	);
};

export default Article;
