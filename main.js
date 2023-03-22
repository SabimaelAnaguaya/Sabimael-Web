import { Logo } from "./components/Logo.js";
import { Perfil } from "./components/Perfil.js";
import { BgIcon } from "./components/BgIcon.js";
import { Navlist } from "./components/Navlist.js";
import { CardService } from "./components/CardService.js";
import { CardPj } from "./components/CardProject.js"

/* Funcion para realizar un preload de la pagina */

window.addEventListener('load', ()=> {
    const container_loader = document.querySelector('.content_loader');

    container_loader.style.opacity = 0;
    container_loader.style.visibility = 'hidden';
});


