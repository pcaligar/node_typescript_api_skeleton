import { ControllerSync } from "@src/modules/shared/infrastructure/controllers/ControllerSync";
import { NextFunction, Request, Response } from "express";

const syncAdapterRoute = (controller: ControllerSync) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const httpRequest = {
        ...(req.body || {}),
        ...(req.params || {}),
      };

      const httpResponse = controller.run(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (e) {
      next(e);
    }
  };
};

export default syncAdapterRoute;
