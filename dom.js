const p = document.getElementById('paragrafo');

p.innerText = 'Meu texto!';

const cores = [ 'blue',
                'red',
                'brown',
                'yellow',
                'pink'];

for(i = 0, c = 0;  i < 10; i++, c++){

    p.style.background = cores[c];

    console.log(c + ':' + p.style.background);

    if( c >= 6) c = -1;
}

console.log(p);

//pegar um ID especifico, alterar com innerText e fazer as sequencias das cores