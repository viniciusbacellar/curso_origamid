// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
const pessoa1 = new Pessoas('jorge', 'silva', 21);

// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoas.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');


li; // HTMLLIElement
li.click; //function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // função executada = undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String pois é o que está retornando e não o que ela é
