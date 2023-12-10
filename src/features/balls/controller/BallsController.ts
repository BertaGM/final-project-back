import type { Request, Response, NextFunction } from "express";
import type { BallsRepository } from "../repository/types";
import CustomError from "../../../server/CustomError/CustomError.js";
import {
  type UpdateBallRequest,
  type BallRequestWithoutId,
  type BallRequestWithId,
} from "../types";

class BallsController {
  constructor(private readonly ballsRepository: BallsRepository) {}

  public getBalls = async (_req: Request, res: Response): Promise<void> => {
    const balls = await this.ballsRepository.getBalls();

    res.status(200).json({ balls });
  };

  public deleteBall = async (
    req: Request<{ ballId: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { ballId } = req.params;

    try {
      await this.ballsRepository.deleteBall(ballId);

      res.status(200).json({});
    } catch {
      const error = new CustomError("Error deleting this ball", 400);
      next(error);
    }
  };

  public addBall = async (
    req: BallRequestWithoutId,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const ball = req.body;

      const ballWithId = await this.ballsRepository.addBall(ball);

      res.status(201).json({ ball: ballWithId });
    } catch {
      const customError = new CustomError("Error adding a new ball", 400);

      next(customError);
    }
  };

  public getBallById = async (
    req: Request<{ ballId: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { ballId } = req.params;

      const ball = await this.ballsRepository.getBallById(ballId);

      res.status(200).json({ ball });
    } catch {
      const customError = new CustomError("Couldn't find the ball", 400);

      next(customError);
    }
  };

  public modifyBall = async (
    req: BallRequestWithId,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const ball = req.body;
      const { ballId } = req.params;

      const modifiedBall = await this.ballsRepository.modifyBall(ballId, ball);

      res.status(200).json({ ball: modifiedBall });
    } catch {
      const customError = new CustomError("Couldn't modify the ball", 400);

      next(customError);
    }
  };

  public modifyIsTengui = async (
    req: UpdateBallRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { _id, isTengui } = req.body;

    try {
      const response = await this.ballsRepository.modifyIsTengui(_id, isTengui);

      res.status(200).json({ response });
    } catch (error) {
      const customError = new CustomError(
        "Error updating state of Have ball",
        400,
        (error as Error).message,
      );

      next(customError);
    }
  };
}

export default BallsController;
