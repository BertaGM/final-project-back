import chalk from "chalk";
import debugCreator from "debug";
import type { NextFunction, Request, Response } from "express";
import { debug } from "console";
import CustomError from "../../CustomError/CustomError";

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  const debug = debugCreator("src:nerdmas:server:middlewares:error");
  debug(chalk.bgRedBright("Endpoint not found"));

  const customError = new CustomError("Endpoint not found", 404);
  next(customError);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateMessage = error.customMessage ?? error.message;
  debug(chalk.redBright("Error", privateMessage));

  res.status(statusCode).json({ error: privateMessage });
};
