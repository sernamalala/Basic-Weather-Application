function displayWeather(response){
    console.log(response);
    let weatherValue = document.querySelector(".weather-value");
    let apiWeatherValue = Math.round(response.data.temperature.current);
    weatherValue.innerHTML = apiWeatherValue;

    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = response.data.city;

    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = response.data.temperature.humidity+"%";

    let wind = document.querySelector(".wind-value");
    wind.innerHTML = response.data.wind.speed;

    let condition = document.querySelector(".weather-condition");
    condition.innerHTML = response.data.condition.description;

    let dateText = document.querySelector(".date");
    let date = new Date (response.data.time *1000);
    dateText.innerHTML = formatDate(date);

    let iconDisplay = document.querySelector("#icon");
    let icon = `<img class="weather-icon" src="${response.data.condition.icon_url}" alt="">`;
    iconDisplay.innerHTML = icon;

    getForecast(response.data.city);
}

function formatDate(date){

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];

    
    if(minutes<10){
        minutes = `0${minutes}`;
    }
    

    if(hour<10){
        hour = `0${hour}`;
    }
    return `${day} ${hour}:${minutes}`
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


function getForecast(city){
    let apiKey = "67afdaf57o30ta1c59fb3ae425f8488b";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
    console.log(apiUrl);
}
function displayForecast(response){

    console.log(response);
    let forecast = document.querySelector("#forecast");

    let futureDays = ["Tues","Wed","Thurs","Fri","Sat"];
    let forecastHTML = "";
    for(let i = 0; i<futureDays.length; i++){
        forecastHTML = 
        forecastHTML +
`
<div class="row">
<div class="col-2">
    <div class="weather-forecast-date">${futureDays[i]}</div>
            <img 
    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" 
    alt=""/>
    <div class="weather-forecast-temperature">
        <span class="weather-forecast-temperature-max">
            18°
        </span>
        <span class="weather-forecast-temperature-min">
            12°
        </span>
    </div>
</div>
</div>

`;
    }
    forecast.innerHTML = forecastHTML;

}

searchCity("Cape Town");
displayForecast();