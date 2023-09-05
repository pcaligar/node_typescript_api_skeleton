import { Request, Response, Router } from "express";

import StatusGetController from "../../../modules/state/infrastructure/controllers/StatusGetController";

export default (router: Router): void => {
  const controller = new StatusGetController();
  router.get("/status", (req: Request, res: Response) =>
    controller.run(req, res),
  );
};
