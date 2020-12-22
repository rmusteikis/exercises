function isSequence(handValuesArray) {
  const sortedArray = handValuesArray.sort();

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] - sortedArray[i - 1] !== 1) {
      return false;
    }
  }
  return true;
}

function throwError() {
  throw new Error("hand is invalid");
}

module.exports = {
  isSequence,
  throwError,
};
