document.querySelector('.menu-open-close').addEventListener("click", openMenuBar);


function openMenuBar (){
    let menuBar = document.querySelector('.header-container');
    menuBar.classList.toggle("close")
}