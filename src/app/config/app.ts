import express from 'express';
import setupMiddlewares from './setupMiddlewares';
// import setupRoutes from './setup-routes'

const app = express();
setupMiddlewares(app);
// setupRoutes(app)

export default app;
