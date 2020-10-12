// main
let state = initState();

render(state, handleClick);

function handleClick(id) {
  if (id === "take1") {
    take(1);
  } else if (id === "take2") {
    take(2);
  } else if (id === "reset") {
    state = initState();
  }
  rerender(state);
}
