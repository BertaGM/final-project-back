import type { Request, Response } from "express";
import type NerdmasMongooseRepository from "../repository/NerdmasMongoooseRepository.js";

class NerdmasController {
  constructor(private readonly nerdmasRepository: NerdmasMongooseRepository) {}

  public getNerdmas = async (_req: Request, res: Response): Promise<void> => {
    const nerdmas = await this.nerdmasRepository.getNerdmas();

    res.status(200).json({ nerdmas });
  };
}

export default NerdmasController;
