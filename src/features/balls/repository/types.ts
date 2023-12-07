import type { BallStructureWithoutId, BallsStructure } from "../types";

export interface BallsRepository {
  getBalls: () => Promise<BallsStructure[]>;
  deleteBall: (ballId: string) => Promise<void>;
  modifyIsTengui: (
    ballId: string,
    ballIsTengui: boolean,
  ) => Promise<void | BallsStructure>;
  addBall: (ball: BallStructureWithoutId) => Promise<BallsStructure>;
}
