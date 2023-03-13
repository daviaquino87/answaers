import { app } from "../../../../shared/infra/http/app";
import request from "supertest";

describe("Search CEP controller", () => {
  it("should be able possible to search a CEP", async () => {
    const body = await request(app)
      .get("/cep/search")
      .query({ cep: "63460000" })
      .expect(200);

    console.log(body);

    // expect(body.city).toBe("Pereiro");
  });
});
