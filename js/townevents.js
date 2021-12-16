// BYU-I JSON URL Link for Home Page Town Data
const requestURL ="https://elmambou.github.io/JhbChamber/json/cityevents.json";

fetch (requestURL)
   .then (function (response) {
      return response.json();
   }) .then (function(jsonObject) {

      // Access 'towns' JSON array
      const towns = jsonObject['towns'];

/************************************************************ Johannesburg********************************************************/
      for (let i = 0; i < towns.length; i++) {

            // Calling for Johannesburg JSON data
          if (towns[i].name === "Johannesburg") {  
          
          // Creating different HTML tag variables
          let card = document.createElement('section');
          let h1 = document.createElement('h1');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let text = document.createElement('div');
          let linebreak = document.createElement('br'); 
          let linedash = document.createElement('hr');

          // Storing JSON data in HTML tag variables
          h1.textContent = "Upcoming Events";
          p1.textContent = towns[i].events[0];
          p2.textContent = towns[i].events[1];
          p3.textContent = towns[i].events[2];  
          
          // Creating entire content text
          text.appendChild(h1);
          text.appendChild(linebreak);
          text.appendChild(linedash);
          text.appendChild(p1);
          text.appendChild(p2);
          text.appendChild(p3);
         
          // Adding to section element
          card.appendChild(text);

          // Apply to .cards class 
          document.querySelector('div.cards1').appendChild(card);
          }}});

