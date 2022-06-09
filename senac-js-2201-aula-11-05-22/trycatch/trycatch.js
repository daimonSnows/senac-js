try { // tenta puxar uma função

    let a ="b";
    if(typeof a !='boolean'){
        throw new SyntaxError('A tem que ser inteiro');
    }

}catch(erro){

    console.log(erro);

}finally{ // sempre será executado

    console.log('Erro ou não será executado');

}