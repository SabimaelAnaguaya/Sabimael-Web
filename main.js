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

/* ==================================== */

let dialog1 = document.querySelector('#introDialog');
let burgos = document.querySelector('#burgosMarka')
let portfolio = document.querySelector('#template-portfolio')
let mobile = document.querySelector('#mobile-first')
let clon = document.querySelector('#clonNintendo')

const cargarDialogo = (entradas, obs) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('dialoge-apper');
        }else{
            entrada.target.classList.remove('dialoge-apper');
        }
    });
};

const obs = new IntersectionObserver(cargarDialogo, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});


obs.observe(dialog1);
obs.observe(burgos);
obs.observe(portfolio);
obs.observe(mobile);
obs.observe(clon);




/* ====================================== */

