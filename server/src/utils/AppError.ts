import { HttpStatusCode } from "./helper";

export class AppError extends Error {
  statusCode: HttpStatusCode;
  constructor(message: string, statusCode: HttpStatusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
