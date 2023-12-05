import type { Request, Response, NextFunction } from "express";
import type { BallsRepository } from "../repository/types";
import CustomError from "../../../server/CustomError/CustomError.js";

export type UpdateBallRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  { _id: string; isTengui: boolean }
>;

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
