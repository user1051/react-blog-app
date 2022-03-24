import React from "react";

const Banner = () => {
	return (
		<div className="w-screen px-8 flex flex-col items-center ">
			<div className="flex w-3/4 ">
				<div className="w-2/3 relative">
					<img
						src="https://xiradestinations.com/wp-content/uploads/2020/04/4.3.jpg"
						alt=""
						className="w-full h-5/6 rounded-md cursor-pointer"
					/>
					<h1 className="absolute top-1/2 left-12 text-3xl font-bold text-white">
						Kerela : Gods Own Country
					</h1>
					<h1 className="absolute top-1/2 left-12 text-xl font-semibold text-white mt-12">
						Tourism / 20 March 2022
					</h1>
				</div>
				<div className="w-1/3 ml-4 flex-flex-col">
					<img
						src="https://pinchofyum.com/wp-content/uploads/Broccoli-Cheese-Soup-2-400x400.jpg"
						alt=""
						className="w-full h-2/5 rounded-md cursor-pointer"
					/>
					<img
						src="https://browngirlmagazine.com/wp-content/uploads/2019/10/imageedit_1_4707045715.png"
						alt=""
						className="w-full h-2/5 rounded-md mt-4 cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
