const apiKey = "d26fd24f1d08cf466081800bd5bc4381";
// Lat & Lon for Cardston, Alberta, Canada
const lat = "26.0963";
const lon = "27.8077";

const apiURL = `//api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    // Checks to see if there are any alerts property
    if (!weatherInfo.hasOwnProperty("alerts")) {
      document.querySelector("#warningWrapper").style.display = "none";
    } else {
      let warning = weatherInfo.alerts[0].description;
      document.getElementById("weatherWarning").innerHTML = warning;
    }

    // Calculates temperature in Fahrenheit
    // const currentTemp = `${Math.round(weatherInfo.current.temp)}&deg;F`;

    // Calculates temperature in Celcius
    const currentTemp = `${Math.round(
      (5 / 9) * (weatherInfo.current.temp - 32)
    )}&deg;C`;

    const descr = weatherInfo.current.weather[0].description.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (letter) => letter.toUpperCase()
    );
    const humidity = `${Math.round(weatherInfo.current.humidity)}%`;

    document.getElementById("current-temp").innerHTML = currentTemp;
    document.getElementById("description").innerHTML = descr;
    document.getElementById("humidity").innerHTML = humidity;
  });

const targetDiv = document.getElementById("warningWrapper");
const btn = document.getElementById("close");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  }
};
