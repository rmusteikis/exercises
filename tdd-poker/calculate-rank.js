const _ = require("lodash");
const {
  ROYAL_FLUSH_RANK,
  STRAIGHT_FLUSH_RANK,
  FLUSH_RANK,
  STRAIGHT_RANK,
  FOUR_OF_A_KIND_RANK,
  FULL_HOUSE_RANK,
  THREE_OF_A_KIND_RANK,
  TWO_PAIRS_RANK,
  PAIR_RANK,
} = require("./ranks-constants.js");
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

  handRank = royalFlushRank(
    handValues,
    handSuits,
    handValuesSum,
    ROYAL_FLUSH_RANK
  );

  if (!handRank) {
    handRank = straightFlushRank(
      handValues,
      handSuits,
      handValuesSum,
      STRAIGHT_FLUSH_RANK
    );
  }

  if (!handRank) {
    handRank = flushRank(handSuits, handValuesSum, FLUSH_RANK);
  }

  if (!handRank) {
    handRank = straightRank(handValues, handValuesSum, STRAIGHT_RANK);
  }

  if (!handRank) {
    handRank = pairAndThreeComboRank(handValues, handValuesSum);
  }

  if (!handRank) handRank = handValuesSum;

  return handRank;
}

function royalFlushRank(handValues, handSuits, handValuesSum, rank) {
  const royalFlushValues = [10, 11, 12, 13, 14];

  if (
    _.uniq(handSuits).length === 1 &&
    _.difference(handValues, royalFlushValues).length === 0
  ) {
    return rank + handValuesSum;
  }
}

function straightFlushRank(handValues, handSuits, handValuesSum, rank) {
  if (_.uniq(handSuits).length === 1 && isSequence(handValues)) {
    return rank + handValuesSum;
  }
}

function flushRank(handSuits, handValuesSum, rank) {
  if (_.uniq(handSuits).length === 1) {
    return rank + handValuesSum;
  }
}

function straightRank(handValues, handValuesSum, rank) {
  if (isSequence(handValues)) {
    return rank + handValuesSum;
  }
}

function pairAndThreeComboRank(handValues, handValuesSum) {
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
      comboRank = FOUR_OF_A_KIND_RANK + handValuesSum;
      return comboRank;
    }
  }

  if (combination === 2) {
    comboRank += PAIR_RANK + handValuesSum;
  }
  if (combination === 3) {
    comboRank += THREE_OF_A_KIND_RANK + handValuesSum;
  }
  if (combination === 2 + 2) {
    comboRank += TWO_PAIRS_RANK + handValuesSum;
  }
  if (combination === 2 + 3) {
    comboRank += FULL_HOUSE_RANK;
  }

  return comboRank;
}

module.exports = {
  calculateRank,
  pairAndThreeComboRank,
};
