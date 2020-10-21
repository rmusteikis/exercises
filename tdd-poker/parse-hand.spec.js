const { parseHand, isEachCardValid } = require("./parse-hand.js");

describe("parseHand", () => {
  let hand;
  let handArray;
  describe("when hand is not a string", () => {
    it("should throw an error", () => {
      hand = ["is", "not", "a", "string"];
      expect(parseHand(hand)).toThrow();
    });
  });

  describe("when hand is a string", () => {
    describe("when hand is invalid", () => {
      it("should throw an error", () => {
        hand = "2H 2H 2H 2H 2H";
        expect(parseHand(hand)).toThrow();
      });
    });

    describe("when hand is valid", () => {
      beforeEach(() => {
        hand = "2H 3H 4H 5H 6H";
        handArray = parseHand(hand);
      });

      it("should return an array", () => {
        expect(handArray).toBeInstanceOf(Array);
      });

      it("array should contain 5 items", () => {
        expect(handArray).toHaveLength(5);
      });

      it("each item should be an array", () => {
        expect(handArray[0]).toBeInstanceOf(Array);
        expect(handArray[1]).toBeInstanceOf(Array);
        expect(handArray[2]).toBeInstanceOf(Array);
        expect(handArray[3]).toBeInstanceOf(Array);
        expect(handArray[4]).toBeInstanceOf(Array);
      });
    });
  });
});

describe("isEachCardValid", () => {
  it("each 'card' should exist in the deck", () => {
    const hand = "2H 3H 4H 5H 6H";
    const handArray = parseHand(hand);
    expect(isEachCardValid(hand)).toBeTruthy();
  });
});
