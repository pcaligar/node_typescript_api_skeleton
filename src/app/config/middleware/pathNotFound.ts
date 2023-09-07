import NotFoundError from "../error/NotFoundError";

export function pathNotFound() {
  throw new NotFoundError();
}
