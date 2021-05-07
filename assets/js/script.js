var apiKey = "768d8906dffdb8442fb5b977a6c0b4ff";

var searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", searchResults)

function searchResults(){

    if(document.getElementById("search").value !== null){
        
        var search = document.getElementById("search").value;
        document.getElementById("search").value = "";
        console.log(search);
        weatherSearch(search);


        
    }
}


function weatherSearch(search){
    var api = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;
    fetch(api)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            var todayEl = document.getElementById("today");
            todayEl.textContent = "";

            var cardHeader = document.createElement("h3");
            cardHeader.className = "card-title";
            cardHeader.textContent = data.name;
            
            var cardContainer = document.createElement("div");
            cardContainer.className = "card";

            var card = document.createElement("div");
            card.className = "card-body";            

            var wind = document.createElement("p");
            wind.classList.add("card-text");

            var humidity = document.createElement("p");
            humidity.classList.add("card-text");
            humidity.textContent = "Humidity: " + data.main.humidity + "%";

            var temperature = document.createElement("p");
            temperature.classList.add("card-text");
            temperature.textContent = "Temperature: " + data.main.temp +  "°F";

            var weatherIcon = document.createElement("img");
            weatherIcon.setAttribute("src",`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            
            cardHeader.appendChild(weatherIcon);

            card.appendChild(cardHeader);
            card.appendChild(temperature);
            card.appendChild(humidity);
            card.appendChild(wind);

            cardContainer.appendChild(card);

            todayEl.appendChild(cardContainer);

        

        })   
}
