import { Schema, model } from "mongoose";
import type { BallsStructure } from "../types.js";

const ballsSchema = new Schema<BallsStructure>({
  ballName: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  collection: {
    type: String,
    required: true,
  },
  shop: {
    type: String,
    required: true,
  },
  yearRelease: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isTengui: {
    type: Boolean,
    required: true,
  },
});

const Balls = model("Balls", ballsSchema, "balls");

export default Balls;
