// main
let state = initState();

render(state, element, handleClick);

function handleClick(id, element) {
  if (id === "take1") {
    take(1);
    state.player1 = !state.player1;
  } else if (id === "take2") {
    take(2);
    state.player1 = !state.player1;
  } else if (id === "reset") {
    resetGame(element);
  }
}

function resetGame(element) {
  const prevGameState = document.querySelector(".container");
  const newGameState = renderFlags(state.flags);

  state = initState();
  element.replaceChild(newGameState, prevGameState);
}
