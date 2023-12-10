import type { NextFunction, Response } from "express";
import mockBalls from "../../mocks/mockBalls";
import type BallsMongooseRepository from "../../repository/BallsMongooseRepository";
import modifiedBallMock from "../../mocks/modifiedBall";
import BallsController from "../BallsController";
import type { BallRequestById, BallRequestWithId } from "../../types";
import type CustomError from "../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a BallsController's modifyBall method", () => {
  const harryPotterBallId = "656241b0c4ddfcae991f0b13";
  const req: Pick<BallRequestById, "body" | "params"> = {
    body: mockBalls[0],
    params: { ballId: harryPotterBallId },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a ball id '656241b0c4ddfcae991f0b13', a 'Harry Potter crew' ball and a response", () => {
    const ballRepository: Pick<BallsMongooseRepository, "modifyBall"> = {
      modifyBall: jest.fn().mockResolvedValue(modifiedBallMock),
    };

    test("Then it should call the response's status method with 200", async () => {
      const expectedStatusCode = 200;

      const ballsController = new BallsController(
        ballRepository as BallsMongooseRepository,
      );

      await ballsController.modifyBall(
        req as BallRequestWithId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with the 'Harry Potter crew' modified", async () => {
      const ballsController = new BallsController(
        ballRepository as BallsMongooseRepository,
      );

      await ballsController.modifyBall(
        req as BallRequestWithId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ ball: modifiedBallMock });
    });
  });

  describe("When it receives a request with a ball id, a ball and a response and its error", () => {
    test("Then it should call its next function with custom error 'Couldn't modify the ball'", async () => {
      const expectedStatusCode = 400;
      const expectedErrorMessage = "Couldn't modify the ball";
      const expectedError: Pick<CustomError, "statusCode" | "message"> = {
        statusCode: expectedStatusCode,
        message: expectedErrorMessage,
      };

      const ballsRepository: Pick<BallsMongooseRepository, "modifyBall"> = {
        modifyBall: jest.fn().mockRejectedValue(null),
      };

      const ballsController = new BallsController(
        ballsRepository as BallsMongooseRepository,
      );

      await ballsController.modifyBall(
        req as BallRequestWithId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
