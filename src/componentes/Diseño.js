body {
    margin: 0;
    box-sizing: border-box;
    font-family: Optima, sans-serif;
    --border: 1px solid #cbb4da;
    --border-table: 1px solid rgb(202, 138, 211);
    background: #e3c2f7;
    
  }
  header{
    background-color: #e3c2f7;
    height: 100px;
    text-align: center;
    
  }
  .navbar{
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 2px rgb(211, 122, 199) solid;
    margin-bottom: 3rem;
  }
  .navbar li{
    padding: 10px;
    list-style: none;    
  }
  .navbar li a{
    text-decoration: none;
    color:black;
  }
  .navbar li a:hover{
    color: rgb(216, 144, 235);
    transition: 2.0s;
  }
  .navbar1 {
    display:grid;
    text-decoration: none;
  }
  h1 {
    margin-top: 3rem;
    text-align: center;
    color: rgb(75, 72, 77);
  }
  
  /* DESDE AQUI EMPIEZA LA SECCIÓN DEL CARRITO */
  .tabla-calculo {
    display: flex;
    justify-content: center;
  }
  .tabla {
    width:80%;
    table-layout: fixed;
    border-collapse: collapse;
    color: rgb(235, 187, 228);
    margin-bottom: 2rem;
    empty-cells: hide;
    border-radius: 10px;
  }
  .titulo-tabla {
    font-size: 1.5rem;
    padding: .5rem;
  }
  .border-top-left {
    border-top-left-radius: 10px;
  }
  .border-top-right {
    border-top-right-radius: 10px;
  }
  .border-bottom-right {
    border-bottom-right-radius: 10px;
  }
  .border-bottom-left {
    border-bottom-left-radius: 10px;
  }
  th {
    font-size: 1.1rem;
    background: rgba(230, 122, 240, 0.7);
  }
  th, td, tr {
    border: var(--border-table);
    text-align: center;
    padding: .4rem 0;
  }
  td {
    background: rgba(221, 160, 221, 0.9);
    color: black;
  }
  .precio-tabla::before {
    content: '$';
    padding-right: 0.4rem;
  }
  .button {
    margin: 0 .4rem;
    border: var(--border-table);
    background: rgba(195, 104, 207, 0.7);
    color: rgb(211, 138, 207);
    cursor: pointer;
  }
  .negrita {
    font-weight: bold;
  }
  .none {
    background: transparent;
    border: none;
  }
  
  
  /* DESDE AQUI EMPIEZA LA SECCIÓN DE LOS PRODUCTOS */
  
  .contenedor-productos{
    margin-top: 5rem;
  }
  .cartola {
    height: 450px;
    width: 250px;
    border-radius: 0.35rem;
    background: #c0a0be;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow:0px 0px 1rem rgba(225, 152, 235, 0.7);
    transition: transform 0.1s;
    overflow: hidden;
    margin: 1rem;
  }
  .cartola:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
    box-shadow: 0 0 2rem rgba(227, 159, 238, 0.7);
  }
  /* Imagen */
  .contenedor-img {
    border-radius: .35rem;
    height: 230px;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  /* Nombre y descripción del producto */
  .div-info {
    flex: 1;
    border-bottom: var(--border);
    overflow: hidden;
  }
  .nombre-prod {
    margin: 0;
    font-size: 1.2rem;
    text-align: center;
    padding: 0.2rem 0;
  }
  .separador {
    width: 80%;
    margin: .2rem auto;
    border: none;
    border-top: var(--border);
  }
  .descripcion-prod {
    margin: 0;
    font-size: 0.9rem;
    padding: 0.2rem 1rem;
    overflow: hidden;
    opacity: .7;
  }
  /* Precio y Boton Carrito */
  .div-precio-boton {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .5rem;
  }
  .precio {
    margin: 0 .5em;
  }
  .precio::before {
    content: '$';
    padding-right: 0.3rem;
  }
  .boton {
    background: rgba(209, 148, 206, 0.7);
    cursor: pointer;
    border: var(--border);
    font-size: 1rem;
    width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 1px 1px 3px rgba(15, 15, 15, 0.158);
  }
  .boton:hover {
    color: rgba(213, 125, 235, 0.8);
    background: rgb(218, 154, 231);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.178);
  }
  .boton::after {
    content: '';
    display: block;
    height: 20px;
    width: 20px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .boton:hover::after {
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  
    background-size: contain;
    background-repeat: no-repeat;
  }
  .carrito {
    width: 18px;
  }
  /* Contenedor de todos los productos */
  .contenedor-productos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .background-dark{
    background-color: rgb(240, 138, 209);
  }
  
  