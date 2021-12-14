// JSON Files
const requestURL = "https://elmambou.github.io/JhbChamber/json/directories.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){

        const directories = jsonObject['directories'];
        
        for (let i = 0; i < directories.length; i++) {
          let card = document.createElement('section');
          let name = document.createElement('h2');
          let image = document.createElement('img');
          let location = document.createElement('p');
          let address = document.createElement('p');
 
          let telephone = document.createElement('h3');
          let ord = document.createElement('h3');
          let postaladdress = document.createElement('div');


          let ord2 = document.createElement('h3');
          let ord3 = document.createElement('h3');
          let linebreak = document.createElement('br');

          name.textContent = directories[i].name;
          area.textContent = "Area of the City: " + directories[i].area;
          location.textContent = "City Location: " + directories[i].location;
          address.textContent = "Population: " + directories[i].address;

          image.setAttribute('src', directories[i].imageurl);
          image.setAttribute('alt', "Beautiful Image of " + directories[i].name);
          telephone.textContent = "Business Information";
    
          
          
          
          for (let a = 0; a < directories[i].postaladdress.length; a++) {
            let hist = document.createElement('p');
            hist.textContent = directories[i].postaladdress[a];
            postaladdress.appendChild(hist);
         }

          // Adding information under section tag 
          card.appendChild(name); 
          card.appendChild(image);
          card.appendChild(telephone);
          card.appendChild(area);
          card.appendChild(location); 
          card.appendChild(ord);
          card.appendChild(ord2);
          card.appendChild(ord3);
          card.appendChild(address);
     
          card.appendChild(postaladdress);
           
          // Adding to information to card class
          document.querySelector('div.cards').appendChild(card);

         let hr = document.createElement('hr');

  
     
      }});