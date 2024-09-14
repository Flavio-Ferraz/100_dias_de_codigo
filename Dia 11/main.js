let box = document.querySelector('.box');
let input = document.querySelector('#radius');
let bkcolor = document.querySelector('#bkcolor');

input.addEventListener('input', () => {
    box.style.borderRadius = input.value;
})

bkcolor.addEventListener('input', () => {
    box.style.backgroundColor = bkcolor.value;
})