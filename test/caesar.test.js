// Write your tests here!
const caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if shift is not present, equal to 0, less than -25, or greater than 25", () => {
    let actual = caesar("thinkful");
    expect(actual).to.equal(false);

    actual = caesar("thinkful", 99);
    expect(actual).to.equal(false);

    actual = caesar("thinkful", -26);
    expect(actual).to.equal(false);
  });

  /* it("should ignore capital letters", () => {
    const input = "ABCD";
    const shift = 1;
    const expected = "bcde";
    const actual = caesar(input, shift, true);

    expect(actual).to.equal(expected);
  }); */

  /* it("should wrap alphabets and ignore non-alphabetical characters", () => {
    const input = "a b!";
    const shift = -2;
    const expected = "y z!";
    const actual = caesar(input, shift, true);

    expect(actual).to.include(" ");
    expect(actual).to.include("!");
    expect(actual).to.equal(expected);
  }); */

  it("should return a properly encoded string and ignore capital letters", () => {
    let actual = caesar("thinkful", 3);
    expect(actual).to.equal("wklqnixo");

     actual = caesar("c thinkful", -3);
    expect(actual).to.equal("z qefkhcri");
    
     actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal("bpqa qa i amkzmb umaaiom!");
  });

  it("should return a properly decoded string and ignore capital letters", () => {
    let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal("this is a secret message!");

    actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal("thinkful");

    actual = caesar("zzz", -1, false);
    expect(actual).to.equal("aaa");
  });
});
