import { Router, Request, Response } from 'express';
import StatusGetController from '../../controllers/StatusGetController';

export default (router: Router): void => {
  const controller = new StatusGetController();
  router.get('/status', (req: Request, res: Response) => controller.run(req, res));
};
