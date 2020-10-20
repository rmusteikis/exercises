const _ = require("lodash");
const {
  separateHandSuits,
  separateHandValues,
} = require("./separate-cards-values");

function calculateRank(handArray) {
  const handSuits = separateHandSuits(handArray);
  const handValues = separateHandValues(handArray);

  const handValuesSum = _.sum(handValues);

  let handRank = 0;

  // royal flush
  if (
    _.uniq(handSuits).length === 1 &&
    _.difference(handValues, [10, 11, 12, 13, 14]).length === 0
  ) {
    handRank = 1e14;
    return handRank;
  }

  // straight flush
  if (_.uniq(handSuits).length === 1 && isSequence(handValues)) {
    handRank = 1e13 + handValuesSum;
    return handRank;
  }

  if (_.uniq(handSuits).length === 1) {
    handRank = 1e10 + handValuesSum;
    return handRank;
  }

  if (isSequence(handValues)) {
    handRank = 1e9 + handValuesSum;
    return handRank;
  }

  let combination = 0;

  const countValues = _.countBy(handValues);
  for (let key in countValues) {
    if (countValues[key] === 2) {
      combination += countValues[key];
      // handRank += +key * countValues[key];
    }
    if (countValues[key] === 3) {
      combination += countValues[key];
      handRank = +key * countValues[key];
    }
    if (countValues[key] === 4) {
      handRank = 1e12 + handValuesSum;
      return handRank;
    }
  }

  if (combination === 2) {
    handRank += 1e6 + handValuesSum;
  }
  if (combination === 3) {
    handRank += 1e8 + handValuesSum;
  }
  if (combination === 2 + 2) {
    handRank += 1e7 + handValuesSum;
  }
  if (combination === 2 + 3) {
    handRank += 1e11;
  }

  if (handRank === 0) {
    handRank = handValuesSum;
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
