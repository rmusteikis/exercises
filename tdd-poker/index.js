const { validateHand } = require("./validate-hand.js");
const { calculateRank } = require("./calculate-rank.js");

function comparePokerHands(a, b) {
  if (validateHand(a) && validateHand(b)) {
    const handOne = validateHand(a);
    const handTwo = validateHand(b);

    if (calculateRank(handOne) > calculateRank(handTwo)) {
      return 1;
    } else if (calculateRank(handOne) < calculateRank(handTwo)) {
      return -1;
    } else {
      return 0;
    }
  }
}

module.exports = {
  comparePokerHands,
};
