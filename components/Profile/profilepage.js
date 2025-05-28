"use strict"
import {estilobarra} from "/components/barra-menu/stylebarramenu.js";
import {rootmododia,rootmodonoche} from "/assets/js/rootsmodos.js";
import {estiloprofile} from "/components/Profile/styleprofile.js";
import { GetJson, PatchJson, PostJson, DeleteJson} from "/assets/js/funcionesJson.js";
const barra = document.querySelector('barra-menu');
const comp = document.querySelector('new-profile');
const cambiomodo = () =>{
    if (localStorage.getItem("modo")== "claro") {
        localStorage.setItem("modo","oscuro");
        comp.modo = localStorage.getItem("modo");

    }
    else{
        localStorage.setItem("modo","claro");
        comp.modo = localStorage.getItem("modo");
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
            <li><a href="/pages/pageCourses.html" class="btn-option" >Courses</a></li>
            <li><a href="/pages/assignments.html" class="btn-option" >Assignments</a></li>
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
class NewProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._modo = "";
    }
    set modo(value){
        this._modo = value;
        this.render();
        this.loadProfileFromJson();
    }
    render() {
        this.shadowRoot.innerHTML = estiloprofile;
        this.estilos = document.createElement('style');
        if (this._modo == "oscuro") {
          this.estilos.innerHTML = rootmodonoche;
          this.shadowRoot.appendChild(this.estilos);
        }
        else{
          this.estilos.innerHTML = rootmododia;
          this.shadowRoot.appendChild(this.estilos);
        }
        this.pagina = document.createElement("div");
        this.pagina.classList.add("profile-container");
        this.pagina.innerHTML = /*html*/ `
            <div class="header"></div>
                <div class="profile-pic-container">
                    <img id="photo" class="profile-pic" src="profile.jpg" alt="Profile Picture">
                </div>
                <div class="info">
                    <h2 id="name">Unknowm</h2>
                    <p id="profesion">Computer Science Student</p>
                </div>
                    <div class="container-personal">                         
                        <h3 class="personal" >Personal information</h3>
                        <hr class="line">  
                        <div class="information">
                            <label class="full-name"  for="name">Full Name</label><br>                               
                            <label class="emailes" for="dob">Email:</label><br>
                            <label class="cel" for="phone">Phone:</label><br>
                        </div>                        
                        <div class="form">                              
                            <input class="input" type="text" id="inputName" ><br><br>
                            <input class="input" type="email" id="email" name="dob"><br><br>
                            <input class="input" id="phone" type="phone" >                               
                        </div> 
                        <div class="contenedor-name2">
                            <label class="full-named"  for="name">Location</label><br>
                        </div>
                        <div class="form2">
                            <input class="input2" id="location"  type="" >
                        </div>                       
                    </div>
                    <div class="container-personal">     
                        <h3 class="personal" >Academic Information</h3>
                        <hr class="line">  
                        <div class="information">
                            <label class="full-name"  for="name">Student ID</label><br>                            
                            <label class="emailes" for="dob">Program</label><br>
                            <label class="cel" for="phone">Start Date</label><br>
                        </div>
                        <div class="form">                             
                            <input class="input" type="text" id="idstudent" ><br><br>
                            <input class="input" id="programa" type="email" id="dob" name="dob"><br><br>
                            <input class="input" placeholder="+1dsd 234 567 890" type="date" >                               
                        </div> 
                        <div class="contenedor-name2">
                            <label class="full-named" type="date"  for="name">Expected Graduation</label><br>
                        </div>
                        <div class="form2">                                     
                            <input class="input2" type="date" >
                        </div>                        
                    </div>
                    <div class="card">
                        <h2>Progress Overview</h2>
                        <div class="stats">
                            <div class="stat-box">
                                <strong id="completed">12</strong>
                                Courses Completed
                            </div>
                            <div class="stat-box">
                                <strong id="earn">3</strong>
                                Certificates Earned
                            </div>
                            <div class="stat-box">
                                <strong id="average">92 </strong>
                                Average Grade
                            </div>
                        </div>
                    </div>                      
                    <div class="card">
                        <h2>Preferences</h2>
                        <div class="preferences">
                            <label>                             
                                <div class="test"> <input type="checkbox" checked>
                                <h3>Email Notifications</h3> </div>
                                <small>Receive updates about your courses and assignments</small>
                            </label>
                            <label class="test">
                                <div class="test"> <input type="checkbox">
                                    <h3>Public Profile</h3> </div>
                                <small>Make your profile visible to other students</small>
                            </label>
                            <label>
                                <div class="test">
                                    <input type="checkbox" checked>
                                    <h3>Show Progress</h3>  
                                </div>   
                                <small>Display your progress on your public profile</small>
                            </label>
                        </div>
                        <div class="buttons">
                            <button id='botonsave' class="save">Save Changes</button>
                            <button id= 'btn-admin'class="save">Admin</button>
                            <button id="cancell" class="cancel">Cancel</button>
                        </div>
                    </div>
            </div>`;
        this.shadowRoot.appendChild(this.pagina);
    }
    async loadProfileFromJson() {
        try {
            const response = await fetch('/db.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const selectId = '1';       
            const student = data.student.find(s => s.id === selectId);
            if (student) {
                const nameStudent = this.shadowRoot.querySelector('#name');
                nameStudent.textContent = student.name;

                const photoProfile =this.shadowRoot.querySelector('#photo');
                photoProfile.src = student.photo;
                
                const inputName = this.shadowRoot.querySelector('#inputName');
                
                inputName.addEventListener('input',(event) => {
                    const texto= inputName.value; 
                    const valor = this.shadowRoot.querySelector('#name');
                    valor.textContent = texto;
                });

                const correo = this.shadowRoot.querySelector('#email');
                correo.value = student.email;

                const telefono = this.shadowRoot.querySelector('#phone');
                telefono.value = student.phone;

                const ubicacion = this.shadowRoot.querySelector('#location')
                ubicacion.value = student.location;

                const idStudent = this.shadowRoot.querySelector('#idstudent');
                idStudent.value = student.id;

                const programa = this.shadowRoot.querySelector('#programa');
                programa.value = student.programa;

                const btnadmin = this.shadowRoot.querySelector('#btn-admin');
                btnadmin.addEventListener('click',function(){
                    Swal.fire({
                        title: 'Panel de Administración',
                        html: `
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <button id="btnCursos" class="swal2-button" style="background-color: #4CAF50; color: white; padding: 10px; border: none; border-radius: 5px;">Gestionar Cursos</button>
                                <button id="btnEstudiantes" class="swal2-button" style="background-color: #2196F3; color: white; padding: 10px; border: none; border-radius: 5px;">Gestionar Estudiantes</button>
                                <button id="btnProfesores" class="swal2-button" style="background-color: #FF9800; color: white; padding: 10px; border: none; border-radius: 5px;">Gestionar Profesores</button>
                            </div>
                        `,
                        showConfirmButton: false,
                        showCloseButton: true,
                        allowOutsideClick: false,
                    })
                    setTimeout(() => {
                        document.getElementById('btnCursos').addEventListener('click', () => {
                            Swal.fire({
                                title: 'Panel de Administración',
                                html: `
                                    <div style="display: flex; flex-direction: column; gap: 10px;">
                                        <button id="btnCursos-editar" class="swal2-button" style="background-color:rgb(59, 177, 184); color: white; padding: 10px; border: none; border-radius: 5px;">Editar cursos</button>
                                        <button id="btnCursos-agregar" class="swal2-button" style="background-color:rgb(96, 195, 25); color: white; padding: 10px; border: none; border-radius: 5px;">Agregar cursos</button>
                                        <button id="btnCursos-eliminar" class="swal2-button" style="background-color:rgb(255, 0, 0); color: white; padding: 10px; border: none; border-radius: 5px;">Eliminar cursos</button>
                                    </div>
                                `,
                                showConfirmButton: false,
                                showCloseButton: true,
                                allowOutsideClick: false,
                            })
                            setTimeout(() =>{
                                document.getElementById('btnCursos-editar').addEventListener('click', () => {
                                    let courses = ''
                                    GetJson("courses").then(datos =>{
                                        datos.forEach(cursos => {
                                            courses += `<option value="${cursos.id}">${cursos.title}</option>`;
                                        });
                                        Swal.fire({
                                            title: 'Gestor de cursos',
                                            html: `
                                            <div>
                                                <select id='selectCursos' class="btn-english" name="">
                                                    ${courses}
                                                </select>
                                            </div>
                                            `,
                                            showConfirmButton: true,
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const select = document.getElementById('selectCursos');
                                                const cursoSeleccionado = select.value;
                                                datos.forEach(element => {
                                                    if (element.id == cursoSeleccionado) {
                                                        Swal.fire({
                                                            title: `${element.title}`,
                                                            html: /*html*/`
                                                            <style>
                                                                .course-details-container {
                                                                    font-family: 'Arial', sans-serif;
                                                                    max-width: 800px;
                                                                    margin: 0 auto;
                                                                    padding: 20px;
                                                                    background: #f9f9f9;
                                                                    border-radius: 10px;
                                                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                                                }

                                                                .course-details-grid {
                                                                    display: grid;
                                                                    grid-template-columns: 1fr 1fr;
                                                                    gap: 15px;
                                                                }

                                                                .course-input-group {
                                                                    display: flex;
                                                                    flex-direction: column;
                                                                    margin-bottom: 10px;
                                                                }

                                                                .course-input-group label {
                                                                    font-weight: bold;
                                                                    margin-bottom: 5px;
                                                                    color: #333;
                                                                }

                                                                .course-input-group input,
                                                                .course-input-group select {
                                                                    padding: 10px;
                                                                    border: 1px solid #ddd;
                                                                    border-radius: 5px;
                                                                    font-size: 14px;
                                                                    background: #fff;
                                                                }

                                                                .course-input-group input:focus,
                                                                .course-input-group select:focus {
                                                                    border-color: #4CAF50;
                                                                    outline: none;
                                                                }

                                                                .course-input-group.large {
                                                                    grid-column: span 2;
                                                                }

                                                                h3 {
                                                                    grid-column: span 2;
                                                                    color: #2c3e50;
                                                                    border-bottom: 2px solid #4CAF50;
                                                                    padding-bottom: 5px;
                                                                    margin-top: 20px;
                                                                }
                                                            </style>

                                                            <div class="course-details-container">
                                                                <div class="course-details-grid">
                                                                    <h3>Información Básica</h3>

                                                                    <div class="course-input-group">
                                                                        <label>Título del curso</label>
                                                                        <input type="text" id="inputtitle" value="${element.title}">
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Categoría</label>
                                                                        <select id="selectcategory">
                                                                            <option value="video games" ${element.category === 'video games' ? 'selected' : ''}>Video Games</option>
                                                                            <option value="backend" ${element.category === 'backend' ? 'selected' : ''}>Backend</option>
                                                                            <option value="frontend" ${element.category === 'frontend' ? 'selected' : ''}>Frontend</option>
                                                                            <option value="schools" ${element.category === 'schools' ? 'selected' : ''}>Schools</option>
                                                                        </select>
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Nivel</label>
                                                                        <select id="selectlevel">
                                                                            <option value="basic" ${element.level === 'basic' ? 'selected' : ''}>Basic</option>
                                                                            <option value="medium" ${element.level === 'intermediate' ? 'selected' : ''}>Intermediate</option>
                                                                            <option value="advance" ${element.level === 'advanced' ? 'selected' : ''}>Advanced</option>
                                                                        </select>
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Duración (semanas)</label>
                                                                        <select id="selectduration">
                                                                            ${Array.from({length: 13}, (_, i) => {
                                                                                const weeks = i + 2;
                                                                                // Extrae el número del string (ej: "2 weeks" -> 2)
                                                                                const currentDuration = parseInt(element.duration.split(' ')[0]);
                                                                                return `<option value="${weeks} weeks" ${currentDuration == weeks ? 'selected' : ''}>${weeks} weeks</option>`;
                                                                            }).join('')}
                                                                        </select>
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group large">
                                                                        <label>Descripción</label>
                                                                        <input type="text" id="inputdescription" value="${element.description}">
                                                                    </div>
                                                                        
                                                                    <h3>Detalles del Curso</h3>
                                                                        
                                                                    <div class="course-input-group large">
                                                                        <label>Prerrequisitos</label>
                                                                        <input type="text" id="inputprerrequisitos" value="${element.prerequisites}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group large">
                                                                        <label>Resultados esperados</label>
                                                                        <input type="text"id="inputoutcomes" value="${element.outcomes}">
                                                                    </div>
                                                                        
                                                                    <h3>Estructura del Curso</h3>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Lecciones</label>
                                                                        <input type="number" id="inputlesson" value="${element.structure.lessons}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Tareas</label>
                                                                        <input type="number" id="inputassignments" value="${element.structure.assignments}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Proyectos</label>
                                                                        <input type="number" id="inputprojects" value="${element.structure.projects}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Exámenes</label>
                                                                        <input type="number" id="inputexams" value="${element.structure.exams}">
                                                                    </div>
                                                                        
                                                                    <h3>Información Adicional</h3>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Instructor</label>
                                                                        <input type="text" id="inputinstructor" value="${element.instructor}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Precio</label>
                                                                        <select id="selectprice">
                                                                            <option value="5$" ${element.price === '5$' ? 'selected' : ''}>5$</option>
                                                                            <option value="10$" ${element.price === '10$' ? 'selected' : ''}>10$</option>
                                                                            <option value="15$" ${element.price === '15$' ? 'selected' : ''}>15$</option>
                                                                            <option value="20$" ${element.price === '20$' ? 'selected' : ''}>20$</option>
                                                                            <option value="25$" ${element.price === '25$' ? 'selected' : ''}>25$</option>
                                                                            <option value="30$" ${element.price === '30$' ? 'selected' : ''}>30$</option>
                                                                        </select>
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Garantía</label>
                                                                        <select id="selectguarentee">
                                                                            <option value="Lifetime access" ${element.guarantee.includes('Lifetime access') ? 'selected' : ''}>✓ Lifetime access</option>
                                                                            <option value="Certificate of completion" ${element.guarantee.includes('Certificate of completion') ? 'selected' : ''}>✓ Certificate of completion</option>
                                                                            <option value="30-day money-back guarantee" ${element.guarantee.includes('30-day money-back guarantee') ? 'selected' : ''}>✓ 30-day money-back guarantee</option>
                                                                            <option value="Direct instructor support" ${element.guarantee.includes('Direct instructor support') ? 'selected' : ''}>✓ Direct instructor support</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            `,
                                                            showConfirmButton: true,
                                                            confirmButtonText: "Save changes",
                                                            cancelButtonText: "Cancel",
                                                            showCancelButton: true,
                                                            width: 600,

                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                let titulo = document.getElementById('inputtitle').value;
                                                                let categoria = document.getElementById('selectcategory').value;
                                                                let nivel = document.getElementById('selectlevel').value;
                                                                let duracion = document.getElementById('selectduration').value;
                                                                let descripcion = document.getElementById('inputdescription').value;
                                                                let Resultados = document.getElementById('inputoutcomes').value;
                                                                let Prerrequisitos = document.getElementById('inputprerrequisitos').value;
                                                                let lecciones = document.getElementById('inputlesson').value;
                                                                let tarea = document.getElementById('inputassignments').value;
                                                                let proyectos = document.getElementById('inputprojects').value;
                                                                let examenes = document.getElementById('inputexams').value;
                                                                let instructor = document.getElementById('inputinstructor').value;
                                                                let precio = document.getElementById('selectprice').value;
                                                                let garantia = document.getElementById('selectguarentee').value;
                                                                let cursoActualizado = {
                                                                    id: `${datos.length + 1}`,
                                                                    level: nivel,
                                                                    duration: duracion.includes('weeks') ? duracion : `${duracion} weeks`,
                                                                    title: titulo,
                                                                    category: categoria,
                                                                    description: descripcion,
                                                                    prerequisites: Prerrequisitos,
                                                                    outcomes: Resultados,
                                                                    structure: {
                                                                        lessons: parseInt(lecciones),
                                                                        assignments: parseInt(tarea),
                                                                        projects: parseInt(proyectos),
                                                                        exams: parseInt(examenes)
                                                                    },
                                                                    instructor: instructor,
                                                                    price: precio.includes('$') ? precio : `${precio}$`,
                                                                    guarantee: garantia
                                                                };
                                                                PatchJson(cursoActualizado,"courses",element.id)
                                                                Swal.fire({
                                                                    title: "editado!",
                                                                    text: "curso editado.",
                                                                    icon: "success"
                                                                });
                                                            }
                                                        });
                                                    };
                                                });
                                            };
                                        });
                                    });
                                })
                                document.getElementById('btnCursos-agregar').addEventListener('click',() =>{
                                    GetJson("courses").then(datos =>{
                                                        Swal.fire({
                                                            title: `Agregar curso`,
                                                            html: /*html*/`
                                                            <style>
                                                                .course-details-container {
                                                                    font-family: 'Arial', sans-serif;
                                                                    max-width: 800px;
                                                                    margin: 0 auto;
                                                                    padding: 20px;
                                                                    background: #f9f9f9;
                                                                    border-radius: 10px;
                                                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                                                }

                                                                .course-details-grid {
                                                                    display: grid;
                                                                    grid-template-columns: 1fr 1fr;
                                                                    gap: 15px;
                                                                }

                                                                .course-input-group {
                                                                    display: flex;
                                                                    flex-direction: column;
                                                                    margin-bottom: 10px;
                                                                }

                                                                .course-input-group label {
                                                                    font-weight: bold;
                                                                    margin-bottom: 5px;
                                                                    color: #333;
                                                                }

                                                                .course-input-group input,
                                                                .course-input-group select {
                                                                    padding: 10px;
                                                                    border: 1px solid #ddd;
                                                                    border-radius: 5px;
                                                                    font-size: 14px;
                                                                    background: #fff;
                                                                }

                                                                .course-input-group input:focus,
                                                                .course-input-group select:focus {
                                                                    border-color: #4CAF50;
                                                                    outline: none;
                                                                }

                                                                .course-input-group.large {
                                                                    grid-column: span 2;
                                                                }

                                                                h3 {
                                                                    grid-column: span 2;
                                                                    color: #2c3e50;
                                                                    border-bottom: 2px solid #4CAF50;
                                                                    padding-bottom: 5px;
                                                                    margin-top: 20px;
                                                                }
                                                            </style>

                                                            <div class="course-details-container">
                                                                <div class="course-details-grid">
                                                                    <h3>Información Básica</h3>

                                                                    <div class="course-input-group">
                                                                        <label>Título del curso</label>
                                                                        <input type="text" id="inputtitle">
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Categoría</label>
                                                                        <select id="selectcategory">
                                                                            <option>Video Games</option>
                                                                            <option>Backend</option>
                                                                            <option>Frontend</option>
                                                                            <option>Schools</option>
                                                                        </select>
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Nivel</label>
                                                                        <select id="selectlevel">
                                                                            <option>Basic</option>
                                                                            <option>Intermediate</option>
                                                                            <option>Advanced</option>
                                                                        </select>
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Duración (semanas)</label>
                                                                        <select id="selectduration">
                                                                            ${Array.from({length: 13}, (_, i) => {
                                                                                const weeks = i + 2;           
                                                                                return `<option value="${weeks} weeks"</option>`;
                                                                            }).join('')}
                                                                        </select>
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group large">
                                                                        <label>Descripción</label>
                                                                        <input type="text" id="inputdescription">
                                                                    </div>
                                                                        
                                                                    <h3>Detalles del Curso</h3>
                                                                        
                                                                    <div class="course-input-group large">
                                                                        <label>Prerrequisitos</label>
                                                                        <input type="text" id="inputprerrequisitos" >
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group large">
                                                                        <label>Resultados esperados</label>
                                                                        <input type="text"id="inputoutcomes" >
                                                                    </div>
                                                                        
                                                                    <h3>Estructura del Curso</h3>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Lecciones</label>
                                                                        <input type="number" id="inputlesson">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Tareas</label>
                                                                        <input type="number" id="inputassignments">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Proyectos</label>
                                                                        <input type="number" id="inputprojects" >
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Exámenes</label>
                                                                        <input type="number" id="inputexams" >
                                                                    </div>
                                                                        
                                                                    <h3>Información Adicional</h3>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Instructor</label>
                                                                        <input type="text" id="inputinstructor" >
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Precio</label>
                                                                        <select id="selectprice">
                                                                            <option >5$</option>
                                                                            <option >10$</option>
                                                                            <option >15$</option>
                                                                            <option >20$</option>
                                                                            <option >25$</option>
                                                                            <option >30$</option>
                                                                        </select>
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Garantía</label>
                                                                        <select id="selectguarentee">
                                                                            <option>✓ Lifetime access</option>
                                                                            <option>✓ Certificate of completion</option>
                                                                            <option>✓ 30-day money-back guarantee</option>
                                                                            <option>✓ Direct instructor support</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            `,
                                                            showConfirmButton: true,
                                                            confirmButtonText: "Save changes",
                                                            cancelButtonText: "Cancel",
                                                            showCancelButton: true,
                                                            width: 600,

                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                let titulo = document.getElementById('inputtitle').value;
                                                                let categoria = document.getElementById('selectcategory').value;
                                                                let nivel = document.getElementById('selectlevel').value;
                                                                let duracion = document.getElementById('selectduration').value;
                                                                let descripcion = document.getElementById('inputdescription').value;
                                                                let Resultados = document.getElementById('inputoutcomes').value;
                                                                let Prerrequisitos = document.getElementById('inputprerrequisitos').value;
                                                                let lecciones = document.getElementById('inputlesson').value;
                                                                let tarea = document.getElementById('inputassignments').value;
                                                                let proyectos = document.getElementById('inputprojects').value;
                                                                let examenes = document.getElementById('inputexams').value;
                                                                let instructor = document.getElementById('inputinstructor').value;
                                                                let precio = document.getElementById('selectprice').value;
                                                                let garantia = document.getElementById('selectguarentee').value;
                                                                let cursoActualizado = {
                                                                    id: `${datos.length + 1}`,
                                                                    level: nivel,
                                                                    duration: duracion.includes('weeks') ? duracion : `${duracion} weeks`,
                                                                    title: titulo,
                                                                    category: categoria,
                                                                    description: descripcion,
                                                                    prerequisites: Prerrequisitos,
                                                                    outcomes: Resultados,
                                                                    structure: {
                                                                        lessons: parseInt(lecciones),
                                                                        assignments: parseInt(tarea),
                                                                        projects: parseInt(proyectos),
                                                                        exams: parseInt(examenes)
                                                                    },
                                                                    instructor: instructor,
                                                                    price: precio.includes('$') ? precio : `${precio}$`,
                                                                    guarantee: garantia
                                                                };
                                                                console.log(cursoActualizado)
                                                                PostJson(cursoActualizado,"courses")
                                                                Swal.fire({
                                                                    title: "Agregado!",
                                                                    text: "curso agregado.",
                                                                    icon: "success"
                                                                });
                                                            }
                                                        ;
                                                });
                                        });
                                })
                                document.getElementById('btnCursos-eliminar').addEventListener('click', () =>{
                                    let courses = "";
                                    GetJson("courses").then(datos =>{
                                        datos.forEach(cursos => {
                                            courses += `<option value="${cursos.id}">${cursos.title}</option>`;
                                        });
                                        Swal.fire({
                                            title: 'Eliminar  cursos',
                                            html: `
                                            <div>
                                                <select id='selectCursos' class="btn-english" name="">
                                                    ${courses}
                                                </select>
                                            </div>
                                            `,
                                            showConfirmButton: true,
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const select = document.getElementById('selectCursos');
                                                console.log(select.value)
                                                DeleteJson("courses",select.value);
                                    }});
                                    })
                                })
                            })
                        });
                        document.getElementById('btnEstudiantes').addEventListener('click', () => {
                            Swal.fire({
                                title: 'Panel de Administración',
                                html: `
                                    <div style="display: flex; flex-direction: column; gap: 10px;">
                                        <button id="btnEstudiantes-editar" class="swal2-button" style="background-color:rgb(59, 177, 184); color: white; padding: 10px; border: none; border-radius: 5px;">Editar Estudiantes</button>
                                        <button id="btnEstudiantes-agregar" class="swal2-button" style="background-color:rgb(96, 195, 25); color: white; padding: 10px; border: none; border-radius: 5px;">Agregar Estudiantes</button>
                                        <button id="btnEstudiantes-eliminar" class="swal2-button" style="background-color:rgb(255, 0, 0); color: white; padding: 10px; border: none; border-radius: 5px;">Eliminar Estudiantes</button>
                                    </div>
                                `,
                                showConfirmButton: false,
                                showCloseButton: true,
                                allowOutsideClick: false,
                            })
                            document.getElementById("btnEstudiantes-editar").addEventListener('click',() => {
                                let students = ''
                                    GetJson("student").then(datos =>{
                                        datos.forEach(cursos => {
                                            students += `<option value="${cursos.id}">${cursos.title}</option>`;
                                        });
                                        Swal.fire({
                                            title: 'Gestor de estudiantes',
                                            html: `
                                            <div>
                                                <select id='selectEstudiantes' class="btn-english" name="">
                                                    ${students}
                                                </select>
                                            </div>
                                            `,
                                            showConfirmButton: true,
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const select = document.getElementById('selectEstudiantes');
                                                const estudianteSeleccionado = select.value;
                                                datos.forEach(element => {
                                                    if (element.id == estudianteSeleccionado) {
                                                        Swal.fire({
                                                            title: `${element.name}`,
                                                            html: /*html*/`
                                                            <style>
                                                                .course-details-container {
                                                                    font-family: 'Arial', sans-serif;
                                                                    max-width: 800px;
                                                                    margin: 0 auto;
                                                                    padding: 20px;
                                                                    background: #f9f9f9;
                                                                    border-radius: 10px;
                                                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                                                }

                                                                .course-details-grid {
                                                                    display: grid;
                                                                    grid-template-columns: 1fr 1fr;
                                                                    gap: 15px;
                                                                }

                                                                .course-input-group {
                                                                    display: flex;
                                                                    flex-direction: column;
                                                                    margin-bottom: 10px;
                                                                }

                                                                .course-input-group label {
                                                                    font-weight: bold;
                                                                    margin-bottom: 5px;
                                                                    color: #333;
                                                                }

                                                                .course-input-group input,
                                                                .course-input-group select {
                                                                    padding: 10px;
                                                                    border: 1px solid #ddd;
                                                                    border-radius: 5px;
                                                                    font-size: 14px;
                                                                    background: #fff;
                                                                }

                                                                .course-input-group input:focus,
                                                                .course-input-group select:focus {
                                                                    border-color: #4CAF50;
                                                                    outline: none;
                                                                }

                                                                .course-input-group.large {
                                                                    grid-column: span 2;
                                                                }

                                                                h3 {
                                                                    grid-column: span 2;
                                                                    color: #2c3e50;
                                                                    border-bottom: 2px solid #4CAF50;
                                                                    padding-bottom: 5px;
                                                                    margin-top: 20px;
                                                                }
                                                            </style>

                                                            <div class="course-details-container">
                                                                <div class="course-details-grid">
                                                                    <h3>Información Básica</h3>

                                                                    <div class="course-input-group">
                                                                        <label>Nombre estudiante</label>
                                                                        <input type="text" id="inputname" value="${element.name}">
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Email</label>
                                                                        <input type="text" id="inputemail" value="${element.email}">
                                                                    </div>
                                                                    <div class="course-input-group">
                                                                        <label>Nationality</label>
                                                                        <input type="text" id="inputnacionality" value="${element.nationality}">
                                                                    </div>

                                                                    <div class="course-input-group">
                                                                        <label>Phone</label>
                                                                        <input type="number" id="inputphone" value="${element.phone}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>location</label>
                                                                        <input type="text" id="inputlocation" value="${element.location}">
                                                                    </div>                     
                                                                    <div class="course-input-group">
                                                                        <label>Prerrequisitos</label>
                                                                        <input type="text" id="inputprerrequisitos" value="${element.prerequisites}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group large">
                                                                        <label>Resultados esperados</label>
                                                                        <input type="text"id="inputoutcomes" value="${element.outcomes}">
                                                                    </div>
                                                                        
                                                                    <h3>Estructura del Curso</h3>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Lecciones</label>
                                                                        <input type="number" id="inputlesson" value="${element.structure.lessons}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Tareas</label>
                                                                        <input type="number" id="inputassignments" value="${element.structure.assignments}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Proyectos</label>
                                                                        <input type="number" id="inputprojects" value="${element.structure.projects}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Exámenes</label>
                                                                        <input type="number" id="inputexams" value="${element.structure.exams}">
                                                                    </div>
                                                                        
                                                                    <h3>Información Adicional</h3>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Instructor</label>
                                                                        <input type="text" id="inputinstructor" value="${element.instructor}">
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Precio</label>
                                                                        <select id="selectprice">
                                                                            <option value="5$" ${element.price === '5$' ? 'selected' : ''}>5$</option>
                                                                            <option value="10$" ${element.price === '10$' ? 'selected' : ''}>10$</option>
                                                                            <option value="15$" ${element.price === '15$' ? 'selected' : ''}>15$</option>
                                                                            <option value="20$" ${element.price === '20$' ? 'selected' : ''}>20$</option>
                                                                            <option value="25$" ${element.price === '25$' ? 'selected' : ''}>25$</option>
                                                                            <option value="30$" ${element.price === '30$' ? 'selected' : ''}>30$</option>
                                                                        </select>
                                                                    </div>
                                                                        
                                                                    <div class="course-input-group">
                                                                        <label>Garantía</label>
                                                                        <select id="selectguarentee">
                                                                            <option value="Lifetime access" ${element.guarantee.includes('Lifetime access') ? 'selected' : ''}>✓ Lifetime access</option>
                                                                            <option value="Certificate of completion" ${element.guarantee.includes('Certificate of completion') ? 'selected' : ''}>✓ Certificate of completion</option>
                                                                            <option value="30-day money-back guarantee" ${element.guarantee.includes('30-day money-back guarantee') ? 'selected' : ''}>✓ 30-day money-back guarantee</option>
                                                                            <option value="Direct instructor support" ${element.guarantee.includes('Direct instructor support') ? 'selected' : ''}>✓ Direct instructor support</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            `,
                                                            showConfirmButton: true,
                                                            confirmButtonText: "Save changes",
                                                            cancelButtonText: "Cancel",
                                                            showCancelButton: true,
                                                            width: 600,

                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                let titulo = document.getElementById('inputtitle').value;
                                                                let categoria = document.getElementById('selectcategory').value;
                                                                let nivel = document.getElementById('selectlevel').value;
                                                                let duracion = document.getElementById('selectduration').value;
                                                                let descripcion = document.getElementById('inputdescription').value;
                                                                let Resultados = document.getElementById('inputoutcomes').value;
                                                                let Prerrequisitos = document.getElementById('inputprerrequisitos').value;
                                                                let lecciones = document.getElementById('inputlesson').value;
                                                                let tarea = document.getElementById('inputassignments').value;
                                                                let proyectos = document.getElementById('inputprojects').value;
                                                                let examenes = document.getElementById('inputexams').value;
                                                                let instructor = document.getElementById('inputinstructor').value;
                                                                let precio = document.getElementById('selectprice').value;
                                                                let garantia = document.getElementById('selectguarentee').value;
                                                                let cursoActualizado = {
                                                                    id: `${datos.length + 1}`,
                                                                    level: nivel,
                                                                    duration: duracion.includes('weeks') ? duracion : `${duracion} weeks`,
                                                                    title: titulo,
                                                                    category: categoria,
                                                                    description: descripcion,
                                                                    prerequisites: Prerrequisitos,
                                                                    outcomes: Resultados,
                                                                    structure: {
                                                                        lessons: parseInt(lecciones),
                                                                        assignments: parseInt(tarea),
                                                                        projects: parseInt(proyectos),
                                                                        exams: parseInt(examenes)
                                                                    },
                                                                    instructor: instructor,
                                                                    price: precio.includes('$') ? precio : `${precio}$`,
                                                                    guarantee: garantia
                                                                };
                                                                PatchJson(cursoActualizado,"courses",element.id)
                                                                Swal.fire({
                                                                    title: "editado!",
                                                                    text: "curso editado.",
                                                                    icon: "success"
                                                                });
                                                            }
                                                        });
                                                    };
                                                });
                                            };
                                        });
                                    });
                            })
                            setTimeout(() =>{
                                document.getElementById('btnEstudiantes-editar').addEventListener('click', () => {
                                    let courses = ''
                                    GetJson().then(datos =>{
                                        datos.courses.forEach(cursos => {
                                            courses += `<option value="${cursos.id}">${cursos.title}</option>`;
                                        });
                                        console.log(courses);
                                        Swal.fire({
                                            title: 'Gestor de Estudiantes',
                                            html: `
                                            <div>
                                            <select id='selectEstudiantes' class="btn-english" name="">
                                                ${courses}
                                            </select>
                                            </div>
                                            `,
                                            showConfirmButton: true,
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const select = document.getElementById('selectCursos');
                                                const cursoSeleccionado = select.value;
                                                datos.courses.forEach(element => {
                                                    if (element.id == cursoSeleccionado) {
                                                        Swal.fire({
                                                            title: `${element.title}`,
                                                            html: `
                                                            <div>
                                                                <input type="text" value="${element.level}">Nivel de curso</input>
                                                            </div>
                                                            `,
                                                            showConfirmButton: true,
                                                        })
                                                    }
                                                });
                                                
                                            };
                                        });
                                    });
                                })
                            })
                        });
                        document.getElementById('btnProfesores').addEventListener('click', () => {
                            Swal.fire({
                                title: 'Panel de Administración',
                                html: `
                                    <div style="display: flex; flex-direction: column; gap: 10px;">
                                        <button id="btnProfesores-editar" class="swal2-button" style="background-color:rgb(59, 177, 184); color: white; padding: 10px; border: none; border-radius: 5px;">Editar Profesores</button>
                                        <button id="btnProfesores-agregar" class="swal2-button" style="background-color:rgb(96, 195, 25); color: white; padding: 10px; border: none; border-radius: 5px;">Agregar Profesores</button>
                                        <button id="btnProfesores-eliminar" class="swal2-button" style="background-color:rgb(255, 0, 0); color: white; padding: 10px; border: none; border-radius: 5px;">Eliminar Profesores</button>
                                    </div>
                                `,
                                showConfirmButton: false,
                                showCloseButton: true,
                                allowOutsideClick: false,
                            })
                            setTimeout(() =>{
                                document.getElementById('btnProfesores-editar').addEventListener('click', () => {
                                    let courses = ''
                                    GetJson().then(datos =>{
                                        datos.courses.forEach(cursos => {
                                            courses += `<option value="${cursos.id}">${cursos.title}</option>`;
                                        });
                                        console.log(courses);
                                        Swal.fire({
                                            title: 'Gestor de Profesores',
                                            html: `
                                            <div>
                                            <select id='selectProfesores' class="btn-english" name="">
                                                ${courses}
                                            </select>
                                            </div>
                                            `,
                                            showConfirmButton: true,
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                const select = document.getElementById('selectProfesores');
                                                const cursoSeleccionado = select.value;
                                                datos.courses.forEach(element => {
                                                    if (element.id == cursoSeleccionado) {
                                                        Swal.fire({
                                                            title: `${element.title}`,
                                                            html: `
                                                            <div>
                                                                <input type="text" value="${element.level}">Nivel de curso</input>
                                                            </div>
                                                            `,
                                                            showConfirmButton: true,
                                                        })
                                                    }
                                                });
                                                
                                            };
                                        });
                                    });
                                })
                            })
                        });
                    }, 100);
                })
                const botonsave = this.shadowRoot.querySelector('#botonsave');
                botonsave.addEventListener('click',function(){
                    Swal.fire({
                        title: "Save Changes",
                        text: "You clicked the button!",
                        icon: "success",
                        customClass: {
                            popup: 'mi-alerta'
                          }
                      });
                })
                const cancelar = this.shadowRoot.querySelector('#cancell');
                cancelar.addEventListener('click',()=>{

                    location.reload();
                });

                const coursescompleted = this.shadowRoot.querySelector('#completed');
                coursescompleted.textContent = student.comp_courses;

                const certifiedearn = this.shadowRoot.querySelector('#earn');
                certifiedearn.textContent = student.certificates;

                const averagegrade = this.shadowRoot.querySelector('#average');
                averagegrade.textContent = student.average_grade;

                const profesion = this.shadowRoot.querySelector('#profesion');
                profesion.textContent = student.programa;






                // document.addEventListener('click', () => {
                //     location.reload();
                //   });

               
             




            } else {
                console.error('Estudiante no encontrado');
            }

        } 
        catch (error) {
            console.error('Error loading JSON:', error);
        }
    }
}
customElements.define('new-profile', NewProfile);
customElements.define('barra-menu',barraMenu);
comp.modo = localStorage.getItem("modo");
barra.pagina = "Profile";