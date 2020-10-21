const _ = require("lodash");
const {
  calculateRank,
  straightAndFlushComboRank,
  pairAndThreeComboRank,
} = require("./calculate-rank.js");

describe("calculateRank", () => {
  describe("by given inputs should return results:", () => {
    let rank;
    it("royalFlushRank + sum(handValues)", () => {
      rank = 1e14 + _.sum([10, 14, 12, 11, 13]);
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

    it("straightFlushRank + sum(handValues)", () => {
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

    it("fullHouseRank + (cards * value)", () => {
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

    it("sum(handValues)", () => {
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

describe("straightAndFlushComboRank", () => {
  describe("by given inputs should return results:", () => {
    beforeEach(() => {
      let rank;
      let handValues;
    });

    it("royalFlushRank + sum(handValues)", () => {
      handValues = [10, 11, 12, 13, 14];
      rank = 1e14 + _.sum(handValues);
      expect(
        straightAndFlushComboRank(
          handValues,
          ["H", "H", "H", "H", "H"],
          _.sum(handValues)
        )
      ).toBe(rank);
    });

    it("straightFlushRank + sum(handValues)", () => {
      handValues = [2, 3, 4, 5, 6];
      rank = 1e13 + _.sum(handValues);
      expect(
        straightAndFlushComboRank(
          handValues,
          ["H", "H", "H", "H", "H"],
          _.sum(handValues)
        )
      ).toBe(rank);
    });
  });
});

describe("pairAndThreeComboRank", () => {
  describe("by given inputs should return correct results", () => {
    beforeEach(() => {
      let rank;
    });

    it("pairRank + sum(handValues)", () => {
      rank = 1e6 + _.sum([2, 2, 4, 5, 6]);
      expect(
        pairAndThreeComboRank([2, 2, 4, 5, 6], _.sum([2, 2, 4, 5, 6]))
      ).toBe(rank);
    });

    it("cardCount * cardValue + threeOfAKindRank + sum(handValues)", () => {
      rank = 3 * 2 + 1e8 + _.sum([2, 2, 2, 5, 6]);
      expect(
        pairAndThreeComboRank([2, 2, 2, 5, 6], _.sum([2, 2, 2, 5, 6]))
      ).toBe(rank);
    });

    it("3 * cardValue + fullHouseRank", () => {
      rank = 3 * 3 + 1e11;
      expect(
        pairAndThreeComboRank([2, 2, 3, 3, 3], _.sum([2, 2, 3, 3, 3]))
      ).toBe(rank);
    });
  });
});
