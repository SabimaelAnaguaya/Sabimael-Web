class CardService extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
       this.title = this.getAttribute('title') ?? ' title ';
       this.img = this.getAttribute('img');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
                <div class="card-serv">
                    <img src="${this.img}" alt="imagen de servicio">
                    
                    <div>
                        <h2>${this.title}</h2>
                        <p><slot></slot></p>
                    </div>
                </div>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            :host{
                display:block;
            }

            *{
                padding:0;
                margin:0;
                box-sizing:border-box;
            }
            .card-serv{
                width:250px;
                height: 250px;
                padding: 5px;
                background: var(--secondary);
                border-radius: 20px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                text-align: center;
                box-shadow: 0px 5px 20px -10px var(--enfasis);

            }

        

            .card-serv img{
                aspect-ratio:1/1;
                height:100px;
            }

            .card-serv h2{
                font-size: 2rem;
            }

            .card-serv p{
                font-size:1.6rem;
            }

        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('card-serv', CardService);

export { CardService }