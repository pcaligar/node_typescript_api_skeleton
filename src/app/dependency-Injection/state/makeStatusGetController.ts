import { StatusGetController } from "@src/modules/state/infrastructure/controllers/StatusGetController";

const makeStatusGetController = (): StatusGetController => {
  const statusGetController = new StatusGetController();

  return statusGetController;
};

export default makeStatusGetController;
