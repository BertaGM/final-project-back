import request from "supertest";
import mockNerdmas from "../../mocks/mockNerdmas";
import Nerdmas from "../../model/Nerdmas";
import type { NerdmasStructure } from "../../types";
import app from "../../../../server/app";
import "../../../../server/index";
import "../../../../setupTest";

describe("Given a GET method with '/nerdmas' endpoint", () => {
  describe("When it receives a Request", () => {
    test("Then it should respond with a status code 200 and a list of 2 nerdmas balls", async () => {
      const expectedStatusCode = 200;
      const path = "/nerdmas";
      await Nerdmas.create(mockNerdmas[0]);
      await Nerdmas.create(mockNerdmas[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);
      const responseBody = response.body as {
        nerdmas: NerdmasStructure[];
      };

      responseBody.nerdmas.forEach((nerdmas, nerdmasPosition) => {
        expect(nerdmas).toHaveProperty(
          "ballName",
          mockNerdmas[nerdmasPosition].ballName,
        );
      });
    });
  });
});
