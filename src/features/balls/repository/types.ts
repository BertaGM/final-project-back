import type { BallStructureWithoutId, BallsStructure } from "../types";

export interface BallsRepository {
  getBalls: () => Promise<BallsStructure[]>;
  deleteBall: (ballId: string) => Promise<void>;
  addBall: (ball: BallStructureWithoutId) => Promise<BallsStructure>;
  getBallById: (_id: string) => Promise<BallsStructure>;
  modifyBall: (
    id: string,
    ball: BallsStructure,
  ) => Promise<BallsStructure | undefined>;
  modifyIsTengui: (
    ballId: string,
    ballIsTengui: boolean,
  ) => Promise<void | BallsStructure>;
}
