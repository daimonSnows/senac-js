
const OBJ = {nome: "Bono", idade: 37}; //De objeto JSON para string

console.log(JSON.stringify(OBJ));


const STR = '{"nome": "Bono", "idade": 37}'; //De string para objeto JSON

console.log( JSON.parse(STR));


localStorage.setItem('nome', 'Bono');//mesma janela

const NOME = localStorage.getItem('nome', 'Bono');

//console.log(NOME);

sessionStorage.setItem('idade', '37');//varias janelas

const IDADE = sessionStorage.getItem('idade');

//console.log(IDADE);


//Recupera valor do input preenchido pelo usuario e adiciona no storage
document.querySelector('input.btn').addEventListener('click', function(e){
    e.preventDefault();

    const TAREFA = document.querySelector('#task').value;
    
    let tarefa;

    if(localStorage.getItem('tarefas') === null){

        tarefa = [];

    }else{

        tarefas = JSON.parse(localStorage.getItem('tarefas'));

    }
        tarefas.push(TAREFA);

        localStorage.setItem('tarefas', JSON.stringify(tarefas));

        console.log(tarefas);

        document.getElementById('task').value = '';

});

//Para sessionStorage: é so trocar todos localStorage para sessionStorage

/*
const TRF = localStorage.getItem('tarefa');

if(TRF){
    document.querySelector('#exibe').innerText = TRF;
}//exibe o valor do input no localstore e mostra no amarzenamento local
*/