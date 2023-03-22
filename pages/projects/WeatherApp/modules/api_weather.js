
const d = document, n = navigator;

export default function apiWeather(locacion, pais, state){
    const $id = d.querySelector('.btn-search');

    const country = d.querySelector('.input-search');
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${locacion}&exclude=hourly,daily&units=metric&APPID=3997e2498e6179ca210b9edd90339e5e`;

        fetch(url)
        .then(res =>{return res.ok ? res.json() : Promise.reject(res)})
        .then(data =>{
          console.log(data)
          d.getElementById('country').innerHTML = `${pais}`
          d.getElementById('city').innerHTML = `${state}`
          d.getElementById('grades').innerHTML = `${Math.round(data.main.temp)} ºC`
          d.getElementById('wind').innerHTML = `${data.wind.speed} m/s`
          d.getElementById('humidity').innerHTML = `${data.main.humidity} %`
          d.getElementById('rain').innerHTML = `${data.weather[0].description}`
          
        })
        .catch(err =>{
          console.log(`Status Catch: ${err.status} - ${err.message}`)
        })

}