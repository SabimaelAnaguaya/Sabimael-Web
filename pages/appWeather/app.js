window.addEventListener('load', () =>{
    let lan;
    let long;

    let tempValor = document.querySelector('#temp-value');
    let tempDescripcion = document.querySelector('#temp-description');

    let ubicacion = document.querySelector('#location');
    let iconoClima = document.querySelector('#icon-weather');

    let velViento = document.querySelector('#wind');



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            /* console.log(position.coords.latitude) */
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=9de497b0a16ad50a10913eb4e25c5602&units=metric`
            /* 7ca5da3b45e1967c1945c9bd2fd37b33 */
            /* console.log(url); */

            fetch(url)
                .then( response => {return response.json()})
                .then( data =>{
                    let temp = Math.round(data.main.temp)
                    tempValor.textContent = `${temp} ºC`;

                    let desc = data.weather[0].description;
                    tempDescripcion.textContent = desc.toUpperCase();

                    ubicacion.textContent = data.name;

                    switch (data.weather[0].main){
                        case 'Thunderstorm':
                          iconoClima.src='./assets/animated/thunder.svg'
                          console.log('TORMENTA');
                          break;
                        case 'Drizzle':
                          iconoClima.src='./assets/animated/rainy-2.svg'
                          console.log('LLOVIZNA');
                          break;
                        case 'Rain':
                          iconoClima.src='./assets/animated/rainy-7.svg'
                          console.log('LLUVIA');
                          break;
                        case 'Snow':
                          iconoClima.src='./assets/animated/snowy-6.svg'
                            console.log('NIEVE');
                          break;                        
                        case 'Clear':
                            iconoClima.src='./assets/animated/day.svg'
                            console.log('LIMPIO');
                          break;
                        case 'Atmosphere':
                          iconoClima.src='./assets/animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;  
                        case 'Clouds':
                            iconoClima.src='assets/animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;  
                        default:
                          iconoClima.src='./assets/animated/cloudy-day-1.svg'
                          console.log('por defecto');
                    }
                    let velocidad = data.wind.speed;
                    velViento.textContent = `${velocidad} m/s`;
                    console.log(data)
                })
                .catch(error => {
                    console.log(error);
                })
            
        })
    }
})