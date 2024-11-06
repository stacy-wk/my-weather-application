function displayTemp(response) {
    let currentTemp = document.querySelector("#city-temperature");
    let cityElement = document.querySelector("#current-city");
    let weatherConditions = document.querySelector("#weather-conditions");
    let humidity = document.querySelector("#humidity-value");
    let windValue = document.querySelector("#wind-value");
    
    currentTemp.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    weatherConditions.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    windValue.innerHTML = `${response.data.wind.speed}km/h`;
  }
  
  function citySearch(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "30t098e0f4afod5dd6c2f41bba759bcf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }

  let searchInputForm = document.querySelector("#search-form");
  searchInputForm.addEventListener("submit", citySearch);
  
  let currentDate = document.querySelector("#current-date");
  let currentTime = new Date();
  
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;
