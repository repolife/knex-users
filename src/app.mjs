import express from "express";
import v1Routes from "./api/v1/index.mjs";
import swaggerUi from "swagger-ui-express";
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const swaggerDocument = require("./docs/swagger.json") 

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serving static files
app.use(express.static("public"));
app.use("/api/v1", v1Routes);

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => res.send(`Node and express server is running on port ${PORT}`));

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
