import "dotenv/config";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import connectToDatabase from "./database";
import "./server/index";

export let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoUrl = server.getUri();
  await connectToDatabase(mongoUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});
