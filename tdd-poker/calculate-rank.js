const _ = require("lodash");
const {
  separateHandSuits,
  separateHandValues,
} = require("./separate-cards-values");

function calculateRank(handArray) {
  const handSuits = separateHandSuits(handArray);
  let handRank = _.sum(separateHandValues(handArray));

  if (_.uniq(handSuits).length === 1) {
    return (handRank *= 10);
  }

  return handRank;
}

function getPattern(handArray) {}

const patterns = {
  royalFlush: [],
  straightFlush: [],
  fourOfAKind: [],
  fullHouse: [],
  flush: [],
  straight: [],
  threeOfAKind: [],
  twoPairs: [],
  pair: [],
  highcard: [],
};

function isSequence(handValuesArray) {
  const sortedArray = handValuesArray.sort();

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] - sortedArray[i - 1] !== 1) {
      return false;
    }
  }
  return true;
}

module.exports = { calculateRank, isSequence, getPattern };
