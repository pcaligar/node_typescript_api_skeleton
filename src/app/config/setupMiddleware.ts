import { Express } from "express";

import contentType from "./middleware/contentType";
import cors from "./middleware/cors";
import { errorHandler } from "./middleware/errorHandler";
import { pathNotFound } from "./middleware/pathNotFound";

const setupMiddleware = (app: Express): void => {
  app.use(cors);
  app.use(contentType);
  app.all("*", pathNotFound);
  app.use(errorHandler);
};

export default setupMiddleware;
