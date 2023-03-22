const d = document, n = navigator;

export default function currentWeather(){
  d.addEventListener('DOMContentLoaded', e=>{
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      
      const crd = pos.coords,
          url =`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&APPID=3997e2498e6179ca210b9edd90339e5e`;

      fetch(url)
        .then(res =>{return res.ok ? res.json() : Promise.reject(res)})
        .then(data =>{

          d.getElementById('country').innerHTML = `${data.sys.country}`
          d.getElementById('city').innerHTML = `${data.name}`
          d.getElementById('grades').innerHTML = `${Math.round(data.main.temp)} ºC`
          d.getElementById('wind').innerHTML = `${data.wind.speed} m/s`
          d.getElementById('humidity').innerHTML = `${data.main.humidity} %`
          d.getElementById('rain').innerHTML = `${data.weather[0].description}`
          
        })
        .catch(err =>{
          console.log(`Status Catch: ${err.status} - ${err.message}`)
      })
    
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    

    
    
  })
  
}
const $btnCurrent = d.getElementById('btn-current')

d.addEventListener('click', e=>{
  if(e.target === $btnCurrent){
    e.preventDefault();
    currentWeather();
  }
})