const bar = document.getElementById('bar');
const x = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close){
    x.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}