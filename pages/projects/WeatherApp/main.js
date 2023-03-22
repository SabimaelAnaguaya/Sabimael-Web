import apiWeather from "./modules/api_weather.js";
import current_date from "./modules/current_date.js"
import currentWeather from "./modules/current_weather.js";
import getCountries from "./modules/get_countries.js";

document.addEventListener('DOMContentLoaded',
    current_date(),
    getCountries(),
);


currentWeather();