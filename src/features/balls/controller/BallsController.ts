import type { Request, Response } from "express";
import type { BallsRepository } from "../repository/types";

class BallsController {
  constructor(private readonly ballsRepository: BallsRepository) {}

  public getBalls = async (_req: Request, res: Response): Promise<void> => {
    const balls = await this.ballsRepository.getBalls();

    res.status(200).json({ balls });
  };
}

export default BallsController;
