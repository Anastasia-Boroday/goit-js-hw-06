// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const itemAllEl = document.querySelectorAll('.item');
const numberCategories = itemAllEl.length;
console.log(`Number of categories: ${numberCategories}`);


itemAllEl.forEach(element => {
    const result = console.log(`Category:${element.querySelector('h2').textContent} 
    Element:${element.querySelectorAll('li').length}`);
    return result;
});



