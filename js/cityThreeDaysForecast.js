// API.OPENWEATHERMAP.ORG Forecast JSON URL
const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?zip=83287&units=imperial&appid=200cf102e64ee34534ad4bd4429e42bc";

// Fetch API Forecast URL
fetch(apiURLForecast)

    .then((response) => response.json())
    .then((jsObject) => {

        // Iterate through the JSON for all 5 Forecast days 
        for (let i = 0; i < jsObject.list.length; i++) {

            // IF statement that checks JSON values for 18:00:00
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {

                // Setting card, name of day, image, and paragraphs
                let card = document.createElement('section');
                let day = document.createElement('h3');
                let image = document.createElement('img');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');

                // Retrieving the icon 'code' and URL for current weather image SRC
                let src = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x.png';

                // Retrieving weather description for image ALT
                let alt = jsObject.list[i].weather[0].description;

                // Set day name array and current date
                let dayArr = ["SUN","MON","TUES","WED","THURS","FRI","SAT"];
                let datum = new Date(jsObject.list[i].dt_txt);
                
                /*
                 * Setting:
                 *          Name of Day
                 *          Temperature (Current)
                 *          Wind Speed
                 *          Humidity Level
                 *          Image SRC + ALT
                 */
                day.textContent = dayArr[datum.getDay()];
                p1.innerHTML = "Temperature: " +  jsObject.list[i].main.temp + '&#8457;';
                p2.innerHTML = "Wind Speed: " + jsObject.list[i].wind.speed + " mph";
                p3.innerHTML = 'Humidity: ' +  jsObject.list[i].main.humidity + "%";
                image.setAttribute('src', src);
                image.setAttribute('alt', alt);
                
                // Appending the new variables to the section card
                card.appendChild(day);
                card.appendChild(image);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);

                // Appending card to 'div.forecast' in HTML
                document.querySelector('div.forecast').appendChild(card);
            }
        }
    });
