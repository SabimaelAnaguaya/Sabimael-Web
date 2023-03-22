class BgIcon extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
       this.img = this.getAttribute('img')
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">

            <defs>
                <style>.cls-1,.cls-3{fill:none;}.cls-2{fill:#343434;}.cls-3{stroke:#343434;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}
                </style>
            </defs>

            <title>whatsapp</title>

            <g id="Fondo">
                <g id="container">
                    <rect class="cls-1" width="32" height="32"/>
                </g>

                <path id="bg-color" d="M17.48.65,28.17,6.82a3.5,3.5,0,0,1,1.75,3V22.19a3.53,3.53,0,0,1-1.75,3L17.48,31.4a3.53,3.53,0,0,1-3.5,0L3.29,25.23a3.53,3.53,0,0,1-1.75-3V9.85a3.5,3.5,0,0,1,1.75-3L14,.65A3.48,3.48,0,0,1,17.48.65Z" />

            </g>

            <g id="logo">
                <image width="32" height="32" xlink:href="${this.img}"></image>
            </g>
            </g>
        </svg>
        
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
            :host{
                --bg-color: white;
            }

            svg{
                height: 100%;

            }

            
            #bg-color{
                fill: var(--bg-color);
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

customElements.define('bg-icon', BgIcon);

export { BgIcon }