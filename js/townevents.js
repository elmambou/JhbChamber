// BYU-I JSON URL Link for Home Page Town Data
const requestURL ="https://byui-cit230.github.io/weather/data/towndata.json";

fetch (requestURL)
   .then (function (response) {
      return response.json();
   }) .then (function(jsonObject) {

      // Access 'towns' JSON array
      const arr = jsonObject['towns'];

/************************************************************ Preston ********************************************************/
      for (let i = 0; i < arr.length; i++) {

            // Calling for Preston JSON data
          if (arr[i].name === "Preston") {  
          
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
          p1.textContent = arr[i].events[0];
          p2.textContent = arr[i].events[1];
          p3.textContent = arr[i].events[2];  
          
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
          document.querySelector('div.cards').appendChild(card);
          }}});

