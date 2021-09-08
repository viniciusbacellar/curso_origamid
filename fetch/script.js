// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const  inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');
btnCep.addEventListener('click', handleClick);
function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscarCep(cep);
}
function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc');
function fetchBtc() {
  fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
  .then(response => response.json())
  .then((btcJson) => {
    btcDisplay.innerText = ('R$ ' + btcJson.ticker.sell).replace('.', ',');
  })
}
// setInterval(fetchBtc, 1000 * 30);
fetchBtc();



// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piadaDisplay = document.querySelector('.piadas');
const btnPiada = document.getElementById('btnNext');
btnPiada.addEventListener('click', proximaPiada);
function proximaPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then((piadasJson) => {
    piadaDisplay.innerText = piadasJson.value
  }) 
}
