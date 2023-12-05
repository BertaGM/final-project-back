import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import express from "express";

const debug = debugCreator("src:balls:server:app");

const app = express();
app.disable("x-powered-by");

export const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.bgBlueBright(`Server listening on http://localhost:${port}`));
  });
};

export default app;
