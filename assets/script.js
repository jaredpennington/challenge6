var apiKey = "14e59ccc1fd11f5c2648b6e1cd183a3e";
var searchBtnEl = document.getElementById("search-btn");
var searchInputEl = document.getElementById("search-input");
var container = document.getElementById("container");
var current = document.getElementById("current");

function oneCall(lat, lon) {
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  fetch(currentWeatherUrl)
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      console.log(data);
      $("#current").children().remove()
      $("#container").children().remove()

      var curDay = new Date(data.current.dt * 1000).toLocaleDateString("en-US");
      var curTemp = data.current.temp
      var curWind = data.current.wind_speed
      var curHum = data.current.humidity
      var curIcon = data.current.weather[0].icon
      var curUvi = data.current.uvi
      rightNowW(curDay, curIcon, curTemp, curWind, curHum, curUvi)
      

      for (var i = 1; i < 6; i++) {
        var day = new Date(data.daily[i].dt * 1000).toLocaleDateString("en-US");
        var icon = data.daily[i].weather[0].icon;
        var temp = data.daily[i].temp.day;
        var wind = data.daily[i].wind_speed;
        var humidity = data.daily[i].humidity;
        createForcast(day, icon, temp, wind, humidity);
        console.log(day);
        var newDay = new Date();
        //var date =
      }
    });
}

function rightNowW(curDay, curIcon, curTemp, curWind, curHum, curUvi) { 
  var ElDay = document.createElement("h1");
  var ElIcon = document.createElement("img");
  var ElTemp = document.createElement("p");
  var ElWind = document.createElement("p");
  var ElHumidity = document.createElement("p");
  var ElUvi = document.createElement("div");
  var uvi = document.createElement("span");
  // var ElContainer = document.createElement("div");

  ElDay.textContent = `${searchInputEl.value} ${curDay}`;
  ElIcon.setAttribute("src", `http://openweathermap.org/img/wn/${curIcon}.png`);
  ElTemp.textContent = `temp:${curTemp}\u00B0F`;
  ElWind.textContent = `wind:${curWind}mph`;
  ElHumidity.textContent = `humidity:${curHum}%`;
  ElUvi.textContent = "UV index:";
  uvi.textContent = curUvi;
  ElDay.append(ElIcon);
  ElUvi.append(uvi);
  //current.append(ElDay);
  current.append(ElDay, ElTemp, ElWind, ElHumidity, ElUvi);

}



function createForcast(day, icon, temp, wind, humidity) {
  //we need date, icon for weather, temp, wind, humidity
  var ElDay = document.createElement("p");
  var ElIcon = document.createElement("img");
  var ElTemp = document.createElement("p");
  var ElWind = document.createElement("p");
  var ElHumidity = document.createElement("p");
  var ElContainer = document.createElement("div");
  
  //http://openweathermap.org/img/wn/10d@2x.png
  ElDay.textContent = day;
  ElIcon.setAttribute("src", `http://openweathermap.org/img/wn/${icon}.png`);
  ElTemp.textContent = `temp:${temp}\u00B0F`;
  ElWind.textContent = `wind:${wind}mph`;
  ElHumidity.textContent = `humidity:${humidity}%`;
  ElContainer.setAttribute("class", "col");
  container.append(ElContainer)

  ElContainer.append(ElDay, ElIcon, ElTemp, ElWind, ElHumidity);
}



// ignore this VVV

function grabApi(city) {
  var currentWeatherUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + apiKey;

  fetch(currentWeatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      oneCall(data.coord.lat, data.coord.lon);
    });
}

searchBtnEl.addEventListener("click", clickMe);
function clickMe() {
  grabApi(searchInputEl.value);
}
