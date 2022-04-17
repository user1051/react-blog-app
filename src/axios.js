import axios from "axios";

const instance = axios.create({
	baseURL: "https://blog-proj-backend.herokuapp.com/api/v1",
});

export default instance;
