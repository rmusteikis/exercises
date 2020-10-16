const { isSequence, getPattern } = require("./calculate-rank.js");

describe("The rank calculation", () => {
  let hand;
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

  describe("Assigning hand values to a patterns", () => {
    expect(getPattern());
  });
});
