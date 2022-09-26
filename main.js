
function montoRegaloBlanco(){
    console.log("Opción 1: Entre $0 y $1000");
    console.log("Opción 2: Entre $1000 y $2000");
    console.log("Opción 3: Más de $2000");

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.
    
    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRegaloB1 = Number(confirm("Llevá un Miguel Minni Sauvignon Blanc"));
            document.write(`<div class="card">
            <img src="./Imagenes/regaloBlancoM1.jpg">
            <h1>Miguel Minni Sauvignon Blanc</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "2":
            let montoRegaloB2 = Number(confirm("Llevá un Matilda Semillón Bodega La Azul"));
            document.write(`<div class="card">
            <img src="./Imagenes/regaloBlancoM2.jpg">
            <h1>Matilda Semillón Bodega La Azul</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "3":
            let montoRegaloB3 = Number(confirm("Llevá un Las Perdices Sauvignon Blanc Fumé"));
            document.write(`<div class="card">
            <img src="./Imagenes/regaloBlancoM3.jpeg">
            <h1>Las Perdices Sauvignon Blanc Fumé</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function montoRegaloTinto(){
    console.log("Opción 1: Entre $0 y $1000");
    console.log("Opción 2: Entre $1000 y $2000");
    console.log("Opción 3: Más de $2000");

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRegaloT1 = Number(confirm("Llevá un Ruca Malén Malbec"));
            document.write(`<div class="card">
            <img src="./Imagenes/regaloTintoM1.jpg">
            <h1>Ruca Malén Malbec</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "2":
            let montoRegaloT2 = Number(confirm("Llevá un Pyros Appellation Syrah"));
            document.write(`<div class="card">
            <img src="./Imagenes/regaloTintoM2.jpg">
            <h1>Pyros Appellation Syrah</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "3":
            let montoRegaloT3 = Number(confirm("Llevá un Zuccardi Q Malbec"));
            document.write(`<div class="card">
            <img src="./Imagenes/regaloTintoM3.jpg">
            <h1>Zuccardi Q Malbec</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function seleccionarVariedadRegalo(){
    console.log("Opción 1: Tinto");
    console.log("Opción 2: Blanco");

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
    console.log("Opción 1: Entre $0 y $1000");
    console.log("Opción 2: Entre $1000 y $2000");
    console.log("Opción 3: Más de $2000");

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoAmigosB1 = Number(confirm("Llevá un Fond de Cave Chardonnay"));
            document.write(`<div class="card">
            <img src="./Imagenes/amigosBlancoM1.jpg">
            <h1>Fond de Cave Chardonnay</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "2":
            let montoAmigosB2 = Number(confirm("Llevá un Alamos Chardonnay"));
            document.write(`<div class="card">
            <img src="./Imagenes/amigosBlancoM2.jpg">
            <h1>Alamos Chardonnay</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "3":
            let montoAmigosB3 = Number(confirm("Llevá un Clos de Chacras Eredità Chardonnay"));
            document.write(`<div class="card">
            <img src="./Imagenes/amigosBlancoM3.jpg">
            <h1>Clos de Chacras Eredità Chardonnay</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function montoAmigosTinto(){
    console.log("Opción 1: Entre $0 y $1000");
    console.log("Opción 2: Entre $1000 y $2000");
    console.log("Opción 3: Más de $2000");

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoAmigosT1 = Number(confirm("Llevá un Santa Julia Orgánica Malbec"));
            document.write(`<div class="card">
            <img src="./Imagenes/amigosTintoM1.jpg">
            <h1>Santa Julia Orgánica Malbec</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "2":
            let montoAmigosT2 = Number(confirm("Llevá un Malbec Del Mercado - Santa Julia"));
            document.write(`<div class="card">
            <img src="./Imagenes/amigosTintoM2.jpg">
            <h1>Malbec Del Mercado - Santa Julia</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "3":
            let montoAmigosT3 = Number(confirm("Llevá un Finca Blousson de la Luna - Blend"));
            document.write(`<div class="card">
            <img src="./Imagenes/amigosTintoM3.jpg">
            <h1>Finca Blousson de la Luna - Blend</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function seleccionarVariedadAmigos(){
    console.log("Opción 1: Tinto");
    console.log("Opción 2: Blanco");

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
    console.log("Opción 1: Entre $0 y $1000");
    console.log("Opción 2: Entre $1000 y $2000");
    console.log("Opción 3: Más de $2000");

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRomanticoB1 = Number(confirm("Llevá un Sauvignon Blanc Bodega La Azul"));
            document.write(`<div class="card">
            <img src="./Imagenes/romanticoBlancoM1.jpg">
            <h1>Sauvignon Blanc Bodega La Azul</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "2":
            let montoRomanticoB2 = Number(confirm("Llevá un Mevi Chardonnay"));
            document.write(`<div class="card">
            <img src="./Imagenes/romanticoBlancoM2.jpg">
            <h1>Mevi Chardonnay</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "3":
            let montoRomanticoB3 = Number(confirm("Llevá un Clos de Chacras Chardonnay"));
            document.write(`<div class="card">
            <img src="./Imagenes/romanticoBlancoM3.jpg">
            <h1>Clos de Chacras Chardonnay</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function montoRomanticoTinto(){
    console.log("Opción 1: Entre $0 y $1000");
    console.log("Opción 2: Entre $1000 y $2000");
    console.log("Opción 3: Más de $2000");

    let op = prompt(`Elegí un rango de precios:
    1: Entre $0 y $1000
    2: Entre $1000 y $2000
    3: Más de $2000.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRomanticoT1 = Number(confirm("Llevá un Portillo Merlot"));
            document.write(`<div class="card">
            <img src="./Imagenes/romanticoTintoM1.jpg">
            <h1>Portillo Merlot</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "2":
            let montoRomanticoT2 = Number(confirm("Llevá un Laureano Gomez Terroir Pinot Noir"));
            document.write(`<div class="card">
            <img src="./Imagenes/romanticoTintoM2.jpg">
            <h1>Laureano Gomez Terroir Pinot Noir</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
        case "3":
            let montoRomanticoT3 = Number(confirm("Llevá un Costa y Pampa Pinot Noir"));
            document.write(`<div class="card">
            <img src="./Imagenes/romanticoTintoM3.jpg">
            <h1>Costa y Pampa Pinot Noir</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" class="btn btn-primary">Comprar</a>
            </div>`)
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function seleccionarVariedadRomantica(){
    console.log("Opción 1: Tinto");
    console.log("Opción 2: Blanco");

    let op = prompt(`En esta ocasión, preferís
    1: Tinto o 2: Blanco.

    Ingresá 1 o 2.`);
    switch (op) {
        case "1":
            let variedadRomanticoT = Number(confirm("Vamos a ver cuánto querés gastar"));
            montoRomanticoTinto();
            break;
        case "2":
            let variedadRomanticoB = Number(confirm("Vamos a ver cuánto querés gastar"));
            montoRomanticoBlanco();
            break;
            default:
                alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
    }
}
function seleccionarOcasion(){
    console.log("Opción 1: Cena romántica");
    console.log("Opción 2: Juntada con amigos");
    console.log("Opción 3: Para regalar");

    let op = prompt(`Elegí una ocasión:
    1: Cena romántica
    2: Juntada con amigos
    3: Para regalar.

    Ingresá 1, 2 o 3.`);
    switch (op) {
        case "1":
            let montoRomantico = Number(confirm("Vamos a ver cuál preferís"));
            seleccionarVariedadRomantica();
            break;
        case "2":
            let montoAmigo = Number(confirm("Vamos a ver cuál preferís"));
            seleccionarVariedadAmigos();
            break;
        case "3":
            let montoRegalo = Number(confirm("Vamos a ver cuál preferís"));
            seleccionarVariedadRegalo();
            break;
        default:
            alert("Ingresá una de las opciones seleccionadas. Volvé a empezar");
        }
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
/*     else{
        alert("Nos vemos pronto");
    } */
}
function iniciarRecomendacion(){
    let bienvenida = confirm("Bienvenido al Sommelier online");
    tomarDecision(bienvenida);
}
iniciarRecomendacion();