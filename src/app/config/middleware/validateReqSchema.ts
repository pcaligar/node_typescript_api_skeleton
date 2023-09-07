import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import { RequestValidationError } from "../error/RequestValidationError";

export function validateReqSchema(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const result = validationResult(req);

  if (result.isEmpty()) {
    return next();
  }

  throw new RequestValidationError(result.array());
}
