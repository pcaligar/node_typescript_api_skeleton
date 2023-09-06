import request from "supertest";

import app from "../../../src/app/config/app";

describe("Status Get Controller", () => {
  test("s", async () => {
    expect.assertions(1);

    await request(app).get("/api/status").expect(200);
  });
});
