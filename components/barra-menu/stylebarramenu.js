export const estilobarra = `
:host{
    --negro-fondobarra: #1a1a1a;
    --blanco-letrabotonoes: #FFFFFF;
    --azul-botones: #3498DB;
    --verde-barraprogreso: #2ECC71;
    --blancofondoPAGINA: #f4f5f5;
    --rojo-detalles-texto: #e74c3c;
    --gris-botones-desactivados-fondo: #E1E8ED;
}
.barra-men{
    margin-top: -0.5rem;
    transition: 1s;
    margin-left: -0.5rem;
    width: 101%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    background-color: var(--negro-fondobarra);
    box-sizing: border-box;
}
.barra-noche{
    transition: 1s;
    background-color: #2c3e50;
}
img {
    width: 50%;
    height: 50%;
    border-radius: 100%;
    border: 1px 1px solid var(--blanco-letrabotonoes);
}

.btn-profile {
    max-width: 150px;
    margin-right: 330px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--fondo-barra);
    border: none;
    color: var(--blanco-letrabotonoes);
    font-size: 1rem;
    padding: 0 10px;
}

.btn-profile img {
    margin-right: 10px;
    width: 38px;
    height: auto;
    border-radius: 100%;
}

.btn-profile p {
    margin: 0 20px 0 10px;
}

.btn-pro {
    transition: 0.5s;
    font-size: 13px;
    margin-left: 6px;
}
.btn-pro-press {
    transition: 0.5s;
    font-size: 13px;
    margin-left: 6px;
    transform:rotateZ(180deg);
}

.btn-profile:hover {
    background-color: #7574743a;
    border-radius: 0.3rem;
}

.menu {
    margin-left: -20px;
    margin-right: -70px;
    list-style-type: none;
    display: flex;
    color: var(--blanco-letrabotonoes);
}

.btn-option {
    text-decoration: none;
    padding: 8px 20px;
    text-align: center;
    border-radius: 0.2rem;
    margin: 5px -2px 0px 30px;
}
a{
    color:white;
    text-decoration: none;}
.btn-option:hover {
    transition: 0.5s;
    background-color: #7574743a;
    color: var(--azul-botones);
    cursor: pointer;
}
.btn-option-in-page {
    padding: 8px 20px;
    text-align: center;
    border-radius: 0.2rem;
    margin: 5px -2px 0px 30px;
    background-color: #7574743a;
    color: var(--azul-botones);
}

.btn-home {
    line-height: 1.5rem;
    letter-spacing: 0.06rem;
    text-align: left;
    font-size: 22.9px;
    font-weight: 700;
    text-decoration: none;
    color: var(--blanco-letrabotonoes);
    margin-left: 300px;
}
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-left: 20px;
    z-index: 1000;
}
.hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: all 0.3s ease;
}
.div-options {
    margin-left: 100px;
    display: flex;
    align-items: center;
}
.btn-mode {
    background-color: var(--fondo-barra);
    font-size: 1.25rem;
    border-radius: 100%;
    border: none;
    height: 43px;
    width: 43px;
    margin-right: 10px;
}
.btn-mode:hover {
    transition: 0.5s;
    font-size: 1.4rem;
    background-color: #7574743a;
    cursor: pointer;
}
.btn-english {
    background-color: #7574743a;
    color: var(--blanco-letrabotonoes);
    font-weight: 500;
    padding: 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.9rem;
}
.profile-a{
    display: none;
}
.activo{
    text-align: start;
    width: 190px;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 0.5rem;
    position: relative;
    top: 90%;
    left: -160%;
    background: var(--blanco-letrabotonoes);
    a{
        text-decoration: none;
        margin: 1rem;
        font-size: 0.9rem;
        color: rgb(59, 59, 59);
        font-weight: 600;
    }
    a:hover{
        color: var(--azul-botones);
    }
    hr{
        color: var(--gris-botones-desactivados-fondo);
        opacity: 30%;
        width: 190px;
    }
    .logout{
        margin-top: 0;
        height: 20px;
        color: var(--rojo-detalles-texto);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-radius: 0.3rem;
    }
    .logout:hover{
        transition: 1s;
        color: var(--rojo-detalles-texto);
        background-color:#e74d3c3e;
    }
}
option {
    background-color: #113c5b;
}
@media (max-width: 1280px) {
    .barra-men{
    width: 101.9%;
    }
    .menu {
        margin-left: 0;
        margin-right: 0;
    }
    
    .btn-option {
        padding: 10px 15px;
    }
    
    .btn-home {
        margin-left: 0;
    }
    
    .btn-profile {
        margin-right: 0;
    }
    .activo{
        right: 5%;
    }
}


@media (max-width: 1024px) {
    .barra-men{
    width: 102.8%;
    }
    .hamburger {
        display: block;
        order: 1;
    }
    
    .btn-home {
        order: 2;
        margin-right: auto;
        padding: 15px 0;
    }
    
    .div-options {
        order: 3;
        margin-left: auto;
    }
    
    .btn-profile {
        order: 4;
        margin-left: 0;
    }
    
    .menu {
        position: fixed;
        top: 65px;
        left: -100%;
        width: 80%;
        max-width: 300px;
        height: calc(100vh - 85px);
        background-color: #1a1a1a;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
        transition: left 0.3s ease;
        z-index: 999;
        transform: none;
        left: -100%;
    }
    
    .menu.active {
        left: 0;
    }
    
    .btn-option {
        width: 100%;
        margin: 5px 0;
        padding: 15px;
        text-align: left;
        box-sizing: border-box;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}

@media (max-width: 480px) {
    .barra-men{
        width: 107%;
        margin: 0;
        margin-top: -0.5rem;
        transition: 1s;
        margin-left: -0.5rem;
    }
    .btn-profile p {
        display: none;
    }
    
    .btn-pro {
        display: none;
    }
    
    .btn-profile img {
        margin-right: 0;
    }
    
    .div-options {
        margin-left: 0px;
    }
    
    .btn-english {
        padding: 0.3rem;
    }
    .hamburger{
        margin: 0;
    }
}`