import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import mongoose from "mongoose";

const debug = debugCreator("src:balls:database:index");

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    debug(chalk.bgGreenBright("Connect to database"));
  } catch {
    debug(chalk.bgRedBright("Error connecting to database"));
  }
};

export default connectToDatabase;
