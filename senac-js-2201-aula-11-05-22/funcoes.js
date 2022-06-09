olaMundoNoLog('Fernando');
olaMundoNoLog('Bono');
olaMundoNoLog('Carol');
olaMundoNoLog('Alves');

function olaMundoNoLog(nome){ 
    console.log(`Olá ${nome}`);
}
//criar funcao exibindo em ordem os nomes compostos
const SOMA = function (a, b){

    return a + b;
};

let resultado = SOMA(2, 2);

console.log(resultado);
//soma das funcioes
(function(a, b){
    console.log(a + b);
})(3, 3);

let $vetor = ['Luiz', 'Bono', '57', 'Batata'];

function pegaUltimo(vet){
    
    let ult = vet.length - 1;

    return vet[ult];
}

let novoVetor = pegaUltimo(vet);

console.log('Último elemento = ' + novoVetor);

let aluno = {   nome: "Amanda",
                Matricula: 8421,
                setNome: function (n){
                    console.log('Muda p/ ' + n);
                }};

aluno.setNome('Blabla');

function nomeMesCorrente(){

    const MES = [ 'Janeiro',
                  'Fevereiro',
                  'Março',
                  'Abril',
                  'Maio',
                  'Junho',
                  'Julho',
                  'Agosto',
                  'Setembro',
                  'Outubro',
                  'Novembro',
                  'Dezembro'];

    let objDate = new Date;

    let atual = objDate.getMonth();
    
    return MES[atual];
}

console.log(nomeMesCorrente());

//exebir no console mes atual do windows