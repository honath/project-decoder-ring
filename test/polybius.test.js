// Write your tests here!
const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should be a string", () => {
    const result = polybius("test");
    expect(result).to.be.a("string");
  });

  it("should translate i/j & 42 correctly", () => {
      let actual = polybius("ij");
      expect(actual).to.equal("4242");

      actual = polybius("42", false);
      expect(actual).to.equal("(i/j)");
  });

  it("should return false early if given an uneven string to decode", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.equal(false);
  });

  it("should encode correctly, ignoring capitals and maintaining spaces, case insensitive", () => {
    const input = "A Message";
    const expected = "11 23513434112251";
    const actual = polybius(input, true);

    expect(actual).to.equal(expected);
  });

  it("should decode correctly, maintaining spaces", () => {
    const input = "11 23513434112251";
    const expected = "a message";
    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });
});
