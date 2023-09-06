import request from "supertest";

import app from "../../../../src/app/config/app";

describe("Body Parser Middleware", () => {
  test("body parser", async () => {
    expect.assertions(1);

    app.post("/test_body_parser", (req, res) => {
      res.send(req.body);
    });

    await request(app)
      .post("/test_body_parser")
      .send({ name: "test" })
      .expect({ name: "test" });
  });
});
