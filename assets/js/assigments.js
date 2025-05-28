"use strict";
import { pending , complited , locked } from "./styleassigments.js";
import { GetJson } from "./funcionesJson.js";
import {estilobarra} from "/components/barra-menu/stylebarramenu.js";
import { rootmodonoche , rootmododia } from "/assets/js/rootsmodos.js";
const webcomp = document.querySelector('div-web');
const datacomp = document.querySelector('div-data');
const designcomp = document.querySelector('div-design');
const sciencecomp = document.querySelector('div-science');
const barra = document.querySelector('barra-menu');
const cambiomodo = () =>{
    if (localStorage.getItem("modo")== "claro") {
        localStorage.setItem("modo","oscuro");
    }
    else{
        localStorage.setItem("modo","claro");
}}


// Definir el elemento personalizado
customElements.define('my-component', MyComponent);

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
        this.page.innerHTML = `
            <a class="btn-home" href="/">LMS <br>Portal</a>
            <button class="hamburger" onclick = "hamburguesa()">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class = "menu" >
                <li><a href="/index.html" class="btn-option">Dashboard</a></li>
                <li><a href="/pages/pageCourses.html" class="btn-option" >Courses</a></li>
                <li><a href="/pages/assignments.html" class="btn-option-in-page" >Assignments</a></li>
                <li><a href="/pages/pageProgress.html" class="btn-option">Progress</a></li>
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
                <img src="./assets/img/fotoperfil.png" alt="">
                <p>Jhon <br> doe</p>
                <p class="btn-pro" id="flecha">▼</p>
                <div class="profile-a" id="menu-desplegable">
                    <a href="">👤 My Profile</a>
                    <a href="">⚙️ Settings</a>
                    <hr>
                    <a href="" class="logout">🚪 Logout</a>
                </div>
            </button>`;
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
customElements.define('barra-menu',barraMenu);
barra.pagina = "Assignments"
class tarjeta extends HTMLElement {
    constructor() {
        super();
        this._data = [];
        this.attachShadow({ mode:'open' });   
    }
    set data(value) {
        this._data = value;
        this.render();
    };
    render(){
        this.shadowRoot.innerHTML = '';
        this.estilos = document.createElement('style');
        if (localStorage.getItem("modo") == "oscuro") {
          this.estilos.innerHTML = rootmodonoche;
          this.shadowRoot.appendChild(this.estilos);
        }
        else{
          this.estilos.innerHTML = rootmododia;
          this.shadowRoot.appendChild(this.estilos);
        }
        this._data.forEach(x =>{
            const pagina = document.createElement('div');
            let xx = x.state;
            console.log(x.title);
            switch (xx) {
                case 'pending':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${pending}
                    </style>
                    <div class="assigment_body">
                        <div class="status">
                            <span>⏳</span>
                            <span>pending</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <div class="footer_1">
                                <span>📎</span>
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <button class="button" id="submit">
                                <span class="submit-icon">📤 submit assigment</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    this.shadowRoot.getElementById("submit").addEventListener("click", () =>{
                        pagina.innerHTML=/*html*/`
                        <style>
                            .modal{
                                z-index:1000;
                                top:0;
                                left: 0;
                                position: fixed;
                                display: flex;
                                background-color: #2a322d3d;
                                height:100%;
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                                .modal_body{
                                    background-color: var(--filter-botones-fondo);
                                    height: 89vh;
                                    width: 60vw;
                                    border-radius: 10px;
                                    overflow: auto;
                                    align-self: center;
                                    justify-self: center;
                                    margin-top: 3vh;
                                    .modal_header{
                                        display: flex;
                                        flex-direction: column;
                                        background-color: var(--blancofondoPAGINA);
                                        padding: 2vw 3vw;
                                        border-bottom: 1px solid var(--tarjeta-division);
                                        .modal_header_titulo{
                                            font-weight: 500;
                                            color:var(--color-letras-titulos);
                                            font-size: 1.2rem;
                                            height: 50%;
                                        }
                                        .modal_header_data{
                                            display: flex;
                                            gap: 3vw;
                                            height: 50%;
                                            .data_1{
                                                color: var(--azul-botones);
                                            }
                                            .data_2{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                    }
                                    .modal_main1{
                                        padding: 2vw;
                                        .exp{
                                            padding: 1vw 2vw;
                                            border-radius: 10px;
                                            background-color: var(--blancofondoPAGINA);
                                            .exp_titulo{
                                                font-weight: 500;
                                                color:var(--color-letras-titulos);
                                                font-size: 1.2rem;
                                            }
                                            .desc{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                            .exp_points{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                        }
                                    }
                                    .subm{
                                        .title{
                                            color: var(--color-letras-titulos);
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            span{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                        #sub-notes {
                                            box-sizing: border-box;
                                            border: none;
                                            border-radius: 8px;
                                            padding: 1vw 2vw;
                                            border: 1px solid #e1e8ed;
                                            font-size: 1rem;
                                            font-family: inherit;
                                            color: var(--blancofondoPAGINA);
                                            background-color: var(--color-letras);
                                            text-align: justify;
                                            resize: vertical;
                                            width: 100%;
                                            min-height: 20vh;
                                            max-height: 50vh; /* o lo que prefieras */
                                            overflow: auto;
                                            transition: all 0.3s ease;
                                            white-space: pre-wrap;
                                            overflow-wrap: break-word;
                                            cursor: text;
                                        }
                                        #sub-notes::placeholder {
                                            white-space: pre-wrap;
                                        }
                                        
                                    }
                                }
                                .submit{
                                    .title{
                                        color: var(--color-letras-titulos);
                                        font-weight: 500;
                                        display: flex;
                                        align-items: center;
                                        gap: 0.5rem;
                                        .op{
                                            color: var(--filter-botones-letra);
                                        }
                                    }
                                    .attach{
                                        border: 2px dashed var(--tarjeta-shadow);
                                        padding: 2vw;
                                        justify-items: center;
                                        align-content: center;
                                        .upload-icon{
                                            font-size: 2rem;
                                        }
                                        .letra{
                                            font-size: 16px;
                                            font-weight: 400;
                                            line-height: 150%;
                                            letter-spacing: .32px;
                                            color: var(--tarjeta-shadow);
                                        }
                                        .files{
                                            background-color: var(--azul-botones);
                                            color: #FFFFFF;
                                            border: none;
                                            border-radius: 10px;
                                            padding: .75rem 1.5rem;
                                            margin-bottom: .5rem;
                                            color: #2c3e50;
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            cursor: pointer;
                                            transition: all .3s ease;
                                        }
                                    }
                                }
                                .modal_footer{
                                    display: flex;
                                    flex-direction: column;
                                    background-color: var(--blancofondoPAGINA);
                                    padding: 2vw 3vw;
                                    border-top: 1px solid var(--tarjeta-division);
                                    display: flex;
                                    flex-shrink: 0;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    justify-content: flex-end;
                                    .submission-requirements{
                                        display: flex;
                                        align-items: center;
                                        gap: .5rem;
                                        color: #f39c12;
                                        font-size: .9rem;
                                        margin-bottom: 1rem;
                                    }
                                    .button-group{
                                        display: flex;
                                        justify-content: flex-end;
                                        gap: 1rem;
                                        .cancel-btn{
                                            padding: .75rem 1.5rem;
                                            border: 1px solid #e1e8ed;
                                            background-color: #fff;
                                            border-radius: 6px;
                                            cursor: pointer;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #666;
                                                text-decoration: none;
                                            }
                                        }
                                        .cancel-btn:hover{
                                            a{
                                                color: var(--blanco-letrabotonoes);
                                            }
                                            background-color: var(--filter-botones-letra);
                                        }
                                        .submit-btn{
                                            background-color: #e1e8ed;
                                            transform: none;
                                            padding: .75rem 1.5rem;
                                            cursor: not-allowed;
                                            border: none;
                                            border-radius: 6px;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #fff;
                                                text-decoration: none;
                                            }
                                        }
                                    }
                                }
                            }

                        </style>
                        <div class="modal">
                            <div class="modal_body">
                                <div class="modal_header">
                                    <p class="modal_header_titulo">Submit Assignment</p>
                                    <div class="modal_header_data">
                                        <p class="data_1">${x.title_course}</p>
                                        <p class="data_2">Due: ${x.date}</p>
                                    </div>
                                </div>
                                <div class="modal_main1">
                                    <div class="exp">
                                        <p class="exp_titulo">${x.title}</p>
                                        <p class="desc">${x.description}</p>
                                        <span class="exp_points">Points: ${x.points}</span>
                                        <span class="exp_points">Type:  ${x.type}</span>
                                    </div>
                                    <div class="subm">
                                        <p class="title">Submission Notes <span>*</span></p>
                                        <textarea type="text" name="notes" id="sub-notes" placeholder="Describe your work and any important notes about your submition..."></textarea>
                                    </div>
                                    <div class="submit">
                                        <p class="title">Attachments <span class="op">(optional)</span></p>
                                        <div class="attach">
                                            <div class="upload-icon">📎</div>
                                            <p class="letra">Drag and drop files here or</p>
                                            <input type="file" id="archivo" style="display: none;">
                                            <button type="file" class="files" id="filess">Browse Files</button>
                                            <p class="letra">Supported files: PDF, DOC, DOCX, TXT, ZIP,, RAR, 7X,JPG, PNG</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal_footer">
                                    <div class="submission-requirements">
                                        <span class="warning-icon">⚠️</span>
                                        <span>Please fill in all required fields before submitting</span>
                                    </div>
                                    <div class="button-group">
                                        <button class="cancel-btn" id="cerrar"><a href="./assignments.html"> Cancel </a></button>
                                        <button class="submit-btn"> Submit Assignment </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        this.shadowRoot.getElementById("filess").addEventListener("click", () =>{
                            this.shadowRoot.getElementById("archivo").click();
                        });
                        document.body.classList.add('no-scroll');
                    });
                    break;
                case 'locked':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${locked}
                    </style>
                    <div class="assigment_body_locked">
                        <!-- el status cambiatanto a locked, pending o complited -->
                        <div class="status">
                            <span class="status-icon">🔒</span>
                            <span>locked</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <!-- cambia segun el json -->
                                <h3 class="title">${x.title}</h3>
                                <!-- cambia segun el json -->
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <!-- este span se vacia cuando sea pending o complited -->
                            <span class="course-completion">
                                <span class="lock-icon">🔒</span> Complete the course to unlock (${x.process}% completed)
                            </span>
                            <span class="container_date">
                                <span>📅</span> 
                                <!-- cambia segun el json -->
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <!-- cambia segun el json -->
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <!-- cambia segun el json -->
                                <span class="points">🎯 points: ${x.points} </span>
                                <!-- cambia segun el json -->
                                <span class="type">📝 type: ${x.type}</span>
                                <!-- cambia segun el json -->
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <!-- cuando complited se vacia esta parte del footer -->
                            <div class="footer_1">
                                <span>📎</span>
                                <!-- cambia segun el json -->
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <!-- cambia si es locked, pending o complited -->
                            <button class="button_locked">
                                <span class="submit-icon">🔒 Complete Course to Submit</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                case 'completed':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${complited}
                    </style>
                    <div class="assigment_body_complited">
                        <div class="status">
                            <span>✅</span>
                            <span>Complited</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <button class="button-complited">
                                <span class="submit-icon">✅ Submitted</span>
                            </button>
                        </div>
                    </div>

                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                default:
                    pagina.innerHTML = `<p>Tipo de tarjeta no soportado</p>`;
                    this.shadowRoot.appendChild(pagina);
                    break;
            }
        });
    }
}
class tarjeta1 extends HTMLElement {
    constructor() {
        super();
        this._data = [];
        this.attachShadow({ mode:'open' });   
    }
    set data(value) {
        this._data = value;
        this.render();
    };
    render(){
        this.shadowRoot.innerHTML = '';
        this.estilos = document.createElement('style');
        if (localStorage.getItem("modo") == "oscuro") {
          this.estilos.innerHTML = rootmodonoche;
          this.shadowRoot.appendChild(this.estilos);
        }
        else{
          this.estilos.innerHTML = rootmododia;
          this.shadowRoot.appendChild(this.estilos);
        }
        this._data.forEach(x =>{
            const pagina = document.createElement('div');
            let xx = x.state;
            console.log(x.title);
            switch (xx) {
                case 'pending':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${pending}
                    </style>
                    <div class="assigment_body">
                        <div class="status">
                            <span>⏳</span>
                            <span>pending</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <div class="footer_1">
                                <span>📎</span>
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <button class="button" id="submit">
                                <span class="submit-icon">📤 submit assigment</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    this.shadowRoot.getElementById("submit").addEventListener("click", () =>{
                        pagina.innerHTML=/*html*/`
                        <style>
                            .modal{
                                z-index:1000;
                                top:0;
                                left: 0;
                                position: fixed;
                                display: flex;
                                background-color: #2a322d3d;
                                height:100%;
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                                .modal_body{
                                    background-color: var(--filter-botones-fondo);
                                    height: 89vh;
                                    width: 60vw;
                                    border-radius: 10px;
                                    overflow: auto;
                                    align-self: center;
                                    justify-self: center;
                                    margin-top: 3vh;
                                    .modal_header{
                                        display: flex;
                                        flex-direction: column;
                                        background-color: var(--blancofondoPAGINA);
                                        padding: 2vw 3vw;
                                        border-bottom: 1px solid var(--tarjeta-division);
                                        .modal_header_titulo{
                                            font-weight: 500;
                                            color:var(--color-letras-titulos);
                                            font-size: 1.2rem;
                                            height: 50%;
                                        }
                                        .modal_header_data{
                                            display: flex;
                                            gap: 3vw;
                                            height: 50%;
                                            .data_1{
                                                color: var(--azul-botones);
                                            }
                                            .data_2{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                    }
                                    .modal_main1{
                                        padding: 2vw;
                                        .exp{
                                            padding: 1vw 2vw;
                                            border-radius: 10px;
                                            background-color: var(--blancofondoPAGINA);
                                            .exp_titulo{
                                                font-weight: 500;
                                                color:var(--color-letras-titulos);
                                                font-size: 1.2rem;
                                            }
                                            .desc{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                            .exp_points{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                        }
                                    }
                                    .subm{
                                        .title{
                                            color: #2c3e50;
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            span{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                        #sub-notes {
                                            box-sizing: border-box;
                                            border: none;
                                            border-radius: 8px;
                                            padding: 1vw 2vw;
                                            border: 1px solid #e1e8ed;
                                            font-size: 1rem;
                                            font-family: inherit;
                                            color: var(--blancofondoPAGINA);
                                            background-color: var(--color-letras);
                                            text-align: justify;
                                            resize: vertical;
                                            width: 100%;
                                            min-height: 20vh;
                                            max-height: 50vh; /* o lo que prefieras */
                                            overflow: auto;
                                            transition: all 0.3s ease;
                                            white-space: pre-wrap;
                                            overflow-wrap: break-word;
                                            cursor: text;
                                        }
                                        #sub-notes::placeholder {
                                            white-space: pre-wrap;
                                        }
                                        
                                    }
                                }
                                .submit{
                                    .title{
                                        color: #2c3e50;
                                        font-weight: 500;
                                        display: flex;
                                        align-items: center;
                                        gap: 0.5rem;
                                        .op{
                                            color: var(--filter-botones-letra);
                                        }
                                    }
                                    .attach{
                                        border: 2px dashed var(--tarjeta-shadow);
                                        padding: 2vw;
                                        justify-items: center;
                                        align-content: center;
                                        .upload-icon{
                                            font-size: 2rem;
                                        }
                                        .letra{
                                            font-size: 16px;
                                            font-weight: 400;
                                            line-height: 150%;
                                            letter-spacing: .32px;
                                            color: var(--tarjeta-shadow);
                                        }
                                        .files{
                                            background-color: var(--azul-botones);
                                            color: #FFFFFF;
                                            border: none;
                                            border-radius: 10px;
                                            padding: .75rem 1.5rem;
                                            margin-bottom: .5rem;
                                            color: #2c3e50;
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            cursor: pointer;
                                            transition: all .3s ease;
                                        }
                                    }
                                }
                                .modal_footer{
                                    display: flex;
                                    flex-direction: column;
                                    background-color: var(--blancofondoPAGINA);
                                    padding: 2vw 3vw;
                                    border-top: 1px solid var(--tarjeta-division);
                                    display: flex;
                                    flex-shrink: 0;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    justify-content: flex-end;
                                    .submission-requirements{
                                        display: flex;
                                        align-items: center;
                                        gap: .5rem;
                                        color: #f39c12;
                                        font-size: .9rem;
                                        margin-bottom: 1rem;
                                    }
                                    .button-group{
                                        display: flex;
                                        justify-content: flex-end;
                                        gap: 1rem;
                                        .cancel-btn{
                                            padding: .75rem 1.5rem;
                                            border: 1px solid #e1e8ed;
                                            background-color: #fff;
                                            border-radius: 6px;
                                            cursor: pointer;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #666;
                                                text-decoration: none;
                                            }
                                        }
                                        .cancel-btn:hover{
                                            a{
                                                color: var(--blanco-letrabotonoes);
                                            }
                                            background-color: var(--filter-botones-letra);
                                        }
                                        .submit-btn{
                                            background-color: #e1e8ed;
                                            transform: none;
                                            padding: .75rem 1.5rem;
                                            cursor: not-allowed;
                                            border: none;
                                            border-radius: 6px;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #fff;
                                                text-decoration: none;
                                            }
                                        }
                                    }
                                }
                            }

                        </style>
                        <div class="modal">
                            <div class="modal_body">
                                <div class="modal_header">
                                    <p class="modal_header_titulo">Submit Assignment</p>
                                    <div class="modal_header_data">
                                        <p class="data_1">${x.title_course}</p>
                                        <p class="data_2">Due: ${x.date}</p>
                                    </div>
                                </div>
                                <div class="modal_main1">
                                    <div class="exp">
                                        <p class="exp_titulo">${x.title}</p>
                                        <p class="desc">${x.description}</p>
                                        <span class="exp_points">Points: ${x.points}</span>
                                        <span class="exp_points">Type:  ${x.type}</span>
                                    </div>
                                    <div class="subm">
                                        <p class="title">Submission Notes <span>*</span></p>
                                        <textarea type="text" name="notes" id="sub-notes" placeholder="Describe your work and any important notes about your submition..."></textarea>
                                    </div>
                                    <div class="submit">
                                        <p class="title">Attachments <span class="op">(optional)</span></p>
                                        <div class="attach">
                                            <div class="upload-icon">📎</div>
                                            <p class="letra">Drag and drop files here or</p>
                                            <input type="file" id="archivo" style="display: none;">
                                            <button type="file" class="files" id="filess">Browse Files</button>
                                            <p class="letra">Supported files: PDF, DOC, DOCX, TXT, ZIP,, RAR, 7X,JPG, PNG</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal_footer">
                                    <div class="submission-requirements">
                                        <span class="warning-icon">⚠️</span>
                                        <span>Please fill in all required fields before submitting</span>
                                    </div>
                                    <div class="button-group">
                                        <button class="cancel-btn" id="cerrar"><a href="./assignments.html"> Cancel </a></button>
                                        <button class="submit-btn"> Submit Assignment </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        this.shadowRoot.getElementById("filess").addEventListener("click", () =>{
                            this.shadowRoot.getElementById("archivo").click();
                        });
                        document.body.classList.add('no-scroll');
                    });
                    break;
                case 'locked':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${locked}
                    </style>
                    <div class="assigment_body_locked">
                        <!-- el status cambiatanto a locked, pending o complited -->
                        <div class="status">
                            <span class="status-icon">🔒</span>
                            <span>locked</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <!-- cambia segun el json -->
                                <h3 class="title">${x.title}</h3>
                                <!-- cambia segun el json -->
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <!-- este span se vacia cuando sea pending o complited -->
                            <span class="course-completion">
                                <span class="lock-icon">🔒</span> Complete the course to unlock (${x.process}% completed)
                            </span>
                            <span class="container_date">
                                <span>📅</span> 
                                <!-- cambia segun el json -->
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <!-- cambia segun el json -->
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <!-- cambia segun el json -->
                                <span class="points">🎯 points: ${x.points} </span>
                                <!-- cambia segun el json -->
                                <span class="type">📝 type: ${x.type}</span>
                                <!-- cambia segun el json -->
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <!-- cuando complited se vacia esta parte del footer -->
                            <div class="footer_1">
                                <span>📎</span>
                                <!-- cambia segun el json -->
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <!-- cambia si es locked, pending o complited -->
                            <button class="button_locked">
                                <span class="submit-icon">🔒 Complete Course to Submit</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                case 'completed':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${complited}
                    </style>
                    <div class="assigment_body_complited">
                        <div class="status">
                            <span>✅</span>
                            <span>Complited</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <button class="button-complited">
                                <span class="submit-icon">✅ Submitted</span>
                            </button>
                        </div>
                    </div>

                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                default:
                    pagina.innerHTML = `<p>Tipo de tarjeta no soportado</p>`;
                    this.shadowRoot.appendChild(pagina);
                    break;
            }
        });
    }
}
class tarjeta2 extends HTMLElement {
    constructor() {
        super();
        this._data = [];
        this.attachShadow({ mode:'open' });   
    }
    set data(value) {
        this._data = value;
        this.render();
    };
    render(){
        this.shadowRoot.innerHTML = '';
        this.estilos = document.createElement('style');
        if (localStorage.getItem("modo") == "oscuro") {
          this.estilos.innerHTML = rootmodonoche;
          this.shadowRoot.appendChild(this.estilos);
        }
        else{
          this.estilos.innerHTML = rootmododia;
          this.shadowRoot.appendChild(this.estilos);
        }
        this._data.forEach(x =>{
            const pagina = document.createElement('div');
            let xx = x.state;
            console.log(x.title);
            switch (xx) {
                case 'pending':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${pending}
                    </style>
                    <div class="assigment_body">
                        <div class="status">
                            <span>⏳</span>
                            <span>pending</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <div class="footer_1">
                                <span>📎</span>
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <button class="button" id="submit">
                                <span class="submit-icon">📤 submit assigment</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    this.shadowRoot.getElementById("submit").addEventListener("click", () =>{
                        pagina.innerHTML=/*html*/`
                        <style>
                            .modal{
                                z-index:1000;
                                top:0;
                                left: 0;
                                position: fixed;
                                display: flex;
                                background-color: #2a322d3d;
                                height:100%;
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                                .modal_body{
                                    background-color: var(--filter-botones-fondo);
                                    height: 89vh;
                                    width: 60vw;
                                    border-radius: 10px;
                                    overflow: auto;
                                    align-self: center;
                                    justify-self: center;
                                    margin-top: 3vh;
                                    .modal_header{
                                        display: flex;
                                        flex-direction: column;
                                        background-color: var(--blancofondoPAGINA);
                                        padding: 2vw 3vw;
                                        border-bottom: 1px solid var(--tarjeta-division);
                                        .modal_header_titulo{
                                            font-weight: 500;
                                            color:var(--color-letras-titulos);
                                            font-size: 1.2rem;
                                            height: 50%;
                                        }
                                        .modal_header_data{
                                            display: flex;
                                            gap: 3vw;
                                            height: 50%;
                                            .data_1{
                                                color: var(--azul-botones);
                                            }
                                            .data_2{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                    }
                                    .modal_main1{
                                        padding: 2vw;
                                        .exp{
                                            padding: 1vw 2vw;
                                            border-radius: 10px;
                                            background-color: var(--blancofondoPAGINA);
                                            .exp_titulo{
                                                font-weight: 500;
                                                color:var(--color-letras-titulos);
                                                font-size: 1.2rem;
                                            }
                                            .desc{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                            .exp_points{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                        }
                                    }
                                    .subm{
                                        .title{
                                            color: #2c3e50;
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            span{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                        #sub-notes {
                                            box-sizing: border-box;
                                            border: none;
                                            border-radius: 8px;
                                            padding: 1vw 2vw;
                                            border: 1px solid #e1e8ed;
                                            font-size: 1rem;
                                            font-family: inherit;
                                            color: var(--blancofondoPAGINA);
                                            background-color: var(--color-letras);
                                            text-align: justify;
                                            resize: vertical;
                                            width: 100%;
                                            min-height: 20vh;
                                            max-height: 50vh; /* o lo que prefieras */
                                            overflow: auto;
                                            transition: all 0.3s ease;
                                            white-space: pre-wrap;
                                            overflow-wrap: break-word;
                                            cursor: text;
                                        }
                                        #sub-notes::placeholder {
                                            white-space: pre-wrap;
                                        }
                                        
                                    }
                                }
                                .submit{
                                    .title{
                                        color: #2c3e50;
                                        font-weight: 500;
                                        display: flex;
                                        align-items: center;
                                        gap: 0.5rem;
                                        .op{
                                            color: var(--filter-botones-letra);
                                        }
                                    }
                                    .attach{
                                        border: 2px dashed var(--tarjeta-shadow);
                                        padding: 2vw;
                                        justify-items: center;
                                        align-content: center;
                                        .upload-icon{
                                            font-size: 2rem;
                                        }
                                        .letra{
                                            font-size: 16px;
                                            font-weight: 400;
                                            line-height: 150%;
                                            letter-spacing: .32px;
                                            color: var(--tarjeta-shadow);
                                        }
                                        .files{
                                            background-color: var(--azul-botones);
                                            color: #FFFFFF;
                                            border: none;
                                            border-radius: 10px;
                                            padding: .75rem 1.5rem;
                                            margin-bottom: .5rem;
                                            color: #2c3e50;
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            cursor: pointer;
                                            transition: all .3s ease;
                                        }
                                    }
                                }
                                .modal_footer{
                                    display: flex;
                                    flex-direction: column;
                                    background-color: var(--blancofondoPAGINA);
                                    padding: 2vw 3vw;
                                    border-top: 1px solid var(--tarjeta-division);
                                    display: flex;
                                    flex-shrink: 0;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    justify-content: flex-end;
                                    .submission-requirements{
                                        display: flex;
                                        align-items: center;
                                        gap: .5rem;
                                        color: #f39c12;
                                        font-size: .9rem;
                                        margin-bottom: 1rem;
                                    }
                                    .button-group{
                                        display: flex;
                                        justify-content: flex-end;
                                        gap: 1rem;
                                        .cancel-btn{
                                            padding: .75rem 1.5rem;
                                            border: 1px solid #e1e8ed;
                                            background-color: #fff;
                                            border-radius: 6px;
                                            cursor: pointer;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #666;
                                                text-decoration: none;
                                            }
                                        }
                                        .cancel-btn:hover{
                                            a{
                                                color: var(--blanco-letrabotonoes);
                                            }
                                            background-color: var(--filter-botones-letra);
                                        }
                                        .submit-btn{
                                            background-color: #e1e8ed;
                                            transform: none;
                                            padding: .75rem 1.5rem;
                                            cursor: not-allowed;
                                            border: none;
                                            border-radius: 6px;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #fff;
                                                text-decoration: none;
                                            }
                                        }
                                    }
                                }
                            }

                        </style>
                        <div class="modal">
                            <div class="modal_body">
                                <div class="modal_header">
                                    <p class="modal_header_titulo">Submit Assignment</p>
                                    <div class="modal_header_data">
                                        <p class="data_1">${x.title_course}</p>
                                        <p class="data_2">Due: ${x.date}</p>
                                    </div>
                                </div>
                                <div class="modal_main1">
                                    <div class="exp">
                                        <p class="exp_titulo">${x.title}</p>
                                        <p class="desc">${x.description}</p>
                                        <span class="exp_points">Points: ${x.points}</span>
                                        <span class="exp_points">Type:  ${x.type}</span>
                                    </div>
                                    <div class="subm">
                                        <p class="title">Submission Notes <span>*</span></p>
                                        <textarea type="text" name="notes" id="sub-notes" placeholder="Describe your work and any important notes about your submition..."></textarea>
                                    </div>
                                    <div class="submit">
                                        <p class="title">Attachments <span class="op">(optional)</span></p>
                                        <div class="attach">
                                            <div class="upload-icon">📎</div>
                                            <p class="letra">Drag and drop files here or</p>
                                            <input type="file" id="archivo" style="display: none;">
                                            <button type="file" class="files" id="filess">Browse Files</button>
                                            <p class="letra">Supported files: PDF, DOC, DOCX, TXT, ZIP,, RAR, 7X,JPG, PNG</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal_footer">
                                    <div class="submission-requirements">
                                        <span class="warning-icon">⚠️</span>
                                        <span>Please fill in all required fields before submitting</span>
                                    </div>
                                    <div class="button-group">
                                        <button class="cancel-btn" id="cerrar"><a href="./assignments.html"> Cancel </a></button>
                                        <button class="submit-btn"> Submit Assignment </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        this.shadowRoot.getElementById("filess").addEventListener("click", () =>{
                            this.shadowRoot.getElementById("archivo").click();
                        });
                        document.body.classList.add('no-scroll');
                    });
                    break;
                case 'locked':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${locked}
                    </style>
                    <div class="assigment_body_locked">
                        <!-- el status cambiatanto a locked, pending o complited -->
                        <div class="status">
                            <span class="status-icon">🔒</span>
                            <span>locked</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <!-- cambia segun el json -->
                                <h3 class="title">${x.title}</h3>
                                <!-- cambia segun el json -->
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <!-- este span se vacia cuando sea pending o complited -->
                            <span class="course-completion">
                                <span class="lock-icon">🔒</span> Complete the course to unlock (${x.process}% completed)
                            </span>
                            <span class="container_date">
                                <span>📅</span> 
                                <!-- cambia segun el json -->
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <!-- cambia segun el json -->
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <!-- cambia segun el json -->
                                <span class="points">🎯 points: ${x.points} </span>
                                <!-- cambia segun el json -->
                                <span class="type">📝 type: ${x.type}</span>
                                <!-- cambia segun el json -->
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <!-- cuando complited se vacia esta parte del footer -->
                            <div class="footer_1">
                                <span>📎</span>
                                <!-- cambia segun el json -->
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <!-- cambia si es locked, pending o complited -->
                            <button class="button_locked">
                                <span class="submit-icon">🔒 Complete Course to Submit</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                case 'completed':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${complited}
                    </style>
                    <div class="assigment_body_complited">
                        <div class="status">
                            <span>✅</span>
                            <span>Complited</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <button class="button-complited">
                                <span class="submit-icon">✅ Submitted</span>
                            </button>
                        </div>
                    </div>

                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                default:
                    pagina.innerHTML = `<p>Tipo de tarjeta no soportado</p>`;
                    this.shadowRoot.appendChild(pagina);
                    break;
            }
        });
    }
}
class tarjeta3 extends HTMLElement {
    constructor() {
        super();
        this._data = [];
        this.attachShadow({ mode:'open' });   
    }
    set data(value) {
        this._data = value;
        this.render();
    };
    render(){
        this.shadowRoot.innerHTML = '';
        this.estilos = document.createElement('style');
        if (localStorage.getItem("modo") == "oscuro") {
          this.estilos.innerHTML = rootmodonoche;
          this.shadowRoot.appendChild(this.estilos);
        }
        else{
          this.estilos.innerHTML = rootmododia;
          this.shadowRoot.appendChild(this.estilos);
        }
        this._data.forEach(x =>{
            const pagina = document.createElement('div');
            let xx = x.state;
            console.log(x.title);
            switch (xx) {
                case 'pending':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${pending}
                    </style>
                    <div class="assigment_body">
                        <div class="status">
                            <span>⏳</span>
                            <span>pending</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <div class="footer_1">
                                <span>📎</span>
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <button class="button" id="submit">
                                <span class="submit-icon">📤 submit assigment</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    this.shadowRoot.getElementById("submit").addEventListener("click", () =>{
                        pagina.innerHTML=/*html*/`
                        <style>
                            .modal{
                                z-index:1000;
                                top:0;
                                left: 0;
                                position: fixed;
                                display: flex;
                                background-color: #2a322d3d;
                                height:100%;
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                                .modal_body{
                                    background-color: var(--filter-botones-fondo);
                                    height: 89vh;
                                    width: 60vw;
                                    border-radius: 10px;
                                    overflow: auto;
                                    align-self: center;
                                    justify-self: center;
                                    margin-top: 3vh;
                                    .modal_header{
                                        display: flex;
                                        flex-direction: column;
                                        background-color: var(--blancofondoPAGINA);
                                        padding: 2vw 3vw;
                                        border-bottom: 1px solid var(--tarjeta-division);
                                        .modal_header_titulo{
                                            font-weight: 500;
                                            color:var(--color-letras-titulos);
                                            font-size: 1.2rem;
                                            height: 50%;
                                        }
                                        .modal_header_data{
                                            display: flex;
                                            gap: 3vw;
                                            height: 50%;
                                            .data_1{
                                                color: var(--azul-botones);
                                            }
                                            .data_2{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                    }
                                    .modal_main1{
                                        padding: 2vw;
                                        .exp{
                                            padding: 1vw 2vw;
                                            border-radius: 10px;
                                            background-color: var(--blancofondoPAGINA);
                                            .exp_titulo{
                                                font-weight: 500;
                                                color:var(--color-letras-titulos);
                                                font-size: 1.2rem;
                                            }
                                            .desc{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                            .exp_points{
                                                font-size: 1rem;
                                                color: var(--filter-botones-letra);
                                            }
                                        }
                                    }
                                    .subm{
                                        .title{
                                            color: #2c3e50;
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            span{
                                                color: var(--rojo-detalles-texto);
                                            }
                                        }
                                        #sub-notes {
                                            box-sizing: border-box;
                                            border: none;
                                            border-radius: 8px;
                                            padding: 1vw 2vw;
                                            border: 1px solid #e1e8ed;
                                            font-size: 1rem;
                                            font-family: inherit;
                                            color: var(--blancofondoPAGINA);
                                            background-color: var(--color-letras);
                                            text-align: justify;
                                            resize: vertical;
                                            width: 100%;
                                            min-height: 20vh;
                                            max-height: 50vh; /* o lo que prefieras */
                                            overflow: auto;
                                            transition: all 0.3s ease;
                                            white-space: pre-wrap;
                                            overflow-wrap: break-word;
                                            cursor: text;
                                        }
                                        #sub-notes::placeholder {
                                            white-space: pre-wrap;
                                        }
                                        
                                    }
                                }
                                .submit{
                                    .title{
                                        color: #2c3e50;
                                        font-weight: 500;
                                        display: flex;
                                        align-items: center;
                                        gap: 0.5rem;
                                        .op{
                                            color: var(--filter-botones-letra);
                                        }
                                    }
                                    .attach{
                                        border: 2px dashed var(--tarjeta-shadow);
                                        padding: 2vw;
                                        justify-items: center;
                                        align-content: center;
                                        .upload-icon{
                                            font-size: 2rem;
                                        }
                                        .letra{
                                            font-size: 16px;
                                            font-weight: 400;
                                            line-height: 150%;
                                            letter-spacing: .32px;
                                            color: var(--tarjeta-shadow);
                                        }
                                        .files{
                                            background-color: var(--azul-botones);
                                            color: #FFFFFF;
                                            border: none;
                                            border-radius: 10px;
                                            padding: .75rem 1.5rem;
                                            margin-bottom: .5rem;
                                            color: #2c3e50;
                                            font-weight: 500;
                                            display: flex;
                                            align-items: center;
                                            gap: .5rem;
                                            cursor: pointer;
                                            transition: all .3s ease;
                                        }
                                    }
                                }
                                .modal_footer{
                                    display: flex;
                                    flex-direction: column;
                                    background-color: var(--blancofondoPAGINA);
                                    padding: 2vw 3vw;
                                    border-top: 1px solid var(--tarjeta-division);
                                    display: flex;
                                    flex-shrink: 0;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    justify-content: flex-end;
                                    .submission-requirements{
                                        display: flex;
                                        align-items: center;
                                        gap: .5rem;
                                        color: #f39c12;
                                        font-size: .9rem;
                                        margin-bottom: 1rem;
                                    }
                                    .button-group{
                                        display: flex;
                                        justify-content: flex-end;
                                        gap: 1rem;
                                        .cancel-btn{
                                            padding: .75rem 1.5rem;
                                            border: 1px solid #e1e8ed;
                                            background-color: #fff;
                                            border-radius: 6px;
                                            cursor: pointer;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #666;
                                                text-decoration: none;
                                            }
                                        }
                                        .cancel-btn:hover{
                                            a{
                                                color: var(--blanco-letrabotonoes);
                                            }
                                            background-color: var(--filter-botones-letra);
                                        }
                                        .submit-btn{
                                            background-color: #e1e8ed;
                                            transform: none;
                                            padding: .75rem 1.5rem;
                                            cursor: not-allowed;
                                            border: none;
                                            border-radius: 6px;
                                            font-weight: 500;
                                            transition: all .3s ease;
                                            a{
                                                color: #fff;
                                                text-decoration: none;
                                            }
                                        }
                                    }
                                }
                            }

                        </style>
                        <div class="modal">
                            <div class="modal_body">
                                <div class="modal_header">
                                    <p class="modal_header_titulo">Submit Assignment</p>
                                    <div class="modal_header_data">
                                        <p class="data_1">${x.title_course}</p>
                                        <p class="data_2">Due: ${x.date}</p>
                                    </div>
                                </div>
                                <div class="modal_main1">
                                    <div class="exp">
                                        <p class="exp_titulo">${x.title}</p>
                                        <p class="desc">${x.description}</p>
                                        <span class="exp_points">Points: ${x.points}</span>
                                        <span class="exp_points">Type:  ${x.type}</span>
                                    </div>
                                    <div class="subm">
                                        <p class="title">Submission Notes <span>*</span></p>
                                        <textarea type="text" name="notes" id="sub-notes" placeholder="Describe your work and any important notes about your submition..."></textarea>
                                    </div>
                                    <div class="submit">
                                        <p class="title">Attachments <span class="op">(optional)</span></p>
                                        <div class="attach">
                                            <div class="upload-icon">📎</div>
                                            <p class="letra">Drag and drop files here or</p>
                                            <input type="file" id="archivo" style="display: none;">
                                            <button type="file" class="files" id="filess">Browse Files</button>
                                            <p class="letra">Supported files: PDF, DOC, DOCX, TXT, ZIP,, RAR, 7X,JPG, PNG</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal_footer">
                                    <div class="submission-requirements">
                                        <span class="warning-icon">⚠️</span>
                                        <span>Please fill in all required fields before submitting</span>
                                    </div>
                                    <div class="button-group">
                                        <button class="cancel-btn" id="cerrar"><a href="./assignments.html"> Cancel </a></button>
                                        <button class="submit-btn"> Submit Assignment </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                        this.shadowRoot.getElementById("filess").addEventListener("click", () =>{
                            this.shadowRoot.getElementById("archivo").click();
                        });
                        document.body.classList.add('no-scroll');
                    });
                    break;
                case 'locked':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${locked}
                    </style>
                    <div class="assigment_body_locked">
                        <!-- el status cambiatanto a locked, pending o complited -->
                        <div class="status">
                            <span class="status-icon">🔒</span>
                            <span>locked</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <!-- cambia segun el json -->
                                <h3 class="title">${x.title}</h3>
                                <!-- cambia segun el json -->
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <!-- este span se vacia cuando sea pending o complited -->
                            <span class="course-completion">
                                <span class="lock-icon">🔒</span> Complete the course to unlock (${x.process}% completed)
                            </span>
                            <span class="container_date">
                                <span>📅</span> 
                                <!-- cambia segun el json -->
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <!-- cambia segun el json -->
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <!-- cambia segun el json -->
                                <span class="points">🎯 points: ${x.points} </span>
                                <!-- cambia segun el json -->
                                <span class="type">📝 type: ${x.type}</span>
                                <!-- cambia segun el json -->
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <!-- cuando complited se vacia esta parte del footer -->
                            <div class="footer_1">
                                <span>📎</span>
                                <!-- cambia segun el json -->
                                <span>${x.attachments} attachment(s)</span>
                            </div>
                            <!-- cambia si es locked, pending o complited -->
                            <button class="button_locked">
                                <span class="submit-icon">🔒 Complete Course to Submit</span>
                            </button>
                        </div>
                    </div>
                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                case 'completed':
                    pagina.innerHTML =/* html */`
                    <style>
                        ${complited}
                    </style>
                    <div class="assigment_body_complited">
                        <div class="status">
                            <span>✅</span>
                            <span>Complited</span>
                        </div>
                        <div class="assigment_header">
                            <div class="container_1_1">
                                <h3 class="title">${x.title}</h3>
                                <span class="course_name">${x.title_course}</span>
                            </div>
                            <span class="container_date">
                                <span>📅</span> 
                                <p class="date">${x.date}</p>
                            </span>
                        </div>
                        <div class="assigment_main">
                            <p class="course_content">
                                ${x.description}
                            </p>
                            <div class="assigment_meta">
                                <span class="points">🎯 points: ${x.points}</span>
                                <span class="type">📝 type: ${x.type}</span>
                                <span class="prerequisites">📚 Required Modules: ${x.prerequisites}</span>
                            </div>
                        </div>
                        <div class="assigment_footer">
                            <button class="button-complited">
                                <span class="submit-icon">✅ Submitted</span>
                            </button>
                        </div>
                    </div>

                    `;
                    this.shadowRoot.appendChild(pagina);
                    break;
                default:
                    pagina.innerHTML = `<p>Tipo de tarjeta no soportado</p>`;
                    this.shadowRoot.appendChild(pagina);
                    break;
            }
        });
    }
}
customElements.define("div-web",tarjeta);
customElements.define("div-data",tarjeta1);
customElements.define("div-design", tarjeta2);
customElements.define("div-science", tarjeta3);

const botones = document.querySelectorAll(".filter-btn");
botones.forEach(boton => {
boton.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("active"));
    boton.classList.add("active");
});
});

document.getElementById("allbtn").addEventListener("click", () =>{
    filtro("all");
});
document.getElementById("pendingbtn").addEventListener("click", () =>{
    filtro("pending");
});
document.getElementById("completedbtn").addEventListener("click", () =>{
    filtro("completed");
});
document.getElementById("lockedbtn").addEventListener("click", () =>{
    filtro("locked");
});

const filtro = (filtro) =>{
    GetJson("task").then(datos =>{
        let courseData = [];
        let courseWeb = [];
        let courseScience = [];
        let courseDesign = [];
        datos.forEach(course => {  
            if (course.data == "web" ) {
                if (course.state == filtro || filtro == "all" ) {
                    courseWeb.push(course);
                }
            }else if (course.data == "data") {
                if (course.state == filtro || filtro == "all" ) {
                    courseData.push(course);
                }
            }else if (course.data == "design") {
                if (course.state == filtro || filtro == "all" ) {
                    courseScience.push(course);
                }
                
            }else if (course.data == "science") {
                if (course.state == filtro || filtro == "all" ) {
                    courseDesign.push(course);
                }
            }
        });
        webcomp.data = courseWeb;
        datacomp.data = courseData;
        designcomp.data = courseDesign;
        sciencecomp.data = courseScience;
    });
}

GetJson("task").then(datos =>{
    let courseData = [];
    let courseWeb = [];
    let courseScience = [];
    let courseDesign = [];
    datos.forEach(course => {  
        if (course.data == "web") {
            courseWeb.push(course);
        }else if (course.data == "data") {
            courseData.push(course);
        }else if (course.data == "design") {
            courseDesign.push(course);
        }else if (course.data == "science") {
            courseScience.push(course);
        }
    });
    webcomp.data = courseWeb;
    datacomp.data = courseData;
    designcomp.data = courseDesign;
    sciencecomp.data = courseScience;
    GetJson("toDo").then( datoss =>{
        let courseToDo = [];
        datoss.forEach(coursee => {
            courseWeb.forEach(x =>{
                if (x.id == coursee.id_task) {
                    courseToDo.push(x);
                }
            })
        });
        console.log(courseToDo);   
    });
});
