import { NextFunction, Request, Response } from "express";

import { CustomBaseErrorProtocol } from "../error/shared/CustomBaseErrorProtocol";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  if (err instanceof CustomBaseErrorProtocol) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  return res
    .status(500)
    .json({ message: `Something went wrong: ${err.message}` });
}
