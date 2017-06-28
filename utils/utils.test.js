const expect = require("expect");

const utils = require("./utils");

describe("testing utils ", () => {
  // # - means a method
  describe("#add", () => {
    // Two arguments:
    // 1 - Describing the case
    // 2 - Function with test code
    it("should add two numbers", () => {
      const res = utils.add(33, 11);

      expect(res).toBe(44).toBeA("number");
    });
  });

  // done() - Argument tells Mocha that async function is done
  it("should async add two numbers", done => {
    utils.asyncAdd(4, 3, sum => {
      expect(sum).toBe(7).toBeA("number");
      done();
    });
  });

  it("should square a number", () => {
    const res = utils.square(5);

    expect(res).toBe(25).toBeA("number");
  });

  it("should async square a number", done => {
    utils.asyncSquare(8, total => {
      expect(total).toBe(64).toBeA("number");
      done();
    });
  });

  it("should verify first and last names are set", () => {
    const userDetails = { age: 25, location: "Los Angeles" };
    const res = utils.setName(userDetails, "Luke Fiji");

    expect(res)
      .toInclude({
        firstName: "Luke",
        lastName: "Fiji"
      })
      .toBeA("object");
  });

  // it("should expect some values", () => {
  //   // toEqual checks object properties
  //   expect({ name: "Andrew" }).toEqual({ name: "Andrew" });

  //   expect([2, 3, 4]).toInclude(4);

  //   expect({
  //     name: "Luke",
  //     age: 25,
  //     location: "Irvine"
  //   }).toExclude({
  //     age: 23
  //   });
  // });
});
