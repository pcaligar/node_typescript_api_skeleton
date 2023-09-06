import { ValueObject } from "../value-object/ValueObject";

export abstract class BooleanValueObject extends ValueObject<boolean> {
  constructor(value: boolean) {
    super(value);
  }
}
