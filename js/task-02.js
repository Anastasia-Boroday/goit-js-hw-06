const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// li1.textContent = ingredients[0];
// li2.textContent = ingredients[1];
// li3.textContent = ingredients[2];
// li4.textContent = ingredients[3];
// li5.textContent = ingredients[4];
// li6.textContent = ingredients[5];
// // add to html


  // query
const ulEl = document.querySelector('#ingredients')
const addLi = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList = 'item';
  liEl.textContent = ingredient;
  return liEl;
});
ulEl.append(...addLi);


