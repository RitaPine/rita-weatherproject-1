//In your project, when a user searches for a city (example: New York),it should display the name of the city on the result page and the current temperature of the city.
function showTemperature(response) {
  let tempOfCity = document.querySelector("#tempWeather");
  let temperatureTown = Math.round(response.data.main.temp);
  tempOfCity.innerHTML = `${temperatureTown}°`;

  let currentCity = document.querySelector("#nameOfCity");
  currentCity.innerHTML = `${response.data.name},`;

  let country = document.querySelector("#nameOfCountry");
  country.innerHTML = `${response.data.sys.country}`;

  let wind = document.querySelector("#wind");
  wind.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
}

//Bonus Feature
function showLocationTemperature(response) {
  let h4 = document.querySelector("h4");
  h4.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  let apiKey = "7e2628686c212c4bf190971af97349ff";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showLocationTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

function searchLocation(response) {
  response.preventDefault();
  let apiKey = "7e2628686c212c4bf190971af97349ff";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(showLocationTemperature);
}

function showCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let button = document.querySelector("#showcurrentPosition");
button.addEventListener("click", showCurrentPosition);
