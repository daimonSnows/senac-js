/* class usuario {

    constructor()
    {
        this.nome = 'bono';
    }

    listar()
    {

        this.mostramensagem();
    }

    editar()
    {

        console.log('editar usuario');
    }
    cadastrar(params)
    {

        console.log ('cadastro feito');
    }

    mostramensagem()
    {
        alert('mensagem para o usuario');
    }
}

let user = new usuario;

user.listar();

metodo tem () atributo não */

class calculadora {

    constructor()
    {
        this.calcula();
    }

    calcula()
    {
        
        const n1 = document.getElementById('num1').value;
        const n2 = document.getElementById('num2').value;

        console.log(n1);

        const resultado = this.subtracao(n1, n2);

        this.exiberesultado(resultado);
    }

    soma (nm1, nm2)
    {
        let n1 = Number(nm1);
        let n2 = Number(nm1);

        return n1 + n2;
    }

    exiberesultado(res)
    {
        document.getElementById('resultado').innerText = res;
    }

    subtracao(nm1, nm2){
        let n1 = Number(nm1);
        let n2 = Number(nm1);

        return n1 - n2;
    }

}

new calculadora;