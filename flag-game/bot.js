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
      take(state.flags.length % 3);
      rerender(state);
    }, 500);
  }
}
