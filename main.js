document.querySelector('.menu-open-close').addEventListener("click", openMenuBar);



function openMenuBar (){
    let menuBar = document.querySelector('.header-container');
    let line1 = document.querySelector('.line1');
    let line2 = document.querySelector('.line2');
    let line3 = document.querySelector('.line3');
    
    menuBar.classList.toggle("close");
    line1.classList.toggle("line1__activated");
    line2.classList.toggle("line2__activated");
    line3.classList.toggle("line3__activated");

}