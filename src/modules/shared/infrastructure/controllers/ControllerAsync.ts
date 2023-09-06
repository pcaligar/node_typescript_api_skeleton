export interface ControllerAsync<T = unknown> {
  run: (httpRequest: T) => Promise<void>;
}
