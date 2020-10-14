const _ = require("lodash");

function comparePokerHands(a, b) {
  return true;
}

function validateHand(hand) {
  if (typeof hand === "string") {
    const handToString = hand.replace(/\s+/g, "");
    const handArray = _.chunk(handToString, 2);
    if (isEachCardValid(handArray)) {
      return handArray;
    }
  } else {
    return () => throwError();
  }
}

function isEachCardValid(handArray) {
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];
  const cardSuits = ["S", "H", "D", "C"];
  const isValidValues = [];
  const isValidSuits = [];

  for (let card of handArray) {
    cardValues.includes(card[0]) ? isValidValues.push(true) : "";
    cardSuits.includes(card[1]) ? isValidSuits.push(true) : "";
  }

  if (isValidValues.length === 5 && isValidSuits.length === 5) {
    return true;
  } else {
    return false;
  }
}

function throwError() {
  throw new Error("hand is invalid");
}

module.exports = {
  comparePokerHands,
  validateHand,
  isEachCardValid,
};

// const handArray = ["2H", "3H", "4H", "5H", "6H"];
// const splitedHandArray = [
// [2, "H"],
// [3, "H"],
// [4, "H"],
// [5, "H"],
// [6, "H"],
// ];
