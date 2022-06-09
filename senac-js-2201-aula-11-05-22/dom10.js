document.body.addEventListener('click', function(e){
    
    e.preventDefault();

    if(e.target.parentElement.classList.contains('delete-item') === true){
        console.log(e.target);
    }
    console.log(e.target.parentElement.parentElement.remove());
});

//remove um elemento especifico