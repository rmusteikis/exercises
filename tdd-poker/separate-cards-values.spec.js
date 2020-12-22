const {
  separateHandValues,
  separateHandSuits,
} = require("./separate-cards-values.js");

describe("The hand separation", () => {
  let hand;
  describe("When hand is valid", () => {
    describe("Separate cards values", () => {
      it("should return an array of numbers", () => {
        hand = ["TS", "JS", "QS", "KS", "AS"];
        const separatedHandValues = separateHandValues(hand);
        separatedHandValues.filter(
          (cardValue) => typeof cardValue === "number"
        );

        const isArrayOfNumbers = separatedHandValues.length === 5;
        expect(isArrayOfNumbers).toBeTruthy();
      });
    });
    describe("Separate cards suits", () => {
      it("Should return an array of strings", () => {
        hand = ["TS", "JS", "QS", "KS", "AS"];
        const separatedHandSuits = separateHandSuits(hand);
        separatedHandSuits.filter((cardValue) => typeof cardValue === "string");

        const isArrayOfStrings = separatedHandSuits.length === 5;
        expect(isArrayOfStrings).toBeTruthy();
      });
    });
  });
});
