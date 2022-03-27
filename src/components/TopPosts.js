import { useNavigate } from "react-router-dom";

const TopPosts = ({ id, title, category, timestamp, img, state }) => {
	const navigate = useNavigate();

	return (
		<div
			className="w-full flex h-max border-b-2 border-slate-300 py-6 cursor-pointer"
			onClick={() =>
				navigate(`${category}/article/${id}`, {
					state: state,
				})
			}
		>
			<img src={img} alt="" className="w-1/2 h-full " />
			<div className="flex flex-col h-full w-1/2 justify-between p-px ml-2">
				<h1 className="text-sm font-bold">{title}</h1>

				<p className="text-gray-400 text-sm">
					<span className=" text-black font-semibold">{category}</span> /{" "}
					{timestamp}
				</p>
			</div>
		</div>
	);
};

export default TopPosts;
