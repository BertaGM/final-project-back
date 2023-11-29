import { Router } from "express";
import NerdmasMongooseRepository from "../repository/NerdmasMongoooseRepository.js";
import NerdmasController from "../controller/NerdmasController.js";

const nerdmasRouter = Router();

const nerdmasMongooseRepository = new NerdmasMongooseRepository();
const nerdmasController = new NerdmasController(nerdmasMongooseRepository);

nerdmasRouter.get("/", nerdmasController.getNerdmas);

export default nerdmasRouter;
