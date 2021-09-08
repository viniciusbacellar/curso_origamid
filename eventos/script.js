
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}
links.forEach((link) => {
  link.addEventListener('click', handleLink)
})



// Selecione todos os elementos do site começando a partir do
///body,
// ao clique mostre exatamente quais elementos estão sendo
//clicados

//const corpos = document.querySelectorAll('body *');

//function handleClick(event) {
 // event.currentTarget.remove();
//}

//corpos.forEach((corpo) => {
//  corpo.addEventListener('click', handleClick)
//})





// Utilizando o código anterior, ao invés de mostrar no
//console,
// remova o elemento que está sendo clicado, o método remove()
//remove um elemento







// Se o usuário clicar na tecla (t), aumente todo o texto do
//site.



function handleCorpo(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('font');
  }
}
  window.addEventListener('keydown', handleCorpo)
