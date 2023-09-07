import { Router } from "express";
import { body } from "express-validator";

import makeStatusGetController from "../../dependency-Injection/state/makeStatusGetController";
import syncAdapterRoute from "../adapters/syncAdapterRoute";
import { validateReqSchema } from "../middleware/validateReqSchema";

export default (router: Router): void => {
  const reqSchema = [
    body("email")
      .isString()
      .isEmail()
      .withMessage("email, must be a valid address"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("password, must be at least 5 characters"),
  ];
  router.get(
    "/status",
    reqSchema,
    validateReqSchema,
    syncAdapterRoute(makeStatusGetController()),
  );
};
