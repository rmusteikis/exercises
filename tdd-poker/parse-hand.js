const { throwError } = require("./utils.js");
const _ = require("lodash");

function parseHand(hand) {
  if (typeof hand !== "string") return () => throwError();

  const handToString = hand.replace(/\s+/g, "");
  const handArray = _.chunk(handToString, 2);

  if (!isEachCardValid(hand)) return () => throwError();

  return handArray;
}

function isEachCardValid(hand) {
  const validCards = hand.match(/[2-9TJQKA][SDHC]/g);
  const uniqueCards = _.uniq(validCards);

  if (uniqueCards.length !== 5) return false;

  return true;
}

module.exports = {
  parseHand,
  isEachCardValid,
};
