import { AppException } from "./AppException";

export class NaoEncontradoException extends AppException {
  constructor(mensagem: string) {
    super(mensagem, 404, "Not Found");
  }
}
