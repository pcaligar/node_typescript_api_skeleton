import { NextFunction, Request, Response } from "express";

const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set("access-control-allow-origin", "*");
  res.set("access-control-allow-methods", "*");
  res.set("access-control-allow-headers", "*");

  next();
};

export default cors;
