//Elementos únicos

//console.log(document.querySelector('li:first-child').innerText);

//console.log(document.querySelector('li:last-child').innerText);

//console.log(document.querySelector('li:nth-child(2)').innerText);

//console.log(document.querySelector('li:nth-child(3)').innerText);

//Elementos múltiplos

/*console.log(document.getElementsByClassName('collection-item'));

const itens = document.getElementsByClassName('collection-item');

itens[3].style.color = 'red';
*/

/*const itens = document.querySelector('ul').getElementsByClassName('collection-itens')
itens[3].style.color = 'green';
*/

//ou

/*const itens = document.getElementsByTagName('li');
itens[1].style.color = 'green';
*/

/*
const itens = document.getElementsByTagName('li');
itens[0].style.color = 'green';
itens[3].style.color = 'green';
itens[1].style.color = itens[2].style.color = 'red';
*/

const itens = document.getElementsByTagName('li');

let itensArray = Array.from(itens);

/*itensArray.forEach(function(li, indice){
    console.log(`${indice}: ${li.innerText}`);
});
*/

let itensImpares = document.querySelectorAll('li:nth-child(odd)');
//odd impar
//even par

/*
//Como mudar a cor das linhas ímpares
let mudaCor = Array.from(itensImpares);

mudaCor.forEach(function(item){
    item.style.background = '#dedede';
});

console.log(itensImpares);
*/

const ITENS = document.querySelector('ul.collection');

console.log(ITENS.children[2].firstChild);

//ITENS.children[2].firstChild.textContent = 'Estudar ainda mais';
ITENS.children[2].firstChild.data = 'Vamos ver agora';
ITENS.children[2].firstChild.nodeValue = 'Pelo nodeValue';

const LABEL = document.querySelector('a.clear-tasks');

console.log(LABEL.textContent);

LABEL.textContent = 'APAGAR';