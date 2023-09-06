import { v4, validate } from "uuid";

import { InvalidArgumentError } from "../errors/exception/InvalidArgumentError";
import { ValueObject } from "./ValueObject";

export class Uuid extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
    this.ensureValueIsDefined(value);
    this.ensureIsValidUuid(value);
  }

  public static random(): Uuid {
    return new Uuid(v4());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(
        `<${id}> is not a valid <${this.constructor.name}>`,
      );
    }
  }

  private ensureValueIsDefined(value: string): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError("Uuid value must be defined");
    }
  }
}
