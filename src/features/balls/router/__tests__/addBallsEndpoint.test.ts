import request from "supertest";
import mockBall from "../../mocks/mockBall";
import app from "../../../../server/app";
import type { BallsStructure } from "../../types";
import { server } from "../../../../setupTest";

describe("Given a POST /balls/create endpoint", () => {
  const path = "/balls/create";

  describe("When it receives a request with a 'Harry Potter crew' ball", () => {
    test("Then it should respond with status 201 and the 'Harry Potter crew' ball", async () => {
      const expectedStatusCode = 201;
      const expectedBallName = "Harry Potter crew";

      const response = await request(app)
        .post(path)
        .send(mockBall)
        .expect(expectedStatusCode);

      const responseBody = response.body as { ball: BallsStructure };

      expect(responseBody.ball).toHaveProperty("ballName", expectedBallName);
    });
  });

  describe("When it receives a request with an invalid ball", () => {
    test("Then it should respond with status 400 and an error message", async () => {
      await server.stop();

      const expectedStatusCode = 400;
      const expectedError = { error: "Error adding a new ball" };

      const response = await request(app)
        .post(path)
        .send(mockBall)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: string };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});
