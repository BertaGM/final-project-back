import request from "supertest";
import mockBalls from "../../mocks/mockBalls";
import Balls from "../../model/Balls";
import type { BallsStructure } from "../../types";
import app from "../../../../server/app";
import "../../../../server/index";
import "../../../../setupTest";

describe("Given a GET method with a '/balls' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a status code 200 and a list of 2 balls", async () => {
      const expectedStatusCode = 200;
      const path = "/balls";
      await Balls.create(mockBalls[0]);
      await Balls.create(mockBalls[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);
      const responseBody = response.body as {
        balls: BallsStructure[];
      };

      responseBody.balls.forEach((balls, ballsPosition) => {
        expect(balls).toHaveProperty(
          "ballName",
          mockBalls[ballsPosition].ballName,
        );
      });
    });
  });
});
