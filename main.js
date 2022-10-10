function montoRegaloBlanco(){
    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.
    
    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRegaloB1 = Number;
            const galeriaMontoRegaloB1 = [
                {
                  vinoRecomendado: "Miguel Minni Sauvignon Blanc",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM1.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Familia Gascón Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM1b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Las Perdices Sauvignon Blanc",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM1c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              
              const indiceMontoRegaloB1 = Math.floor(Math.random()*galeriaMontoRegaloB1.length)
              

              document.write(`<div class="card">
              <img src=${galeriaMontoRegaloB1[indiceMontoRegaloB1].foto} alt=${galeriaMontoRegaloB1[indiceMontoRegaloB1].vinoRecomendado}">
              <h1>${galeriaMontoRegaloB1[indiceMontoRegaloB1].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRegaloB1[indiceMontoRegaloB1].frase}</p>
              <a href="${galeriaMontoRegaloB1[indiceMontoRegaloB1].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "2":
            let montoRegaloB2 = Number;

            const galeriaMontoRegaloB2 = [
                {
                  vinoRecomendado: "Matilda Semillón Bodega La Azul",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM2.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Trumpeter Clásica Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM2b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Salentein Reserve Sauvignon Blanc",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM2c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              
              const indiceMontoRegaloB2 = Math.floor(Math.random()*galeriaMontoRegaloB2.length)
              

              document.write(`<div class="card">
              <img src=${galeriaMontoRegaloB2[indiceMontoRegaloB2].foto} alt=${galeriaMontoRegaloB2[indiceMontoRegaloB2].vinoRecomendado}">
              <h1>${galeriaMontoRegaloB2[indiceMontoRegaloB2].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRegaloB2[indiceMontoRegaloB2].frase}</p>
              <a href="${galeriaMontoRegaloB2[indiceMontoRegaloB2].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "3":
            let montoRegaloB3 = Number;

            const galeriaMontoRegaloB3 = [
                {
                  vinoRecomendado: "Las Perdices Sauvignon Blanc Fumé",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM3.jpeg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Costa y Pampa Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM3b.jpeg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "El Enemigo Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloBlancoM3.jpeg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              
              const indiceMontoRegaloB3 = Math.floor(Math.random()*galeriaMontoRegaloB3.length)
              

              document.write(`<div class="card">
              <img src=${galeriaMontoRegaloB3[indiceMontoRegaloB3].foto} alt=${galeriaMontoRegaloB3[indiceMontoRegaloB3].vinoRecomendado}">
              <h1>${galeriaMontoRegaloB3[indiceMontoRegaloB3].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRegaloB3[indiceMontoRegaloB3].frase}</p>
              <a href="${galeriaMontoRegaloB3[indiceMontoRegaloB3].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar")
                montoRegaloBlanco();
    }
}
function montoRegaloTinto(){
    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRegaloT1 = Number;
            const galeriaMontoRegaloT1 = [
                {
                  vinoRecomendado: "Ruca Malén Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM1.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "El que ríe último ríe mejor - La liga de Enólogos",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM1b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "La Gran Nacha - La liga de Enólogos",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM1c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              
              const indiceMontoRegaloT1 = Math.floor(Math.random()*galeriaMontoRegaloT1.length)
              

              document.write(`<div class="card">
              <img src=${galeriaMontoRegaloT1[indiceMontoRegaloT1].foto} alt=${galeriaMontoRegaloT1[indiceMontoRegaloT1].vinoRecomendado}">
              <h1>${galeriaMontoRegaloT1[indiceMontoRegaloT1].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRegaloT1[indiceMontoRegaloT1].frase}</p>
              <a href="${galeriaMontoRegaloT1[indiceMontoRegaloT1].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "2":
            let montoRegaloT2 = Number;
            const galeriaMontoRegaloT2 = [
                {
                  vinoRecomendado: "Pyros Appellation Syrah",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM2.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Nicasia Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM2b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Luigi Bosca Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM2c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              
              const indiceMontoRegaloT2 = Math.floor(Math.random()*galeriaMontoRegaloT2.length)
              

              document.write(`<div class="card">
              <img src=${galeriaMontoRegaloT2[indiceMontoRegaloT2].foto} alt=${galeriaMontoRegaloT2[indiceMontoRegaloT2].vinoRecomendado}">
              <h1>${galeriaMontoRegaloT2[indiceMontoRegaloT2].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRegaloT2[indiceMontoRegaloT2].frase}</p>
              <a href="${galeriaMontoRegaloT2[indiceMontoRegaloT2].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "3":
            let montoRegaloT3 = Number;

            const galeriaMontoRegaloT3 = [
                {
                  vinoRecomendado: "Zuccardi Q Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM3.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Puro d'Oro - Ojo de Agua",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM3b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Hommage Malbec Carinae",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/regaloTintoM3.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              
              const indiceMontoRegaloT3 = Math.floor(Math.random()*galeriaMontoRegaloT3.length)
              

              document.write(`<div class="card">
              <img src=${galeriaMontoRegaloT3[indiceMontoRegaloT3].foto} alt=${galeriaMontoRegaloT3[indiceMontoRegaloT3].vinoRecomendado}">
              <h1>${galeriaMontoRegaloT3[indiceMontoRegaloT3].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRegaloT3[indiceMontoRegaloT3].frase}</p>
              <a href="${galeriaMontoRegaloT3[indiceMontoRegaloT3].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar")
                montoRegaloTinto();
    }
}
function seleccionarVariedadRegalo(){

    let op = prompt(`En esta ocasión, preferís
    1: Tinto o 2: Blanco.

    Ingresá 1 o 2.`);
    switch (op) {
        case "1":
            let variedadRegaloT = Number(confirm("Vamos a ver cuánto querés gastar"));
            montoRegaloTinto();
            break;
        case "2":
            let variedadRegaloB = Number(confirm("Vamos a ver cuánto querés gastar"));
            montoRegaloBlanco();
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function montoAmigosBlanco(){

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoAmigosB1 = Number;
            const galeriaMontoAmigosB1 = [
                {
                  vinoRecomendado: "Fond de Cave Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM1.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Portillo Sauvignon Blanc",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM1b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Alma Mora Reserva Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM1c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoAmigosB1 = Math.floor(Math.random()*galeriaMontoAmigosB1.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoAmigosB1[indiceMontoAmigosB1].foto} alt=${galeriaMontoAmigosB1[indiceMontoAmigosB1].vinoRecomendado}">
              <h1>${galeriaMontoAmigosB1[indiceMontoAmigosB1].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoAmigosB1[indiceMontoAmigosB1].frase}</p>
              <a href="${galeriaMontoAmigosB1[indiceMontoAmigosB1].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "2":
            let montoAmigosB2 = Number;
            const galeriaMontoAmigosB2 = [
                {
                  vinoRecomendado: "Álamos Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM2.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Paz Sauvignon Blanc",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM2b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Fond de Cave Reserva Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM2c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoAmigosB2 = Math.floor(Math.random()*galeriaMontoAmigosB2.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoAmigosB2[indiceMontoAmigosB2].foto} alt=${galeriaMontoAmigosB2[indiceMontoAmigosB2].vinoRecomendado}">
              <h1>${galeriaMontoAmigosB2[indiceMontoAmigosB2].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoAmigosB2[indiceMontoAmigosB2].frase}</p>
              <a href="${galeriaMontoAmigosB2[indiceMontoAmigosB2].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "3":
            let montoAmigosB3 = Number;
            const galeriaMontoAmigosB3 = [
                {
                  vinoRecomendado: "Clos de Chacras Eredità Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM3.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Zaha Chardonnay Bodega Tehoo",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM3b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Mosquita Muerta - Blend de Blancas",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosBlancoM3c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoAmigosB3 = Math.floor(Math.random()*galeriaMontoAmigosB3.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoAmigosB3[indiceMontoAmigosB3].foto} alt=${galeriaMontoAmigosB3[indiceMontoAmigosB3].vinoRecomendado}">
              <h1>${galeriaMontoAmigosB3[indiceMontoAmigosB3].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoAmigosB3[indiceMontoAmigosB3].frase}</p>
              <a href="${galeriaMontoAmigosB3[indiceMontoAmigosB3].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
                montoAmigosBlanco();
    }
}
function montoAmigosTinto(){

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoAmigosT1 = Number;
            const galeriaMontoAmigosT1 = [
                {
                  vinoRecomendado: "Santa Julia Orgánica Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM1.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "El Bautismo - Blend de tintas",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM1b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "La Poderosa Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM1c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoAmigosT1 = Math.floor(Math.random()*galeriaMontoAmigosT1.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoAmigosT1[indiceMontoAmigosT1].foto} alt=${galeriaMontoAmigosT1[indiceMontoAmigosT1].vinoRecomendado}">
              <h1>${galeriaMontoAmigosT1[indiceMontoAmigosT1].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoAmigosT1[indiceMontoAmigosT1].frase}</p>
              <a href="${galeriaMontoAmigosT1[indiceMontoAmigosT1].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "2":
            let montoAmigosT2 = Number;
            const galeriaMontoAmigosT2 = [
                {
                  vinoRecomendado: "Malbec Del Mercado - Santa Julia",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM2.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Riccitelli Hey Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM2b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Finca Ambrosía Luna Llena Gran Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM2c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoAmigosT2 = Math.floor(Math.random()*galeriaMontoAmigosT2.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoAmigosT2[indiceMontoAmigosT2].foto} alt=${galeriaMontoAmigosT2[indiceMontoAmigosT2].vinoRecomendado}">
              <h1>${galeriaMontoAmigosT2[indiceMontoAmigosT2].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoAmigosT2[indiceMontoAmigosT2].frase}</p>
              <a href="${galeriaMontoAmigosT2[indiceMontoAmigosT2].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "3":
            let montoAmigosT3 = Number;
            const galeriaMontoAmigosT3 = [
                {
                  vinoRecomendado: "Finca Blousson de la Luna - Blend",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM3.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "DV Catena Zapata Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM3b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Manos Negras Stone Soil Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/amigosTintoM3c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoAmigosT3 = Math.floor(Math.random()*galeriaMontoAmigosT3.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoAmigosT3[indiceMontoAmigosT3].foto} alt=${galeriaMontoAmigosT3[indiceMontoAmigosT3].vinoRecomendado}">
              <h1>${galeriaMontoAmigosT3[indiceMontoAmigosT3].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoAmigosT3[indiceMontoAmigosT3].frase}</p>
              <a href="${galeriaMontoAmigosT3[indiceMontoAmigosT3].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
                montoAmigosTinto();
    }
}
function seleccionarVariedadAmigos(){

    let op = prompt(`En esta ocasión, preferís
    1: Tinto o 2: Blanco.

    Ingresá 1 o 2.`);
    switch (op) {
        case "1":
            let variedadAmigoT = Number(confirm("Vamos a ver cuánto querés gastar"));
            montoAmigosTinto();
            break;
        case "2":
            let variedadAmigoB = Number(confirm("Vamos a ver cuánto querés gastar"));
            montoAmigosBlanco();
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function montoRomanticoBlanco(){

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRomanticoB1 = Number;

            const galeriaMontoRomanticoB1 = [
                {
                  vinoRecomendado: "Sauvignon Blanc Bodega La Azul",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM1.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Nina Gold Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM1b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Niven Criolla Argentina Blanco",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM1c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoRomanticoB1 = Math.floor(Math.random()*galeriaMontoRomanticoB1.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoRomanticoB1[indiceMontoRomanticoB1].foto} alt=${galeriaMontoRomanticoB1[indiceMontoRomanticoB1].vinoRecomendado}">
              <h1>${galeriaMontoRomanticoB1[indiceMontoRomanticoB1].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRomanticoB1[indiceMontoRomanticoB1].frase}</p>
              <a href="${galeriaMontoRomanticoB1[indiceMontoRomanticoB1].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "2":
            let montoRomanticoB2 = Number;

            const galeriaMontoRomanticoB2 = [
                {
                  vinoRecomendado: "Mevi Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM2.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Manos Negras Blend de Blancas Soil",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM2b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "La Posta Blanco White Blend",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM2c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoRomanticoB2 = Math.floor(Math.random()*galeriaMontoRomanticoB2.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoRomanticoB2[indiceMontoRomanticoB2].foto} alt=${galeriaMontoRomanticoB2[indiceMontoRomanticoB2].vinoRecomendado}">
              <h1>${galeriaMontoRomanticoB2[indiceMontoRomanticoB2].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRomanticoB2[indiceMontoRomanticoB2].frase}</p>
              <a href="${galeriaMontoRomanticoB2[indiceMontoRomanticoB2].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "3":
            let montoRomanticoB3 = Number;

            const galeriaMontoRomanticoB3 = [
                {
                  vinoRecomendado: "Clos de Chacras Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM3.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Zuccardi Serie Q Chardonnay",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM3b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Laborum Parcela Chardonnay Finca Alto Los Cuises",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoBlancoM3c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoRomanticoB3 = Math.floor(Math.random()*galeriaMontoRomanticoB3.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoRomanticoB3[indiceMontoRomanticoB3].foto} alt=${galeriaMontoRomanticoB3[indiceMontoRomanticoB3].vinoRecomendado}">
              <h1>${galeriaMontoRomanticoB3[indiceMontoRomanticoB3].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRomanticoB3[indiceMontoRomanticoB3].frase}</p>
              <a href="${galeriaMontoRomanticoB3[indiceMontoRomanticoB3].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
                montoRomanticoBlanco();
    }
}
function montoRomanticoTinto(){

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRomanticoT1 = Number;

            const galeriaMontoRomanticoT1 = [
                {
                  vinoRecomendado: "Portillo Merlot",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM1.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Criolla Argentina Tinta Bodega Niven",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM1b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Alfredo Roca Pinot Noir",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM1c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoRomanticoT1 = Math.floor(Math.random()*galeriaMontoRomanticoT1.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoRomanticoT1[indiceMontoRomanticoT1].foto} alt=${galeriaMontoRomanticoT1[indiceMontoRomanticoT1].vinoRecomendado}">
              <h1>${galeriaMontoRomanticoT1[indiceMontoRomanticoT1].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRomanticoT1[indiceMontoRomanticoT1].frase}</p>
              <a href="${galeriaMontoRomanticoT1[indiceMontoRomanticoT1].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "2":
            let montoRomanticoT2 = Number;

            const galeriaMontoRomanticoT2 = [
                {
                  vinoRecomendado: "Laureano Gomez Terroir Pinot Noir",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM2.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Tinto Negro Uco Valley Malbec",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM2b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Flores Negras Pinot Noir",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM2c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoRomanticoT2 = Math.floor(Math.random()*galeriaMontoRomanticoT2.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoRomanticoT2[indiceMontoRomanticoT2].foto} alt=${galeriaMontoRomanticoT2[indiceMontoRomanticoT2].vinoRecomendado}">
              <h1>${galeriaMontoRomanticoT2[indiceMontoRomanticoT2].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRomanticoT2[indiceMontoRomanticoT2].frase}</p>
              <a href="${galeriaMontoRomanticoT2[indiceMontoRomanticoT2].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

        case "3":
            let montoRomanticoT3 = Number;

            const galeriaMontoRomanticoT3 = [
                {
                  vinoRecomendado: "Costa y Pampa Pinot Noir",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM3.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Colomé Lote Especial Syrah",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM3b.jpg",
                  linkCompra: "http://www.google.com"
                },
                {
                  vinoRecomendado: "Vallisto Extremo Criolla",
                  frase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                  foto: "./Imagenes/romanticoTintoM3c.jpg",
                  linkCompra: "http://www.google.com"
                },
              ];
              
              const indiceMontoRomanticoT3 = Math.floor(Math.random()*galeriaMontoRomanticoT3.length)
              
              document.write(`<div class="card">
              <img src=${galeriaMontoRomanticoT3[indiceMontoRomanticoT3].foto} alt=${galeriaMontoRomanticoT3[indiceMontoRomanticoT3].vinoRecomendado}">
              <h1>${galeriaMontoRomanticoT3[indiceMontoRomanticoT3].vinoRecomendado}</h1>
              <p class="card-text">${galeriaMontoRomanticoT3[indiceMontoRomanticoT3].frase}</p>
              <a href="${galeriaMontoRomanticoT3[indiceMontoRomanticoT3].linkCompra}" class="btn btn-primary">Comprar</a>
              </div>`)

            break;

            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
                montoRomanticoTinto();
    }
}
function seleccionarVariedadRomantica(){

    let op = prompt(`En esta ocasión, preferís
    1: Tinto o 2: Blanco.

    Ingresá 1 o 2.`);
    switch (op) {
        case "1":
            let variedadRomanticoT = Number;
            montoRomanticoTinto();
            break;
        case "2":
            let variedadRomanticoB = Number;
            montoRomanticoBlanco();
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function seleccionarOcasion(){

    let op = prompt(`Elegí una ocasión:
    1: Cena romántica
    2: Juntada con amigos
    3: Para regalar.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRomantico = Number;
            seleccionarVariedadRomantica();
            break;
        case "2":
            let montoAmigo = Number;
            seleccionarVariedadAmigos();
            break;
        case "3":
            let montoRegalo = Number;
            seleccionarVariedadRegalo();
            break;
        default:
            alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");        }
}
function elegirSiNo(siNo){
    if(siNo == "si"){
        seleccionarOcasion();
    }
    else{
        alert("Entonces disfrutá tu agüita");
    }
}
function tomarDecision(bienvenida){
    if(bienvenida){
        let siNo = prompt("Querés que recomendemos un vino? Respondé SI/NO").toLowerCase();
        elegirSiNo(siNo);
    }
    else{
        alert("Nos vemos pronto");
    }
}
function iniciarRecomendacion(){
    let bienvenida = confirm("Bienvenido al Sommelier online");
    tomarDecision(bienvenida);
}
iniciarRecomendacion();