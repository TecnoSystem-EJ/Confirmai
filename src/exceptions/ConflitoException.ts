import { AppException } from "./AppException";

export class ConflitoException extends AppException {
  constructor(message: string) {
    super(message, 409, "Conflict");
  }
}
