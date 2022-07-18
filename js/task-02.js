const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// query
const ulEl=document.querySelector('#ingredients')
// create element
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
// add atribute
li1.classList = 'item';
li2.classList = 'item';
li3.classList = 'item';
li4.classList = 'item';
li5.classList = 'item';
li6.classList = 'item';
//textContent
li1.textContent = ingredients[0];
li2.textContent = ingredients[1];
li3.textContent = ingredients[2];
li4.textContent = ingredients[3];
li5.textContent = ingredients[4];
li6.textContent = ingredients[5];
// add to html
ulEl.append(li1,li2,li3,li4,li5,li6);


