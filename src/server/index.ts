import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/error/generalError.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import ballsRouter from "../features/balls/router/ballsRouter.js";

const corsConcentedPort = process.env.ALLOWED_ORIGIN;
const corsOption = { origin: corsConcentedPort };

app.use(cors(corsOption));
app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/balls", ballsRouter);

app.use(notFound);
app.use(generalError);
