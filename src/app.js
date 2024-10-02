function displayTemp(response) {
    let currentTemp = document.querySelector("#city-temperature");
    currentTemp.innerHTML = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
  }
  
  function citySearch(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "30t098e0f4afod5dd6c2f41bba759bcf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);
  }
  
  let searchInputForm = document.querySelector("#search-button");
  searchInputForm.addEventListener("submit", citySearch);

  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.country;
  
  //Challenge 2
  let currentDate = document.querySelector("#current-time");
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
  