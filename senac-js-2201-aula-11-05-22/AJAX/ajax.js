//exemplo com httpcom request
document.querySelector('xhr').addEventListener('click', carregaConteudo);

try{    
    function carregaConteudo(){
        const XHR = new XMLHttpRequest();

        XHR.open('GET', 'http://10.135.236.37:5500/ajax/conteudo.txt', true); // true = assincrono, sincrono está sendo descontinuado

        XHR.onload = function(){
            if(this.status === 200){//HTTP code 200 OK
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText;
        }
        }

        XHR.send();//realiza a requiseção
    }
}catch(e){

    alert('Problema ao puxar os dados: ' + e.message);
}finally{

    console.log('Olá pessoal');
}


//exemplo com fetch
document.querySelector('button').addEventListener('click', carregaConteudo);
try{

    function carregaConteudo(){
        fetch('conteudo.txt').then(function(resultado){
            return resultado.text();
        }).then(function(conteudo){
            document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
        });
    }
}catch(e){

    console.log(e)
    alert('Está função está errada: ' + e.message);
    
}finally{

    console.log('O documento está correto');
}