const { parseHand } = require("./parse-hand.js");
const { calculateRank } = require("./calculate-rank.js");

function comparePokerHands(a, b) {
  const handOne = parseHand(a);
  const handTwo = parseHand(b);

  if (handOne && handTwo) {
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
