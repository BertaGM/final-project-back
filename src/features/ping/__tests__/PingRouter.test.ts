import request from "supertest";
import app from "../../../server/app";
import "../../../server/index";

describe("Given a GET method a '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a message '🏓'", async () => {
      const expectedStatusCode = 200;
      const path = "/";
      const expectedMessage = "🏓";

      const response = await request(app).get(path).expect(expectedStatusCode);

      expect(response.body).toStrictEqual({ message: expectedMessage });
    });
  });
});
