const { throwError } = require("./utils.js");
const _ = require("lodash");

function parseHand(hand) {
  if (typeof hand === "string") {
    const handToString = hand.replace(/\s+/g, "");
    const handArray = _.chunk(handToString, 2);

    if (isEachCardValid(hand)) {
      return handArray;
    } else {
      return () => throwError();
    }
  } else {
    return () => throwError();
  }
}

function isEachCardValid(hand) {
  const validCards = hand.match(/[2-9TJQKA][SDHC]/g);
  const uniqueCards = _.uniq(validCards);

  if (uniqueCards.length === 5) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  parseHand,
  isEachCardValid,
};
