export class AppException extends Error {
  public readonly status: number;
  public readonly erro: string;
  public readonly mensagem: string | string[];
  constructor(mensagem: string | string[], statusCode: number, erro: string) {
    super();
    this.mensagem = mensagem;
    this.status = statusCode;
    this.erro = erro;

    Error.captureStackTrace(this, this.constructor);
  }
}
