import { ValueObject } from "../value-object/ValueObject";

export abstract class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
