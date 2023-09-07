import { Router } from "express";

import makeStatusGetController from "../../dependency-Injection/state/makeStatusGetController";
import syncAdapterRoute from "../adapters/syncAdapterRoute";

export default (router: Router): void => {
  router.get("/status", syncAdapterRoute(makeStatusGetController()));
};
