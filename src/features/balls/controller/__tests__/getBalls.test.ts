import type { Request, Response } from "express";
import { type BallsStructure } from "../../types";
import BallsController from "../BallsController";
import type { BallsRepository } from "../../repository/types";
import mockBalls from "../../mocks/mockBalls";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a BallsController getBalls method", () => {
  describe("When it receives a response", () => {
    const expectedStatusCode = 200;
    const balls: BallsStructure[] = mockBalls;
    const ballsRepository: BallsRepository = {
      getBalls: jest.fn().mockResolvedValue(balls),
      deleteBall: jest.fn().mockResolvedValue(balls),
      addBall: jest.fn(),
      getBallById: jest.fn(),
      modifyIsTengui: jest.fn().mockResolvedValue(balls),
    };

    const ballsController = new BallsController(ballsRepository);

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method with a status code 200", async () => {
      await ballsController.getBalls(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method with 'Harry Potter crew' and 'My neighbor Totoro' balls", async () => {
      const expectedBalls = balls;

      await ballsController.getBalls(req as Request, res as Response);

      expect(res.json).toHaveBeenLastCalledWith({ balls: expectedBalls });
    });
  });
});
