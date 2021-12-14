// JSON Files
const requestURL = "https://elmambou.github.io/JhbChamber/json/directories.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){

        const directories= jsonObject['directories'];
        
        for (let i = 0; i < directories.length; i++) {
          let card = document.createElement('section');
          let name = document.createElement('h2');
          let area= document.createElement('p');
          let image = document.createElement('img');
          let location = document.createElement('p');
          let population = document.createElement('p');
          let event = document.createElement('p');
          let contact = document.createElement('h3');
          let ord = document.createElement('h3');
          let history = document.createElement('div');
          let clo = document.createElement('h3');
          let histories = document.createElement('h3');
          let ord2 = document.createElement('h3');
          let ord3 = document.createElement('h3');
          let linebreak = document.createElement('br');

          name.textContent = directories[i].name;
          area.textContent = "Area of the City: " + directories[i].area;
          location.textContent = "City Location: " + directories[i].location;
          population.textContent = "Population: " + directories[i].population;
          event.textContent = "Upcoming Events: " + directories[i].event;
          image.setAttribute('src', directories[i].imageurl);
          image.setAttribute('alt', "Beautiful Image of " + directories[i].name);
          contact.textContent = "City Information";
          histories.textContent = "Important Historical Facts";
          
          
          for (let j = 0; j < directories[i].services.length; j++){
            let service = document.createElement('p');
            service.textContent = directories[i].services[j];
            services.appendChild(service); 
         }

         for (let l = 0; l < directories[i].ordinances.length; l++) {
            let ordinance = document.createElement('p');
            ordinance.textContent = directories[i].ordinances[l];
            ordinances.appendChild(ordinance);
         }

         for (let k = 0; k < directories[i].ordinanceDays.length; k++) {
            let ordinanceDay = document.createElement('p');
            ordinanceDay.textContent = directories[i].ordinanceDays[k];
            ordinanceDays.appendChild(ordinanceDay);
         }

         for (let f = 0; f < directories[i].openingHours.length; f++) {
            let opening = document.createElement('p');
            opening.textContent = directories[i].openingHours[f];
            openings.appendChild(opening);
         }

         for (let h = 0; h < directories[i].closures.length; h++) {
            let closure = document.createElement('p');
            closure.textContent = directories[i].closures[h];
            closures.appendChild(closure);
         }

         for (let a = 0; a < directories[i].history.length; a++) {
            let hist = document.createElement('p');
            hist.textContent = directories[i].history[a];
            history.appendChild(hist);
         }


          // Adding information under section tag 
          card.appendChild(name); 
          card.appendChild(image);
          card.appendChild(contact);
          card.appendChild(area);
          card.appendChild(location); 
          card.appendChild(ord);
          card.appendChild(ord2);
          card.appendChild(ord3);
          card.appendChild(population);
          card.appendChild(clo);
          card.appendChild(event);
          card.appendChild(histories);
          card.appendChild(history);
           
          // Adding to information to card class
          document.querySelector('div.cards').appendChild(card);

         let hr = document.createElement('hr');

         const cityWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=" + directories[i].id + "&units=imperial&APPID=200cf102e64ee34534ad4bd4429e42bc";

         fetch(cityWeatherURL)
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