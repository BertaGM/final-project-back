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
});
