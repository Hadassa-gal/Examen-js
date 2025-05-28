"use strict";
import {mostrarProgreso, mostrarProgreso_2, mostrarProgreso_3, mostrarProgreso_4} from "/assets/js/progress.js";
import { GetJson } from "/assets/js/funcionesJson.js";
import {estilobarra} from "/components/barra-menu/stylebarramenu.js";
import {estiloprogress} from "/components/Progress/styleprogress.js";
import {rootmododia,rootmodonoche} from "/assets/js/rootsmodos.js";
const barra = document.querySelector('barra-menu');
const comp = document.querySelector('pagina-progress');
const cambiomodo = () =>{
  if (localStorage.getItem("modo")== "claro") {
      localStorage.setItem("modo","oscuro");
      comp.modo = "oscuro";
  }
  else{
      localStorage.setItem("modo","claro");
      comp.modo = "claro";
  }
}
class barraMenu extends HTMLElement{
  constructor(){
      super();
      this.attachShadow({mode:"open"});
      this._pagina = "";
  }
  set pagina(value){
      this._pagina = value;
      this.render();
      this.funciones();
      this.aplicarmodo();
    }
    aplicarmodo(){
        if (localStorage.getItem("modo") == "oscuro") {
            const boton = this.shadowRoot.querySelector(".btn-mode");
            const barra = this.shadowRoot.getElementById("barra-menu");
            boton.textContent = "🌙";
            barra.classList.add("barra-noche");
            document.body.style.backgroundColor = "black";
        }
    }
  render(){
      this.estilo = document.createElement('style');
      this.estilo.innerHTML = estilobarra;
      this.shadowRoot.appendChild(this.estilo);
      this.page = document.createElement('div');
      this.page.id = "barra-menu";
      this.page.classList.add('barra-men');
      this.page.innerHTML = /*html*/`
        <a class="btn-home" href="/">LMS <br>Portal</a>
        <button class="hamburger" onclick = "hamburguesa()">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class = "menu" >
            <li><a href="/index.html" class="btn-option">Dashboard</a></li>
            <li><a href="/pages/pageCourses.html" class="btn-option" >Courses</a></li>
            <li><a href="/pages/assignments.html" class="btn-option" >Assignments</a></li>
            <li><a href="/pages/pageProgress.html" class="btn-option-in-page">Progress</a></li>
            <li><a href="/pages/pageProfile.html" class="btn-option">Profile</a></li>
        </ul>
        <div class="div-options">
            <button class="btn-mode" onclick="cambiarmodo()"> 🌞 </button>
            <select class="btn-english" name="" id="">
                <option value="">English</option>
                <option value="">Español</option>
            </select>
        </div>
        <button class="btn-profile" onclick="desplegarMenu()">
            <img src="/assets/img/fotoperfil.png" alt="">
            <p>Jhon <br> doe</p>
            <p class="btn-pro" id="flecha">▼</p>
            <div class="profile-a" id="menu-desplegable">
                <a href="">👤 My Profile</a>
                <a href="">⚙️ Settings</a>
                <hr>
                <a href="" class="logout">🚪 Logout</a>
            </div>
        </button>`/*html*/;
      this.shadowRoot.appendChild(this.page);
      
  }
  funciones() {
      this.shadowRoot.querySelector('.hamburger').addEventListener('click', this.hamburguesa);
      this.shadowRoot.querySelector('.btn-mode').addEventListener('click', this.cambiarmodo);
      this.shadowRoot.querySelector('.btn-profile').addEventListener('click', this.desplegarMenu);
  }
  hamburguesa = () =>{
      const hamburger = this.shadowRoot.querySelector('.hamburger');
      const menu = this.shadowRoot.querySelector('.menu');
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
  }
  cambiarmodo = () =>{
      const boton = this.shadowRoot.querySelector(".btn-mode");
      const barra = this.shadowRoot.getElementById("barra-menu");
      if (localStorage.getItem("modo") == "claro") {
          boton.textContent = "🌙";
          cambiomodo();
          barra.classList.add("barra-noche");
          document.body.style.transition = "background-color 0.5s ease";
          document.body.style.backgroundColor = "black";
      }
      else{
          boton.textContent = "🌞";
          cambiomodo();
          barra.classList.remove("barra-noche")
          document.body.style.transition = "background-color 0.5s ease";
          document.body.style.backgroundColor = "#f4f5f5"
      }
  }
  desplegarMenu = () =>{
      const flecha = this.shadowRoot.getElementById("flecha");
      const menu = this.shadowRoot.getElementById('menu-desplegable')
      if (menu.classList == "profile-a") {
          menu.classList.remove('profile-a');
          menu.classList.add('activo');
          flecha.classList.remove('btn-pro');
          flecha.classList.add('btn-pro-press');
      }
      else{
          menu.classList.remove('activo');
          menu.classList.add('profile-a');
          flecha.classList.remove('btn-pro-press');
          flecha.classList.add('btn-pro');
      }
  }
  
}
class PaginaProgress extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._courses = [];
    this._modo = "";
  }
  set modo(value){
    this._modo = value;
    this.render();
    this.setUpEvents();
  }
  set courses(value) {
    this._courses = value;
    this.render();
    this.setUpEvents();
  }

  setUpEvents() {
    const web = this.shadowRoot.querySelector(".web");
    const data = this.shadowRoot.querySelector(".Data");
    const mobile = this.shadowRoot.querySelector(".Mobile");
    const cloud = this.shadowRoot.querySelector(".Cloud");

    web?.addEventListener("click", () => {
      mostrarProgreso();
    });

    data?.addEventListener("click", () => {
      mostrarProgreso_2();
    });

    mobile?.addEventListener("click", () => {
      mostrarProgreso_3();
    });

    cloud?.addEventListener("click", () => {
      mostrarProgreso_4();
    });
  }

  render() {
    this.shadowRoot.innerHTML = estiloprogress;
    this.estilos = document.createElement('style');
      if (this._modo == "oscuro") {
        this.estilos.innerHTML = rootmodonoche;
        this.shadowRoot.appendChild(this.estilos);
      }
      else{
        this.estilos.innerHTML = rootmododia;
        this.shadowRoot.appendChild(this.estilos);
      }
    let array = []
    this._courses.forEach(element => {
      array.push(element.title)
    });
    this.pagina = document.createElement("div");
    this.pagina.classList.add("content");
    this.pagina.innerHTML = `<div class="learning"> <h1>Learning Progress</h1></div>`
    this.pagina.innerHTML = `
        <div class="content-cubiculos">
          <div class="web">
              <a class="letras">${array[0]}</a>
              <div class="barra-porcentaje">
                <div class="barra-marca"></div>
              </div>
              <p class="letras_medio">80% Complete</p>
              <span class="letras_abajo">Click to view topics <span class="material-symbols-outlined">--></span></span>
          </div>

          <div class="Data">
              <a class="letras">${array[1]}</a>
              <div class="barra-porcentaje-2">
                <div class="barra-marca-2"></div>
              </div>
              <p class="letras_medio">60% Complete</p>
              <span class="letras_abajo">Click to view topics <span class="material-symbols-outlined">--></span></span>
          </div>

          <div class="Mobile">
              <a class="letras">${array[2]}</a>
              <div class="barra-porcentaje-3">
                <div class="barra-marca-3"></div>
              </div>
              <p class="letras_medio">45% Complete</p>
              <span class="letras_abajo">Click to view topics <span class="material-symbols-outlined">--></span></span>
          </div>

          <div class="Cloud">
              <a class="letras">${array[3]}</a>
              <div class="barra-porcentaje-4">
                <div class="barra-marca-4"></div>
              </div>
              <p class="letras_medio">30% Complete</p>
              <span class="letras_abajo">Click to view topics <span class="material-symbols-outlined">--></span></span>
          </div>
        </div>

    `;
    this.shadowRoot.appendChild(this.pagina);
  }
}
customElements.define('barra-menu',barraMenu);
barra.pagina = "Progress"
// Define the custom element first
customElements.define("pagina-progress", PaginaProgress);

// Then get the data and set it
document.addEventListener('DOMContentLoaded', async () => {
  const progress = document.querySelector("pagina-progress");
 
});


if (localStorage.getItem("modo")== "claro") {
  comp.modo = "claro";
}
else{
  comp.modo = "oscuro";
}
const datos = await GetJson("courses");
console.log(datos)
comp.courses = datos;
