var apiKey = "14e59ccc1fd11f5c2648b6e1cd183a3e";
var searchBtnEl = document.getElementById ("search-btn");
var searchInputEl = document.getElementById("search-input");
var container = document.getElementById("container");

searchBtnEl.addEventListener("click", clickMe);
function clickMe() {
    grabApi(searchInputEl.value);
}


function oneCall(lat, lon) {
    var currentWeatherUrl =
 `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}` + apiKey;
    
    fetch(currentWeatherUrl) 
.then(function (response) {
    return response.json();

})
.then(function (data) {
    console.log(data);

    grabApi(city) 
        console.log(data);
    
})



function grabApi(city) {
    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + apiKey;

    fetch(currentWeatherUrl) 
.then(function (response) {
    return response.json();

})
.then(function (data) {
    console.log(data);
    //var currentDate = new Date
})
}



}
