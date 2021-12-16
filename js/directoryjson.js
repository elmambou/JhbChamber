// JSON Files
const requestURL = "https://elmambou.github.io/JhbChamber/json/directories.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){

        const directories = jsonObject['directories'];
        
        //for (let i = 0; i < directories.length; i++) {
        const i = 0;

        directories.forEach((directory) => {
          let card = document.createElement('section');
          let p1 = document.createElement('h2');
          let image = document.createElement('img');
          let div = document.createElement("div");
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
 
          let p4 = document.createElement('p');

          let postaladdress = document.createElement('div');

          let linebreak = document.createElement('br');

          //name.textContent = directories[i].name;
          //area.textContent = "Area of the City: " + directories[i].area;
          //location.textContent = "City Location: " + directories[i].location;
          //address.textContent = "Population: " + directories[i].address;
          const imagesrc = directory.imageurl;

          image.setAttribute('src', imagesrc);
          image.setAttribute('alt', "Beautiful Image of " + directory.name);
          //telephone.textContent = "Business Information";
    
          div.setAttribute("class", "urlLink");
          card.setAttribute("class", "businessBox");

          p1.innerHTML = `${directory.name}`;
          p2.innerHTML = `${directory.address},${directory.postaladdress}`;
          p3.innerHTML = `${directory.location}`;
          p4.innerHTML = `${directory.telephone}`;

          div.append(p1);
          div.append(p2);
          div.append(p3);
          div.append(p4);

          card.append(image);
          card.append(div);

          document.querySelector("div.businessDirectory").append(card);
          i++
    })});  

const list = document.querySelector(".list");
const grid = document.querySelector(".grid");
const businessDirectory = document.querySelector(".businessDirectory");

list.addEventListener("click", () => {
  businessDirectory.classList.add("list");
});

grid.addEventListener("click", () => {
  businessDirectory.classList.remove("list");
});

