class Perfil extends HTMLElement {
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
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 960 960" style="enable-background:new 0 0 960 960;" xml:space="preserve">
            
            <g id="Fondo">
            	<path class="st0" d="M528.1,48l314.1,181.3c30.9,17.9,50,50.9,50,86.6l0,362.7c0,35.7-19.1,68.7-50,86.6L528.1,946.6
            		c-30.9,17.9-69.1,17.9-100,0L114.1,765.3c-30.9-17.9-50-50.9-50-86.6l0-362.7c0-35.7,19.1-68.7,50-86.6L428.1,48
            		C459.1,30.2,497.2,30.2,528.1,48z"/>
            </g>
            <g id="Capa_1">
            	<g>
            		<defs>
            			<path id="SVGID_1_" d="M892.2,316c0-35.7-19.1-68.7-50-86.6L667.7,0H306.1L114.1,229.4c-30.9,17.9-50,50.9-50,86.6l0,362.7
            				c0,35.7,19.1,68.7,50,86.6l314.1,181.3c30.9,17.9,69.1,17.9,100,0l314.1-181.3c30.9-17.9,50-50.9,50-86.6L892.2,316z"/>
            		</defs>

            		<clipPath id="SVGID_2_">
            			<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
            		</clipPath>

            		    <image style="overflow:visible;clip-path:url(#SVGID_2_);" width="960" height="960" xlink:href="${this.img}" >

            		    </image>
            	</g>
            </g>
            </svg>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style type="text/css">
            :host{
                --bg-perfil: black;
            }
            .st0{
                fill:var(--bg-perfil);
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

customElements.define('img-perfil', Perfil);

export { Perfil }