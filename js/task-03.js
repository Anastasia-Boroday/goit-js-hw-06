const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// query
const ulEl = document.querySelector(".gallery")
const imgEl = document.querySelectorAll('.gallery>li');
// create li
const createListImg = (images) => 
  images.reduce((acc, item) => acc + `<li> <img class='img' src="${item.url}" alt="${item.alt}"></li>`, "");
// add style to css

// add li to html
ulEl.insertAdjacentHTML("beforeend", createListImg(images));

