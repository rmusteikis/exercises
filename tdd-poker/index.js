const { validateHand } = require("./validate-hand.js");
const { calculateRank } = require("./calculate-rank.js");

function comparePokerHands(a, b) {
  if (validateHand(a) && validateHand(b)) {
    const handOne = validateHand(a);
    const handTwo = validateHand(b);

    const handOneRank = calculateRank(handOne);
    const handTwoRank = calculateRank(handTwo);

    if (handOneRank > handTwoRank) {
      return 1;
    } else if (handOneRank < handTwoRank) {
      return -1;
    } else {
      return 0;
    }
  }
}

module.exports = {
  comparePokerHands,
};
