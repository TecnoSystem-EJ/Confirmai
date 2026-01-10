import { AppException } from "./AppException";

export class NaoAutorizadoException extends AppException {
  constructor(message: string) {
    super(message, 401, "Unauthorized");
  }
}
