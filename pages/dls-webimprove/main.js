const btnMenubar = document.querySelector('#btn-menubar');
const lines = document.querySelectorAll('.line');
const menuBar = document.querySelector('.menubar')
function openMenubar(){
    lines[0].classList.toggle('line1');
    lines[1].classList.toggle('line2');
    lines[2].classList.toggle('line3');

    menuBar.classList.toggle('show');
}

btnMenubar.addEventListener('click', openMenubar);