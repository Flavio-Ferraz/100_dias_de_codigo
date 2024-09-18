const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');

function contarLetras(){
    const text = textarea.value;
    const textoLength = textarea.value.length;

    count.innerText = `${textoLength}`
}