const TODA_LIST = document.querySelector('ul');
const LIS = document.querySelectorAll('li');

//TODA_LIST.remove(); // remove a lista ul

//TODA_LIST.removeChild(LIS[3]); // apaga um li especifico dentro da ul

LIS.forEach(function(val, ind){
    TODA_LIST.removeChild(LIS[ind])
});

const BOX = document.getElementsByClassName('input-field col s12');

//const BOX_VETOR = new Array

/*  BOX[0].classList.remove('input-field');
    BOX[0].classList.remove('s12');
    BOX[0].classList.remove('col'); //remove classes */

BOX[0].classList.add('collection-item');