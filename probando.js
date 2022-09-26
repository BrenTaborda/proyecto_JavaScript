
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
            let montoRegaloB1 = Number(confirm("Llevá un López"));
            break;
        case "2":
            let montoRegaloB2 = Number(confirm("Llevá un Ojo de Perdiz"));
            break;
        case "3":
            let montoRegaloB3 = Number(confirm("Llevá un Mar del Priorat"));
            break;
            default:
                console.log("Ingresá una de las opciones seleccionadas");
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
            let montoRegaloT1 = Number(confirm("Llevá un Sanchez"));
            break;
        case "2":
            let montoRegaloT2 = Number(confirm("Llevá un Gazcón"));
            break;
        case "3":
            let montoRegaloT3 = Number(confirm("Llevá un Puro"));
            break;
            default:
                console.log("Ingresá una de las opciones seleccionadas");
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
                console.log("Volvé a empezar");
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
            let montoAmigosB1 = Number(confirm("Llevá un Termidor blanco"));
            break;
        case "2":
            let montoAmigosB2 = Number(confirm("Llevá un VinitoX blanco"));
            break;
        case "3":
            let montoAmigosB3 = Number(confirm("Llevá un Piedra Blanco"));
            break;
            default:
                console.log("Ingresá una de las opciones seleccionadas");
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
            let montoAmigosT1 = Number(confirm("Llevá un Tintillo"));
            break;
        case "2":
            let montoAmigosT2 = Number(confirm("Llevá un dada"));
            break;
        case "3":
            let montoAmigosT3 = Number(confirm("Llevá un tintoCaro"));
            break;
            default:
                console.log("Ingresá una de las opciones seleccionadas");
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
                console.log("Volvé a empezar");
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
            let montoRomanticoB1 = Number(confirm("Llevá un Talacasto"));
            break;
        case "2":
            let montoRomanticoB2 = Number(confirm("Llevá un 7 vacas"));
            break;
        case "3":
            let montoRomanticoB3 = Number(confirm("Llevá un Ojo del sol"));
            break;
            default:
                console.log("Ingresá una de las opciones seleccionadas");
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
            let montoRomanticoT1 = Number(confirm("Llevá un Termidor"));
            break;
        case "2":
            let montoRomanticoT2 = Number(confirm("Llevá un Alma Mora"));
            break;
        case "3":
            let montoRomanticoT3 = Number(confirm("Llevá un Rutini"));
            break;
            default:
                console.log("Ingresá una de las opciones seleccionadas");
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
                console.log("Volvé a empezar");
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
                console.log("Volvé a empezar");
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
    else{
        alert("Nos vemos pronto");
    }
}
function iniciarRecomendacion(){
    let bienvenida = confirm("Bienvenido al Sommelier online");
    tomarDecision(bienvenida);
}
iniciarRecomendacion();