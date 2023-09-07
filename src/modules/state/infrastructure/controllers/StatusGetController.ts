import { ControllerSync } from "../../../shared/infrastructure/controllers/ControllerSync";
import { HttpResponse } from "../../../shared/infrastructure/controllers/HttpResponse";

export class StatusGetController implements ControllerSync<null> {
  constructor() {}

  public run(): HttpResponse {
    return {
      statusCode: 200,
      body: null,
    };
  }
}
