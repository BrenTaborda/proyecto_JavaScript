const btnEnviarClima = document.querySelector('#btnClima')

btnEnviarClima.addEventListener('click', () => {
    const key = "0ca063b746578ffb14d9f9455bdb165a"

    let ciudad = document.querySelector('#ciudad').value
    ciudad = encodeURIComponent(ciudad)

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`
    console.log(url)

    if (ciudad != "") {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(clima => {
                let temp = clima.main.temp
                let html = document.querySelector("#temperatura")
                let devolucionTemp = document.querySelector("#devolucionTemperatura")

                if (temp <= 10) {
                    html.innerHTML = ("Hacen " + temp.toFixed(0) + "°C.")
                    devolucionTemp.innerHTML = ("Está fresco, prendé la calefacción y disfrutá un buen vino.")
                } else if  (temp <= 25) {
                    html.innerHTML = ("Hacen " + temp.toFixed(0) + "°C.") 
                    devolucionTemp.innerHTML = ("El clima esta ideal para tomar un vino.") 
                } else {
                    html.innerHTML = ("Hacen " + temp.toFixed(0) + "°C.") 
                    devolucionTemp.innerHTML = ("Tené en cuenta que es un sacrilegio ponerle un hielo a un vino tinto 😉. Por ahí es momento de disfrutar un vino blanco fresquito.") 
                }
            })
            .catch(err => console.log(err))
    } else {
        Swal.fire("Ingresá una ciudad para mejorar la recomendación")
    }
})