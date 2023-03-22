class Navlist extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
    }

    handleEvent(event) {
        if (event.type === "click"){
            this.navlist = this.shadowRoot.querySelector('.list-container');

            this.lines = this.shadowRoot.querySelectorAll('.line');

            this.navlist.classList.toggle('show-menu')
            this.lines[0].classList.toggle('line1');
            this.lines[1].classList.toggle('line2');
            this.lines[2].classList.toggle('line3');

            console.log(this.navlist)
        };
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        
            <div class="lines">
                <div class="line bg-line1"></div>
                <div class="line bg-line2"></div>
                <div class="line bg-line3"></div>
            </div>

            <ul class="list-container">
                <slot name="list"></slot>           
            </ul>
            
        
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        :host{
            display: block;
            --bg-list: none;
            --bg-lines: black;
            --bg-lines-mobile: white;
            --bg-line1: black;
            --bg-line2: black;
            --bg-line3: black;
        }
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
      
        .lines{
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
            position:fixed;
            top:20px;
            right:20px;
            z-index:1000;
        }

        .bg-line1{background:var(--bg-line1)}
        .bg-line2{background:var(--bg-line2)}
        .bg-line3{background:var(--bg-line3)}

        .line{
            width: 40px;
            height: 8px;
            border-radius: 5px;
            background-color: var(--bg-lines);
            right:0;
            transition: .5s ease;
        }

        .line1{
            background: var(--bg-lines-mobile);
            position:absolute;
            transform: rotate(45deg);
            transition: .5s ease-in-out;
        }

        .line2{
            background: var(--bg-lines-mobile);
            position:absolute;
            transform: scale(0);
            transition: .5s ease-in-out;
        }

        .line3{
            background: var(--bg-lines-mobile);
            position:absolute;
            transform: rotate(-45deg);
            transition: .5s ease-in-out;
        }

      
       

        .list-container{
            width:100%;
            height:100vh;

            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            gap:40px;

            list-style:none;

            font-size:2rem;
            font-weight:600;

            position:fixed;
            top:0;
            left:0;
            background: var(--bg-list);
            z-index:999;


            transform: translateX(-100%);
            transition: .5s all ease-out;
        }

        

        .show-menu{
            transform: translateX(0%);
            transition: .5s all ease-in;
        }
        
    


        /* TO PHONE XSM */
        @media screen and (max-width: 375px) {
        
        }

        /* TO TABLETS */
        @media screen and (min-width: 768px) {
            .lines{
                display:none;
            }
            .list-container{
                width:fit-content;
                height:100%;
    
                display:flex;
                flex-direction: row;
                justify-content:center;
                align-items:center;
                gap:10px;
                background:none;
    
                font-size:1.8rem;
                font-weight:600;
    
                position:relative;
                top:0;
                left:0;
                background: unset;
                z-index:999;
    
                transform: translateX(0);
                transition: unset;
            }
            
        }

        /* TO LAPTOPS */
        @media screen and (min-width: 968px) {
            
        }
        
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
        this.btnOpenMenu = this.shadowRoot.querySelector('.lines');

        this.btnOpenMenu.addEventListener("click", this);

    }

    disconectedCallback(){
        this.btnOpenMenu.removeEventListener("click", this);

    }
}

customElements.define('sa-navlist', Navlist);

export { Navlist }