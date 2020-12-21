// Write your tests here!
const substitution = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const expected = false;
        const actual = substitution("test", "abc", true);

        expect(actual).to.equal(expected);
    });

    it("should return false if the given alphabet contains duplicate letters", () => {
        const expected = false;
        const actual = substitution("test", "abcabcabcabcabcabcabcabcyz", true);

        expect(actual).to.equal(expected);
    });

    it("should correctly encode given phrase, based on alphabet given, maintaining spaces", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet, true);

        expect(actual).to.equal(expected);
    });

    it("should correctly decode given phrase, based on alphabet given, maintaining spaces", () => {
        const input = "elp xhm xf mbymwwmfj dne";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "you are an excellent spy";
        const actual = substitution(input, alphabet, false);

        expect(actual).to.equal(expected);
    });
});