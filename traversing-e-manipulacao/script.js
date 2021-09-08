const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const menu2 = menu.cloneNode(true);
copy.appendChild(menu2);


const dl = document.querySelector('.faq-lista');
const dt = dl.children[0];
console.log(dt);



const dd = dt.nextElementSibling;
console.log(dd);


const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

dl.innerHTML = animais.innerHTML;


