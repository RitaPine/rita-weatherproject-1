// ⏰Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();

let h3 = document.querySelector("h3");
let date = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let currentMonth = month[now.getMonth()];

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dayOfWeek = days[now.getDay()];

h3.innerHTML = `${dayOfWeek}, ${currentMonth} ${date}, ${hour}:${min}`;

//🕵️‍♀️Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form

function newCity(event) {
  event.preventDefault();
  let searchEngin = document.querySelector("#search-text-input");
  let newCity = document.querySelector("h1");

  newCity.innerHTML = ` ${searchEngin.value}`;
}

let cityform = document.querySelector("form");
cityform.addEventListener("submit", newCity);

//new city temprature reflects

function newlocationTemp(response) {
  let tempchange = document.querySelector(".newCity");
  tempchange.innerHTML = response.data.name;
  let citytempElement = document.querySelector(".currentTemp");
  citytempElement.innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  let apiKey = "7e2628686c212c4bf190971af97349ff";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(newlocationTemp);
}

function submitedSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

let form = document.querySelector("#cityName");
form.addEventListener("submit", submitedSearch);

//location alllowed to update weather

function newlocationTemp(response) {
  let tempchange = document.querySelector(".newCity");
  tempchange.innerHTML = response.data.name;
  let citytempElement = document.querySelector(".currentTemp");
  citytempElement.innerHTML = Math.round(response.data.main.temp);
}

function showWeather(response) {
  let tempLocation = document.querySelector("h1");
  showWeather.innerHTML = tempLocation.innerHTML = response.data.name;
}

function accessLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7e2628686c212c4bf190971af97349ff";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function getCurrentPosition(response) {
  let changeTemp = document.querySelector(".newCity");
  changeTemp.innerHTML = response.data.name;
  let changeLocationTemp = document.querySelector(".currentTemp");
  changeLocationTemp = Math.round(response.data.main.temp);
}

function nameChange(response) {
  let locationTemp = document.querySelector(".currentTemp");
  nameChange.innerHTML = locationTemp.innerHTML = response.data.main.temp;
  console.log(locationTemp);
}

navigator.geolocation.getCurrentPosition(accessLocation);
