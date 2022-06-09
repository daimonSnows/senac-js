document.querySelector('input.btn').addEventListener('click', function(evento){
    
    evento.preventDeFault();

    alert('meu click');
}); //adicionar ações para o elemento

document.getElementById('senac').addEventListener('click', function(evento){

    evento.preventDefault();
}); // previne ações padrões dos elementos

document.querySelector('span.card-title').addEventListener('click', function(evento){

    document.querySelector('#task-title').style.color = 'red';

}); // com o click

document.querySelector('span.card-title').addEventListener('mouseover', function(evento){

    document.querySelector('#task-title').style.color = 'red';

}); // mouse em cima

document.querySelector('span.card-title').addEventListener('onload', function(evento){

    document.querySelector('#task-title').style.color = 'red';

}); // atualiza / entra na página


//Limpa todas tarefas
const BTN_BLACK = document.getElementsByClassName('clear-tasks btn black');

BTN_BLACK[0].addEventListener('click', function(e){

    e.preventDeFault();

    document.querySelector('ul').remove();
}); // Fim limpa todas tarefas

//mudar cor com movimento do mouse
const card = document.querySelector('.card');
const titulo = document.querySelector('h5');

card.addEventListener('mousemove', mostraEvento);

function mostraEvento(evento){
    console.log('Tipo de evento: ${evento.type');
    titulo.textContent = 'Eixo X: ${evento.offsetX} Eixo Y:${evento.offsetY}';
    //Going Brega
    document.body.style.backgroundColor = 'rgb(${evento.offsetX},${evento.offsetY}, 40';
}; //fim mudar cor com movimento

const valorDoUsuario = document.querySelector('input#taks').value;

    const LI = document.createElement('li');
    LI.className = 'colletion-item';
    LI.id = 'nova-tarefa-qualquer';
    LI.setAttribute('title', 'Pare o mouse para ver');// criar  atributo
    
    const TEXTO = document.createTextNode(valorDoUsuario);// exibe  a frase
    
    LI.appendChild(TEXTO);//adicionar filhos
    
    const A = document.createElement('a');
    A.className = 'delete-item secondary-content';
    A.setAttribute('href', '#');
    //nova tarefa
    const I = document.createElement('i');
    
    I.className = 'fa fa-remove';
    //FIM criamos o elemento i
    
    A.appendChild(I); //colocamos o i no a
    LI.appendChild(A);//colocammo o a no li
    
    //capturamos o elemento ul para poder inserir o li
    const UL = document.querySelector('ul.collection');
    UL.appendChild(LI);
    document.querySelector('input#task').value = '';
