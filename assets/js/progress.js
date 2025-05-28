"use strict";
import { GetJson } from "./funcionesJson.js";

export function mostrarProgreso() {
  GetJson().then(datos => {
    const lista = datos.courses
    const lista2 = datos.content
    Swal.fire({
      html: `
      <div class="contenedor">
        <div class="img-1">
          <div class="modal_header">
              <div class="title">${lista[0].title}</div>
              <div class="progreso-global">
                  <div class="barra-1">
                    <div class="relleno" style="width: 80%;"></div>
                  </div>  
                <div class="etiqueta-1">80% Complete</div>
              </div>
          </div> 
        </div>  
      </div>  
      <div class="section_list">
        <div class="seccion">
          <div class="titulo-1">${lista2[0].name}</div>
          <div class="subtitulo">Basic structure, elements, and semantic markup</div>
          <div class="apartado-barra">
            <div class="barra">
              <div class="relleno" style="width: 100%;"></div>
            </div>
            <div class="etiqueta">100% Complete</div>
          </div>
        </div>
        <hr>
  
        <div class="seccion">
          <div class="titulo-1">${lista2[1].name}</div>
          <div class="subtitulo">Selectors, layouts, and responsive design</div>
          <div class="barra">
            <div class="relleno" style="width: 85%;"></div>
          </div>
          <div class="etiqueta">85% Complete</div>
        </div>
         <hr>
        <div class="seccion">
          <div class="titulo-1">${lista2[2].name}</div>
          <div class="subtitulo">Variables, functions, DOM manipulation</div>
          <div class="barra">
            <div class="relleno" style="width: 75%;"></div>
          </div>
          <div class="etiqueta">75% Complete</div>
        </div>
         <hr>
        <div class="seccion">
          <div class="titulo-1">${lista2[3].name}</div>
          <div class="subtitulo">Introduction to modern frameworks</div>
          <div class="barra">
            <div class="relleno" style="width: 60%;"></div>
          </div>
          <div class="etiqueta">60% Complete</div>
        </div>
      </div>
      
      `,
        customClass: {
        popup: 'swal-progreso'
        },
        width: '35%',
        height: '50%',
        showCloseButton: true,
        showConfirmButton: false,
       
    });
  })
 
}

export function mostrarProgreso_2() {
  
    Swal.fire({
      html: `
      <div class="contenedor">
        <div class="img-2">
          <div class="modal_header">
              <div class="title">${lista[1].title}</div>
              <div class="progreso-global">
                  <div class="barra-1">
                    <div class="relleno" style="width: 60%;"></div>
                  </div>  
                <div class="etiqueta-1">60% Complete</div>
              </div>
          </div> 
        </div>  
      </div>  
      
      <div class="section_list">
        <div class="seccion">
          <div class="titulo-1">${lista2[0].name}</div>
          <div class="subtitulo">Basic syntax, data structures, and functions</div>
          <div class="apartado-barra">
            <div class="barra">
              <div class="relleno" style="width: 90%;"></div>
            </div>
            <div class="etiqueta">90% Complete</div>
          </div>
        </div>
        <hr>

        <div class="seccion">
          <div class="titulo-1">${lista2[1].name}</div>
          <div class="subtitulo">Working with pandas and numpy</div>
          <div class="barra">
            <div class="relleno" style="width: 70%;"></div>
          </div>
          <div class="etiqueta">70% Complete</div>
        </div>
        <hr>
        <div class="seccion">
          <div class="titulo-1">${lista2[2].name}</div>
          <div class="subtitulo">Basic algorithms and model training</div>
          <div class="barra">
            <div class="relleno" style="width: 45%;"></div>
          </div>
          <div class="etiqueta">45% Complete</div>
        </div>
        <hr>
        <div class="seccion">
          <div class="titulo-1">${lista2[3].name}</div>
          <div class="subtitulo">Creating charts and interactive visualizations</div>
          <div class="barra">
            <div class="relleno" style="width: 35%;"></div>
          </div>
          <div class="etiqueta">35% Complete</div>
        </div>
      </div>
      
      `,
      customClass: {
      popup: 'swal-progreso'
      },
      width: '35%',
      height: '50%',
      showCloseButton: true,
      showConfirmButton: false,
     
  });
  
}

export function mostrarProgreso_3() {
  GetJson().then(datos => {
    const lista = datos.courses
    const lista2 = datos.content
  Swal.fire({
    
    html: `
    <div class="contenedor">
      <div class="img-3">
        <div class="modal_header">
            <div class="title"> ${lista[2].title}</div>
            <div class="progreso-global">
                <div class="barra-1">
                  <div class="relleno" style="width: 45%;"></div>
                </div>  
              <div class="etiqueta-1">45% Complete</div>
            </div>
        </div> 
      </div>  
    </div>  
    <div class="section_list">
      <div class="seccion">
        <div class="titulo-1">${lista2[0].name}</div>
        <div class="subtitulo">Principles of mobile interface design</div>
        <div class="apartado-barra">
          <div class="barra">
            <div class="relleno" style="width: 80%;"></div>
          </div>
          <div class="etiqueta">80% Complete</div>
        </div>
      </div>
      

      <div class="seccion">
        <div class="titulo-1">${lista2[1].name}</div>
        <div class="subtitulo">Components, navigation, and state management</div>
        <div class="barra">
          <div class="relleno" style="width: 55%;"></div>
        </div>
        <div class="etiqueta">55% Complete</div>
      </div>
       <hr>
      <div class="seccion">
        <div class="titulo-1">${lista2[2].name}</div>
        <div class="subtitulo">Camera, location, and device features</div>
        <div class="barra">
          <div class="relleno" style="width: 30%;"></div>
        </div>
        <div class="etiqueta">30% Complete</div>
      </div>
       <hr>
      <div class="seccion">
        <div class="titulo-1">${lista2[3].name}</div>
        <div class="subtitulo">Preparing and deploying to app stores</div>
        <div class="barra">
          <div class="relleno" style="width: 15%;"></div>
        </div>
        <div class="etiqueta">15% Complete</div>
      </div>
    </div>
    
    `,
      customClass: {
      popup: 'swal-progreso'
      },
      width: '35%',
      height: '51%',
      showCloseButton: true,
      showConfirmButton: false,
     
  });
})
}

export function mostrarProgreso_4() {
  GetJson().then(datos => {
    const lista = datos.courses
    const lista2 = datos.content
  Swal.fire({
    
    html: `
    <div class="contenedor">
      <div class="img-4">
        <div class="modal_header">
            <div class="title">${lista[3].title}</div>
            <div class="progreso-global">
                <div class="barra-1">
                  <div class="relleno" style="width: 30%;"></div>
                </div>  
              <div class="etiqueta-1">30% Complete</div>
            </div>
        </div> 
      </div>  
    </div>  
    <div class="section_list">
      <div class="seccion">
        <div class="titulo-1">${lista2[0].name}</div>
        <div class="subtitulo">Basic concepts and service models</div>
        <div class="apartado-barra">
          <div class="barra">
            <div class="relleno" style="width: 100%;"></div>
          </div>
          <div class="etiqueta">100% Complete</div>
        </div>
      </div>
      <hr>

      <div class="seccion">
        <div class="titulo-1">${lista2[1].name}</div>
        <div class="subtitulo">EC2, S3, and core AWS services</div>
        <div class="barra">
          <div class="relleno" style="width: 40%;"></div>
        </div>
        <div class="etiqueta">40% Complete</div>
      </div>
       <hr>
      <div class="seccion">
        <div class="titulo-1">${lista2[2].name}</div>
        <div class="subtitulo">Security best practices and implementation</div>
        <div class="barra">
          <div class="relleno" style="width: 25%;"></div>
        </div>
        <div class="etiqueta">25% Complete</div>
      </div>
       <hr>
      <div class="seccion">
        <div class="titulo-1">${lista2[3].name}</div>
        <div class="subtitulo">Lambda functions and serverless architecture</div>
        <div class="barra">
          <div class="relleno" style="width: 15%;"></div>
        </div>
        <div class="etiqueta">15% Complete</div>
      </div>
    </div>
    
    `,
      customClass: {
      popup: 'swal-progreso'
      },
      width: '35%',
      height: '50%',
      showCloseButton: true,
      showConfirmButton: false,
     
  });
})
}

