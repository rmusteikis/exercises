const { calculateRank, isSequence } = require("./calculate-rank.js");

describe("The rank calculation", () => {
  it("Should return a number", () => {
    expect(
      typeof calculateRank([
        ["2", "S"],
        ["3", "S"],
        ["4", "S"],
        ["5", "S"],
        ["6", "S"],
      ])
    ).toBe("number");
  });

  it("Should return a value > 0", () => {
    expect(
      calculateRank([
        ["T", "S"],
        ["J", "S"],
        ["Q", "S"],
        ["K", "S"],
        ["A", "S"],
      ])
    ).toBe(6000);
    expect(
      calculateRank([
        ["T", "S"],
        ["J", "S"],
        ["Q", "S"],
        ["K", "S"],
        ["9", "S"],
      ])
    ).toBe(550);
    expect(
      calculateRank([
        ["2", "S"],
        ["A", "H"],
        ["2", "H"],
        ["A", "S"],
        ["A", "C"],
      ])
    ).toBe(3312);
  });

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
