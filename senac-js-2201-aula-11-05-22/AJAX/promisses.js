const POSTS = [
    {titulo: 'post um', cont: ' conteudo post um'},
    {titulo: 'post dois', cont: 'conteudo post dois'}];


 /*/exemplo com callback
function criarPost(post, callback){
    POSTS.push(post);
    callback();
}

function getPosts(){

    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    });
    document.body.innerHTML = saida;
}

criarPost({titulo:' post Três', cont: 'conteudo post três'}, getPosts);
criarPost({titulo:' post Três', cont: 'conteudo post três'}, getPosts);
*/


//exemplo com promisses
function criarPost(post){
    return new Promise(function(resolve,rejeita){
        
            const ERR = true;

            if(!ERR){
                POSTS.push(post);
                resolve();
            }else{
                rejeita('Erro, não foi possivel executar');
            }
    });
}

function getPosts(){
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    });
    document.body.innerHTML = saida;
}

criarPost({titulo: 'Post três', cont: 'Conteudo post três'}).then(getPosts).catch(function(erro){
    console.log;
});