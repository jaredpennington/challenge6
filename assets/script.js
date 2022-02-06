var apiKey = "14e59ccc1fd11f5c2648b6e1cd183a3e";
var searchBtnEl = document.getElementById("search-btn");
var searchInputEl = document.getElementById("search-input");
var container = document.getElementById("container");



function oneCall(lat, lon) {
  var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`

  fetch(currentWeatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    for(var i = 0; i < 5; i++) {
        var day = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US")
        console.log(day)
        var newDay = new Date
        //var date = 
        var pElTemp = document.createElement("p")
        pElTemp.textContent = "temp:" + data.daily[i].day
        
    }
    });
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