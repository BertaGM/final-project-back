import { Joi, validate } from "express-validation";
import type { BallStructureWithoutId } from "../types";

const ballSchema = {
  body: Joi.object<BallStructureWithoutId>({
    ballName: Joi.string().required(),
    isAvailable: Joi.boolean().required(),
    collection: Joi.string().required(),
    shop: Joi.string().required(),
    yearRelease: Joi.number().required(),
    price: Joi.number().required(),
    imageUrl: Joi.string().required(),
    description: Joi.string().required(),
    isTengui: Joi.boolean().required(),
  }),
};

const ballValidation = validate(ballSchema, {}, { abortEarly: false });

export default ballValidation;
