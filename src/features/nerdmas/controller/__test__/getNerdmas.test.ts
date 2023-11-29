import type { Request, Response } from "express";
import { type NerdmasRepository, type NerdmasStructure } from "../../types";
import NerdmasController from "../NerdmasController";
import mockNerdmas from "../../mocks/mockNerdmas";

describe("Given a NerdmasController getNerdmas method", () => {
  describe("When it receives a response", () => {
    const expectedStatusCode = 200;
    const nerdmas: NerdmasStructure[] = mockNerdmas;
    const nerdmasRepository: NerdmasRepository = {
      getNerdmas: jest.fn().mockResolvedValue(nerdmas),
    };

    const nerdmasController = new NerdmasController(nerdmasRepository);

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method with a status code 200", async () => {
      await nerdmasController.getNerdmas(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method with state code 200", async () => {
      await nerdmasController.getNerdmas(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method with 'Harry Potter crew' and 'My neighbor Totoro'", async () => {
      const expectedNerdmas = nerdmas;

      await nerdmasController.getNerdmas(req as Request, res as Response);

      expect(res.json).toHaveBeenLastCalledWith({ nerdmas: expectedNerdmas });
    });
  });
});
