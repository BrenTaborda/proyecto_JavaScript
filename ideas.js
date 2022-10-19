//solucion Tomás

let boton = document.getElementById("botonInicio") 
let divPrincipal = document.querySelector('#inicioApp');

  boton.addEventListener ("click", () => {
    divPrincipal.innerHTML = `<div id="mayoriaDeEdad" class="basic"><h2>¿Sos mayor de edad?</h2><button id="botonMayorSi" class="botoninicio">SI</button><button id="botonMayorNo" class="botoninicio">NO</button></div>`
  })

let botonNo = document.querySelector('#botonMayorNo')  
let divPrincipalNo = document.querySelector('#inicioApp');
  botonNo.addEventListener("click", () => {
    console.log("funciona")
    divPrincipalNo.innerHTML = `<h2>Todavía no podés beber alcohol</h2>`
  }) 

//---------------------------------------------------------------------

// let boton = document.getElementById("botonInicio") 
// let divPrincipal = document.getElementById("inicioApp");

//   boton.addEventListener ("click", () => {
//     divPrincipal.innerHTML = `<div class="basic" id="mayoriaDeEdad"><h2>¿Sos mayor de edad?</h2><button id="botonMayorSi" class="botoninicio">SI</button><button id="botonMayorNo" class="botoninicio">NO</button></div>`
//   })

// //---------

// let botonNo = document.getElementById("botonMayorNo")
// let divPrincipalNo = document.getElementById("inicioApp");
  
//   botonNo.addEventListener ("click", () => {
//     console.log("funciona")
//     divPrincipalNo.innerHTML = `<h2>Todavía no podés beber alcohol</h2>`
//   }) 


//---------------------------------------------------------------------


// let botonNo = document.getElementById("botonMayorNo")
// let divPrincipalNo = document.getElementById("mayoriaDeEdad");
  
//   botonNo.addEventListener ("click", () => {
//     divPrincipalNo.innerHTML = `<h2>Todavía no podés beber alcohol</h2>`
//   }) 

// let botonNo = document.getElementById("botonMayorNo")
// let divPrincipalNo = document.getElementById("mayoriaDeEdad");
  
//   botonNo.addEventListener ("click", () => {
//     divPrincipalNo.innerHTML = `<h2>Todavía no podés beber alcohol</h2>`
//   }) 
