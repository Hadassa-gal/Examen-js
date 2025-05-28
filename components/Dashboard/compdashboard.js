import {rootmodonoche,rootmododia} from "/assets/js/rootsmodos.js";
export class DashboardPage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._modo = "";
      
    }
    set modo(value){
      this._modo = value;
      this.render();
    }
    render(){
      this.shadowRoot.innerHTML = `
        <style>
          .some-cards{
            background-color:var(--fondo-contenedores)
          }
          .container-cards {
            border-radius: 20px;
            justify-content: center;
            padding: 20px 0px;
          }
          .container-cards-item{
              display:flex;
              gap:25px;
              justify-content:center;;
          }
  
          .container-cards-items {
              font-size: 1.5rem;
              border-radius: 12px;
              width: 360px;
              text-align: left;
              padding-left: 1.5rem;
              height: 210px;
              background-color:var(--fondo-contenedores);
              box-shadow: 0 2px 4px #0000001a;
          }
  
          .container-cards-items h2 {
              height: 20px;
              color: var(--Letra);
              font-weight: 500;
            
          }
  
          .number3, .number2 , .porcent {
              color: var(--azul-botones);
              font-size: 2.5rem;
              font-weight: 700;
          }
        
          .number2 {
              color: var(--azul-botones);
              font-size: 2.5rem;
              font-weight: 600;
              padding-top:30px;
          }
  
          .container-part-two {
              display: flex;
              padding: 90px 0px 20px;
              justify-content: space-between;
              align-items: center;
          }
  
          .btn-1 {
            background-color: var(--azul-botones);
              color: var(--letra-botones);
              border: none;
              height: 50px;
              font-size: 1rem;
              border-radius: 8px;
              width: 230px;
              cursor: pointer;
              padding: .75rem 1.5rem;
          }
  
          .btn-1:hover {
              transition: all .3s ease;
              transform: translateY(-1px);
              background-color:rgb(52, 152, 219);
          }
  
          .courses {
              font-size: 1.6rem;
              letter-spacing: -.32px;
              line-height: 120%;
              color:var(--Letra);
              font-weight: 420;
          }
  
          .container-part-two {
              display: flex;
              padding-top: 40px;
              justify-content:center;
              gap:660px;
              
        

          }
          .titlecourse {
            color:var(--Letra);
              margin-left:30px;
          }

          .cards-part-next{
              box-shadow: 0 2px 4px #0000001a;
              border-radius:12px;
              background-color:rgb(255, 255, 255);
          }
         

          .cards-part-next:hover {
              transition: all .3s ease;
              transform: translateY(-2px);
            
          }

          .container-cards-above-items{
              display:flex;
              justify-content:center;
              gap:25px;
              padding-bottom:60px;
              padding-left: 450px;
              padding-right:450px;
          }

          .pictures{
              width:350px;
              border-radius: 12px 12px 0 0;
              height:160px;
              width: 360px;
              position:relative;
              z-index:1;
          }

           

          .container-percent{
              display:flex;
              justify-content:space-around;
              gap:60px;
              padding-right:0px;
          }

          .container-btn{
              display:flex;
              justify-content:center;
          }

          .btn{
              width:310px;
              margin-bottom:20px;
              height:48px;
              border-radius: 8px;
              border:none;
              background-color: var(--azul-botones);
              color: var(--letra-botones);
              font-size:1rem;
              font-weight:530;
          }

           .btn:hover{
              width:310px;
              margin-bottom:20px;
              height:48px;
              border-radius: 8px;
              border:none;
              background-color:#3498DB;
              color:rgb(255, 255, 255);
              cursor:pointer;
              font-weight:530;
              background-color:rgb(52, 152, 219)
          }

          .instructor {
              margin-left: 30px;
              color:var(--Letra);
          }

          hr {
              width:300px;
              border:1px solid rgb(243, 243, 243);
          }

          .title-recent {
              font-size:36px;
              font-weight:500;
              color:var(--Letra);
              
              
              
          }

          .recent-container{
              margin-left:30px;
          
          }
          
         

          .cards-part-three{

              background-color:var(--fondo-contenedores);
              flex-direction:column;
              margin-bottom:50px;
              display:flex;
              border-radius:20px;
              justify-content:center;
               box-shadow: 0 2px 4px #0000001a;
               margin-left:340px;
               margin-right:340px;
          
          }

         

          .book{
              display:flex;
              align-items:center;
              background-color:var(--fondo-recentactivity);
              font-size: 1.2rem;
              width: auto;
              border-radius:8px;
              margin-left:18px;
              height:80px;
              margin-bottom:20px;
              margin-right:18px;
          }

          .icon {
              border-radius: 50%;
              width: 40px;
              height: 40px;
              padding-left:8px;
              padding-top:8px;
              background-color:var(--fondo-contenedores);
              margin-left:20px;
          }

          .complete {
              margin-left:18px;
              font-size: 1rem;
              line-height: 1.7;
              color:var(--Letra);
          }

          

          .icon2 {
              border-radius: 50%;
              width: 40px;
              height: 40px;
              padding-left:8px;
              background-color:var(--fondo-contenedores);
              margin-left:8px;
              padding-top:8px;
              align-items:40px;
              margin-left:20px;
          }
          .firma {
              background-color:var(--fondo-recentactivity);
              display:flex;
              height:80px;
              margin-left:18px;
              align-items:center;
              border-radius:8px;
              margin-bottom:20px;
              margin-right:18px;
          }

          .trofeo {
              background-color:var(--fondo-recentactivity);
              display:flex;
              height:80px;
              align-items:center;
              border-radius:8px;
              margin-bottom:20px;
              margin-left:18px;
               margin-right:18px;
           
          }

          .icon3 {
              border-radius: 50%;
              width: 45px;
              height: 45px;
              padding-left:13px;
              background-color:var(--fondo-contenedores);
              margin-left:20px;
              padding-top:12px;
          }

          .earn {
          margin-left:18px;
            line-height: 1.7;
            font-size: 1rem;
            color:var(--Letra);
          }

          .assignment {
            line-height: 1.7;
             margin-left:18px;
             font-size: 1rem;
             color:var(--Letra);
          }

          .percent {
          color:rgb(46, 204, 113);
          margin-left:18px;
           font-size: 0.9rem;
          }

          .lesson {
          color:rgb(102, 102, 102);
          margin-right:18px;
          font-size: 0.9rem;
          }

          .days-ago {
          color:var(--Letra);
          font-size:0.85rem;
          }

          .relleno {
              background-color: rgb(46, 204, 113);
             
              height:5px;
              margin-top:-6px;
              z-index:2;
              
              
          }             background-color:rgb(255, 255, 255);
              
          .progreso{
            
          background-color: rgba(0, 0, 0, 0.3);
          }

          


          .dashboard{
            padding-left: 350px;
            color: var(--Letra);
            font-size: 3.2rem;
            font-weight:550;
            

            }
   
  @media (max-width: 1200px) {
  .container-part-two
  {

       display: flex;
              padding-top: 40px;
              justify-content:center;
              gap:60px;
    
    
  }

  .container-part-three {
        display:flex;
        flex-direction:row;
        margin-left:30px;
       
  }

  .container-cards-above-items {
    padding-left: 40px;
    padding-right: 40px;
    flex-wrap: wrap;
  }
}

/* RESPONSIVO: Ajustes para pantallas menores de 768px */
@media (max-width: 768px) {
  .container-cards-item {
    flex-direction: column;
    align-items: center;
     
  }

  .container-cards-items {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
     width: 300px;
  }

  .number3{
  padding-top:40px;
  }

  .cards-part-next{
  width: 300px;
  } 

  .pictures {
  width: 300px;
  }

  .btn{
   width: 250px;
  }

  .btn:hover{
   width: 250px;
  }

  .instructor {
  padding-right:20px;
  margin-right:0px;
  }

  
  .container-part-two {
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 0;
    margin-right: 0;
  }


  .trofeo {
    margin-right:120px;
    height:80px;
    align-items:center;
    border-radius:8px;
    margin-bottom:20px;
 
}

 .cards-part-three{
          padding-right:340px;
          display:flex;
          margin-left:20px;
          justify-content:center;
          box-shadow: 0 2px 4px #0000001a;
          }

  .book,
  .firma,
  .trofeo {
    display:flex;
    flex-direction:row;
    padding-right:20px;
    width: 300px;
  }

  .dashboard {
    padding-left: 20px;
    font-size: 2rem;
    text-align: center;
  }

  .earn,.assignment,.complete {
  font-size: 0.8rem;
  }




}



/* RESPONSIVO: Ajustes para modo horizontal en móviles */
@media (orientation: landscape) and (max-width: 812px) {
  .container-cards-item,
  .container-cards-above-items,
  .container-part-two,
  .container-end {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }

  .dashboard {
    padding-left: 10px;
    font-size: 2rem;
    text-align: center;
  }
}

        </style>

        <div class="container-cards">

            <h1 class="dashboard">Dashboard</h1>
    
            <div id="studentcontainer" class="container-cards-item"></div>

                <div class="container-part-two">
                  <h3 class="courses">My Enrolled Courses</h3>
                  <button class="btn-1">Browse More Courses</button>
                </div>

                <div class="container-cards-above">
                    <div id="coursecontainer" class="container-cards-above-items"></div>
                </div>

                
                <div id="cards-part-end" > </div>

                <div id = "relleno" class="relleno>
        </div>
      `;
      this.estilos = document.createElement('style')
      if (this._modo == "oscuro") {
        this.estilos.innerHTML = rootmodonoche;
        this.shadowRoot.appendChild(this.estilos);
      }
      else{
        this.estilos.innerHTML = rootmododia;
        this.shadowRoot.appendChild(this.estilos);
      }
      
      this.connectedCallback()
    }
    async connectedCallback() {
        try {
          const res = await fetch('db.json');
          const data = await res.json();
      
          const container = this.shadowRoot.querySelector('#studentcontainer');
          container.innerHTML = ''; 
      
          const selectedId = '1';  // Aquí el ID del estudiante o el perfil que quieres mostrar
          
          // Busca el estudiante con ese id
          const student = data.student.find(s => s.id === selectedId);
      
          if (student) {
            // Card 1: Active Course
            const card1 = document.createElement('div');
            card1.classList.add('container-cards-items');
            card1.innerHTML = `
              <h2 class="titulo-div">Active Courses</h2>
              <p class="number3">${student.activecourse || 'N/A'}</p>
            `;
            container.appendChild(card1);
      
            // Card 2: Pending Assignments
            const card2 = document.createElement('div');
            card2.classList.add('container-cards-items');
            card2.innerHTML = `
              <h2 class="titulo-div" >Pending <br> Assignments </h2>
              <p class="number2">${student.assignments ?? '0'}</p>
            `;
            container.appendChild(card2);
      
            // Card 3: Overall Progress
            const card3 = document.createElement('div');
            card3.classList.add('container-cards-items');
            card3.innerHTML = `
              <h2 class="titulo-div">Overall Progress</h2>
              <p class="number3">${student.overall ?? '0%'}</p>
            `;
            container.appendChild(card3);


            const container2 =this.shadowRoot.querySelector('#coursecontainer')
            container2.innerHTML =  ''; 

             
            const courses = data.courses.find(c => c.id === selectedId);

              //este count es el progreso // 
            const progreso = student.porcent; // aqui se debe cambiar por el porcentaje de la materia
            
            const card4 =  document.createElement('div');
            card4.classList.add('cards-part-next');
            card4.innerHTML = `
            <div class="some-cards">

                <div>
                    <img class="pictures" src="${courses.image}" alt >

                    <div class="progreso">

                            <div  class="relleno"> </div>
                    </div>
                   
                </div>
                  
                  <h4 class="titlecourse">${courses.title}</h4>
                  <p class="instructor">${courses.instructor}</p>

                  <hr>

                <div class="container-percent">   
                  <p class ="percent">${student.porcent}% Complete</p>  
                  <p class="lesson" >13/20 Lessons</p>
                </div>

                <div class="container-btn"><button class="btn" id="button-continue">Continue Learning</button> </div>
                
          </div>

            `;
            const relleno = card4.querySelector('.relleno');

            if (progreso >=0 && 100 >= progreso ){

              relleno.style.width = `${progreso}%`;

            };

            container2.appendChild(card4);


            const card5 =  document.createElement('div');
            card5.classList.add('cards-part-next');
            card5.innerHTML = `
            <div class="some-cards">
                  <img class="pictures" src="${courses.image}" alt >
                  <div class="progreso">
                  <div class="relleno" id="relleno"></div>
                  </div>
                  
                  <h4 class="titlecourse">${courses.title}</h4>
                  <p class="instructor">${courses.instructor}</p>
                  <hr>

                <div class="container-percent">   
                  <p class="percent">${student.porcent} % Complete</p>  
                  <p class="lesson" >13/20 Lessons</p>
                </div>

                <div class="container-btn"><button class="btn" id="button-continue">Continue Learning</button> </div>
                
          </div>

            `;

            const relleno2 = card5.querySelector(".relleno");

            if(progreso>=0 && 100 >= progreso){

              relleno2.style.width= `${progreso}%`
            }


            container2.appendChild(card5);

            const card6 =  document.createElement('div');
            card6.classList.add('cards-part-next');
            card6.innerHTML = `
            <div class="some-cards">
            
                 
                    <img class="pictures" src="${courses.image}" alt >
                    
                 
                  
                   <div class="progreso">
                      <div class="relleno"></div> 
                  </div>

                  
                  <h4 class="titlecourse">${courses.title}</h4>
                  <p class="instructor">${courses.instructor}</p>
                  <hr>

                <div class="container-percent">   
                  <p class="percent">${student.porcent} % Complete</p>  
                  <p class="lesson">13/20 Lessons</p>
                </div>

                <div class="container-btn"><button class="btn" id="button-continue">Continue Learning</button> </div>
                
          </div>`;

          const relleno3 = card6.querySelector(".relleno")

            if(progreso >= 0 && 100 >=progreso){
             
              relleno3.style.width= `${progreso}%`;
            }
          container2.appendChild(card6);

           const container3 = this.shadowRoot.querySelector('#cards-part-end');
           const card7 = document.createElement('div');
           card7.classList.add("end-section");
           container3.innerHTML = `

           <div class="cards-part-three" >

           <div class="recent-container">
                         <h1 class="title-recent" >Recent Activity</h1>

           </div>
             
              
               <div class ="book">
               
               <div class="icon">📚</div>
               <p class="complete">Completed Chapter 5 in Unity Game Development <br > <span class="days-ago">2 hours ago</span> </p>
               </div>
              
              <div class= firma>
              
              <div class="icon2">✍️</div>
                  <p class="assignment">Submitted assignment: E-commerce Platform Project <br> <span class="days-ago">1 days ago</span> </p>
                  
              </div>
             
            <div class="trofeo">
            <div class = "icon3">🏆</div>
              <p class="earn" >Earned certificate in React Fundamentals <br> <span class="days-ago">3 days ago</span>  </p>
            </div>
                

           </div>
            
           `;
            
            container3.appendChild(card7);
            
          } else {
            container.innerHTML = `<p>No student found with ID ${selectedId}</p>`;
          }
      
        } catch (error) {
        
        }
    }}