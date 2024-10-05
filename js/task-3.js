const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener("input", () => {
    const trimOutput = input.value.trim();
    output.textContent = trimOutput === "" ? "Anonymous" : trimOutput;
  
});