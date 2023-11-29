import request from "supertest";
import app from "../../app";
import "../../../server/index.js";

describe("Given a GET /nerdmas endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with a status code 404 and a message 'Endpoint not found'", async () => {
      const expectedStatusCode = 404;
      const expectedMessage = "Endpoint not found";
      const requestedPath = "/ballssss";
      const response = await request(app)
        .get(requestedPath)
        .expect(expectedStatusCode);

      expect(response.body).toHaveProperty("error", expectedMessage);
    });
  });
});
