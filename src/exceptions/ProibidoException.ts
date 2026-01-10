import { AppException } from "./AppException";

export class ProibidoException extends AppException {
  constructor(message: string) {
    super(message, 403, "Forbidden");
  }
}
