function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  destroyBoxes();
  let divEdit = document.querySelector('input');
  amount = divEdit.value;
  if (amount > 0 && amount <= 100) {
    let list = document.querySelector("#boxes");
    let curWidth = 30;
    let curHeigth = 30;
    Array.from({ length: amount }).map(() => {
      let divNew = document.createElement('div');
      divNew.style.width = `${curWidth}px`;
      divNew.style.height = `${curHeigth}px`;
      divNew.style.backgroundColor = getRandomHexColor();
      divNew.style.marginTop = '14px';
      list.append(divNew);
      curWidth += 10;
      curHeigth += 10;
    });
  }
  divEdit.value = "";
};

let createBtn = document.querySelector('[data-create]');
createBtn.addEventListener('click', createBoxes);
  

const destroyBoxes = () => {
  let newList = document.querySelector('#boxes');
 console.log(newList);
  newList.replaceChildren();
};
let destrBtn = document.querySelector('[data-destroy]');
destrBtn.addEventListener('click', destroyBoxes);
