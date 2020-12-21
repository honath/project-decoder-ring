// Write your tests here!
const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should be a string", () => {
    const input = "test";
    const result = polybius(input, true);

    expect(result).to.be.a("string");
  });

  it("should translate i and j to 42", () => {
    const input = ["i", "j"];
    const expected = "42";

    for (i = 0; i < input.length; i++) {
      const actual = polybius(input[i], true);

      expect(actual).to.equal(expected);
    }
  });

  it("should translate 42 to (i/j)", () => {
    const input = "42";
    const expected = "(i/j)";

    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });

  it("should return false early if given an uneven string to decode", () => {
    const input = "112233 4";
    const actual = polybius(input, false);

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
