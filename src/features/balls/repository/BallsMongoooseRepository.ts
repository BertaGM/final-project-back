import Balls from "../model/Balls.js";
import { type BallStructureWithoutId, type BallsStructure } from "../types.js";
import type { BallsRepository } from "./types.js";

class BallsMongooseRepository implements BallsRepository {
  public async getBalls(): Promise<BallsStructure[]> {
    const balls = await Balls.find().limit(10).sort({ _id: -1 });

    return balls;
  }

  public async deleteBall(ballId: string): Promise<void> {
    try {
      await Balls.findByIdAndDelete(ballId);
    } catch (error) {
      throw new Error("Error deleting this ball" + (error as Error).message);
    }
  }

  public async addBall(ball: BallStructureWithoutId): Promise<BallsStructure> {
    try {
      const newBall = await Balls.create(ball);

      return newBall;
    } catch (error) {
      throw new Error("Error adding a new Ball" + (error as Error).message);
    }
  }

  public async modifyIsTengui(
    ballId: string,
    isTengui: boolean,
  ): Promise<void | BallsStructure> {
    try {
      const response = await Balls.findByIdAndUpdate(
        ballId,
        {
          isTengui,
        },
        { returnDocument: "after" },
      );

      if (!response) {
        throw new Error();
      }

      return response;
    } catch (error) {
      throw new Error("Error deleting this ball" + (error as Error).message);
    }
  }
}

export default BallsMongooseRepository;
