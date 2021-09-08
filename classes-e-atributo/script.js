const classeLi = document.querySelectorAll('.menu a');
classeLi.forEach((item => {
  item.classList.add('ativo');
  console.log(item);
}));

classeLi.forEach((item => {
  item.classList.remove('ativo');
}));
classeLi[0].classList.add('ativo');


const img = document.querySelectorAll('img');
img.forEach((imgVeri => {
  console.log(imgVeri, imgVeri.hasAttribute('alt'));
}));

const trocarUrl = document.querySelector('a[href^= "http"]');
trocarUrl.setAttribute('href', 'facebook.com');




