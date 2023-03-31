let list = document.querySelectorAll('.nav li');

function active(){
    list.forEach((i)=>
    i.classList.remove('activo'));
    this.classList.add('activo');
}

list.forEach((i) =>
i.addEventListener('click', active));

let menu = document.querySelector('.menuNav');

let header = document.querySelector('header');

menu.onclick = function(){
    header.classList.toggle('activo');
}
