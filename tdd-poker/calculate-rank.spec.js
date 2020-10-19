const { calculateRank, isSequence } = require("./calculate-rank.js");

describe("The rank calculation", () => {
  describe("When values is in sequence", () => {
    it("should return true", () => {
      expect(isSequence([2, 3, 4, 5, 6])).toBeTruthy();
    });
  });

  describe("When values is not in sequence", () => {
    it("should return false", () => {
      expect(isSequence([2, 3, 4, 9, 6])).toBeFalsy();
    });
  });
});
