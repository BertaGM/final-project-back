import "dotenv/config";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import connectToDatabase from "./database";
import "./server/index";

let server: MongoMemoryServer;

const serverConnection = async () => {
  try {
    server = await MongoMemoryServer.create();
  } catch {
    await MongoMemoryServer.create();
  }
};

beforeAll(async () => {
  await serverConnection();
  server = await MongoMemoryServer.create();
  const mongoUrl = server.getUri();
  await connectToDatabase(mongoUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});
