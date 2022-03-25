import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import NavBar from "./components/NavBar";
import Bolly from "./navigation/Bolly";
import Fitness from "./navigation/Fitness";
import Home from "./navigation/Home";
import Tech from "./navigation/Tech";
import Food from "./navigation/Food";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bollywood" element={<Bolly />} />
				<Route path="/fitness" element={<Fitness />} />
				<Route path="/technology" element={<Tech />} />
				<Route path="/food" element={<Food />} />
				<Route path="/:postCategory/:postId" element={<Article />} />
			</Routes>
		</Router>
	);
}

export default App;
