// main
// resetButton.addEventListener("click", resetGame);
let state = initState();

render(state, element);

const buttons = document.querySelector(".btn-wrapper");
buttons.onclick = function (event) {
  if (event.target.nodeName === "BUTTON") {
    handleClick(event.target.id, element);
    rerender(state, element);

    element.lastChild.replaceWith(renderGameStatus(state));
  }
  event.stopPropagation();
};

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

function initState(flagCount = 21) {
  const state = { player1: true, flags: [] };
  for (let i = 1; i <= flagCount; i++) {
    state.flags.push("*");
  }
  return state;
}

// Otherwise cannot properly render pyramid of flags
function getNestedArray(array) {
  const nestedArray = [];
  let firstItem = 0;
  for (let i = 1; i <= 6; i++) {
    const arr = array;
    nestedArray.push(arr.slice(firstItem, firstItem + i));
    firstItem += i;
  }
  return nestedArray;
}
