//opción con modal 

function mostrarmodal(elemento){
  const modal = document.querySelector('.modal');
  modal.classList.add('showModal');
  const contenedorPrincipal = document.querySelector('main');
  contenedorPrincipal.classList.add('mainOpacity');
  document.querySelector('#editUserName').value = "";
}

function cambiarNombre(evento){
  evento.preventDefault();
  console.log(evento);
  const elementoNombreUsuario = document.querySelector('#user-name');
  const nombreUsuario = document.querySelector('#editUserName').value;

  elenentoNombreUsuario.innerText = nuevoNombreUsuario;
  const modal = document.querySelector('.modal');
  modal.classList.remove('showModal');
  const contenedorPrincipal = document.querySelector('main');
  contenedorPrincipal.classList.remove('mainOpacity');
}


function removerUsuario(elemento, opcion){
  const contenedor = elemento.closest('.card-list-item');
  contenedor.remove();
  let numeroDeConexiones = document.querySelector('#connectionRequestNumber').innerText;
  numeroDeConexiones--;
  document.querySelector('#connectionRequestNumber').innerText = numeroDeConexiones;
  if(opcion === 'aceptar'){
    let numeroTotalDeConexiones = document.querySelector('#totalCpnnections').innerText;
    numeroTotalDeConexiones++;
    document.querySelector('#totalConnections').innerText = numeroTotalDeConexiones;
  }
  

}


/* primera forma... debo terminarlo
function cambiarNombre(elemento){
  const  elementoNombreUsuario = document.querySelector('#user-name');
  elementoNombreUsuario.innerText = "Carmen Soto";
}*/















//console.log("funciona");

//let navegacion = document.querySelector('.links-nav'); /* el query selector se utilza para seleccionar un elemento funciona sobre un objeto que tiene un elemento  */
//console.log(navegacion);


//Elemento con etiqueta de cierre
//let nombreUsuario = document.querySelector('#user-name');
//console.log(nombreUsuario.innerText);

/* innerText nos sirve para obtener el texto de un elemento y para modificar  */
/* innerContent sirve para obtener el texto de un elemento y limpiar los espacios  */

//para obtener o modificar le contenido de un input se utiliza la propiedad value 

// INPUT
/*let busqueda = document.querySelector('#busqueda');
console.log(busqueda.value)*/

//let todosLI = navegacion.querySelectorAll('li'); /*esta es otra forma de seleccionar un elemento con el nombre de este */
//for(let i = 0; i < todosLI.length; i ++){
  //  console.log(todosLI[i].innerHTML);
//}

// inner.html obtiene el contenido interno de html o permite agregar nuevos elemento a la pagina 
//navegacion.innerHTML = '<li> Nuevo elemento </li>;'   esto lo que hace es sobreescribir mi barra de navegacion al poner un =
//navegacion.innerHTML += '<li> Nuevo elemento </li>;'  pero si le agrego un += me mantiene mi barra de navegacion original y agrega el nuevo texto 

// encabezadoDeTarjeta.classList.add('extra'); aqui estoy cambiadno el color del la barra seleccionda
// encabezadoDeTarjeta.classList.remove('extra'); aqui lo estoy quitando

//let imagenPerfil = document.querySelector('.avatar-m'); esto permite realizar cambios en elementos especificos como una imagen, aqui estamos cambiando la imagen de perfil
//imagenDePerfil.src = "https://blablabla";
//imagenDePerfil.remove();


//let singOut = document.querySelector('btn');
//singOut.closest('.nav');


//.closset es un metodo que nos permite navegar hacia arriba de mi codigo el body x ejemplo



