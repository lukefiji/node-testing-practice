const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

describe("server", () => {
  describe("GET /", () => {
    it("should respond with hello world response", done => {
      request(app).get("/").expect(200).expect("Hello world!").end(done);
    });
  });

  describe("GET /404", () => {
    it("should respond with 404 response", done => {
      request(app)
        .get("/404")
        .expect(404)
        // Custom assertion using expect
        .expect(res => {
          expect(res.body).toInclude({
            error: "Page not found.",
            name: "Practice Tests v1.0"
          });
        })
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("should return my users object", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: "Luke",
            age: 25
          });
        })
        .end(done);
    });
  });
});
