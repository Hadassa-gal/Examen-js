"use strict";
import { GetJson } from "/assets/js/funcionesJson.js";
import {estilobarra} from "/components/barra-menu/stylebarramenu.js";
const barra = document.querySelector('barra-menu');
const cambiomodo = () =>{
    if (localStorage.getItem("modo")== "claro") {
        localStorage.setItem("modo","oscuro");

    }
    else{
        localStorage.setItem("modo","claro");
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
        };
    };
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
            <li><a href="/pages/pageCourses.html" class="btn-option-in-page" >Courses</a></li>
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
            <img src="/assets/img/fotoperfil.png" alt="">
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
export class PageCourses extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
        this._PageCourses = []; // Inicializa la propiedad
    }
    set Coursess(value) {
        this.render();
        this.setUpEvents();
    }
    setUpEvents() {
        const card_1 = this.shadowRoot.querySelectorAll("#card1");
        card_1.forEach((card_1) => {
            card_1.addEventListener("click", (e) => {
                card_1.classList.toggle("flipped");
                
            });
        });
        const card_2 = this.shadowRoot.querySelectorAll("#card2");
        card_2.forEach((card_2) => {
            card_2.addEventListener("click", (e) => {
                card_2.classList.toggle("flipped");
            });
        });
        const card_3 = this.shadowRoot.querySelectorAll("#card3");
        card_3.forEach((card_3) => {
            card_3.addEventListener("click", (e) => {
                card_3.classList.toggle("flipped");
            });
        });
        const card_4 = this.shadowRoot.querySelectorAll("#card4");
        card_4.forEach((card_4) => {
            card_4.addEventListener("click", (e) => {
                card_4.classList.toggle("flipped");
            });
        });
        const card_5 = this.shadowRoot.querySelectorAll("#card5");
        card_5.forEach((card_5) => {
            card_5.addEventListener("click", (e) => {
                card_5.classList.toggle("flipped");
            });
        });
        const card_6 = this.shadowRoot.querySelectorAll("#card6");
        card_6.forEach((card_6) => {
            card_6.addEventListener("click", (e) => {
                card_6.classList.toggle("flipped");
            });
        });
        const card_7 = this.shadowRoot.querySelectorAll("#card7");
        card_7.forEach((card_7) => {
            card_7.addEventListener("click", (e) => {
                card_7.classList.toggle("flipped");
            });
        });
        const card_8 = this.shadowRoot.querySelectorAll("#card8");
        card_8.forEach((card_8) => {
            card_8.addEventListener("click", (e) => {
                card_8.classList.toggle("flipped");
            });
        });
        const card_9 = this.shadowRoot.querySelectorAll("#card9");
        card_9.forEach((card_9) => {
            card_9.addEventListener("click", (e) => {
                card_9.classList.toggle("flipped");
            });
        });
        const card_10 = this.shadowRoot.querySelectorAll("#card10");
        card_10.forEach((card_10) => {
            card_10.addEventListener("click", (e) => {
                card_10.classList.toggle("flipped");
            });
        });
        const card_11 = this.shadowRoot.querySelectorAll("#card11");
        card_11.forEach((card_11) => {
            card_11.addEventListener("click", (e) => {
                card_11.classList.toggle("flipped");
            });
        });
        const card_12 = this.shadowRoot.querySelectorAll("#card12");
        card_12.forEach((card_12) => {
            card_12.addEventListener("click", (e) => {
                card_12.classList.toggle("flipped");
            });
        });
        
    };
    async render() {
        this._PageCourses = await GetJson("courses");
        const pageCoursesData = this._PageCourses[0] || {
            title_v: "Video Games",
            title_b: "Backend",
            title_f: "Frontend",
            title_s: "Schools"
        };
        this.innerHTML = /* html */ `
        <style rel="stylesheet">
            @import "../assets/css/styleCourses.css";
        </style>
        <section class="container_base">
            <section class="container-1">
                <div class="header">
                    <h1>Available Courses</h1>
                    <h2>${pageCoursesData.title_v}</h2>
                    <hr>
                </div>
                <div class="container">
                
                    <div class="card" id="card1">
                        <div class="card-inner">
                            <div class="card-front">
                                <!-- Contenido original de card1 aquí -->
                                <div class="card-image">
                                <div class="tag">Intermediate</div>
                                <div class="duration">⏱ 12 weeks</div>
                                <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="">                
                                </div>
                                <div class="card-content">
                                <div class="card-title">Unity Game Development</div>
                                <div class="card-description">
                                    Create immersive 3D games with Unity. Learn C# programming, game physics, and professional game development...
                                </div>
                                </div>
                                <div class="card-buttons">
                                <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                        
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                <div class="card-title">Prerequisites</div>
                                <div class="card-description">
                                Basic programming knowledge in any language. Understanding of 3D geometry is helpful but not required.
                                </div>
                                <div class="card-title">What You'll Learn</div>
                                <div class="card-description">
                                Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</div>
                                <br>
                                <div class="card-title">Course Structure</div>
                                <div class="card-description">
                                Build complete 3D games, master C# programming, implement game physics, create engaging UI systems, and optimize game performance.</div>
                                    
                                

                            
                                </div>
                                <button class="btn-back"><a href="#" class="bc">Close</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card" id="card2">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Beginner</div>
                                    <div class="duration">⏱  8 weeks</div>
                                    <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">Unreal Engine Basics</div>
                                    <div class="card-description">
                                        Master the fundamentals of Unreal Engine 5. Cover Blueprint visual scripting, level design, and game...
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>    
                            <div class="card-back">
                            <!-- Contenido alternativo (reverso) -->
                            <div class="card-content">
                            <div class="card-title">Prerequisites</div>
                                <div class="card-description">
                                No prior experience required. Basic computer skills and understanding of gaming concepts recommended.
                                </div>
                                <div class="card-title">What You'll Learn</div>
                                <div class="card-description">
                                Create basic games using Blueprints, design game levels, implement basic AI, and understand game optimization techniques.</div>
                                <br>
                                <div class="card-title">Course Structure</div>
                                <div class="card-description">
                                16 lessons, 8 practical exercises, 4 mini-projects, and a final game project.</div>
                                </div>
                                <button class="btn-back"><a href="#" class="bc">Close</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card" id="card3">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">All levels</div>
                                    <div class="duration">⏱ 10 weeks</div>
                                    <img src="https://images.pexels.com/photos/7915579/pexels-photo-7915579.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">Game Design Principles</div>
                                    <div class="card-description">
                                        Learn essential game design concepts including mechanics, dynamics, aesthetics, and player psychology.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    No technical prerequisites. Passion for games and creative thinking required.
                                    </div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Design engaging game mechanics, balance gameplay, create compelling narratives, and understand player psychology.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    20 theory lessons, 10 design workshops, 5 game analysis projects, and a final game design document..</div>
                                </div>
                                <button class="btn-back"><a href="#" class="bc">Close</a></button>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
            <div class="header">
                <h2>${pageCoursesData.title_b}</h2>
                <hr>
            </div>
            <section class="container-2">
                    <div class="card" id="card4">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Advanced</div>
                                    <div class="duration">⏱ 14 week</div>
                                    <img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">Node.js Development</div>
                                    <div class="card-description">
                                        Learn essential game design concepts including mechanics, dynamics, aesthetics, and player psychology.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    Strong JavaScript knowledge, basic understanding of backend development and databases.
                                    </div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Build scalable APIs, implement authentication, handle database operations, and deploy microservices.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    28 lessons, 14 coding projects, 4 major applications, and a final system architecture project.</div>
                                </div>
                                <button class="btn-back"><a href="#" class="bc">Close</a></button>
                            </div>
                        </div>
                        
                    </div>
                    <div class="card" id="card5">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Beginner</div>
                                    <div class="duration">⏱  8 weeks</div>
                                    <img src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">Database Designs</div>
                                    <div class="card-description">
                                        Comprehensive guide to database design. Learn SQL, NoSQL, data modeling, and performance optimization.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    Basic understanding of programming concepts and data structures.
                                    </div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Design efficient databases, write complex queries, optimize performance, and handle large datasets.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    20 lectures, 10 practical sessions, 5 database design projects, and a final optimization challenge.</div>
                                </div>
                                <button class="btn-back"><a href="#" class="bc">Close</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="card" id="card6">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Intermediate</div>
                                    <div class="duration">⏱  10 weeks</div>
                                    <img src="https://images.pexels.com/photos/7376/startup-photos.jpg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">API Development</div>
                                    <div class="card-description">
                                        Create robust APIs using REST and GraphQL. Focus on security, documentation, and best practices.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    Experience with web development and basic understanding of HTTP protocols.</div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Design RESTful APIs, implement GraphQL, secure endpoints, and create comprehensive documentation.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    16 lessons, 8 API projects, 4 security workshops, and a final API gateway project.</div>
                                </div>
                                <button class="btn-back"><a href="#" class="bc">Close</a></button>
                            </div>
                        </div>
                    </div>
            </section>
            
            <div class="header">
                <h2>${pageCoursesData.title_f}</h2>
                <hr>
            </div>
            <section class="container-2">
                
                    <div class="card" id="card7">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Advanced</div>
                                    <div class="duration">⏱ 12 weeks</div>
                                    <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">React Mastery</div>
                                    <div class="card-description">
                                        Advanced React concepts including hooks, context, Redux, and performance optimization techniques.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>

                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    Strong JavaScript knowledge and experience with React basics.


                                    </div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Master advanced React patterns, state management, performance optimization, and testing strategies.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    24 lessons, 12 advanced projects, 6 optimization workshops, and a final enterprise-level application.</div>
                                </div>
                                <button class="btn-back bc">Close</button>
                            </div>
                        </div>
                    </div>
                    <div class="card" id="card8">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Advanced</div>
                                    <div class="duration">⏱  14 weeks</div>
                                    <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">Angular Advanced
                                    </div>
                                    <div class="card-description">
                                        Deep dive into Angular framework. Cover state management, testing, and enterprise patterns.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    Experience with Angular basics and TypeScript.
                                    </div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Implement complex state management, write comprehensive tests, and build enterprise applications.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    28 lessons, 14 projects, 7 testing workshops, and a final enterprise application.</div>
                                </div>
                                <button class="btn-back bc">Close</button>
                            </div>
                        </div>
                    </div>
                    <div class="card" id="card9">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Intermediate</div>
                                    <div class="duration">⏱  6 weeks</div>
                                    <img src="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">ACSS Architecture</div>
                                    <div class="card-description">
                                        Learn to build maintainable CSS at scale using modern methodologies and tools.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    Strong understanding of CSS basics and experience with responsive design.</div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Design scalable CSS architectures, implement modern CSS features, and optimize performance.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    12 lessons, 6 styling projects, 3 architecture workshops, and a final design system project.</div>
                                </div>
                                <button class="btn-back bc">Close</button>
                            </div>
                        </div>
                    </div>
            </section>

            <div class="header">
                
                <h2>${pageCoursesData.title_s}</h2>
                <hr>
            </div>
            <section class="container-2">
                <div class="card" id="card10">
                    <div class="card-inner">
                        <div class="card-front">
                            <div class="card-image">
                                <div class="tag">Beginner</div>
                                <div class="duration">⏱ 16 weeks</div>
                                <img src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg" alt=""> 
                            </div>
                            <div class="card-content">
                                <div class="card-title">Mathematics 101</div>
                                <div class="card-description">
                                    Introduction to core mathematical concepts including algebra, calculus, and probability theory.
                                </div>
                            </div>
                            <div class="card-buttons">
                                <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                <button class="btn btn-secondary b">More Info</button>
                            </div>
                        </div>
                        <div class="card-back">
                            <!-- Contenido alternativo (reverso) -->
                            <div class="card-content">
                                <div class="card-title">Prerequisites</div>
                                <div class="card-description">
                                High school mathematics or equivalent.</div>
                                <div class="card-title">What You'll Learn</div>
                                <div class="card-description">
                                Master fundamental mathematical concepts, solve complex problems, and apply mathematical thinking.</div>
                                <br>
                                <div class="card-title">Course Structure</div>
                                <div class="card-description">
                                32 lectures, 16 problem-solving sessions, 8 assessments, and a final examination.</div>
                            </div>
                            <button class="btn-back bc">Close</button>
                        </div>
                    </div>
                </div>
                    <div class="card" id="card11">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Beginner</div>
                                    <div class="duration">⏱  8 weeks</div>
                                    <img src="https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">Physics Basics
                                    </div>
                                    <div class="card-description">
                                        Explore fundamental physics principles including mechanics, thermodynamics, and wave theory.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    Basic mathematics knowledge including algebra and trigonometry.</div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Understand core physics principles, solve physics problems, and conduct basic experiments.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    32 lectures, 16 lab sessions, 8 problem-solving workshops, and a final project.</div>
                                </div>
                                <button class="btn-back bc">Close</button>
                            </div>
                        </div>
                    </div>
                    <div class="card" id="card12">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-image">
                                    <div class="tag">Beginner</div>
                                    <div class="duration">⏱  16 weeks</div>
                                    <img src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg" alt=""> 
                                </div>
                                <div class="card-content">
                                    <div class="card-title">Chemistry Essentials
                                    </div>
                                    <div class="card-description">
                                        Learn core chemistry concepts including atomic structure, chemical bonding, and reactions.
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="btn-primary btn"><a href="#" class="b1">Enroll Now</a></button>
                                    <button class="btn btn-secondary b">More Info</button>
                                </div>
                            </div>
                            <div class="card-back">
                                <!-- Contenido alternativo (reverso) -->
                                <div class="card-content">
                                    <div class="card-title">Prerequisites</div>
                                    <div class="card-description">
                                    BBasic understanding of mathematics and scientific notation.
                                    </div>
                                    <div class="card-title">What You'll Learn</div>
                                    <div class="card-description">
                                    Master fundamental chemistry concepts, perform chemical calculations, and understand lab safety.</div>
                                    <br>
                                    <div class="card-title">Course Structure</div>
                                    <div class="card-description">
                                    32 lectures, 16 lab sessions, 8 practical assessments, and a final examination.</div>
                                </div>
                                <button class="btn-back bc">Close</button>
                            </div>
                        </div>
                    </div>
            </section>
        </section>
        `;
        this.shadowRoot.innerHTML = this.innerHTML;
        this.setUpEvents();
    }
}
customElements.define('barra-menu',barraMenu);
barra.pagina = "courses";
customElements.define("page-courses", PageCourses );

