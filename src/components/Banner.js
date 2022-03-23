import React from "react";

const Banner = () => {
	return (
		<div className="w-screen h-screen px-8 flex flex-col items-center">
			<div className="w-3/4 items-center flex flex-col">
				<div className="flex w-full h-full">
					<div className="w-2/3 h-5/6 relative">
						<img
							src="https://xiradestinations.com/wp-content/uploads/2020/04/4.3.jpg"
							alt=""
							className="w-full h-full rounded-md"
						/>
						<h1 className="absolute top-2/3 left-12 text-3xl font-bold text-white">
							Kerela : Gods Own Country
						</h1>
						<h1 className="absolute top-2/3 left-12 text-xl font-semibold text-white mt-10">
							Tourism / 20 March 2022
						</h1>
					</div>
					<div className="w-1/3  ml-2 flex-flex-col">
						<img
							src="https://pinchofyum.com/wp-content/uploads/Broccoli-Cheese-Soup-2-400x400.jpg"
							alt=""
							className="w-full h-2/5 rounded-md"
						/>
						<img
							src="https://browngirlmagazine.com/wp-content/uploads/2019/10/imageedit_1_4707045715.png"
							alt=""
							className="w-full h-2/5 rounded-md mt-2"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
