import request from "supertest";

import app from "../../../../../src/app/config/app";

describe("Status Get Controller", () => {
  test("return status code 200 for success request", async () => {
    expect.assertions(0);
    await request(app).get("/api/status").expect(200);
  });
});
