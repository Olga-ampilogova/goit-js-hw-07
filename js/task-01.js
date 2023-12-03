let listItem = document.querySelectorAll('li.item')
const countItem = listItem.length;
console.log(`Number of categories: ${countItem}`);
listItem.forEach(item=>{
 const titleItem = item.querySelector('h2');
 console.log(`Category: ${titleItem.textContent}`); 
 const count = item.querySelectorAll("li").length;
 console.log(`Elements: ${count}`);
});