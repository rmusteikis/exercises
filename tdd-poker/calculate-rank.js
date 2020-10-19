const _ = require("lodash");
const {
  separateHandSuits,
  separateHandValues,
} = require("./separate-cards-values");

function calculateRank(handArray) {
  const handSuits = separateHandSuits(handArray);
  const handValues = separateHandValues(handArray);
  let handRank = _.sum(handValues);

  // flush
  if (_.uniq(handSuits).length === 1) {
    handRank *= 10;
  }

  // straight
  if (isSequence(handValues)) {
    handRank *= 10;
  }

  // "2S AH 2H AS AC", "2H 3H 5H 6H 7H" => 1
  // three of a kind
  const countSuits = _.countBy(handSuits);
  const countValues = _.countBy(handValues);

  const isPair = false;

  for (let key in countValues) {
    // three of a kind
    if (countValues[key] === 3) {
      handRank *= 9;
    }
    // pair
    if (countValues[key] === 2) {
      handRank *= 8;
    }
  }

  return handRank;
}

function isSequence(handValuesArray) {
  const sortedArray = handValuesArray.sort();

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] - sortedArray[i - 1] !== 1) {
      return false;
    }
  }
  return true;
}

module.exports = { calculateRank, isSequence };
