import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  readdirSync(join(__dirname, '../config/routes')).map(async (file) => {
    (await import(`../config/routes/${file}`)).default(router);
  });
};

export default setupRoutes;
