document.querySelector('button').addEventListener('click', mostraCotacao); /*vai pegar o botao vai add click e vai mostrar a cotacao*/

function mostraCotacao(){
    try{
        fetch('http://127.0.0.1:5500/AJAX/cotacoes.html').then(function(resultado){ /*puxa da url e retornar a funcao resultado*/
            return resultado.text();
        }).then(function(cotacoes){
            const moedas = JSON.parse(cotacoes);

            document.querySelector('ul').innerHTML = '';//bloqueia repetições

            const ul = document.querySelector('ul');

            const nomes = moedas.moedas;
            const valores = moedas.valores;

            for(let i = 0; i < nomes.lenght; i++){

                let li = document.createElement('li');
                const text = document.createTextNode(nomes[i] + ': ' + valores[i]);
                li.appendChild(text);
                ul.appendChild(li);
            }
        });
    }catch(e){ /* caso encontre erro exibe um alerta*/

        alert('Problema ao obter os dados: ' + e.message);
    }
}
