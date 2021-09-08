const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
console.log(comidas)
const primeiroValor = comidas.shift();
console.log(primeiroValor);
const ultimoValor = comidas.pop();
console.log(ultimoValor)
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')
console.log(comidas);



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
console.log(estudantes);
estudantes.reverse();
console.log(estudantes);
const verific = estudantes.includes('Joana')
console.log(verific)
const verific2 = estudantes.includes('Juliana')
console.log(verific2)



let html = `<section>
 <div>Sobre</div>
 <div>Produtos</div>
 <div>Contato</div>
 </section>`
// Substitua section por ul e div por li,
// utilizando split e joinconst carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

html = html.split('section')
html = html.join('ul')
html = html.split('div')
html = html.join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const arrayNova = carros.slice();
arrayNova.pop();
console.log(arrayNova);
console.log(carros);

