import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Bolly from "./navigation/Bolly";
import Fitness from "./navigation/Fitness";
import Home from "./navigation/Home";
import Tech from "./navigation/Tech";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bollywood" element={<Bolly />} />
				<Route path="/fitness" element={<Fitness />} />
				<Route path="/technology" element={<Tech />} />
			</Routes>
		</Router>
	);
}

export default App;
