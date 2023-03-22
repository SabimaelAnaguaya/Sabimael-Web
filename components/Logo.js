class Logo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
       this.title = this.getAttribute('title');
       this.subtitle = this.getAttribute('subtitle');
       this.img = this.getAttribute('img');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="logo-container">
            <img class="img-logo" src="${this.img}" alt="">
            <div class="text-logo">
            <h1 class="logo-title">${this.title}</h1>
            <h2 class="logo-subtitle">${this.subtitle ?? " "}</h2>
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
            height:60px; 
            --title-color: black;
            --subtitle-color: black;
        }
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .logo-container{
            height: 100%;
            display: flex;
            gap: 10px;
            align-items: center;
        }
        
        .img-logo{
            height: 100%;
        }
        
        .text-logo{
            font-family:'Poppins', sans-serif ;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 3rem;
        }
        
        .logo-title{
            font-size: 2.3rem;
            color:var(--title-color);
        }
        .logo-subtitle{
            line-height: 1.6rem;
            color:var(--subtitle-color);
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

customElements.define('my-logo', Logo);

export { Logo }