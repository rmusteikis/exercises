// game logic
function take(count) {
  if (state.flags.length < count) return;
  state.flags.splice(-count);
}
