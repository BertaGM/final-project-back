import Balls from "../model/Balls.js";
import { type BallsStructure } from "../types.js";
import type { BallsRepository } from "./types.js";

class BallsMongooseRepository implements BallsRepository {
  public async getBalls(): Promise<BallsStructure[]> {
    const balls = await Balls.find().limit(10);

    return balls;
  }
}

export default BallsMongooseRepository;
