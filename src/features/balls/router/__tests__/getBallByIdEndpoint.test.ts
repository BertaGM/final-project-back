import request from "supertest";
import mockBalls from "../../mocks/mockBalls";
import Balls from "../../model/Balls";
import app from "../../../../server/app";
import type { BallsStructure } from "../../types";

describe("Given a GET /balls/656241b0c4ddfcae991f0b13 endpoint", () => {
  describe("When it receives a request with a valid id '656241b0c4ddfcae991f0b13'", () => {
    test("Then it should respond with status 200 and the 'Harry Potter crew' ball", async () => {
      const path = "/balls/656241b0c4ddfcae991f0b13";
      const expectedStatusCode = 200;
      const expectedBallName = "Harry Potter crew";

      await Balls.create(mockBalls[0]);

      const response = await request(app).get(path).expect(expectedStatusCode);
      const responseBody = response.body as { ball: BallsStructure };

      expect(responseBody.ball).toHaveProperty("ballName", expectedBallName);
    });
  });

  describe("When it receives a request with an invalid id", () => {
    test("Then it should respond with a status code 400 and a 'Couldn't find the ball' text error", async () => {
      const path = "/balls/2512";
      const expectedStatusCode = 400;
      const expectedError = { error: "Couldn't find the ball" };

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = response.body as { error: BallsStructure };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});
