// Write your tests here!
const substitution = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(false);
    });

    it("should return false if the given alphabet contains duplicate letters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(false);
    });

    it("should correctly encode given phrase, based on alphabet given, maintaining spaces", () => {
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal("jrufscpw");

        actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });

    it("should correctly decode given phrase, based on alphabet given, maintaining spaces", () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal("thinkful");

        actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal("you are an excellent spy");
    });
});