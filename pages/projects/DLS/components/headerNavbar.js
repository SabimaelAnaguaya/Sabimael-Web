
class Navbar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
        this.var = this.getAttribute('attribute');
        */
       
       
    }
    handleEvent(event) {
        if (event.type === "click")
          this.showMenu();
    }
    

    showMenu(){
        this.menu = this.shadowRoot.querySelector('.menubar')
        this.lines = this.shadowRoot.querySelectorAll('.line');
            
        
        this.menu.classList.toggle('show')

        this.lines[0].classList.toggle('line1');
        this.lines[1].classList.toggle('line2');
        this.lines[2].classList.toggle('line3');
    };
    
    
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`

        <nav class="main-header">
            <a  href="../DLS.html" class="logo-container" >
                <img src="../assets/logo.svg" alt="">
                <div class="logo-word">
                    <h2>DLS</h2>
                    <p class="text-logo">Digital Languaje Service</p>
                </div>
            </a>
            
            <div class="menu-hamburger"  id="btn-menu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            
            <ul class="menubar" >
                <a href=""><li>Inicio</li></a>
                <a href=""><li>Cursos</li></a>
                <a href=""><li>toefl</li></a>
                <a href=""><li>traducciones</li></a>
                <a href=""><li>contactos</li></a>

            </ul>
        </nav>
        
        ${this.getStyles()}
        `;
        return template;
    }
    

    getStyles(){
        return `
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing:border-box;
        }

        a{
            text-decoration: none;
            color: white;
        }
        .text-logo{
            color:white;
        }

        .main-header{
            width: 100%;
            height: 60px;
            padding: 0 10px;
            position: fixed;
            background: rgb(81, 38, 118, .9);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 999;
            transition: .5s all ease;
        }
        
        .menubar{
            width: 100%;
            height: calc(100vh);
            position: fixed;
            background: rgb(81, 38, 118, 0.7);
            backdrop-filter: blur(5px);
            top: 60px;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            color: azure;
            list-style: none;
            border-bottom-left-radius: 100%;
            transform: translateX(100%);
            transition: all 0.75s ease-in-out;
            z-index: 1000;
        
        }
        
        .logo-container{
            width: 155px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3px;
            animation: show-left 2s alternate;
        }
        
        .logo-container img{
            height: 100%;
        }
        
        .logo-word{
            
            color: azure;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
        
        .logo-word h2{
            font-size: 4rem;
            letter-spacing: 5px;
            line-height: 3.5rem;
            padding:0;
            margin:0;
        }
        
        .logo-word p{
            font-size: 0.8rem;
            color:white;
            padding:0;
            margin: 0;
        }
        
        .menu-hamburger{
            width: 40px;
            height: 40px;
            position: relative;
            flex-direction: column;
            justify-content: center;
            display: flex;
            gap: 5px;
            cursor: pointer;
        }
        
        .line{
            width: 100%;
            height: 7px;
            background-color: azure;
            border-radius: 5px;
            transition: 0.5s all ease-in-out;
        }
        
        .line1{
            position: absolute;
            transform: rotate(45deg);
            
        }
        
        .line2{
            position: absolute;
            transform: scale(0);
        }
        
        .line3{
            position: absolute;
            transform: rotate(-45deg);
        }
        
        .menubar a{
            text-align: center;
            text-transform: uppercase;
            width: 80%;
            border-radius: 20px;
            padding: 10px 15px;
            color: azure;
            font-size: 3rem;
            transition: .5s all ease-out;
        }
        
        .menubar a:hover{
            color: var(--black);
            background-color: var(--orange);
            transition: .5s all ease-in-out;
        }
        
        .show{
            transform: translateX(0);
            border-bottom-left-radius:0 ;
            transition: all .75s ease-in;
        }
        
        @keyframes show-left {
            from{
                transform: translateX(-200px);
                opacity: 0;
            }
        }

        @media (min-width: 992px){

            .main-header{
                height: 80px;
            }
            .menubar{
                height: fit-content;
                justify-content: flex-end;
                flex-direction: row;
                gap: 15px;
                position: static;
                backdrop-filter: blur(0);
                transform: translate(0);
                background: unset;
                border-radius: 0;
            }
            .menubar a{
                font-size: 2rem;
                width: fit-content;
            }
        
            .info-header{
                flex-direction: row-reverse;
            }
        
            .info-header img{
                width: 350px;
                height: 360px;
            }
        
            .info-header__text{
                max-width: 650px;
                border-radius: 30px;
                font-size: 3.5rem;
            }
            .info-main{
                padding: 60px 100px;
            }
        
            .info-main__link{
                width: 230px;
                height: 330px;
            }
        
            .about-main{       
                gap:70px;
                align-items:flex-start;
                justify-content: center;
            }
            .about-scroll{
                width: 1500px;
            }
        
            .about-main__card{
                width: 700px;
            }
            .social-media{
                flex-direction: row;
            }
        
            .logo-test{
                top: 150px;
                width: 200px;
            }
            
            .logo-test:hover{
                transform: scale(1.5);
            }
        }
        
        </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
        
        this.btnMenu = this.shadowRoot.querySelector('#btn-menu');
        this.btnMenu.addEventListener("click", this);
        
    }

    disconnectedCallback(){
        this.button.removeEventListener("click", this);
    }
}

customElements.define('nav-bar', Navbar);