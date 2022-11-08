//Declaración de variable para guardar la cant de objetos del filtro
let filtrados = 0;
//Función que filtra el array y asigna a filtrados
function filtrarVinos(color, ocasion, monto) {
    filtrados = todosLosVinos.filter(function(el){
        el.color === color &&
        el.ocasion === ocasion &&
        el.monto === monto
}};

console.log (filtrados);

//Declaración de variable para guardar el num del indice
let indiceFiltro = 0;
//Función que elige un vino de los filtrados
function filtrarIndice(filtrados) {
    indiceFiltro = Math.floor(Math.random()*filtrados.length)
    return divPrincipal.innerHTML = `<div class="card">
    <img src=${filtrados[indiceFiltro].foto} alt=${filtrados[indiceFiltro].vinoRecomendado}">
    <h1>${filtrados[indiceFiltro].vinoRecomendado}</h1>
    <p class="card-text">${filtrados[indiceFiltro].frase}</p>
    <a href="${filtrados[indiceFiltro].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
    </div>`
}

console.log (indiceFiltro);
//Llamamos primero a filtrar y luego al indice del filtro
filtrarVinos(tinto, romance, bajo);            
filtrarIndice(); 











/* function filtarVinos(color, ocasion, monto)
{
var vinoFiltrado = todosLosVinos.filter(function(el){
    el.color === color &&
    el.ocasion === ocasion &&
    el.monto === monto;
    Math.floor(Math.random()*todosLosVinosFiltrados.length)
    return divPrincipal.innerHTML = `<div class="card">
    <img src=${romanceTintoBajo[indiceMontoRomanceT1].foto} alt=${romanceTintoBajo[indiceMontoRomanceT1].vinoRecomendado}">
    <h1>${romanceTintoBajo[indiceMontoRomanceT1].vinoRecomendado}</h1>
    <p class="card-text">${romanceTintoBajo[indiceMontoRomanceT1].frase}</p>
    <a href="${romanceTintoBajo[indiceMontoRomanceT1].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
    </div>`
}

var color, ocasion, monto;
 
color = 3; 
ocasion = 5; 
monto = 2;
 
Suma(n1,n2,n3); */