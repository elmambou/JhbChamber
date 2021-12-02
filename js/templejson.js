// JSON Files
const requestURL = "https://elmambou.github.io/JhbChamber/json/temples.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){

        const temples = jsonObject['temples'];
        
        for (let i = 0; i < temples.length; i++) {
          let card = document.createElement('section');
          let name = document.createElement('h2');
          let area= document.createElement('p');
          let image = document.createElement('img');
          let location = document.createElement('p');
          let population = document.createElement('p');
          let contact = document.createElement('h3');
          let ord = document.createElement('h3');
          let event = document.createElement('div');
          let events = document.createElement('h3');
          let ord1 = document.createElement('h3')
          let history = document.createElement('div');
          let clo = document.createElement('h3');
          let histories = document.createElement('h3');
          let ord2 = document.createElement('h3');
          let ord3 = document.createElement('h3');
          let linebreak = document.createElement('br');

          name.textContent = temples[i].name;
          area.textContent = "Area of the City: " + temples[i].area;
          location.textContent = "City Location: " + temples[i].location;
          population.textContent = "population" + temples[i].population;
          image.setAttribute('src', temples[i].imageurl);
          image.setAttribute('alt', "Beautiful Image of " + temples[i].name);
          contact.textContent = "City Information";
          histories.textContent = "Important Historical Facts";
          events.textContent = "Upcoming Events";
          
          
          for (let a = 0; a < temples[i].history.length; a++) {
            let hist = document.createElement('p');
            hist.textContent = temples[i].history[a];
            history.appendChild(hist);
         }

          // Adding information under section tag 
          card.appendChild(name); 
          card.appendChild(image);
          card.appendChild(contact);
          card.appendChild(event);
          card.appendChild(events);
          card.appendChild(area);
          card.appendChild(location); 
          card.appendChild(ord);
          card.appendChild(ord2);
          card.appendChild(ord3);
          card.appendChild(population);
          card.appendChild(clo);
          card.appendChild(histories);
          card.appendChild(history);
           
          // Adding to information to card class
          document.querySelector('div.cards').appendChild(card);

         let hr = document.createElement('hr');

         const templeWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=" + temples[i].id + "&units=imperial&APPID=200cf102e64ee34534ad4bd4429e42bc";

         fetch(templeWeatherURL)
         .then((response) => response.json())
         .then((jsObject) => {

         // Set variable to JSON data values
      let high = Math.floor(jsObject.main.temp_max);
      let humidity = jsObject.main.humidity;
      let windSpeed = Math.floor(jsObject.wind.speed);
      let currentTemp = Math.floor(jsObject.main.temp);
      let wsum = document.createElement('div');
      let highTemp = document.createElement('p');
      let hum = document.createElement('p');
      let speedOfWind = document.createElement('p');
      let tempOfCurrentTimes = document.createElement('p');
      let wsumTitle = document.createElement('h3');

      highTemp.innerHTML = "High: " + high + '&degF';
      hum.textContent = "Humidity: " + humidity + "%";
      tempOfCurrentTimes.innerHTML = "Current: " + currentTemp + '&degF';
      speedOfWind.textContent = "Wind Speed: " + windSpeed + "mph";
      wsumTitle.textContent = "Weather Summary";

      wsum.appendChild(highTemp);
      wsum.appendChild(hum);
      wsum.appendChild(tempOfCurrentTimes);
      wsum.appendChild(speedOfWind);
      card.appendChild(wsumTitle);
      card.appendChild(wsum);
      card.appendChild(linebreak);
      card.appendChild(hr);

      })}});