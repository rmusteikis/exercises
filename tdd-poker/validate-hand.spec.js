const { validateHand, isEachCardValid } = require("./validate-hand.js");

describe("The hand validation", () => {
  let hand;
  describe("when hand is not a string", () => {
    it("should throw an error", () => {
      hand = ["is", "not", "a", "string"];
      expect(validateHand(hand)).toThrow();
    });
  });

  describe("when hand is a string", () => {
    describe("when hand is invalid", () => {
      it("should throw an error", () => {
        hand = "is no tv al id";
        expect(validateHand(hand)).toThrow();
      });
    });

    describe("when hand is valid", () => {
      beforeEach(() => {
        hand = "2H 3H 4H 5H 6H";
      });

      it("should return an array", () => {
        expect(validateHand(hand)).toBeInstanceOf(Array);
      });

      it("array should contain 5 items", () => {
        expect(validateHand(hand)).toHaveLength(5);
      });

      it("each item should be an array", () => {
        expect(validateHand(hand)[0]).toBeInstanceOf(Array);
        expect(validateHand(hand)[1]).toBeInstanceOf(Array);
        expect(validateHand(hand)[2]).toBeInstanceOf(Array);
        expect(validateHand(hand)[3]).toBeInstanceOf(Array);
        expect(validateHand(hand)[4]).toBeInstanceOf(Array);
      });

      it("each 'card' should exist in the deck", () => {
        const handArray = validateHand(hand);
        expect(isEachCardValid(handArray)).toBeTruthy();
      });
    });
  });
});
