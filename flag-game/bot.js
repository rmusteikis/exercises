// bot's brain
function bot(state) {
  if (!state.player1 && state.flags.length) {
    setTimeout(() => {
      take(state.flags.length % 3);
      rerender(state);
    }, 500);
  }
}
