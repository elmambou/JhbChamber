const requestUrl ="https://api.openweathermap.org/data/2.5/onecall?lat=26.0963&lon=27.8077&exclude=minutely,hourly&units=imperial&appid=d26fd24f1d08cf466081800bd5bc4381";

fetch(requestUrl)
  .then((response) => response.json())
  .then((jsonObject) => {
    const currentWeather = jsonObject.current;
    const dailyForecast = jsonObject.daily.slice(0, 3);
    alerts = jsonObject.alerts;

    // Update only Homepage
    if (
      location.pathname.includes("index") ||
      location.pathname.endsWith("JhbChamber/")
    ) {
      document.getElementById("desc").textContent =
        currentWeather.weather[0].description;
      document.getElementById("temp").textContent =
        currentWeather.temp + "\xB0F";

      document.getElementById("humidity").textContent = currentWeather.humidity;
      document.getElementById("windSpeed").textContent =
        currentWeather.wind_speed;
    }

    // Check for alerts
    handleAlerts();

    // Weather Forecast
    const d = new Date();

    const todayDayNumber = d.getDay();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let forecastDayNumber = todayDayNumber;

    dailyForecast.forEach((weather) => {
      forecastDayNumber += 1;
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }
      const forecastItem = document.createElement("div");
      forecastItem.classList = "forecast-item";
      const dayName = document.createElement("h4");
      dayName.textContent = weekday[forecastDayNumber];

      const iconPath =
        "//openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png";
      const icon = document.createElement("img");
      icon.src = iconPath;
      icon.alt = weather.weather[0].description;

      const temp = document.createElement("p");
      temp.textContent = weather.temp.day + "\xB0F";

      forecastItem.appendChild(dayName);
      forecastItem.appendChild(icon);
      forecastItem.appendChild(temp);

      document.querySelector(".forecast-box").appendChild(forecastItem);
    });
  });

