import request from "supertest";
import app from "../../../../server/app";
import modifiedBallMock from "../../mocks/modifiedBall";
import Balls from "../../model/Balls";
import { type BallsStructure } from "../../types";

describe("Given a PATCH /balls/656241b0c4ddfcae991f0b13 endpoint", () => {
  describe("When it receives a request with a valid id '656241b0c4ddfcae991f0b13'", () => {
    test("Then it should respond with status 200 and the ballName 'Harry Potter' ball modified", async () => {
      const path = "/balls/656241b0c4ddfcae991f0b13";
      const expectedStatusCode = 200;
      const expectedYearReleaseStatus = 2018;

      await Balls.create(modifiedBallMock);

      const response = await request(app)
        .patch(path)
        .expect(expectedStatusCode);

      const responseBody = response.body as { ball: BallsStructure };

      expect(responseBody.ball).toHaveProperty(
        "yearRelease",
        expectedYearReleaseStatus,
      );
    });
  });

  describe("When it receives a request with the 'Harry Potter' ball and an invalid id", () => {
    test("Then it should respond with the status code 400 and the error message 'Error modifying the ball'", async () => {
      const invalidPath = "/balls/hdgr840";
      const expectedStatusCode = 400;
      const expectedErrorMessage = { error: "Couldn't modify the ball" };

      const response = await request(app)
        .patch(invalidPath)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: BallsStructure };

      expect(responseBody).toStrictEqual(expectedErrorMessage);
    });
  });
});
