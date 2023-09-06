import dayjs from "dayjs";

import { ValueObject } from "../value-object/ValueObject";

export class DateValueObject extends ValueObject<Date> {
  constructor(readonly value: Date) {
    super(value);
  }

  public toString(): string {
    return this.value.toISOString();
  }

  public differenceFromCurrentTimeInMinutes(): number {
    const currentTime = new Date();

    const startDate = dayjs(this.value.toISOString());
    return startDate.diff(dayjs(currentTime.toISOString()), "m", true);
  }

  public differenceFromCurrentTimeInHours(): number {
    const currentTime = new Date();

    const startDate = dayjs(this.value.toISOString());
    return startDate.diff(dayjs(currentTime.toISOString()), "h", true);
  }

  public differenceFromCurrentTimeInDays(): number {
    const currentTime = new Date();

    const startDate = dayjs(this.value.toISOString());
    return startDate.diff(dayjs(currentTime.toISOString()), "d", true);
  }
}
