import { HttpResponse } from "./HttpResponse";

export interface ControllerAsync<T = unknown> {
  run: (httpRequest: T) => Promise<HttpResponse>;
}
