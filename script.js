const apikey = "1e6fa4404c0fa6c66d078e3ba2ced67b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather .weather-Icon");

async function checkWeather(city){
   const Response  = await fetch(apiurl+city+`&appid=${apikey}`);
  
    
  
    if(Response.status == 404){
        document.querySelector(".error").style.display = "block"; 
        document.querySelector(".weather").style.display = "none";
        
    }else{
        var data = await Response.json();  

        console.log(data);
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= data.main.temp+"°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
        document.querySelector(".wind").innerHTML= data.wind.speed+" km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main =="Rain"){
            weatherIcon.src = "images/rain.png";
        }  
        else if(data.weather[0].main =="Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        } 
         else if(data.weather[0].main =="Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main =="Snow"){
                weatherIcon.src = "images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    }
  
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})




