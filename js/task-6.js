function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}






const input = document.querySelector("input")
const btnCreate = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");


let size = 30;


btnCreate.addEventListener("click", createMarckup);
destroy.addEventListener("click", () => {
  input.value = "";
  clean();

})


function createMarckup() {
  if (input.value < 1 || input.value > 100) {
    console.log("error");
    return;
  }
  createBoxes(input.value);
}
function clean() {
  boxes.innerHTML = "";
  size = 30;
}


function createBoxes(amount) {
  
  clean();
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box  = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.append(box);
    size += 10;
  }
  boxes.append(fragment);
}