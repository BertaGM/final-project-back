import type { Request, Response, NextFunction } from "express";
import type { BallsRepository } from "../repository/types";
import CustomError from "../../../server/CustomError/CustomError.js";

class BallsController {
  constructor(private readonly ballsRepository: BallsRepository) {}

  public getBalls = async (_req: Request, res: Response): Promise<void> => {
    const balls = await this.ballsRepository.getBalls();

    res.status(200).json({ balls });
  };

  deleteBall = async (
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
}

export default BallsController;
