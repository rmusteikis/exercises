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
    it("Should return (sum(arr)**10)**10", () => {
      rank = (_.sum([2, 3, 4, 5, 6]) ** 10) ** 10;
      expect(
        calculateRank([
          ["2", "H"],
          ["3", "H"],
          ["4", "H"],
          ["5", "H"],
          ["6", "H"],
        ])
      ).toBe(rank);
    });
    it("should return sum(arr)**10", () => {
      rank = _.sum([2, 3, 4, 5, 6]) ** 10;
      expect(
        calculateRank([
          ["2", "H"],
          ["3", "C"],
          ["4", "H"],
          ["5", "C"],
          ["6", "H"],
        ])
      ).toBe(rank);
    });
    it("should return sum(arr) + max(arrItem)", () => {
      rank = _.sum([2, 3, 4, 8, 6]) + _.max([2, 3, 4, 8, 6]);
      expect(
        calculateRank([
          ["2", "H"],
          ["3", "C"],
          ["4", "H"],
          ["8", "C"],
          ["6", "H"],
        ])
      ).toBe(rank);
    });
  });
});
