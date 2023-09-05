import { Express } from "express";

import bodyParser from "./middlewares/bodyParser";
import contentType from "./middlewares/contentType";
import cors from "./middlewares/cors";

const setupMiddlewares = (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};

export default setupMiddlewares;
