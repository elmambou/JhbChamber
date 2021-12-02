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
          let telephone= document.createElement('p');
          let image = document.createElement('img');
          let email = document.createElement('p');
          let address = document.createElement('p');
          let ordinances = document.createElement('div');
          let services = document.createElement('div');
          let facilities = document.createElement('h3');
          let contact = document.createElement('h3');
          let ord = document.createElement('h3');
          let ordinanceDays = document.createElement('div');
          let openings = document.createElement('div');
          let closures = document.createElement('div');
          let history = document.createElement('div');
          let clo = document.createElement('h3');
          let histories = document.createElement('h3');
          let ord2 = document.createElement('h3');
          let ord3 = document.createElement('h3');
          let linebreak = document.createElement('br');

          name.textContent = temples[i].name;
          telephone.textContent = "Telephone Number: " + temples[i].telephone;
          email.textContent = "Email Address: " + temples[i].email;
          address.textContent = "Temple Address: " + temples[i].address;
          image.setAttribute('src', temples[i].imageurl);
          image.setAttribute('alt', "Beautiful Image of " + temples[i].name);
          facilities.textContent = "Facilities";
          contact.textContent = "Contact Information";
          ord.textContent = "Ordinances";
          ord2.textContent = "Opening Times";
          ord3.textContent = "Avaliable Days";
          clo.textContent = "Days Closed";
          histories.textContent = "Important Historical Dates";
          
          
          for (let j = 0; j < temples[i].services.length; j++){
            let service = document.createElement('p');
            service.textContent = temples[i].services[j];
            services.appendChild(service); 
         }

         for (let l = 0; l < temples[i].ordinances.length; l++) {
            let ordinance = document.createElement('p');
            ordinance.textContent = temples[i].ordinances[l];
            ordinances.appendChild(ordinance);
         }

         for (let k = 0; k < temples[i].ordinanceDays.length; k++) {
            let ordinanceDay = document.createElement('p');
            ordinanceDay.textContent = temples[i].ordinanceDays[k];
            ordinanceDays.appendChild(ordinanceDay);
         }

         for (let f = 0; f < temples[i].openingHours.length; f++) {
            let opening = document.createElement('p');
            opening.textContent = temples[i].openingHours[f];
            openings.appendChild(opening);
         }

         for (let h = 0; h < temples[i].closures.length; h++) {
            let closure = document.createElement('p');
            closure.textContent = temples[i].closures[h];
            closures.appendChild(closure);
         }

         for (let a = 0; a < temples[i].history.length; a++) {
            let hist = document.createElement('p');
            hist.textContent = temples[i].history[a];
            history.appendChild(hist);
         }

          // Adding information under section tag 
          card.appendChild(name); 
          card.appendChild(image);
          card.appendChild(contact);
          card.appendChild(telephone);
          card.appendChild(email);
          card.appendChild(address); 
          card.appendChild(ord);
          card.appendChild(ordinances);
          card.appendChild(ord2);
          card.appendChild(openings);
          card.appendChild(ord3);
          card.appendChild(ordinanceDays);
          card.appendChild(facilities);
          card.appendChild(services);
          card.appendChild(clo);
          card.appendChild(closures);
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