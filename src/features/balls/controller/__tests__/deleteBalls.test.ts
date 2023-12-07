import type { Request, Response, NextFunction } from "express";
import type { BallsRepository } from "../../repository/types";
import BallsController from "../BallsController";

describe("Given a BallsController deleteBalls method", () => {
  describe("Given a BallsController deleteBalls method", () => {
    const ballsRepository: Pick<BallsRepository, "deleteBall"> = {
      deleteBall: jest.fn().mockReturnValue({}),
    };
    const req: Pick<Request, "params"> = {
      params: { _id: "656241b0c4ddfcae991f0b13" },
    };
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
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
});
