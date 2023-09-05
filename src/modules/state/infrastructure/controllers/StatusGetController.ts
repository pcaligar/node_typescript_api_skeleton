import { Request, Response } from "express";

import { ControllerSync } from "./ControllerSync";

export default class StatusGetController implements ControllerSync {
  run(req: Request, res: Response): void {
    res.status(200).send();
  }
}
