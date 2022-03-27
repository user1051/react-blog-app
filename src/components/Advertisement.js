import React, { useEffect } from "react";

const Advertisement = ({ style, slot }) => {
	useEffect(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}, []);
	return (
		// <div className="w-full h-96 mt-4 border-2 border-slate-700 flex items-center justify-center">
		<ins
			className="adsbygoogle"
			style={style}
			data-ad-client="ca-pub-2415334479874214"
			data-ad-slot={slot}
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
		// </div>
	);
};

export default Advertisement;
