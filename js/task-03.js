let textInput = document.querySelector('#name-input');
let output = document.querySelector('#name-output');
textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value.trim();
    if (output.textContent === ""){
        output.textContent ="Anonymous";
    }
});
 textInput.addEventListener("blur", (event) => {
    event.currentTarget.value = event.currentTarget.value.trim();
 });
 