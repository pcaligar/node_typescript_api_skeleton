import bodyParser from "body-parser";
import compress from "compression";
import express from "express";
import helmet from "helmet";

import setupCustomMiddleware from "./setupCustomMiddleware";
import setupRoutes from "./setupRoutes";

const app = express();
// Set packages middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(compress());
// Set routes
setupRoutes(app);
// Set custom middleware
setupCustomMiddleware(app);

export default app;
