const _ = require("lodash");
const { validateHand } = require("./validate-hand.js");
const { calculateRank } = require("./calculate-rank.js");
const {
  separateHandValues,
  separateHandSuits,
} = require("./separate-cards-values.js");

function comparePokerHands(a, b) {
  if (validateHand(a) && validateHand(b)) {
    const handOne = validateHand(a);
    const handTwo = validateHand(b);

    if (calculateRank(handOne) > calculateRank(handTwo)) {
      return 1;
    } else if (calculateRank(handOne) > calculateRank(handTwo)) {
      return -1;
    } else {
      return 0;
    }
  }
}

// royal flush
//  sequence(10 to 14) AND same suits
//
// straight flush
//  sequence(NOT 10 to 14) AND same suits
//
// four of a kind
//  4 same values
//
// full house
//  three of a kind AND pair
//
// flush
//  same suits
//
// straight
//  sequence
//
// three of a kind
//  3 same values
//
// two pairs
//  2 pairs of values
//
// pair
//  2 same values
//
// highcard
//  highest card(s)

module.exports = {
  comparePokerHands,
};

// function isRoyalFlush(handArray) {
// const royalFlushValues = ["T", "J", "Q", "K", "A"];
// const handValues = [];
// const handSuits = [];

// for (let card of handArray) {
// handValues.push(card[0]);
// handSuits.push(card[1]);
// }

// const equalValues = _.isEqual(handValues.sort(), royalFlushValues.sort());
// const sameSuits = _.uniq(handSuits).length === 1;

// // cool condition
// if (equalValues && sameSuits) {
// return true;
// }
// }
