const LI = document.createElement('li');


LI.className = 'colletion-item';

LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title', 'Pare o mouse para ver');// criar atributo

const TEXTO = document.createTextNode('Tarefa inserida dinamicamente');// exibe a frase

LI.appendChild(TEXTO);//adicionar filhos

console.log(LI);

//nova tarefa
const UL = document.querySelector('ul.collection');

UL.appendChild(LI);

I.className = 'fa fa-remove';
//FIM criamos o elemento i

A .appendChild(I); //colocamos o i no a

LI.appendChild(A);//colocammo o a no li

//capturamos o elemento ul para poder inserir o li
const UL = document.querySelector('ul.collection');

UL.appendChild(LI);//colocamos o li no ul

const novoTitulo = document.createElement('h2');
novoTitulo.id = 'task-title';
const novoTexto = document. createTextNode('listinha');
novoTitulo.appendChild(novoTexto);

const antigoTitulo = document.querySelector('h5');

const elementoPai = document.querySelector('div.card-action');

console.log(antigoTitulo);

elementoPai.replaceChild(antigoTitulo, novoTitulo);

//subscrever elementos antigos com os novos