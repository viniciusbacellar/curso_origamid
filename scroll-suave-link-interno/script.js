function animeTab() {
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo')

function ativarTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo')
  })
  tabContent[index].classList.add('ativo');
};

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    ativarTab(index);
  })
});
}
animeTab();



function accordionList() {
const accordion = document.querySelectorAll('.js-accordion dt')
const activeClass = 'ativo';
accordion[0].classList.add(activeClass)
accordion[0].nextElementSibling.classList.add(activeClass)


function accordionEvent() {
  this.classList.toggle(activeClass)
  this.nextElementSibling.classList.toggle(activeClass);
}
accordion.forEach((item) => {
  item.addEventListener('click', accordionEvent);
})
}
accordionList();



function initScrollSuave() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
function scrollSuave(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
// forma alternativa
// const topo = section.offsetTop;
// window.scroll({
  // top: topo,
  // behavior: 'smooth',
//});
linksInternos.forEach((link) => {
  link.addEventListener('click', scrollSuave)
})
}
initScrollSuave();



