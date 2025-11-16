import express from "express";
import v1Routes from "./api/v1/index.mjs";
const app = express();
const PORT = process.env.PORT || 4000;

// serving static files
app.use(express.static("public"));
app.use("/api/v1", v1Routes);

app.get("/", (req, res) =>
	res.send(`Node and express server is running on port ${PORT}`),
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
