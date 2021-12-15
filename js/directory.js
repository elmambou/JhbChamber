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

    let businessBox = document.createElement("section");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let a = document.createElement("a");

    const imagesrc = `images/${directory.logo}.jpg`;

    const url = `${directory.url}`;

    businessBox.setAttribute("class", "businessBox");

    img.setAttribute("src", imagesrc);
    img.setAttribute("alt", `${directory.logo} logo`);

    div.setAttribute("class", "urlLink");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");

    a.innerHTML = `${directory.name}`;
    p1.innerHTML = `${directory.address}`;
    p2.innerHTML = `${directory.location}`;
    p3.innerHTML = `${directory.telephone}`;
    p4.innerHTML = `${directory.description}`;

    div.append(a);
    div.append(p1);
    div.append(p2);
    div.append(p3);
    div.append(p4);

    businessBox.append(img);
    businessBox.append(div);

    document.querySelector("div.businessDirectory").append(businessBox);

    count += 1;
  });
});

const list = document.querySelector(".list");
const grid = document.querySelector(".grid");
const businessDirectory = document.querySelector(".businessDirectory");

list.addEventListener("click", () => {
businessDirectory.classList.add("list");
});

grid.addEventListener("click", () => {
businessDirectory.classList.remove("list");
});
