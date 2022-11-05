const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () =>{
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');

  document.body.classList.contains('dark') ? localStorage.setItem('dark-mode', 'true') : localStorage.setItem('dark-mode', 'false')
});

localStorage.getItem('dark-mode') === 'true' ? document.body.classList.add('dark') : document.body.classList.remove('dark');

let boton = document.querySelector('#botonInicio') ;
let divPrincipal = document.querySelector('#inicioApp');

boton.addEventListener ("click", () => {
    divPrincipal.innerHTML = `<div id="mayoriaDeEdad" class="basic">
    <form id="form" class="formUser" action="">
              <h2>¿Cómo te llamás?</h2>
              <label class="labelUser">
                  <i class="fa-solid fa-user"></i>
                  <input placeholder="Ingresá tu nombre" type="text" id="username">
              </label>
              <button class="botonUser" id="botonUser">Guardar nombre</button>
    </form>

    </div>`

const username = document.getElementById('username')
const botonUser = document.getElementById('botonUser')

botonUser.addEventListener('click', (e) =>{
    e.preventDefault()
    const dataName ={
      username: username.value
    }

    const dataNameEnJSON = JSON.stringify(dataName);

    localStorage.setItem("dataName", dataNameEnJSON);
    const devolucionNombre = JSON.parse(dataNameEnJSON)

    const nombredeUsuario = devolucionNombre.username

          if(nombredeUsuario === ""){
          `<div id="mayoriaDeEdad" class="basic">
            <h2>TENES QUE INGRESAR UN NOMBRE</h2>
            <form id="form" class="formUser" action="">
              <h2>¿Cómo te llamás?</h2>
              <label class="labelUser">
                  <i class="fa-solid fa-user"></i>
                  <input placeholder="Ingresá tu nombre" type="text" id="username">
              </label>
              <button class="botonUser" id="botonUser">Guardar nombre</button>
            </form>
          </div>`;
          } else {
            divPrincipal.innerHTML = `<div id="mayoriaDeEdad" class="basic">
            <h2>Hola ${nombredeUsuario}</h2>
            <h2>¿Sos mayor de edad?</h2>
            <div class="siNo">
              <button id="botonMayorSi" class="botoninicio">SI</button>
              <button id="botonMayorNo" class="botoninicio">NO</button>
            </div>
            </div>`;


            let botonNo = document.querySelector('#botonMayorNo')  
            botonNo.addEventListener("click", () => {
              divPrincipal.innerHTML = `
              <h2>Lo siento ${nombredeUsuario},</h2>
              <h2>todavía no podés beber alcohol.
              Te dejo un enlace para ver recetas de tragos sin alcohol</h2>
              <button onclick=" window.open('https://www.thebeertimes.com/recetas-de-cocteles-sin-alcohol-mocktails/','_blank')" class="botoninicio" title="Clickeá aquí" >Clickeá aquí</button>`
            }) ;
          
            let botonSi = document.querySelector('#botonMayorSi')  
          
            botonSi.addEventListener("click", () => {
              divPrincipal.innerHTML = `<h2>Sommelier de Barrio te va a dar una recomendación personalizada. Elegí una ocasión:</h2>
              <button id="botonCenaRomantica" class="botoninicio">Cena romántica</button>
              <button id="botonJuntadaAmigos" class="botoninicio">Juntada con amigos</button>
              <button id="botonParaRegalar" class="botoninicio">Para regalar</button></div>`
            
                  let btnCenaRomantica = document.querySelector('#botonCenaRomantica')  
                  btnCenaRomantica.addEventListener("click", () => {
                  divPrincipal.innerHTML = `<h2>En esta ocasión preferís:</h2>
                  <button id="botonTintoCR" class="botoninicio">Tinto</button>
                  <button id="botonBlancoCR" class="botoninicio">Blanco</button>`
          
                    let btnTintoCR = document.querySelector('#botonTintoCR')  
                    btnTintoCR.addEventListener("click", () => {
                    divPrincipal.innerHTML = `<h2>Elegí un rango de precios:</h2>
                    <button id="botonRango1RomanceTinto" class="botoninicio">Hasta $1000</button>
                    <button id="botonRango2RomanceTinto" class="botoninicio">Entre $1000 y $2000</button>
                    <button id="botonRango3RomanceTinto" class="botoninicio">Más de $2000</button>`
          
                              let btnTintoCRRango1 = document.querySelector('#botonRango1RomanceTinto')  
                              btnTintoCRRango1.addEventListener("click", () => {
                                const romanceTintoBajo = todosLosVinos.filter(function(el){
                                  return el.color === "tinto" &&
                                  el.ocasion === "romance" &&
                                  el.monto === "bajo";
                                });
                                const indiceMontoRomanceT1 = Math.floor(Math.random()*romanceTintoBajo.length)
                            
                              divPrincipal.innerHTML = `<div class="card">
                              <img src=${romanceTintoBajo[indiceMontoRomanceT1].foto} alt=${romanceTintoBajo[indiceMontoRomanceT1].vinoRecomendado}">
                              <h1>${romanceTintoBajo[indiceMontoRomanceT1].vinoRecomendado}</h1>
                              <p class="card-text">${romanceTintoBajo[indiceMontoRomanceT1].frase}</p>
                              <a href="${romanceTintoBajo[indiceMontoRomanceT1].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                              </div>`
                            
                            
                            }) ;
                            let btnTintoCRRango2 = document.querySelector('#botonRango2RomanceTinto')  
                            btnTintoCRRango2.addEventListener("click", () => {
                              const romanceTintoMedio = todosLosVinos.filter(function(el){
                                return el.color === "tinto" &&
                                el.ocasion === "romance" &&
                                el.monto === "medio";
                              });
                              const indiceMontoRomanceT2 = Math.floor(Math.random()*romanceTintoMedio.length)
                          
                            divPrincipal.innerHTML = `<div class="card">
                            <img src=${romanceTintoMedio[indiceMontoRomanceT2].foto} alt=${romanceTintoMedio[indiceMontoRomanceT2].vinoRecomendado}">
                            <h1>${romanceTintoMedio[indiceMontoRomanceT2].vinoRecomendado}</h1>
                            <p class="card-text">${romanceTintoMedio[indiceMontoRomanceT2].frase}</p>
                            <a href="${romanceTintoMedio[indiceMontoRomanceT2].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                            </div>`
                          }) ;
                          let btnTintoCRRango3 = document.querySelector('#botonRango3RomanceTinto')  
                          btnTintoCRRango3.addEventListener("click", () => {
                            const romanceTintoAlto = todosLosVinos.filter(function(el){
                              return el.color === "tinto" &&
                              el.ocasion === "romance" &&
                              el.monto === "alto";
                            });
                            const indiceMontoRomanceT3 = Math.floor(Math.random()*romanceTintoAlto.length);
                        
                          divPrincipal.innerHTML = `<h2>${nombredeUsuario}, con este vino, la cena es un éxito asegurado😉</h2>
                          <div class="card">
                          <img src=${romanceTintoAlto[indiceMontoRomanceT3].foto} alt=${romanceTintoAlto[indiceMontoRomanceT3].vinoRecomendado}">
                          <h1>${romanceTintoAlto[indiceMontoRomanceT3].vinoRecomendado}</h1>
                          <p class="card-text">${romanceTintoAlto[indiceMontoRomanceT3].frase}</p>
                          <a href="${romanceTintoAlto[indiceMontoRomanceT3].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                          </div>`
          
                        }) ;
          
                    sessionStorage.setItem('color','tinto')
                     let recuperoColor = sessionStorage.getItem('color')
          
                    if(recuperoColor === 'tinto'){
                      Swal.fire("Para una cena realmente especial, tené en cuenta que los vinos tintos maridan bien con carnes rojas")}
                    
                    
                    }) ;
                    let btnBlancoCR = document.querySelector('#botonBlancoCR')  
                    btnBlancoCR.addEventListener("click", () => {
                    divPrincipal.innerHTML = `<h2>Elegí un rango de precios:</h2>
                    <button id="botonRango1RomanceBlanco" class="botoninicio">Hasta $1000</button>
                    <button id="botonRango2RomanceBlanco" class="botoninicio">Entre $1000 y $2000</button>
                    <button id="botonRango3RomanceBlanco" class="botoninicio">Más de $2000</button>`
                  
                    let btnBlancoCRRango1 = document.querySelector('#botonRango1RomanceBlanco')  
                    btnBlancoCRRango1.addEventListener("click", () => {
                      const romanceBlancoBajo = todosLosVinos.filter(function(el){
                        return el.color === "blanco" &&
                        el.ocasion === "romance" &&
                        el.monto === "bajo";
                      });
                      const indiceMontoRomanceB1 = Math.floor(Math.random()*romanceBlancoBajo.length)
                  
                    divPrincipal.innerHTML = `<div class="card">
                    <img src=${romanceBlancoBajo[indiceMontoRomanceB1].foto} alt=${romanceBlancoBajo[indiceMontoRomanceB1].vinoRecomendado}">
                    <h1>${romanceBlancoBajo[indiceMontoRomanceB1].vinoRecomendado}</h1>
                    <p class="card-text">${romanceBlancoBajo[indiceMontoRomanceB1].frase}</p>
                    <a href="${romanceBlancoBajo[indiceMontoRomanceB1].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>`
                  }) ;
                  
                  let btnBlancoCRRango2 = document.querySelector('#botonRango2RomanceBlanco')  
                  btnBlancoCRRango2.addEventListener("click", () => {
                    const romanceBlancoMedio = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "romance" &&
                      el.monto === "medio";
                    });
                    const indiceMontoRomanceB2 = Math.floor(Math.random()*romanceBlancoMedio.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${romanceBlancoMedio[indiceMontoRomanceB2].foto} alt=${romanceBlancoMedio[indiceMontoRomanceB2].vinoRecomendado}">
                  <h1>${romanceBlancoMedio[indiceMontoRomanceB2].vinoRecomendado}</h1>
                  <p class="card-text">${romanceBlancoMedio[indiceMontoRomanceB2].frase}</p>
                  <a href="${romanceBlancoMedio[indiceMontoRomanceB2].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
          
                  let btnBlancoCRRango3 = document.querySelector('#botonRango3RomanceBlanco')  
                  btnBlancoCRRango3.addEventListener("click", () => {
                    const romanceBlancoAlto = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "romance" &&
                      el.monto === "alto";
                    });
                    const indiceMontoRomanceB3 = Math.floor(Math.random()*romanceBlancoAlto.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${romanceBlancoAlto[indiceMontoRomanceB3].foto} alt=${romanceBlancoAlto[indiceMontoRomanceB3].vinoRecomendado}">
                  <h1>${romanceBlancoAlto[indiceMontoRomanceB3].vinoRecomendado}</h1>
                  <p class="card-text">${romanceBlancoAlto[indiceMontoRomanceB3].frase}</p>
                  <a href="${romanceBlancoAlto[indiceMontoRomanceB3].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
                  
                  sessionStorage.setItem('color','blanco')
                   let recupero = sessionStorage.getItem('color')
          
                  recupero === 'blanco' && Swal.fire("Los vinos blancos maridan bien con pescados. Los mariscos son una buena opción para una cena romántica 😉")
                }) ;
                
                }) ;
          
                  let btnJuntadaAmigos = document.querySelector('#botonJuntadaAmigos')  
                  btnJuntadaAmigos.addEventListener("click", () => {
                  divPrincipal.innerHTML = `<h2>En esta ocasión preferís:</h2>
                  <button id="botonTintoJA" class="botoninicio">Tinto</button>
                  <button id="botonBlancoJA" class="botoninicio">Blanco</button>`
          
                    let btnTintoJA = document.querySelector('#botonTintoJA')  
                    btnTintoJA.addEventListener("click", () => {
                    divPrincipal.innerHTML = `<h2>Elegí un rango de precios:</h2>
                    <button id="botonRango1JuntadaTinto" class="botoninicio">Hasta $1000</button>
                    <button id="botonRango2JuntadaTinto" class="botoninicio">Entre $1000 y $2000</button>
                    <button id="botonRango3JuntadaTinto" class="botoninicio">Más de $2000</button>`
          
                              let btnTintoJARango1 = document.querySelector('#botonRango1JuntadaTinto')  
                              btnTintoJARango1.addEventListener("click", () => {
                                const juntadaTintoBajo = todosLosVinos.filter(function(el){
                                  return el.color === "tinto" &&
                                  el.ocasion === "juntada" &&
                                  el.monto === "bajo";
                                });
                                const indiceMontoJuntadaT1 = Math.floor(Math.random()*juntadaTintoBajo.length)
                            
                              divPrincipal.innerHTML = `<div class="card">
                              <img src=${juntadaTintoBajo[indiceMontoJuntadaT1].foto} alt=${juntadaTintoBajo[indiceMontoJuntadaT1].vinoRecomendado}">
                              <h1>${juntadaTintoBajo[indiceMontoJuntadaT1].vinoRecomendado}</h1>
                              <p class="card-text">${juntadaTintoBajo[indiceMontoJuntadaT1].frase}</p>
                              <a href="${juntadaTintoBajo[indiceMontoJuntadaT1].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                              </div>`
                            
                            
                            }) ;
                            let btnTintoJARango2 = document.querySelector('#botonRango2JuntadaTinto')  
                            btnTintoJARango2.addEventListener("click", () => {
                              const juntadaTintoMedio = todosLosVinos.filter(function(el){
                                return el.color === "tinto" &&
                                el.ocasion === "juntada" &&
                                el.monto === "medio";
                              });
                              const indiceMontoJuntadaT2 = Math.floor(Math.random()*juntadaTintoMedio.length)
                          
                            divPrincipal.innerHTML = `<div class="card">
                            <img src=${juntadaTintoMedio[indiceMontoJuntadaT2].foto} alt=${juntadaTintoMedio[indiceMontoJuntadaT2].vinoRecomendado}">
                            <h1>${juntadaTintoMedio[indiceMontoJuntadaT2].vinoRecomendado}</h1>
                            <p class="card-text">${juntadaTintoMedio[indiceMontoJuntadaT2].frase}</p>
                            <a href="${juntadaTintoMedio[indiceMontoJuntadaT2].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                            </div>`
                          }) ;
                          let btnTintoJARango3 = document.querySelector('#botonRango3JuntadaTinto')  
                          btnTintoJARango3.addEventListener("click", () => {
                            const juntadaTintoAlto = todosLosVinos.filter(function(el){
                              return el.color === "tinto" &&
                              el.ocasion === "juntada" &&
                              el.monto === "alto";
                            });
                            const indiceMontoJuntadaT3 = Math.floor(Math.random()*juntadaTintoAlto.length)
                        
                          divPrincipal.innerHTML = `<div class="card">
                          <img src=${juntadaTintoAlto[indiceMontoJuntadaT3].foto} alt=${juntadaTintoAlto[indiceMontoJuntadaT3].vinoRecomendado}">
                          <h1>${juntadaTintoAlto[indiceMontoJuntadaT3].vinoRecomendado}</h1>
                          <p class="card-text">${juntadaTintoAlto[indiceMontoJuntadaT3].frase}</p>
                          <a href="${juntadaTintoAlto[indiceMontoJuntadaT3].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                          </div>`
                        }) ;
          }) ;
                    let btnBlancoJA = document.querySelector('#botonBlancoJA')  
                    btnBlancoJA.addEventListener("click", () => {
                    divPrincipal.innerHTML = `<h2>Elegí un rango de precios:</h2>
                    <button id="botonRango1JuntadaBlanco" class="botoninicio">Hasta $1000</button>
                    <button id="botonRango2JuntadaBlanco" class="botoninicio">Entre $1000 y $2000</button>
                    <button id="botonRango3JuntadaBlanco" class="botoninicio">Más de $2000</button>`
                  
                    let btnBlancoJARango1 = document.querySelector('#botonRango1JuntadaBlanco')  
                    btnBlancoJARango1.addEventListener("click", () => {
                      const juntadaBlancoBajo = todosLosVinos.filter(function(el){
                        return el.color === "blanco" &&
                        el.ocasion === "juntada" &&
                        el.monto === "bajo";
                      });
                      const indiceMontoJuntadaB1 = Math.floor(Math.random()*juntadaBlancoBajo.length)
                  
                    divPrincipal.innerHTML = `<div class="card">
                    <img src=${juntadaBlancoBajo[indiceMontoJuntadaB1].foto} alt=${juntadaBlancoBajo[indiceMontoJuntadaB1].vinoRecomendado}">
                    <h1>${juntadaBlancoBajo[indiceMontoJuntadaB1].vinoRecomendado}</h1>
                    <p class="card-text">${juntadaBlancoBajo[indiceMontoJuntadaB1].frase}</p>
                    <a href="${juntadaBlancoBajo[indiceMontoJuntadaB1].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>`
                  }) ;
                  
                  let btnBlancoJARango2 = document.querySelector('#botonRango2JuntadaBlanco')  
                  btnBlancoJARango2.addEventListener("click", () => {
                    const juntadaBlancoMedio = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "juntada" &&
                      el.monto === "medio";
                    });
                    const indiceMontoJuntadaB2 = Math.floor(Math.random()*juntadaBlancoMedio.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${juntadaBlancoMedio[indiceMontoJuntadaB2].foto} alt=${juntadaBlancoMedio[indiceMontoJuntadaB2].vinoRecomendado}">
                  <h1>${juntadaBlancoMedio[indiceMontoJuntadaB2].vinoRecomendado}</h1>
                  <p class="card-text">${juntadaBlancoMedio[indiceMontoJuntadaB2].frase}</p>
                  <a href="${juntadaBlancoMedio[indiceMontoJuntadaB2].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
          
                  let btnBlancoJARango3 = document.querySelector('#botonRango3JuntadaBlanco')  
                  btnBlancoJARango3.addEventListener("click", () => {
                    const juntadaBlancoAlto = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "juntada" &&
                      el.monto === "alto";
                    });
                    const indiceMontoJuntadaB3 = Math.floor(Math.random()*juntadaBlancoAlto.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${juntadaBlancoAlto[indiceMontoJuntadaB3].foto} alt=${juntadaBlancoAlto[indiceMontoJuntadaB3].vinoRecomendado}">
                  <h1>${juntadaBlancoAlto[indiceMontoJuntadaB3].vinoRecomendado}</h1>
                  <p class="card-text">${juntadaBlancoAlto[indiceMontoJuntadaB3].frase}</p>
                  <a href="${juntadaBlancoAlto[indiceMontoJuntadaB3].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
                  
                  
                  }) ;
                  
                  }) ;
          
                  let btnParaRegalar = document.querySelector('#botonParaRegalar')  
                  btnParaRegalar.addEventListener("click", () => {
                  divPrincipal.innerHTML = `<h2>En esta ocasión preferís:</h2>
                  <button id="botonTintoPR" class="botoninicio">Tinto</button>
                  <button id="botonBlancoPR" class="botoninicio">Blanco</button>`

                  sessionStorage.setItem('para','hacerUnRegalo')
                   let recupero = sessionStorage.getItem('para')
          
                  recupero === 'hacerUnRegalo' && Swal.fire("Una botella de vino no es un regalo más; el vino es una bebida con la que se dicen muchas cosas al mismo tiempo. Con estas sugerencias no podés fallar.")
          
                    let btnTintoPR = document.querySelector('#botonTintoPR')  
                    btnTintoPR.addEventListener("click", () => {
                    divPrincipal.innerHTML = `<h2>Elegí un rango de precios:</h2>
                    <button id="botonRango1RegaloTinto" class="botoninicio">Hasta $1000</button>
                    <button id="botonRango2RegaloTinto" class="botoninicio">Entre $1000 y $2000</button>
                    <button id="botonRango3RegaloTinto" class="botoninicio">Más de $2000</button>`
          
                              let btnTintoPRRango1 = document.querySelector('#botonRango1RegaloTinto')  
                              btnTintoPRRango1.addEventListener("click", () => {
                                const regaloTintoBajo = todosLosVinos.filter(function(el){
                                  return el.color === "tinto" &&
                                  el.ocasion === "regalar" &&
                                  el.monto === "bajo";
                                });
                                const indiceMontoRegaloT1 = Math.floor(Math.random()*regaloTintoBajo.length)
                            
                              divPrincipal.innerHTML = `<div class="card">
                              <img src=${regaloTintoBajo[indiceMontoRegaloT1].foto} alt=${regaloTintoBajo[indiceMontoRegaloT1].vinoRecomendado}">
                              <h1>${regaloTintoBajo[indiceMontoRegaloT1].vinoRecomendado}</h1>
                              <p class="card-text">${regaloTintoBajo[indiceMontoRegaloT1].frase}</p>
                              <a href="${regaloTintoBajo[indiceMontoRegaloT1].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                              </div>`
                            
                            
                            }) ;
                            let btnTintoPRRango2 = document.querySelector('#botonRango2RegaloTinto')  
                            btnTintoPRRango2.addEventListener("click", () => {
                              const regaloTintoMedio = todosLosVinos.filter(function(el){
                                return el.color === "tinto" &&
                                el.ocasion === "regalar" &&
                                el.monto === "medio";
                              });
                              const indiceMontoRegaloT2 = Math.floor(Math.random()*regaloTintoMedio.length)
                          
                            divPrincipal.innerHTML = `<div class="card">
                            <img src=${regaloTintoMedio[indiceMontoRegaloT2].foto} alt=${regaloTintoMedio[indiceMontoRegaloT2].vinoRecomendado}">
                            <h1>${regaloTintoMedio[indiceMontoRegaloT2].vinoRecomendado}</h1>
                            <p class="card-text">${regaloTintoMedio[indiceMontoRegaloT2].frase}</p>
                            <a href="${regaloTintoMedio[indiceMontoRegaloT2].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                            </div>`
                          }) ;
                          let btnTintoPRRango3 = document.querySelector('#botonRango3RegaloTinto')  
                          btnTintoPRRango3.addEventListener("click", () => {
                            const regaloTintoAlto = todosLosVinos.filter(function(el){
                              return el.color === "tinto" &&
                              el.ocasion === "regalar" &&
                              el.monto === "alto";
                            });
                            const indiceMontoRegaloT3 = Math.floor(Math.random()*regaloTintoAlto.length)
                        
                          divPrincipal.innerHTML = `<div class="card">
                          <img src=${regaloTintoAlto[indiceMontoRegaloT3].foto} alt=${regaloTintoAlto[indiceMontoRegaloT3].vinoRecomendado}">
                          <h1>${regaloTintoAlto[indiceMontoRegaloT3].vinoRecomendado}</h1>
                          <p class="card-text">${regaloTintoAlto[indiceMontoRegaloT3].frase}</p>
                          <a href="${regaloTintoAlto[indiceMontoRegaloT3].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                          </div>`
                        }) ;
          }) ;
                    let btnBlancoPR = document.querySelector('#botonBlancoPR')  
                    btnBlancoPR.addEventListener("click", () => {
                    divPrincipal.innerHTML = `<h2>Elegí un rango de precios:</h2>
                    <button id="botonRango1RegaloBlanco" class="botoninicio">Hasta $1000</button>
                    <button id="botonRango2RegaloBlanco" class="botoninicio">Entre $1000 y $2000</button>
                    <button id="botonRango3RegaloBlanco" class="botoninicio">Más de $2000</button>`
                  
                    let btnBlancoPRRango1 = document.querySelector('#botonRango1RegaloBlanco')  
                    btnBlancoPRRango1.addEventListener("click", () => {
                      const regaloBlancoBajo = todosLosVinos.filter(function(el){
                        return el.color === "blanco" &&
                        el.ocasion === "regalar" &&
                        el.monto === "bajo";
                      });
                      const indiceMontoRegaloB1 = Math.floor(Math.random()*regaloBlancoBajo.length)
                  
                    divPrincipal.innerHTML = `<div class="card">
                    <img src=${regaloBlancoBajo[indiceMontoRegaloB1].foto} alt=${regaloBlancoBajo[indiceMontoRegaloB1].vinoRecomendado}">
                    <h1>${regaloBlancoBajo[indiceMontoRegaloB1].vinoRecomendado}</h1>
                    <p class="card-text">${regaloBlancoBajo[indiceMontoRegaloB1].frase}</p>
                    <a href="${regaloBlancoBajo[indiceMontoRegaloB1].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>`
                  }) ;
                  
                  let btnBlancoPRRango2 = document.querySelector('#botonRango2RegaloBlanco')  
                  btnBlancoPRRango2.addEventListener("click", () => {
                    const regaloBlancoMedio = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "regalar" &&
                      el.monto === "medio";
                    });
                    const indiceMontoRegaloB2 = Math.floor(Math.random()*regaloBlancoMedio.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${regaloBlancoMedio[indiceMontoRegaloB2].foto} alt=${regaloBlancoMedio[indiceMontoRegaloB2].vinoRecomendado}">
                  <h1>${regaloBlancoMedio[indiceMontoRegaloB2].vinoRecomendado}</h1>
                  <p class="card-text">${regaloBlancoMedio[indiceMontoRegaloB2].frase}</p>
                  <a href="${regaloBlancoMedio[indiceMontoRegaloB2].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
          
                  let btnBlancoPRRango3 = document.querySelector('#botonRango3RegaloBlanco')  
                  btnBlancoPRRango3.addEventListener("click", () => {
                    const regaloBlancoAlto = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "regalar" &&
                      el.monto === "alto";
                    });
                    const indiceMontoRegaloB3 = Math.floor(Math.random()*regaloBlancoAlto.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${regaloBlancoAlto[indiceMontoRegaloB3].foto} alt=${regaloBlancoAlto[indiceMontoRegaloB3].vinoRecomendado}">
                  <h1>${regaloBlancoAlto[indiceMontoRegaloB3].vinoRecomendado}</h1>
                  <p class="card-text">${regaloBlancoAlto[indiceMontoRegaloB3].frase}</p>
                  <a href="${regaloBlancoAlto[indiceMontoRegaloB3].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
                  
                  
                  }) ;
                  
                  }) ;
            }) ;
          }




})






});