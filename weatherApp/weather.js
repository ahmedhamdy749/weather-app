const apiKey= "7c1472f18761c09dd2de9dcb049ce523";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";

     }else{
          var data = await response.json();
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
          document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
          document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
     
          if (data.weather[0].main =="Clouds"){
               weatherIcon.src = "images/icons8-night-96.png";
     
          } else if (data.weather[0].main =="Clear"){
               weatherIcon.src = "images/icons8-moon-phase-96.png";
     
          }else if (data.weather[0].main =="Rain"){
               weatherIcon.src = "images/icons8-rain-96.png";
     
          }else if (data.weather[0].main =="Mist"){
               weatherIcon.src = "images/icons8-mist-96.png";
     
          }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";


     }

     
}
searchBtn.addEventListener("click", ()=>{
     checkWeather(searchBox.value);

})
