export const estiloprofile = `
<style>
.profile-container {
    max-width: 1000px;
    margin: 1rem auto;
    text-align: center;
    background-color: var(--fondo-contenedores);
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
    top: 160px; 
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border: 5px solid var(--letra-botones);
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
    color: var(--Letra);
}
.info p {
    color: #7f8c8d;
    margin: 0;
}
.container-personal{
    background-color: var(--fondo-contenedores);
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
    color: var(--Letra);
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
    background-color:var(--letra-botones);
    transition: border-color 0.7s ease;
    color: var(--Letra);
    text-transform: uppercase;
}
.input:focus{
    width:300px;
    border-radius:5px;
    border:1px solid rgb(206, 206, 206);
    background-color: vat(--letra);
    border-color: #00aaff;       
    box-shadow: 0 0 2px rgb(3, 121, 180);  
    outline: none;
    color: var(--Letra);
}
.input2{
    width:300px;
    height:25px;
    border-radius:5px;
    border:1px solid rgb(206, 206, 206);
    background-color: var(--letra-botones);
    background: transparent;      
    border: 2px solid #ccc;       
    outline: none;               
    padding: 8px;
    color: var(--Letra);
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
    background-color: var(--fondo-contenedores);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    margin-left:18px;
    margin-right: 18px;
}
.card h2 {
    margin-top: 0;
    font-size: 20px;
    color: var(--Letra);
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
    background-color: var(--fondo-contenedores);
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
    color: var(--letra-botones);
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
.test h3{
    color: var(--Letra);
}
.card small {
    margin-left: 35px;
    color:rgb(133, 133, 133);
    font-size: 0.9rem;
}
@media (max-width: 600px) {
    .form, .information, .contenedor-name2, .stats, {
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
</style>
}`