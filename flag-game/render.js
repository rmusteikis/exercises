// render visuals
// 1. create flags
// 2. render flags inside flags container
// 3. create and add buttons
// 4. add event listener when flag clicked

const element = document.querySelector("#root");
const createDiv = document.createElement("div");
createDiv.classList.add("container");
element.appendChild(createDiv);
const container = document.querySelector(".container");

function generateFlags(height) {
  for (let i = 1; i <= height; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < i; j++) {
      let flag = document.createElement("button");
      flag.classList.add("flag");
      row.appendChild(flag);
    }
    container.appendChild(row);
  }
}

generateFlags(6);

function hideSelectedElement(e) {
  console.log(e.target);
}

container.addEventListener("clicked", hideSelectedElement);
