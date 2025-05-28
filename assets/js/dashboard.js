import {DashboardPage} from "/components/Dashboard/compdashboard.js";
import {barraMenu} from "/components/barra-menu/compbarramen.js";
const dashboard = document.querySelector('dashboard-page');
customElements.define('dashboard-page',DashboardPage);
localStorage.setItem("pagina","Dashboard");
const barraMen = document.querySelector('barra-menu');
customElements.define('barra-menu',barraMenu);
barraMen.pagina = localStorage.getItem("pagina");
dashboard.modo = localStorage.getItem("modo")
export const cambiomodo = () =>{
    if (localStorage.getItem("modo")== "claro") {
        localStorage.setItem("modo","oscuro")
        dashboard.modo = localStorage.getItem("modo")
    }
    else{
        localStorage.setItem("modo","claro")
        dashboard.modo = localStorage.getItem("modo")
    }
}