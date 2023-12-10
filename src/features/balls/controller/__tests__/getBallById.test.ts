import { type Response, type NextFunction } from "express";
import mockBall from "../../mocks/mockBall";
import BallsController from "../BallsController";
import type { BallRequestById } from "../../types";
import type BallsMongooseRepository from "../../repository/BallsMongooseRepository";
import type CustomError from "../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a BallsController getBallById method", () => {
  const req: Pick<BallRequestById, "params"> = {
    params: { ballId: "2512" },
  };

  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with an hotel id and response", () => {
    const ballsRepository: Pick<BallsMongooseRepository, "getBallById"> = {
      getBallById: jest.fn().mockResolvedValue(mockBall),
    };

    test("Then it should call its response's status method with an status code 200", async () => {
      const expectedStatusCode = 200;

      const ballsController = new BallsController(
        ballsRepository as BallsMongooseRepository,
      );

      await ballsController.getBallById(
        req as BallRequestById,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with the 'Harry Potter crew' ball", async () => {
      const ballController = new BallsController(
        ballsRepository as BallsMongooseRepository,
      );

      await ballController.getBallById(
        req as BallRequestById,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ ball: mockBall });
    });
  });

  describe("When it receives a request with a ball id and a response and there is an error", () => {
    test("then it should call its next function with a custom error 'Couldn't find the ball'", async () => {
      const expectedStatusCode = 400;
      const expectedErrorMessage = "Couldn't find the ball";
      const expectedError: Pick<CustomError, "statusCode" | "message"> = {
        statusCode: expectedStatusCode,
        message: expectedErrorMessage,
      };

      const ballsRepository: Pick<BallsMongooseRepository, "getBallById"> = {
        getBallById: jest.fn().mockRejectedValue(null),
      };

      const ballsController = new BallsController(
        ballsRepository as BallsMongooseRepository,
      );

      await ballsController.getBallById(
        req as BallRequestById,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
