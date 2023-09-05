import { Request, Response } from "express";

export interface ControllerSync {
  run: (req: Request, res: Response) => void
}