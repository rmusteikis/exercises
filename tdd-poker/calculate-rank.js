const _ = require("lodash");
const { isSequence } = require("./utils.js");
const {
  separateHandSuits,
  separateHandValues,
} = require("./separate-cards-values");

function calculateRank(handArray) {
  const handSuits = separateHandSuits(handArray);
  const handValues = separateHandValues(handArray);
  const handValuesSum = _.sum(handValues);

  let handRank = 0;

  handRank = straightAndFlushComboRank(handValues, handSuits, handValuesSum);

  if (handRank === 0) {
    handRank = pairAndThreeComboRank(handValues, handValuesSum);
  }

  if (handRank === 0) {
    handRank = handValuesSum;
  }

  return handRank;
}

function straightAndFlushComboRank(handValues, handSuits, handValuesSum) {
  let comboRank = 0;

  const royalFlushRank = 1e14;
  const straightFlushRank = 1e13;
  const flushRank = 1e10;
  const straightRank = 1e9;

  const royalFlushValues = [10, 11, 12, 13, 14];

  if (
    _.uniq(handSuits).length === 1 &&
    _.difference(handValues, royalFlushValues).length === 0
  ) {
    comboRank = royalFlushRank + handValuesSum;
    return comboRank;
  }

  if (_.uniq(handSuits).length === 1 && isSequence(handValues)) {
    comboRank = straightFlushRank + handValuesSum;
    return comboRank;
  }

  if (_.uniq(handSuits).length === 1) {
    comboRank = flushRank + handValuesSum;
    return comboRank;
  }

  if (isSequence(handValues)) {
    comboRank = straightRank + handValuesSum;
    return comboRank;
  }

  return comboRank;
}

function pairAndThreeComboRank(handValues, handValuesSum) {
  const fourOfAKindRank = 1e12;
  const fullHouseRank = 1e11;
  const threeOfAKindRank = 1e8;
  const twoPairsRank = 1e7;
  const pairRank = 1e6;

  let combination = 0;
  let comboRank = 0;

  const countValues = _.countBy(handValues);
  for (let key in countValues) {
    if (countValues[key] === 2) {
      combination += countValues[key];
    }
    if (countValues[key] === 3) {
      combination += countValues[key];
      comboRank = parseInt(key) * countValues[key];
    }
    if (countValues[key] === 4) {
      comboRank = fourOfAKindRank + handValuesSum;
      return comboRank;
    }
  }

  if (combination === 2) {
    comboRank += pairRank + handValuesSum;
  }
  if (combination === 3) {
    comboRank += threeOfAKindRank + handValuesSum;
  }
  if (combination === 2 + 2) {
    comboRank += twoPairsRank + handValuesSum;
  }
  if (combination === 2 + 3) {
    comboRank += fullHouseRank;
  }

  return comboRank;
}

module.exports = {
  calculateRank,
  straightAndFlushComboRank,
  pairAndThreeComboRank,
};
