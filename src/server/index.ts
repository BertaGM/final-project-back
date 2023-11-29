import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/error/generalError.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import nerdmasRouter from "../features/nerdmas/router/nerdmasRouter.js";

const corsPort = process.env.ALLOWED_ORIGIN;
const corsOption = { origin: corsPort };

app.use(cors(corsOption));

app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/nerdmas", nerdmasRouter);

app.use(notFound);
app.use(generalError);
