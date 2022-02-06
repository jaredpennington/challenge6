var apiKey = "14e59ccc1fd11f5c2648b6e1cd183a3e";
var searchBtnEl = document.getElementById("search-btn");
var searchInputEl = document.getElementById("search-input");
var container = document.getElementById("container");



function oneCall(lat, lon) {
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`

  fetch(currentWeatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    for(var i = 1; i < 6; i++) {
        var day = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US")
        var icon = data.daily[i].weather[0].icon
        var temp =  data.daily[i].temp.day
        var wind = data.daily[i].wind_speed
        var humidity = data.daily[i].humidity
        createForcast(day,icon,temp,wind,humidity)
        console.log(day)
        var newDay = new Date
        //var date = 
    }
});
}




function createForcast(day,icon,temp,wind,humidity) {
    //we need date, icon for weather, temp, wind, humidity
    var ElDay = document.createElement("p")
    var ElIcon = document.createElement("img")
    var ElTemp = document.createElement("p")
    var ElWind = document.createElement("p")
    var ElHumidity = document.createElement("p")
//http://openweathermap.org/img/wn/10d@2x.png
    ElDay.textContent = day
    ElIcon.setAttribute("src",`http://openweathermap.org/img/wn/${icon}.png`) 
    ElTemp.textContent = `temp:${temp}\u00B0F`
    ElWind.textContent =  `wind:${wind}mph`
    ElHumidity.textContent = `humidity:${humidity}%`

var column = $("<div>")
    .addClass("col-2")
    .appendTo("container")

var cardHeader = $("<h3>")
    .addClass("card-header")
    .html(`img src="${icon}"></img><p>${day}</p>`)
    .appendTo(card)

    var card = $("<div>")
        .addClass("card")
        .appendTo(container)


    card.append(ElTemp,ElWind,ElHumidity)
    
}



// ignore this VVV

  function grabApi(city) {
    var currentWeatherUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` +
      apiKey;

    fetch(currentWeatherUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        oneCall(data.coord.lat, data.coord.lon)
      });
    }



searchBtnEl.addEventListener("click", clickMe);
function clickMe() {
  grabApi(searchInputEl.value);
}