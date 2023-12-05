import Balls from "../model/Balls.js";
import { type BallsStructure } from "../types.js";
import type { BallsRepository } from "./types.js";

class BallsMongooseRepository implements BallsRepository {
  public async getBalls(): Promise<BallsStructure[]> {
    const balls = await Balls.find().limit(10);

    return balls;
  }

  public async deleteBall(ballId: string): Promise<void> {
    try {
      await Balls.findByIdAndDelete(ballId);
    } catch (error) {
      throw new Error("Error deleting this ball" + (error as Error).message);
    }
  }
}

export default BallsMongooseRepository;
