// game logic
function initState(flagCount = 21) {
  const state = { player1: true, flags: [] };
  for (let i = 1; i <= flagCount; i++) {
    state.flags.push("*");
  }
  return state;
}

function take(count) {
  if (state.flags.length < count) return;
  state.flags.splice(-count);
}
