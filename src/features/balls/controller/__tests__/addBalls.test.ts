import type { NextFunction, Response } from "express";
import { type BallRequestWithoutId } from "../../types";
import type BallsMongooseRepository from "../../repository/BallsMongoooseRepository";
import BallsController from "../BallsController";
import type CustomError from "../../../../server/CustomError/CustomError";
import mockBall from "../../mocks/mockBall";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a BallController with a CreateBall method", () => {
  describe("When it receives a request with a new ball without id and a resposne", () => {
    const req: Pick<BallRequestWithoutId, "body"> = {
      body: mockBall,
    };

    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next: NextFunction = jest.fn();

    const ballsRepository: BallsMongooseRepository = {
      getBalls: jest.fn(),
      deleteBall: jest.fn(),
      addBall: jest.fn().mockResolvedValue({ mockBall }),
      getBallById: jest.fn(),
      modifyIsTengui: jest.fn(),
    };

    test("Then it should call its status method with the status code 201", async () => {
      const ballsController = new BallsController(ballsRepository);
      const statusCode = 201;

      await ballsController.addBall(
        req as BallRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });

    test("Then it should call its json method with the Ball 'Harry Potter crew'", async () => {
      const ballController = new BallsController(ballsRepository);
      const expectBall = { mockBall };

      await ballController.addBall(
        req as BallRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ ball: expectBall });
    });

    test("Then it should call the next function with the status code 400 and the message 'Error adding a new Ball', if it is an invalid request", async () => {
      const ballsRepository: BallsMongooseRepository = {
        getBalls: jest.fn(),
        deleteBall: jest.fn(),
        addBall: jest.fn().mockRejectedValue(undefined),
        getBallById: jest.fn(),
        modifyIsTengui: jest.fn(),
      };
      const expectedMessage = "Error adding a new ball";
      const expectedStatusCode = 400;

      const expectedError: Partial<CustomError> = {
        message: expectedMessage,
        statusCode: expectedStatusCode,
      };

      const ballController = new BallsController(ballsRepository);

      await ballController.addBall(
        req as BallRequestWithoutId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
