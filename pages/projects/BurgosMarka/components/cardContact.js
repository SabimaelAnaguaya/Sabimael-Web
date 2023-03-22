class CardContact extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
       this.img = this.getAttribute('img');
       this.bgColor = this.getAttribute('bgcolor')
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="personal ">
            <div class="imgPersonal">
                <img src="${this.img}" alt="">
            </div>

                <div class="infoPersonal">
                    <div>
                        <slot name="title"></slot>
                    </div>

                    <div>
                        <slot name="content"></slot>
                    </div>

                    <a href="" class="btnPersonal">
                        Contacto
                    </a>
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
            --bg-color: ;
        }
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
        }
        .personal{
            width: 350px;
            display: flex;
            align-items: center;
            gap: 20px;
            border-radius: 20px;
            background-color: var(--bg-color);
            padding: 20px;
            font-size: 1.6rem;
            box-shadow: 0px 5px 5px 2px;
        }

        .imgPersonal{
            max-width: 130px;
            filter: drop-shadow(-3px 3px 8px gray);
        }

        .imgPersonal img{
            width: 100%;
            
        }

        .btnPersonal{
            width: 90px;
            padding: 3px 5px;
            border: 2px solid black;
            border-radius: 5px;
            text-align: center;
            text-decoration:none;
            color:black;
        }

        .btnPersonal:hover{
            background-color: rgb(60, 60, 60);
            color: aliceblue;
            font-weight: bold;
        }

        

        .infoPersonal{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
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

customElements.define('card-contact', CardContact);

export { CardContact }