import type { BallsStructure } from "../types";

export interface BallsRepository {
  getBalls: () => Promise<BallsStructure[]>;
}
