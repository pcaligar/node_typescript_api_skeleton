import { Request, Response } from 'express';

export default interface Controller {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  run: (req: Request, res: Response) => void;
}
