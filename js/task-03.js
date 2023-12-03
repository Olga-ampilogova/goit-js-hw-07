let textInput = document.querySelector('#name-input');
let output = document.querySelector('#name-output');
 textInput.addEventListener("input", (event) => {
 let inputValue = event.currentTarget.value.trim();
  output.textContent = inputValue ? inputValue : "Anonymous";
 });
textInput.addEventListener("blur", (event) => {
    event.currentTarget.value = event.currentTarget.value.trim()
});