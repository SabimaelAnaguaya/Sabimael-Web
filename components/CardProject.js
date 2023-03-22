class CardPj extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
       this.img = this.getAttribute('img');
       this.title = this.getAttribute('title');
       this.url = this.getAttribute('url')
    }

    observador(){
        this.image = this.shadowRoot.querySelector('#image');

        const cargarDialogo = (entradas, obs) => {
            entradas.forEach(entrada => {
                if(entrada.isIntersecting){
                    entrada.target.classList.add('dialoge-apper');
                }else{
                    entrada.target.classList.remove('dialoge-apper');
                }
            });
        }

        const obs = new IntersectionObserver(cargarDialogo, {
            root: null,
            rootMargin: '0px',
            threshold: 0
        });
        
        obs.observe(this.image);


    }


    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="card-portafolio">
            <div class="portafolio" id="image">
                <img src="${this.img}" alt="Imagen del proyecto">
                <div class="card-portafolio__info">    
                <h3>${this.title}</h3>
                    <p><slot></slot></p>
                    <ul class="tools-portafolio">
                        <li><img src="../assets/icons/html5-brands.svg" class="ico-skill" alt="" title="HTML5"></li>
                        <li><img src="../assets/icons/css3-alt-brands.svg" class="ico-skill" alt="" title="CSS3"></li>
                        <li><img src="../assets/icons/square-js-brands.svg" class="ico-skill" alt="" title="JavaScript"></li>
                    </ul>
                    <a href="${this.url}" class="btn-cv" target="_blank">ver</a>
                </div>
            </div>
        </div>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            *{
                padding:0;
                margin:0;
                box-sizing:border-box;
            }

            a{
                text-decoration:none;
            }

            .card-portafolio{
                width: 250px;
                height: 450px;
                border-radius: 35px;
                border: 15px solid;
                background-color: #171515;
                position: relative;
            }
            .portafolio{
                width: 100%;
                height: 100%;
                position: relative;
            
                border-radius: 20px;
                background: var(--blue);
                overflow: hidden;
                transform: scale(0);
                transition: .75s all ease-in-out;
            }
            
            .portafolio img{
                height: 100%;
            }
            
            .card-portafolio__info{
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:space-around;
                gap: 10px;
                
                padding: 20px;
                transition: .5s all ease-in-out;
                transform: translateY(0);
                
                background: rgba(0, 0, 0, 0.5);
            
                font-size: 2rem;
                text-align: center;
                color:white;
            }
            
            .portafolio:hover > .card-portafolio__info{
            
                transform: translateY(-100%);
                transition: .5s all ease-in-out;
            
            }
            
            .tools-portafolio{
                width: 100%;
                height: 30px;
                display: flex;
                list-style: none;
                justify-content: space-around;
            }

            .dialoge-apper{   
                transform:scale(1);
                transition: .75s all ease-in-out;
            }

            .btn-cv{
                font-weight:600;
                color:white;
                padding:5px 8px;
                border-radius: 7px;
                text-transform:uppercase;
                border:2px dashed white;
            }

            .btn-cv:hover{
                color:white;
                background:black;
                transition: .5s ease;
            }
            
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
        this.observador();
    }
}

customElements.define('card-pj', CardPj);

export { CardPj }