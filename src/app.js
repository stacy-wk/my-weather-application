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

    getForecast(response.data.city);
  }
  
  function citySearch(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "30t098e0f4afod5dd6c2f41bba759bcf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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

  function formatDay(timestamp) {
      let date = new Date(timestamp * 1000);
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
      return days[date.getDay()];
    }

  function getForecast (city) {
    let apiKey = "30t098e0f4afod5dd6c2f41bba759bcf";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
  }

  function displayForecast(response) {function displayTemp(response) {
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

    getForecast(response.data.city);
  }
  
  function citySearch(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "30t098e0f4afod5dd6c2f41bba759bcf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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

  function formatDay(timestamp) {
      let date = new Date(timestamp * 1000);
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
      return days[date.getDay()];
    }

  function getForecast (city) {
    let apiKey = "30t098e0f4afod5dd6c2f41bba759bcf";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl)
    axios(apiUrl).then(displayForecast);
  }

  function displayForecast(response) {
    console.log(response)
    let forecastHtml = "";

    response.data.daily.forEach(function (day, index) {
      if (index< 7) {
        forecastHtml = 
        forecastHtml +
        `
        <div class="forecast-day">
          <div class="forecast-date">${formatDay(day.time)}</div>

          <img src="${day.condition.icon_url}" class="forecast-icon" />
          <div class="forecast-temperatures">
            <div class="max-temperature">
              <strong>${Math.round(day.temperature.maximum)}ºC</strong>
            </div>
            <div class="min-temperature">${Math.round(day.temperature.minimum)}ºC</div>
          </div>
        </div>
        `;
      }
    });

    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
  } }