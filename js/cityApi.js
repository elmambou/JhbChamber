// API.OPENWEATHER.ORG Today's JSON Data URL
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83287&units=imperial&appid=200cf102e64ee34534ad4bd4429e42bc"

// Fetch URL
fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {

      // Set variable to JSON data values
      let high = jsObject.main.temp_max;
      let humidity = jsObject.main.humidity;
      let windSpeed = jsObject.wind.speed;
      let currentTemp = jsObject.main.temp;

      // Setting variable to ID of same name
      let cTemp = document.querySelector('#cTemp');

      // Setting JSON value to variable + ID
      if (cTemp) {
         cTemp.textContent = currentTemp;
      }

      // Setting variable to ID of same name
      let hTemp = document.querySelector('#hTemp');

      // Setting JSON value to variable + ID
      if (hTemp) {
         hTemp.textContent = high;
      }

      // Setting variable to ID of same name
      let hum = document.querySelector('#humidity');

      // Setting JSON value to variable + ID
      if (hum) {
         hum.textContent = humidity + '%';
      }

      // Setting variable to ID of same name
      let speed = document.querySelector('#wspeed');

      // Setting JSON value to variable + ID
      if (speed) {
         speed.textContent = windSpeed;
      }

      // Revised Windchill Function including current temperature and wind speed
      function windchill (currentTemp, windSpeed)  {

      // IF-ELSE statement to determine the Wind Chill
      if( windSpeed > 3 && currentTemp <= 50) {
      
         let windchill = Math.round(35.74 + (0.6215 * currentTemp) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 * currentTemp * (Math.pow(windSpeed, 0.16))));
      
         document.getElementById("windchill").innerHTML = windchill + "&#8457;";

      }  else {
         
         document.getElementById("windchill").innerHTML = "N/A"; 
      
      }
      }

      // Calling windchill funciton with appropiate parameters
      windchill(currentTemp, windSpeed);
  });
