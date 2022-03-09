import { Request, Response } from 'express';
import ControllerSync from './ControllerSync';

export default class StatusGetController implements ControllerSync {
  // eslint-disable-next-line class-methods-use-this
  run(req: Request, res: Response): void {
    res.status(200).send();
  }
}
