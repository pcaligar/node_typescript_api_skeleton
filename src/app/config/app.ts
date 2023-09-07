import express from "express";

import bodyParser from "./middleware/bodyParser";
import setupMiddleware from "./setupMiddleware";
import setupRoutes from "./setupRoutes";

const app = express();
app.use(bodyParser);
setupRoutes(app);
setupMiddleware(app);

export default app;
