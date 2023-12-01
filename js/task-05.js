function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyValue = document.querySelector('body')
const backGrdClr = document.querySelector('.color');
const changeColorButn = document.querySelector('.change-color');

changeColorButn.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  bodyValue.style.backgroundColor = randomColor;
 backGrdClr.textContent = randomColor;
});