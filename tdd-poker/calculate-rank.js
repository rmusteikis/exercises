const _ = require("lodash");
const {
  separateHandSuits,
  separateHandValues,
} = require("./separate-cards-values");

function calculateRank(handArray) {
  const handSuits = separateHandSuits(handArray);
  const handValues = separateHandValues(handArray);
  const handValuesSum = _.sum(handValues);
  let handRank = 2;
  // let handRank = _.sum(handValues);

  const countValues = _.countBy(handValues);

  for (let key in countValues) {
    // pair
    if (countValues[key] === 2) {
      handRank *= 2;
    }
    // three of a kind
    if (countValues[key] === 3) {
      handRank **= 5;
    }
    // four of a kind
    if (countValues[key] === 4) {
      handRank **= 11;
    }
  }

  // straight
  if (isSequence(handValues)) {
    handRank **= 7;
  }

  // flush
  if (_.uniq(handSuits).length === 1) {
    handRank **= 7;
  }

  // if (handRank !== handValuesSum) {
  // handRank += _.max(handValues);
  // }
  console.log(`Total: ${handRank}`);

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
