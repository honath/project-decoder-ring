// Write your tests here!
const caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if shift is not present, equal to 0, less than -25, or greater than 25", () => {
    const shift = [null, 0, -26, 26];
    const expected = [false, false, false, false];
    const actual = [];
    for (i = 0; i < shift.length; i++) {
      const test = caesar("test", shift[i], true);

      actual.push(test);
    }

    expect(actual).to.eql(expected);
  });

  //======**Condensed below commented tests into single above test**======
  /*it("should return false if shift is equal to 0", () => {
        const shift = 0;
        const expected = false;
        const actual = caesar("test", shift, true);

        expect(actual).to.equal(expected);
    });

    it("should return false if shift is less than -25", () => {
        const shift = -26;
        const expected = false;
        const actual = caesar("test", shift, true);

        expect(actual).to.equal(expected);
    });

    it("should return false if shift is greater than 25", () => {
        const shift = 26;
        const expected = false;
        const actual = caesar("test", shift, true);

        expect(actual).to.equal(expected);
    });*/

  it("should ignore capital letters", () => {
    const input = "ABCD";
    const shift = 1;
    const expected = "bcde";
    const actual = caesar(input, shift, true);

    expect(actual).to.equal(expected);
  });

  it("should wrap alphabets and ignore non-alphabetical characters", () => {
    const input = "a b!";
    const shift = -2;
    const expected = "y z!";
    const actual = caesar(input, shift, true);

    expect(actual).to.include(" ");
    expect(actual).to.include("!");
    expect(actual).to.equal(expected);
  });

  it("should return a properly encoded string", () => {
    const input = "Zebra Magazine";
    const shift = 3;
    const expected = "cheud pdjdclqh";
    const actual = caesar(input, shift, true);

    expect(actual).to.equal(expected);
  });

  it("should return a properly decoded string", () => {
    const input = "Cheud Pdjdclqh";
    const shift = 3;
    const expected = "zebra magazine";
    const actual = caesar(input, shift, false);

    expect(actual).to.equal(expected);
  });
});
