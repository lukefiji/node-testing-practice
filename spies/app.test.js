const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");

describe("App", () => {
  // Replace db with db spy
  // -- Make sure to require in file as let, not const
  const db = {
    saveUser: expect.createSpy()
  };
  // Set db as spy
  app.__set__("db", db);

  it("should call the spy correctly", () => {
    const spy = expect.createSpy();
    spy("Luke", 25);
    expect(spy).toHaveBeenCalledWith("Luke", 25);
  });

  it("should call saveUser with user object", () => {
    const email = "luke@gmail.com";
    const password = "123abc";

    // Run handleSignup, which runs db, a spy in this case
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    });
  });
});
