const _ = require("lodash");
const { calculateRank, isSequence } = require("./calculate-rank.js");

describe("calculateRank", () => {
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

  describe("Rank calculation", () => {
    let rank;
    it("should return: 1e14", () => {
      rank = 1e14;
      expect(
        calculateRank([
          ["T", "S"],
          ["A", "S"],
          ["Q", "S"],
          ["J", "S"],
          ["K", "S"],
        ])
      ).toBe(rank);
    });

    it("should return: 1e13 + sum(handValues)", () => {
      rank = 1e13 + _.sum([2, 3, 4, 5, 6]);
      expect(
        calculateRank([
          ["2", "S"],
          ["3", "S"],
          ["4", "S"],
          ["5", "S"],
          ["6", "S"],
        ])
      ).toBe(rank);
    });

    it("should return: 1e11 + 3(count) * 7(value)", () => {
      rank = 1e11 + 3 * 7;
      expect(
        calculateRank([
          ["7", "S"],
          ["7", "H"],
          ["7", "C"],
          ["A", "C"],
          ["A", "S"],
        ])
      ).toBe(rank);
    });

    it("should return: sum(handValues)", () => {
      rank = _.sum([2, 7, 4, 5, 6]);
      expect(
        calculateRank([
          ["2", "S"],
          ["7", "H"],
          ["4", "S"],
          ["5", "C"],
          ["6", "S"],
        ])
      ).toBe(rank);
    });
  });
});
