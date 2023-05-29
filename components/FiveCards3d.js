class FiveCards3d extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});
//this.var = this.getAttribute('attribute');
    this.img1 = this.getAttribute('img1')
    this.img2 = this.getAttribute('img2')
    this.img3 = this.getAttribute('img3')
    this.img4 = this.getAttribute('img4')
    this.img5 = this.getAttribute('img5')

    this.title1 = this.getAttribute('title1')
    this.title2 = this.getAttribute('title2')
    this.title3 = this.getAttribute('title3')
    this.title4 = this.getAttribute('title4')
    this.title5 = this.getAttribute('title5')

    this.link1 = this.getAttribute('link1')
    this.link2 = this.getAttribute('link2')
    this.link3 = this.getAttribute('link3')
    this.link4 = this.getAttribute('link4')
    this.link5 = this.getAttribute('link5')
  }

  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML=`
    <section class="slider">
            <article class="slider-container">

              <div class="card left">
                <img src=${this.img1} alt="imagen proyecto ${this.title1}">
                <a href="${this.link1}">${this.title1 ? this.title1 : 'Titulo del Proyecto'}</a>
              </div>
              <div class="card center">
                <img src=${this.img2} alt="imagen proyecto ${this.title2}">
                <a href="${this.link2}">${this.title2 ? this.title2 : 'Titulo del Proyecto'}</a>
              </div>
              <div class="card right">
                <img src=${this.img3} alt="imagen proyecto ${this.title3}">
                <a href="${this.link3}">${this.title3 ? this.title3 : 'Titulo del Proyecto'}</a>
              </div>
              <div class="card left-hide">
                <img src=${this.img4} alt="imagen proyecto ${this.title4}">
                <a href="${this.link4}">${this.title4 ? this.title4 : 'Titulo del Proyecto'}</a>
              </div>
              <div class="card right-hide">
                <img src=${this.img5} alt="imagen proyecto ${this.title5}">
                <a href="${this.link5}">${this.title5 ? this.title5 : 'Titulo del Proyecto'}</a>
              </div>
                
            </article>
            <span class="flecha" id="siguiente">
              &gt;
            </span>
            <span class="flecha" id="anterior">
              &lt;
            </span>
                        
        </section>
    ${this.getStyles()}
    `;
    return template;
  }

  getStyles(){
    return `
    <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .slider{
        max-width: 100%
        height: auto;
        margin:0 auto;
        position: relative;
        overflow: hidden;
      }
      .slider-container{
        min-height: 200px;
        max-height: 450px;
        margin: 0 auto;
        display: flex;
        aspect-ratio: 1;
        transform: scale(0.999);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        perspective: 1000px;
        position: relative;
      }

      .card{
        width: 90%;
        background: #fff;
        border-radius: 2rem;
        position: absolute;
        aspect-ratio: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        padding-bottom: 2rem;
      }


      .card img{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      aspect-ratio: 1/1;
      object-fit: cover;
      width: 100%;
      
      z-index: 0;
      }

      .card a{

      font-family: inherit;
      font-weight: bold;
      width: fit-content;
      padding: 5px 14px;
      border:2px solid black;
      border-radius: 10px;
      text-decoration: none;
      font-size: 1.6rem;
      opacity: 0;
      color: black;
      background-color: #ffffff;
      z-index: 1;
      }


      .card.center{
      box-shadow: 0 5px 8px 1px #ffffff8b;
      transition: all 0.75s ease;
      transform: rotateY(0deg) scale(1) translate3d(0, 0, 0);
      z-index: 2;
      }


      .card.center a{
      opacity: 1;
      transition: opacity 0.75s ease-in;
      transition-delay: 0.8s;
      }


      .card.left{
      opacity: 0.9;
      filter: blur(1px);
      transform:rotateY(50deg) scale(0.7) translate3d(-64%, 0, 0);
      transition: all 0.75s ease;
      z-index: 1;
      
      }

      .card.right{
      opacity: 0.9;
      filter: blur(1px);
      transition: all 0.75s ease;
      transform: rotateY(-50deg) scale(0.7) translate3d(64%, 0, 0);
      z-index: 1;
      }

      .card.left-hide{
      transition: all 0.75s ease;
      opacity: 0.7;
      filter: blur(5px);
      transform:rotateY(50deg) scale(0.5) translate3d(-130%, 0, 0);
      z-index: 0;
      }

      .card.right-hide{
      transition: all 0.75s ease;
      opacity: 0.7;
      filter: blur(5px);
      transform: rotateY(-50deg) scale(0.5) translate3d(130%, 0, 0);
      z-index: 0;
      }

      .flecha{
        padding: 1rem;        
        color:white;
        font-size: 3rem;
        font-weight: bold;
        position: absolute;
        top: 50%;
        z-index: 2;
        cursor: pointer;
        user-select: none;
        text-shadow: 1px 2px 0 #000;
      }



      #siguiente{
        right: 0.5%;
      }

      #anterior{
        left: 0.5%;
      }

      /* TO TABLETS */
      @media screen and (min-width: 768px) {
        .card a{
          font-size: 2.5rem;
        }
      }
    </style>
    `
  }

  controlSlider(){
    const $cards = this.shadowRoot.querySelectorAll('.card'),
      $btnLeft = this.shadowRoot.getElementById('anterior'),
      $btnRight = this.shadowRoot.getElementById('siguiente'),
      $container = this.shadowRoot.querySelector('.slider-container'),
      cards = Array.from($container.getElementsByClassName('card'));

    let first = 0, second = 1, third = 2, fourth = 3, fifth = 4;

    //INCRENENTA EL VALOR DE UN NUMERO HASTA LLEGAR A CINCO
    function incrementNumber(number) {
      number = (number + 1) % 5;
      return number;
    }
    //DECREMENTA EL VALOR DE UN NUMERO HASTA LLEGAR A 0
    function decreaseNumber(number) {
    number = (number - 1 + 5) % 5;
    number = Math.abs(number);
    return number;
    }

    //REENDERIZA EL SLIDER
    function updateSlider(num1, num2, num3, num4, num5) {
      const card1 = cards[num1];
      const card2 = cards[num2];
      const card3 = cards[num3];
      const card4 = cards[num4];
      const card5 = cards[num5];

      cards.forEach(el =>{
        el.classList.remove('left')
        el.classList.remove('right')
        el.classList.remove('center')
        el.classList.remove('left-hide')
        el.classList.remove('right-hide')
      })
    
      card1.classList.add('left')
      card2.classList.add('center')
      card3.classList.add('right')
      card4.classList.add('left-hide')
      card5.classList.add('right-hide')
    }

    this.shadowRoot.addEventListener("click", e =>{
  
      if (
        e.target !== $btnLeft &&
        e.target !== $btnRight
      ) {
        return false;
      }
        
      if(e.target === $btnLeft){
        first = incrementNumber(first)
        second = incrementNumber(second)
        third = incrementNumber(third)
        fourth = incrementNumber(fourth)
        fifth = incrementNumber(fifth)
      }
      if(e.target === $btnRight){
        first = decreaseNumber(first)
        second = decreaseNumber(second)
        third = decreaseNumber(third)
        fourth = decreaseNumber(fourth)
        fifth = decreaseNumber(fifth)
      }
    
      updateSlider(first, second, third, fourth, fifth)
    
    })
    
  }

  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback(){
    this.render();
    this.controlSlider();
  }
}

customElements.define( 'sa-carouselfive', FiveCards3d);
export { FiveCards3d }