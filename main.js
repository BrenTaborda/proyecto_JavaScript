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
                                const indice = Math.floor(Math.random()*romanceTintoBajo.length)
                            
                              divPrincipal.innerHTML = `<div class="card">
                              <img src=${romanceTintoBajo[indice].foto} alt=${romanceTintoBajo[indice].vinoRecomendado}">
                              <h1>${romanceTintoBajo[indice].vinoRecomendado}</h1>
                              <p class="card-text">${romanceTintoBajo[indice].frase}</p>
                              <a href="${romanceTintoBajo[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                              </div>`
                            
                            
                            }) ;
                            let btnTintoCRRango2 = document.querySelector('#botonRango2RomanceTinto')  
                            btnTintoCRRango2.addEventListener("click", () => {
                              const romanceTintoMedio = todosLosVinos.filter(function(el){
                                return el.color === "tinto" &&
                                el.ocasion === "romance" &&
                                el.monto === "medio";
                              });
                              const indice = Math.floor(Math.random()*romanceTintoMedio.length)
                          
                            divPrincipal.innerHTML = `<div class="card">
                            <img src=${romanceTintoMedio[indice].foto} alt=${romanceTintoMedio[indice].vinoRecomendado}">
                            <h1>${romanceTintoMedio[indice].vinoRecomendado}</h1>
                            <p class="card-text">${romanceTintoMedio[indice].frase}</p>
                            <a href="${romanceTintoMedio[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                            </div>`
                          }) ;
                          let btnTintoCRRango3 = document.querySelector('#botonRango3RomanceTinto')  
                          btnTintoCRRango3.addEventListener("click", () => {
                            const romanceTintoAlto = todosLosVinos.filter(function(el){
                              return el.color === "tinto" &&
                              el.ocasion === "romance" &&
                              el.monto === "alto";
                            });
                            const indice = Math.floor(Math.random()*romanceTintoAlto.length);
                        
                          divPrincipal.innerHTML = `<h2>${nombredeUsuario}, con este vino, la cena es un éxito asegurado😉</h2>
                          <div class="card">
                          <img src=${romanceTintoAlto[indice].foto} alt=${romanceTintoAlto[indice].vinoRecomendado}">
                          <h1>${romanceTintoAlto[indice].vinoRecomendado}</h1>
                          <p class="card-text">${romanceTintoAlto[indice].frase}</p>
                          <a href="${romanceTintoAlto[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
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
                      const indice = Math.floor(Math.random()*romanceBlancoBajo.length)
                  
                    divPrincipal.innerHTML = `<div class="card">
                    <img src=${romanceBlancoBajo[indice].foto} alt=${romanceBlancoBajo[indice].vinoRecomendado}">
                    <h1>${romanceBlancoBajo[indice].vinoRecomendado}</h1>
                    <p class="card-text">${romanceBlancoBajo[indice].frase}</p>
                    <a href="${romanceBlancoBajo[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>`
                  }) ;
                  
                  let btnBlancoCRRango2 = document.querySelector('#botonRango2RomanceBlanco')  
                  btnBlancoCRRango2.addEventListener("click", () => {
                    const romanceBlancoMedio = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "romance" &&
                      el.monto === "medio";
                    });
                    const indice = Math.floor(Math.random()*romanceBlancoMedio.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${romanceBlancoMedio[indice].foto} alt=${romanceBlancoMedio[indice].vinoRecomendado}">
                  <h1>${romanceBlancoMedio[indice].vinoRecomendado}</h1>
                  <p class="card-text">${romanceBlancoMedio[indice].frase}</p>
                  <a href="${romanceBlancoMedio[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
          
                  let btnBlancoCRRango3 = document.querySelector('#botonRango3RomanceBlanco')  
                  btnBlancoCRRango3.addEventListener("click", () => {
                    const romanceBlancoAlto = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "romance" &&
                      el.monto === "alto";
                    });
                    const indice = Math.floor(Math.random()*romanceBlancoAlto.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${romanceBlancoAlto[indice].foto} alt=${romanceBlancoAlto[indice].vinoRecomendado}">
                  <h1>${romanceBlancoAlto[indice].vinoRecomendado}</h1>
                  <p class="card-text">${romanceBlancoAlto[indice].frase}</p>
                  <a href="${romanceBlancoAlto[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
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
                                const indice = Math.floor(Math.random()*juntadaTintoBajo.length)
                            
                              divPrincipal.innerHTML = `<div class="card">
                              <img src=${juntadaTintoBajo[indice].foto} alt=${juntadaTintoBajo[indice].vinoRecomendado}">
                              <h1>${juntadaTintoBajo[indice].vinoRecomendado}</h1>
                              <p class="card-text">${juntadaTintoBajo[indice].frase}</p>
                              <a href="${juntadaTintoBajo[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                              </div>`
                            
                            
                            }) ;
                            let btnTintoJARango2 = document.querySelector('#botonRango2JuntadaTinto')  
                            btnTintoJARango2.addEventListener("click", () => {
                              const juntadaTintoMedio = todosLosVinos.filter(function(el){
                                return el.color === "tinto" &&
                                el.ocasion === "juntada" &&
                                el.monto === "medio";
                              });
                              const indice = Math.floor(Math.random()*juntadaTintoMedio.length)
                          
                            divPrincipal.innerHTML = `<div class="card">
                            <img src=${juntadaTintoMedio[indice].foto} alt=${juntadaTintoMedio[indice].vinoRecomendado}">
                            <h1>${juntadaTintoMedio[indice].vinoRecomendado}</h1>
                            <p class="card-text">${juntadaTintoMedio[indice].frase}</p>
                            <a href="${juntadaTintoMedio[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                            </div>`
                          }) ;
                          let btnTintoJARango3 = document.querySelector('#botonRango3JuntadaTinto')  
                          btnTintoJARango3.addEventListener("click", () => {
                            const juntadaTintoAlto = todosLosVinos.filter(function(el){
                              return el.color === "tinto" &&
                              el.ocasion === "juntada" &&
                              el.monto === "alto";
                            });
                            const indice = Math.floor(Math.random()*juntadaTintoAlto.length)
                        
                          divPrincipal.innerHTML = `<div class="card">
                          <img src=${juntadaTintoAlto[indice].foto} alt=${juntadaTintoAlto[indice].vinoRecomendado}">
                          <h1>${juntadaTintoAlto[indice].vinoRecomendado}</h1>
                          <p class="card-text">${juntadaTintoAlto[indice].frase}</p>
                          <a href="${juntadaTintoAlto[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
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
                      const indice = Math.floor(Math.random()*juntadaBlancoBajo.length)
                  
                    divPrincipal.innerHTML = `<div class="card">
                    <img src=${juntadaBlancoBajo[indice].foto} alt=${juntadaBlancoBajo[indice].vinoRecomendado}">
                    <h1>${juntadaBlancoBajo[indice].vinoRecomendado}</h1>
                    <p class="card-text">${juntadaBlancoBajo[indice].frase}</p>
                    <a href="${juntadaBlancoBajo[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>`
                  }) ;
                  
                  let btnBlancoJARango2 = document.querySelector('#botonRango2JuntadaBlanco')  
                  btnBlancoJARango2.addEventListener("click", () => {
                    const juntadaBlancoMedio = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "juntada" &&
                      el.monto === "medio";
                    });
                    const indice = Math.floor(Math.random()*juntadaBlancoMedio.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${juntadaBlancoMedio[indice].foto} alt=${juntadaBlancoMedio[indice].vinoRecomendado}">
                  <h1>${juntadaBlancoMedio[indice].vinoRecomendado}</h1>
                  <p class="card-text">${juntadaBlancoMedio[indice].frase}</p>
                  <a href="${juntadaBlancoMedio[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
          
                  let btnBlancoJARango3 = document.querySelector('#botonRango3JuntadaBlanco')  
                  btnBlancoJARango3.addEventListener("click", () => {
                    const juntadaBlancoAlto = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "juntada" &&
                      el.monto === "alto";
                    });
                    const indice = Math.floor(Math.random()*juntadaBlancoAlto.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${juntadaBlancoAlto[indice].foto} alt=${juntadaBlancoAlto[indice].vinoRecomendado}">
                  <h1>${juntadaBlancoAlto[indice].vinoRecomendado}</h1>
                  <p class="card-text">${juntadaBlancoAlto[indice].frase}</p>
                  <a href="${juntadaBlancoAlto[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
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
                                const indice = Math.floor(Math.random()*regaloTintoBajo.length)
                            
                              divPrincipal.innerHTML = `<div class="card">
                              <img src=${regaloTintoBajo[indice].foto} alt=${regaloTintoBajo[indice].vinoRecomendado}">
                              <h1>${regaloTintoBajo[indice].vinoRecomendado}</h1>
                              <p class="card-text">${regaloTintoBajo[indice].frase}</p>
                              <a href="${regaloTintoBajo[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                              </div>`
                            
                            
                            }) ;
                            let btnTintoPRRango2 = document.querySelector('#botonRango2RegaloTinto')  
                            btnTintoPRRango2.addEventListener("click", () => {
                              const regaloTintoMedio = todosLosVinos.filter(function(el){
                                return el.color === "tinto" &&
                                el.ocasion === "regalar" &&
                                el.monto === "medio";
                              });
                              const indice = Math.floor(Math.random()*regaloTintoMedio.length)
                          
                            divPrincipal.innerHTML = `<div class="card">
                            <img src=${regaloTintoMedio[indice].foto} alt=${regaloTintoMedio[indice].vinoRecomendado}">
                            <h1>${regaloTintoMedio[indice].vinoRecomendado}</h1>
                            <p class="card-text">${regaloTintoMedio[indice].frase}</p>
                            <a href="${regaloTintoMedio[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                            </div>`
                          }) ;
                          let btnTintoPRRango3 = document.querySelector('#botonRango3RegaloTinto')  
                          btnTintoPRRango3.addEventListener("click", () => {
                            const regaloTintoAlto = todosLosVinos.filter(function(el){
                              return el.color === "tinto" &&
                              el.ocasion === "regalar" &&
                              el.monto === "alto";
                            });
                            const indice = Math.floor(Math.random()*regaloTintoAlto.length)
                        
                          divPrincipal.innerHTML = `<div class="card">
                          <img src=${regaloTintoAlto[indice].foto} alt=${regaloTintoAlto[indice].vinoRecomendado}">
                          <h1>${regaloTintoAlto[indice].vinoRecomendado}</h1>
                          <p class="card-text">${regaloTintoAlto[indice].frase}</p>
                          <a href="${regaloTintoAlto[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
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
                      const indice = Math.floor(Math.random()*regaloBlancoBajo.length)
                  
                    divPrincipal.innerHTML = `<div class="card">
                    <img src=${regaloBlancoBajo[indice].foto} alt=${regaloBlancoBajo[indice].vinoRecomendado}">
                    <h1>${regaloBlancoBajo[indice].vinoRecomendado}</h1>
                    <p class="card-text">${regaloBlancoBajo[indice].frase}</p>
                    <a href="${regaloBlancoBajo[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                    </div>`
                  }) ;
                  
                  let btnBlancoPRRango2 = document.querySelector('#botonRango2RegaloBlanco')  
                  btnBlancoPRRango2.addEventListener("click", () => {
                    const regaloBlancoMedio = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "regalar" &&
                      el.monto === "medio";
                    });
                    const indice = Math.floor(Math.random()*regaloBlancoMedio.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${regaloBlancoMedio[indice].foto} alt=${regaloBlancoMedio[indice].vinoRecomendado}">
                  <h1>${regaloBlancoMedio[indice].vinoRecomendado}</h1>
                  <p class="card-text">${regaloBlancoMedio[indice].frase}</p>
                  <a href="${regaloBlancoMedio[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
          
                  let btnBlancoPRRango3 = document.querySelector('#botonRango3RegaloBlanco')  
                  btnBlancoPRRango3.addEventListener("click", () => {
                    const regaloBlancoAlto = todosLosVinos.filter(function(el){
                      return el.color === "blanco" &&
                      el.ocasion === "regalar" &&
                      el.monto === "alto";
                    });
                    const indice = Math.floor(Math.random()*regaloBlancoAlto.length)
                
                  divPrincipal.innerHTML = `<div class="card">
                  <img src=${regaloBlancoAlto[indice].foto} alt=${regaloBlancoAlto[indice].vinoRecomendado}">
                  <h1>${regaloBlancoAlto[indice].vinoRecomendado}</h1>
                  <p class="card-text">${regaloBlancoAlto[indice].frase}</p>
                  <a href="${regaloBlancoAlto[indice].linkCompra}" class="btn btn-primary" target="_blank">Comprar</a>
                  </div>`
                  }) ;
                  
                  
                  }) ;
                  
                  }) ;
            }) ;
          }




})


});