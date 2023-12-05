import request from "supertest";
import "../../../../server/index";
import mockBalls from "../../mocks/mockBalls";
import app from "../../../../server/app";

describe("Given a DELETE/balls endpoint", () => {
  describe("When it receives a valid request", () => {
    test("Then it should show respond with a status code 200 and an empty object", async () => {
      const expectedStatusCode = 200;
      const emptyObject = {};
      const path = `/balls/${mockBalls[0]._id}`;

      const response = await request(app)
        .delete(path)
        .expect(expectedStatusCode);

      expect(response.body).toStrictEqual(emptyObject);
    });
  });

  describe("When it receives an invalida request", () => {
    test("Then it should respond with a status code 400 and the message error 'Error deleting this Ball'", async () => {
      const expectedStatusCode = 400;
      const expectErrorMessage = "Error deleting this Ball";
      const invalidPath = `/balls/${mockBalls[0]._id}gh5`;

      const response = await request(app)
        .delete(invalidPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("error", expectErrorMessage);
    });
  });
});
