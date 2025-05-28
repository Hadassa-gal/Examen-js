class NewProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.loadProfileFromJson();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/ `
            <style>
                :host {
                    display: block;
                    background-color:rgb(244, 245, 245);
                    max-width: 100%;
                    min-height: 100vh;
                    font-family: Arial, sans-serif;
                    
                }

                body {
                    margin: 0;
                    background-color: #eeeeee;
                    font-family: Arial, sans-serif;
                    }

                    .profile-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    text-align: center;
                    background-color: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow:0 2px 4px #0000001a;
                    }

                    .header {
                    height: 180px;
                    background: linear-gradient(120deg, #3498db, #2c3e50);
                    position: relative;
                    
                    }

                    .profile-pic-container {
                    position: absolute;
                    top: 120px; 
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100px;
                    height: 100px;
                    border: 5px solid white;
                    border-radius: 50%;
                    overflow: hidden;
                    background-color: white;
                    }

                    .profile-pic {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    }

                    .info {
                    margin-top: 60px;
                    padding: 10px;
                    }

                    .info h2 {
                    margin: 10px 0 5px;
                    color: #2c3e50;
                    }

                    .info p {
                    color: #7f8c8d;
                    margin: 0;
                    }

                    .container-personal{
                        background-color:rgb(255, 255, 255);
                        margin-left:18px;
                        margin-right:18px ;
                        border-radius:20px 20px 20px 20px;
                        margin-bottom:30px;
                    }

                    .personal{
                       display:flex;
                       direction:left;
                       padding-left:18px;
                       padding-top:20px;
                       font-size: 1.4rem;
                       color: #2c3e50;
                       
                    }

                    .line {
                        margin-left:18px;
                        margin-right:18px;
                        background-color:rgb(230, 238, 243);
                        border:none;
                        height: 2px;

                    }

                    .form{

                        display:flex;
                        gap:10px;
                        margin-left:18px;
                        margin-right:18px;
                    }

                    .form2{
                        
                        display:flex;
                        justify-content:left;

                    }

                    .location{
                        display:flex;
                        justify-content:left;
                         margin-left:18px;
                    }

                    .input{
                        width:300px;
                        border-radius:5px;
                        border:1px solid rgb(206, 206, 206);
                        background-color:rgb(248, 249, 250);
                        transition: border-color 0.7s ease;
                        color: #7f8c8d;
                        text-transform: uppercase;


                    }

                    .input:focus{
                        width:300px;
                        border-radius:5px;
                        border:1px solid rgb(206, 206, 206);
                        background-color:rgb(248, 249, 250);
                        border-color: #00aaff;       
                        box-shadow: 0 0 2px rgb(3, 121, 180);  
                        outline: none; 
                        
                        
                   
                                            }

                    .input2{
                        width:300px;
                        height:25px;
                        border-radius:5px;
                        border:1px solid rgb(206, 206, 206);
                        background-color:rgb(248, 249, 250);
                        background: transparent;      
                        border: 2px solid #ccc;       
                        outline: none;               
                        padding: 8px;
                        color: #7f8c8d;

                        

                    }

                    .input2:focus{
                        
                        border-radius:5px;
                        border:1px solid rgb(206, 206, 206);
                        background-color:rgb(248, 249, 250);
                        border-color: #00aaff;       
                        box-shadow: 0 0 2px rgb(3, 121, 180);  
                        outline: none; 
                    
                        }   


                    .information{
                        display:flex;
                        justify-content:space-between;
                        margin-left:18px;
                        padding-bottom:10px;
                    }
                    .cel{

                        margin-right:105px;

                    }

                    .emailes{
                        margin-right:25px;

                    }

                    .contenedor-name2 {
                        display:flex;
                        margin-left:18px;
                        margin-top:20px;
                       
                    }

                    .form2{
                        width:230px;
                        margin-left:18px; 
                        padding-bottom:20px;
                    }

                    .card {
                            background-color: rgb(248, 249, 250);
                            border-radius: 8px;
                            padding: 20px;
                            margin-bottom: 20px;
                            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
                            margin-left:18px; 
                            }

                            .card h2 {
                            margin-top: 0;
                            font-size: 20px;
                            color: #333;
                            border-bottom: 1px solid #ddd;
                            padding-bottom: 10px;
                            display:flex;
                            
                            }

                            .stats {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 20px;
                            gap: 10px;
                            }

                            .stat-box {
                            background-color: #fff;
                            border-radius: 8px;
                            padding: 20px;
                            flex: 1;
                            text-align: center;
                            color: #666;
                            box-shadow: 0px 2px  rgba(104, 104, 104, 0.08);
                            }

                            .stat-box strong {
                            
                            color: #3498db;
                            display: block;
                            font-size: 2rem;
                            font-weight: 700;
                            margin-bottom: .5rem;
                            }

                            .preferences label {
                            display: block;
                            margin-bottom: 15px;
                            font-weight: bold;
                            color: #333;
                            display:flex;

                            }

                            .preferences input[type="checkbox"] {
                            margin-right: 10px;
                            display:flex;
                            
                            }

                            .preferences small {
                            display: block;
                            margin-left: 25px;
                            color: #666;
                            font-weight: normal;
                            font-size: 0.9rem;
                            
                            }

                            .buttons {
                            text-align: right;
                            margin-top: 20px;
                            }

                            .cancel:hover{
                                transition: all .3s ease;
                                transform: translateY(-1px);
                                background-color:rgb(52, 152, 219);
                            }
                            .save:hover {
                                transition: all .3s ease;
                                transform: translateY(-1px);
                                background-color:rgb(52, 152, 219);
                            }

                            .buttons button {
                            padding: 10px 20px;
                            font-size: 14px;
                            border: none;
                            border-radius: 6px;
                            cursor: pointer;
                            margin-left: 10px;
                            }

                            .buttons .cancel {
                            background-color: white;
                            color: #333;
                            border: 1px solid #ccc;
                            }

                            .buttons .save {
                            background-color: #007bff;
                            color: white;
                            }

                            label{

                                color:rgb(133, 133, 133);
                                font-size:12px;
                                display:flex;
                                flex-direction:column;
                                text-align:left;
                            }

                            .test{
                                display:flex;
                            }

                            .card small {
                                margin-left: 35px;
                                color:rgb(133, 133, 133);
                                font-size: 0.9rem;
                            }

                            @media (max-width: 600px) {
                                .form, .information, .contenedor-name2, .stats,  {
                                    flex-direction: row;
                                    
                                }

                                .input, .input2 {
                                    width: 100%;
                                }

                                .input2{
                                    margin:10px 18px;
                                }

                                .form2 {
                                    width: 100%;
                                    margin-left: 0;
                                }

                                .cel, .emailes {
                                    margin-right: 0;
                                }

                                .stat-box {
                                    font-size: 14px;
                                    
                                }

                                .card{
                                    
                                    margin-left:0px;
                                }

                                .test {
                                
                                }
                                }

                                @media (min-width: 601px) and (max-width: 1024px) {
                                .input, .input2 {
                                    width: 250px; 
                                }

                                .form {
                                    gap: 8px; 
                                }

                                .form2 {
                                    width: 200px;
                                    margin-left: 18px;
                                }

                                .information {
                                    margin-left: 12px; 
                                }

                                .cel {
                                    margin-right: 60px; 
                                }

                                .emailes {
                                    margin-right: 15px;
                                }

                                .contenedor-name2 {
                                    margin-left: 12px;
                                    margin-top: 15px;
                                }

                                .profile-pic-container {
                                    width: 80px;
                                    height: 80px;
                                    top: 110px;
                                }

                                .info {
                                    margin-top: 50px;
                                    padding: 8px;
                                }
                                .mi-alerta {
                                font-family: 'Arial Black', Gadget, sans-serif !important;
                                color:rgb(105, 172, 240) !important;
                                background-color:rgb(17, 90, 155) !important;
                                border-radius: 15px !important;
                                padding: 20px !important;
                                font-size: 1.1rem !important;
                                }
                                }




                            

                            

                    


            </style>

           <div class="profile-container">
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

                                    </div >
                        
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

                                    </div >
                       
                        
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
                            <button class="save">Add Course</button>
                            <button id="cancell" class="cancel">Cancel</button>
                            
                            </div>
                        </div>
                </div>



            </div>
        `;
    }

    async loadProfileFromJson() {
        try {
            const response = await fetch('db.json');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // ID a buscar
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
