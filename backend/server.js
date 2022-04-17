const express = require("express");
const cors = require("cors");
const mainRoute = require("./routes");
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use("/api/v1", mainRoute);
app.listen(port, () => {
	console.log("server running on port:", port);
});
