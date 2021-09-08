const imgs = document.querySelector('.copy');
console.log(imgs.offsetTop);


function somaImagens() {
  const imgs2 = document.querySelectorAll('img');
  let soma = 0
  imgs2.forEach((img2) => {
    soma += img2.offsetWidth;
  });
  console.log(soma)
}

window.onload = function() {
  somaImagens();
}

const links = document.querySelectorAll('a');
  links.forEach((link) => {
    if(link.clientWidth >= 48 && link.clientHeight >= 48) {
      console.log(link, 'o toque para o dedo está perfeito')
    } else {
      console.log(link, 'não está bom')
    }
    
  })

  const tela = window.matchMedia('(max-width: 720px)').matches;
  if(tela) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
  } else {
    console.log('usuario desktop')
  }

