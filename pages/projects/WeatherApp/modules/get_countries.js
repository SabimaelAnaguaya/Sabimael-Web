import apiWeather from "./api_weather.js";

const d = document;

export default function getCountries(){
    const $id = d.getElementById('search-countries'),
            $countryValue = d.querySelector('.input-country'), 
            $fragment = d.createDocumentFragment(),
            $btnSearch = d.getElementById('btn-search'),
            url = '../assets/data/states.json'

    fetch(url)
    .then(res =>{return res.ok ? res.json() : Promise.reject(res)})
    .then(data =>{
        data.states.forEach(el => {
            let $option = d.createElement('option');
            $option.value = `${el.nameState}, ${el.iso}`;
            $fragment.appendChild($option);
        });
        $id.appendChild($fragment);

        d.addEventListener('click', e=>{
            if(e.target === $btnSearch){
                e.preventDefault();
                data.states.forEach(el =>{
                    if(`${el.nameState}, ${el.iso}` === $countryValue.value){
                        let location = `${el.nameState},${el.iso}`;
                        apiWeather(location, el.country, el.nameState)
                    }
                })
            }
        })
    })
    .catch(err =>{$countryValue.placeholder=`Error: ${err}`})
    
}