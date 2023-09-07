import { CustomBaseErrorProtocol } from "./shared/CustomBaseErrorProtocol";

export default class NotFoundError extends CustomBaseErrorProtocol {
  readonly statusCode = 404;

  constructor() {
    super("Path not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeErrors() {
    return [{ message: this.message }];
  }
}
