import { NOT_FOUND, ThttpStatusCode } from "../types/error.type";
import { BaseError } from "./BaseError";

export class ApiError extends BaseError {
  constructor(
    name: string,
    statusCode: ThttpStatusCode = NOT_FOUND,
    description = "Not found.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}
