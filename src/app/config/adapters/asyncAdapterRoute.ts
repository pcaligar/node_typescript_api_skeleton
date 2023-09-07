import { ControllerAsync } from "@src/modules/shared/infrastructure/controllers/ControllerAsync";
import { NextFunction, Request, Response } from "express";

const asyncAdapterRoute = (controller: ControllerAsync) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const httpRequest = {
        ...(req.body || {}),
        ...(req.params || {}),
      };

      const httpResponse = await controller.run(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (e) {
      next(e);
    }
  };
};

export default asyncAdapterRoute;
