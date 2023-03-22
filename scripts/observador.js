



/* Funcion para crear un observador */

let cards = document.querySelectorAll('card-serv')

const show = (entradas, obs) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('show');
        }else{
            entrada.target.classList.remove('show');
        }
    });
};

const obs = new IntersectionObserver(show, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});


obs.observe(cards[0]);
obs.observe(cards[1]);
obs.observe(cards[2]);