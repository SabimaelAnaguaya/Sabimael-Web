class Logo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
       this.img = this.getAttribute('img');
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="logo__container">
          <a href="./index.html">
            <img src="${this.img}" class="imgLogo" alt="logo">
          </a>
          <a  class="letterLogo" href="./index.html" class="txtLogo">
            <slot></slot>
          </a>
        </div>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>

        a{
            text-decoration:none;
            color:black;
            text-transform:uppercase;
        }

        .logo__container{
            width: fit-content;
            display: flex;
            text-align: center;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            font-size: 1.6rem;
            font-weight: bold;
        }
        
        .logo{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        
        .imgLogo{
            width: 100px;
        }
        
        .txtLogo{
            width: 200px;
            font-size: 2rem;
            font-weight: bolder;
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