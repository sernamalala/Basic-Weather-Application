function displayWeather(response){
    console.log(response);
    let weatherValue = document.querySelector(".weather-value");
    let apiWeatherValue = Math.round(response.data.temperature.current);
    weatherValue.innerHTML = apiWeatherValue;

    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = response.data.city;
}



function searchCity(city){

    let apiKey = "67afdaf57o30ta1c59fb3ae425f8488b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);

}


function handleSearchSubmit(event){
    event.preventDefault();

    input = document.querySelector("#input-field");
    console.log(input.value);

    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = input.value;
    searchCity(input.value);
}

let searchForm= document.querySelector("#search-form");
searchForm.addEventListener("submit",handleSearchSubmit);
searchCity("Cape Town");
