import { ValidationError } from "express-validator";

import { CustomBaseErrorProtocol } from "./shared/CustomBaseErrorProtocol";

export class RequestValidationError extends CustomBaseErrorProtocol {
  readonly statusCode = 422;

  constructor(private errors: ValidationError[]) {
    super("");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  public serializeErrors() {
    return this.errors.map((err: ValidationError) => {
      return {
        message: err.msg,
        field: err.type === "field" ? err.path : "",
        location: err.type === "field" ? err.location : "",
      };
    });
  }
}
