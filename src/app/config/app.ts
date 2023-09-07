import express from "express";
import helmet from "helmet";

import bodyParser from "./middleware/bodyParser";
import setupMiddleware from "./setupMiddleware";
import setupRoutes from "./setupRoutes";

const app = express();
app.use(bodyParser);
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
setupRoutes(app);
setupMiddleware(app);

export default app;
