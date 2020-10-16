function separateHandValues(handArray) {
  const convertedHandValues = [];

  for (let card of handArray) {
    switch (card[0]) {
      case "T":
        convertedHandValues.push(10);
        break;
      case "J":
        convertedHandValues.push(11);
        break;
      case "Q":
        convertedHandValues.push(12);
        break;
      case "K":
        convertedHandValues.push(13);
        break;
      case "A":
        convertedHandValues.push(14);
        break;
      default:
        convertedHandValues.push(Number(card[0]));
    }
  }

  return convertedHandValues;
}

function separateHandSuits(handArray) {
  const convertedHandSuits = [];

  for (let card of handArray) {
    convertedHandSuits.push(card[1]);
  }

  return convertedHandSuits;
}

module.exports = {
  separateHandValues,
  separateHandSuits,
};
