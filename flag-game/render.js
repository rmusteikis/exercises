// render visuals
const element = document.querySelector("#root");

function render(state, handleClick) {
  element.append(renderFlags(state.flags));
  element.append(renderButtons(handleClick));
  element.append(renderGameStatus(state));
}

function rerender(state) {
  const prevGameState = document.querySelector(".container");
  let newGameState = renderFlags(state.flags);

  if (!state.flags[0]) {
    newGameState = renderGameOver(state);
  }

  element.replaceChild(newGameState, prevGameState);
  element.lastChild.replaceWith(renderGameStatus(state));
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

function renderFlags(array) {
  const div = document.createElement("div");
  div.className = "container";

  const nestedArray = getNestedArray(array);

  for (let i = 0; i < nestedArray.length; i++) {
    const row = div.cloneNode();
    row.className = "row";

    for (let j = 0; j < nestedArray[i].length; j++) {
      const flag = div.cloneNode();
      flag.className = "flag";
      row.appendChild(flag);
    }

    div.appendChild(row);
  }
  return div;
}

function renderButtons(handleClick) {
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.classList.add("btn");

  const wrapper = div.cloneNode();
  wrapper.className = "btn-wrapper";

  const take1 = button.cloneNode();
  take1.textContent = "Take 1";
  take1.id = "take1";

  const take2 = button.cloneNode();
  take2.textContent = "Take 2";
  take2.id = "take2";

  const reset = button.cloneNode();
  reset.textContent = "Reset";
  reset.id = "reset";

  wrapper.appendChild(take1);
  wrapper.appendChild(take2);
  wrapper.appendChild(reset);

  wrapper.onclick = function (event) {
    if (event.target.nodeName === "BUTTON") {
      handleClick(event.target.id);
    }
    event.stopPropagation();
  };

  return wrapper;
}

function renderGameStatus(state) {
  const currentPlayer = state.player1 ? "1" : "2";
  return `Now picking player ${currentPlayer}`;
}

function renderGameOver() {
  const div = document.createElement("div");
  div.classList.add("container", "game-over");
  div.textContent = "GAME OVER";
  return div;
}
