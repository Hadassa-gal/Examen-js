import {estilobarra} from "/components/barra-menu/stylebarramenu.js";
import {cambiomodo} from "/assets/js/dashboard.js";
export class barraMenu extends HTMLElement{
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
        switch (this._pagina) {
            case "Dashboard":
                this.page.innerHTML = `
                <a class="btn-home" href="/">LMS <br>Portal</a>
                <button class="hamburger" onclick = "hamburguesa()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class = "menu" >
                    <li><a href="/index.html" class="btn-option-in-page">Dashboard</a></li>
                    <li><a href="/pages/pageCourses.html" class="btn-option" >Courses</a></li>
                    <li><a href="/pages/assignments.html" class="btn-option" >Assignments</a></li>
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
                break;
            case "Courses":
                this.page.innerHTML = `
                <a class="btn-home" href="/">LMS <br>Portal</a>
                <button class="hamburger" onclick = "hamburguesa()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class = "menu" >
                    <li><a href="/index.html" class="btn-option">Dashboard</a></li>
                    <li><a href="/pages/pageCourses.html" class="btn-option-in-page" >Courses</a></li>
                    <li><a href="/pages/assignments.html" class="btn-option" >Assignments</a></li>
                    <li><a href="/pages/pageProgress.html" class="btn-option">Progress</a></li>
                    <li><a href="/pages/pageProfile.html class="btn-option">Profile</a></li>
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
                break;
            case "Assignments":
                    this.page.innerHTML = `
                    <a class="btn-home" href="/">LMS <br>Portal</a>
                    <button class="hamburger" onclick = "hamburguesa()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul class = "menu" >
                        <li><a href="/index.html" class="btn-option">Dashboard</a></li>
                        <li><a href="/" class="btn-option" >Courses</a></li>
                        <li><a href="/" class="btn-option-in-page" >Assignments</a></li>
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
                    break;
            case "Progress":
                        this.page.innerHTML = `
                        <a class="btn-home" href="/">LMS <br>Portal</a>
                        <button class="hamburger" onclick = "hamburguesa()">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul class = "menu" >
                            <li><a href="/index.html" class="btn-option">Dashboard</a></li>
                            <li><a href="/" class="btn-option" >Courses</a></li>
                            <li><a href="/" class="btn-option" >Assignments</a></li>
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
                        break;
            case "Profile":
                            this.page.innerHTML = `
                            <a class="btn-home" href="/">LMS <br>Portal</a>
                            <button class="hamburger" onclick = "hamburguesa()">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <ul class = "menu" >
                                <li><a href="/index.html" class="btn-option">Dashboard</a></li>
                                <li><a href="/" class="btn-option" >Courses</a></li>
                                <li><a href="/" class="btn-option" >Assignments</a></li>
                                <li><a href="/pages/pageProgress.html" class="btn-option">Progress</a></li>
                                <li><a href="/pages/pageProfile.html" class="btn-option-in-page">Profile</a></li>
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
                            break;
        }
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
            barra.classList.add("barra-noche");
            document.body.style.transition = "background-color 0.5s ease";
            document.body.style.backgroundColor = "black";
            if (typeof cambiomodo === "function") {
                cambiomodo();
            }
        }
        else{
            boton.textContent = "🌞";
            barra.classList.remove("barra-noche")
            document.body.style.transition = "background-color 0.5s ease";
            document.body.style.backgroundColor = "#f4f5f5"
            if (typeof cambiomodo === "function") {
                cambiomodo();
            }
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