import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import { startServer } from "./server/app.js";
import connectToDatabase from "./database/index.js";
import "./server/index.js";

const debug = debugCreator("src:balls:main");

const port = process.env.PORT ?? 4000;

if (!process.env.MONGODB_URL) {
  debug(chalk.bgCyanBright("Missing MongoDB connection string!"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);
