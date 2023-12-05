import type { Request, Response, NextFunction } from "express";
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

describe("Given a BallsController deleteBalls method", () => {
  const ballsRepository: Pick<BallsRepository, "deleteBall"> = {
    deleteBall: jest.fn().mockReturnValue({}),
  };
  const req: Pick<Request, "params"> = {
    params: { _id: "656241b0c4ddfcae991f0b13" },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnValue({}),
  };
  const next: NextFunction = jest.fn();
  describe("When it receives a response", () => {
    test("Then it shoul call its method status with 200", async () => {
      const expectedStatusCode = 200;

      const ballsController = new BallsController(
        ballsRepository as BallsRepository,
      );

      await ballsController.deleteBall(
        req as Request<{ ballId: string }>,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call it method json with an empty object", async () => {
      const expectedEmptyObject = {};

      const ballsController = new BallsController(
        ballsRepository as BallsRepository,
      );

      await ballsController.deleteBall(
        req as Request<{ ballId: string }>,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith(expectedEmptyObject);
    });
  });
});
