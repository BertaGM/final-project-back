import chalk from "chalk";
import debugCreator from "debug";
import type { NextFunction, Request, Response } from "express";
import type CustomError from "../../CustomError/CustomError.js";

const debug = debugCreator("src:nerdmas:server:middlewares:error");

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateMessage = error.customMessage ?? error.message;
  debug(chalk.bgRedBright("Error:", privateMessage));

  res.status(statusCode).json({ message: privateMessage });
};
