const _ = require("lodash");
const {
  ROYAL_FLUSH_RANK,
  STRAIGHT_FLUSH_RANK,
  FLUSH_RANK,
  STRAIGHT_RANK,
  FOUR_OF_A_KIND_RANK,
  FULL_HOUSE_RANK,
  THREE_OF_A_KIND_RANK,
  TWO_PAIRS_RANK,
  PAIR_RANK,
} = require("./ranks-constants.js");
const { calculateRank } = require("./calculate-rank.js");

describe("calculateRank", () => {
  describe("by given inputs should return results:", () => {
    let rank;
    it("royalFlushRank + sum(handValues)", () => {
      rank = ROYAL_FLUSH_RANK + _.sum([10, 14, 12, 11, 13]);
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
      rank = STRAIGHT_FLUSH_RANK + _.sum([2, 3, 4, 5, 6]);
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
      rank = FULL_HOUSE_RANK + 3 * 7;
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
