import { HttpResponse } from "./HttpResponse";

export interface ControllerSync<T = unknown> {
  run: (httpRequest: T) => HttpResponse;
}
