const FORMULARIO = document.querySelector('#form-tarefa');
const LISTA = document.querySelector('.collection');
const BTN_LIMPAR = document.querySelector('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

function carregaMonitorDeEventos(){

    //Eventos
    document.addEventListener('DOMContentLoaded', pegaTarefa);
    FORMULARIO.addEventListener('submit', adicionarTarefa);
    LISTA.addEventListener('click', apagaTarefa);
    BTN_LIMPAR.addEventListener('click', 
    apagarTodasTarefas);
    FILTRO.addEventListener('click', filtraTarefa);
}

function pegaTarefa(){
    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.forEach(function(tarefa){
        ///cria os novos elementos
        const LI = document.createElement('li');
        LI.className = 'collection-item';
        LI.appendChild(document.createTextNode(tarefa));
        const A = document.createElement('a');
        A.className = 'apara-tarefa secondary-content';
        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        A.appendChild(I);
        I.appendChild(A);
        LISTA.appendChild(LI);
        //Fim cria os novos elementos
    });
}

function filtraTarefa(evento){

    const texto = evento.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(tarefa){
        
        const item = tarefa.firstChild.textContent;
        //-1 significa que não há o que está sendo buscado
        if(item.toLowerCase().indexOf(texto) != -1){
            tarefa.style.display = 'block';
        }else{
            tarefa.style.display = 'none'
        }
    })
}

function apagarTodasTarefas(evento){

    evento.preventdefault();

    LISTA.innerHTML = '';

    apagarTodasDoLocalStorage();
}

function apagarTodasDoLocalStorage(){

    localStorage.removeItem('tarefas');
}


function apagaTarefa(evento){
    
    if(evento.target.parentElement.classList.constins('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
    }
    apagaDoLocalStorage(evento.target.parentElement.parentElement);
}

function apagaDoLocalStorage(tarefaParaApagar){
    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.forEach(function(tarefa, indice){
        if(tarefaParaApagar.textContent === tarefa){
            tarefas.splice(indice, 1);
        }
    });

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
function adicionarTarefa(evento){

    evento.preventdefault();
    if(CAMPO_TAREFA.value === ''){//verifica se o campo está vazio
        alert('insira uma tarefa');
    }else{
        
        ///cria os novos elementos
        const LI = document.createElement('li');
        LI.className = 'collection-item';
        LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));
        const A = document.createElement('a');
        A.className = 'apara-tarefa secondary-content';
        const I = document.createElement('i');
        I.className = 'fa fa-remove';
        A.appendChild(I);
        I.appendChild(A);
        //Fim cria os novos elementos
        
        LISTA.appendChild(LI);//adiciona à lista de tarefas
        
        gravaTarefaNoLocalStorage(CAMPO_TAREFA, value);

        CAMPO_TAREFA.value = '';
    }

}

function gravaTarefaNoLocalStorage(){

    let  tarefa;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}