import request from "supertest";
import app from "../../../../server/app";
import mockBalls from "../../mocks/mockBalls";
import { type BallsStructure } from "../../types";
import Balls from "../../model/Balls";

describe("Given a PATCH/balls endpoint", () => {
  const path = `/balls`;
  const body = {
    _id: mockBalls[0]._id,
    isTengui: false,
  };

  describe("When it receives a valid request", () => {
    test("Then it should show respond with a status code 200", async () => {
      const expectedStatusCode = 200;
      const expectedBallName = "Harry Potter crew";

      await Balls.create(mockBalls[0]);
      const response = await request(app)
        .patch(path)
        .send(body)
        .expect(expectedStatusCode);

      const responseBody = response.body as { response: BallsStructure };

      expect(responseBody.response).toHaveProperty(
        "ballName",
        expectedBallName,
      );
    });

    describe("When it receives a request with an invalid ball id", () => {
      test("Then it should respond with a status code 400 and an error message", async () => {
        const body = {
          _id: "234346",
          isTengui: false,
        };

        const expectedStatusCode = 400;
        const expectedError = { error: "Error updating state of Have ball" };

        await Balls.create(mockBalls[1]);
        const response = await request(app)
          .patch(path)
          .send(body)
          .expect(expectedStatusCode);

        expect(response.body).toStrictEqual(expectedError);
      });
    });
  });
});
