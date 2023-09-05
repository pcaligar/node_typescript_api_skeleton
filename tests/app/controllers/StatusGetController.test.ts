import request from "supertest";

import app from "../../../src/app/config/app";

describe("Status Get Controller", () => {
  test("", async () => {
    await request(app).get("/api/status").expect(200);
  });
});
