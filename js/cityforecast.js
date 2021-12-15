//current info
//const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=26.0963&lon=27.8077&?&units=imperial&appid=d26fd24f1d08cf466081800bd5bc4381"
//current info
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3898999&lon=-111.8478224&?&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
	document.getElementById('current-temp').textContent = `${JSON.parse(Math.round(jsObject.current.temp))}`;
	document.getElementById('condition').textContent = jsObject.current.weather[0].main;
    document.getElementById('humidity').textContent = `${jsObject.current.humidity}%`;
 });


 //3 day forecast
const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3898999&lon=-111.8478224&?&units=imperial&appid=9f5541804c0cbd0a629c5facccc2de31"

fetch(forecastURL)
 .then((response) => {
   if (!response.ok) {
     throw Error(response.statusText);
   } else {
     return response.json();
   }})

  .then((jsObject) => {
    const daily = [jsObject.daily[0], jsObject.daily[1], jsObject.daily[2]];
    let day = 1;    

    daily.forEach( daily => {
      let thedate = new Date(daily.dt*1000);
      const imagesrc = 'https://openweathermap.org/img/w/' + daily.weather[0].icon + '.png';
      const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

      document.querySelector(`#dayofweek${day}`).innerHTML = weekdays[thedate.getDay()];
      document.querySelector(`#icon${day}`).setAttribute('src', `${imagesrc}`);
      document.querySelector(`#icon${day}`).setAttribute('alt',`${daily.weather[0].description}`);
      document.querySelector(`#forecast${day}`).innerHTML = `${daily.temp.day.toFixed(1)}&#176; F`;
      day++;
        })
  });