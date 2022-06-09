const p = document.getElementById('paragrafo');
const título = document.querySelector('h1');


console.log(título);

p.innerText = 'Meu Texto!';

if(confirm('Quer entrar com um valor?')){

    let valor = prompt('Entre com um número de 0 a 10');

    if (valor >= 0 && valor <= 10){

        p.innerText = '';

        for(i = 0; i < valor; i++){

            p.innerText = p.innerText + "Luiz Bono\n";
        }

        título.style.background = 'green';

    } else {

        p.innerText = 'Valor inválido';

        título.style.background = 'yellow';
    }
} else {
    p.innerText = 'Que pena que você não entrou com um valor :-(';
    título.style.background = 'red';
}

//fazer repeticao com numero informado entre 0 a 10 com fundo verde, caso ao contrario o valor sera invalido, sem nenhum valor sera vermelho