import { ValueObject } from "../value-object/ValueObject";

export abstract class NumberValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
  }
}
