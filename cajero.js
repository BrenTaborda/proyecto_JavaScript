let saldo = 50000;

function salir(){
    alert("Fin del proceso");
}
function consultarSaldo(){
    alert("Su saldo es de " + saldo);
    seleccionarOperacion();
}
function retirarDinero(monto){
    if(monto > saldo){
        alert("Fondos insuficientes");
    }
    else{
        saldo -= monto;
    }
    seleccionarOperacion();
}
function seleccionarOperacion(){
    console.log("Opción 1: retirar dinero");
    console.log("Opción 2: consultar saldo");
    console.log("Opción 3: salir");

    let op = prompt("Ingresar opción");
    switch (op) {
        case "1":
            let monto = Number(prompt("Monto a retirar:"));
            retirarDinero(monto);
            break;
        case "2":
            consultarSaldo();
            break;
        case "3":
            salir();
            break;
            default:
                console.log("Operación invalida");
    }
}
function validarClave(clave){
    if(clave == "1234"){
        seleccionarOperacion();
    }
    else{
        alert("Clave incorrecta");
    }
}
function ingresarClave(tarjeta){
    if(tarjeta){
        let clave = prompt("Ingresar clave");
        validarClave(clave);
    }
    else{
        alert("Es necesaria una tarjeta");
    }
}
function entrarAlCajero(){
    let tarjeta = confirm("Ingrese tarjeta");
    ingresarClave(tarjeta);
}
entrarAlCajero();