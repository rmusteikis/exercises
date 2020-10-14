const { comparePokerHands } = require("./index.js");

it("does nothing", () => {
  expect(comparePokerHands(3, 4)).toBeTruthy();
});
