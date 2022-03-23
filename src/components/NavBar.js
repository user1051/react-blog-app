import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const NavBar = () => {
	return (
		<div className="w-screen p-8 flex flex-col items-center">
			<div className="w-3/4 items-center flex flex-col border-b-2 border-slate-400">
				<div className="flex items-center">
					<h1 className="text-xl -rotate-90 font-semibold mr-2">The</h1>
					<h1 className="text-5xl font-bold">Siren</h1>
				</div>
				<div className="flex justify-around w-full mb-4 mt-6">
					<Link to="/" className="text-lg font-medium">
						Home
					</Link>
					<Link to="/technology" className="text-lg font-medium">
						Technology
					</Link>
					<Link to="/bollywood" className="text-lg font-medium">
						Bollywood
					</Link>
					<Link to="/fitness" className="text-lg font-medium">
						Fitness
					</Link>
					<Link to="/food" className="text-lg font-medium">
						Food
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
