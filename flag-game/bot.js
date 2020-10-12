// bot's brain
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function bot(state) {
  if (!state.player1 && state.flags.length) {
    const pickNumber = getRandomInt(1, 3);
    setTimeout(() => {
      if (state.flags.length === 1) {
        take(1);
      } else if (state.flags.length === 2) {
        take(2);
      } else {
        take(pickNumber);
      }
      rerender(state);
    }, 500);
  }
}
