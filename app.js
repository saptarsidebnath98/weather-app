const apiKey = "66a645d13475b6cc9b4c19f0495b0a1f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(cityname){
    const response = await fetch(apiUrl + `&q=${cityname}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    const errorMsg = document.querySelector("#errorMsg");
    if(data.cod == "404"){
        console.log("404");
        errorMsg.style.display = "block";
        middleOfContainer.style.display = "none";
        bottomOfContainer.style.display = "none";
    }else{
        errorMsg.style.display = "none";
        const temp = document.querySelector(".temperature");
        const displayCityName = document.querySelector(".cityName");
        const humidity = document.querySelector(".humidityText");
        const windSpeed = document.querySelector(".windText");
        const weatherCondition = document.querySelector(".weatherCondition");
    
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        displayCityName.textContent = data.name;
        humidity.textContent = `Humidity ${data.main.humidity}%`;
        windSpeed.textContent = `Wind ${data.wind.speed.toFixed(2)}km/h`;
        weatherCondition.textContent = data.weather[0].main;
    
        const imageWeather = document.querySelector("#weatherImage");
    
        if(data.weather[0].main == "Clear"){
            imageWeather.src = 'clear.png';
        }else  if(data.weather[0].main == "Clouds"){
            imageWeather.src = 'clouds.png';
        }else  if(data.weather[0].main == "Rain"){
            imageWeather.src = 'rain.png';
        }else  if(data.weather[0].main == "Drizzle"){
            imageWeather.src = 'drizzle.png';
        }else  if(data.weather[0].main == "Mist"){
            imageWeather.src = 'mist.png';
        }else  if(data.weather[0].main == "Snow"){
            imageWeather.src = 'snow.png';
        }else  if(data.weather[0].main == "Thunderstorm"){
            imageWeather.src = 'thunder.png';
        }else  if(data.weather[0].main == "Haze"){
            imageWeather.src = 'haze.png';
        }else{
            imageWeather.src = 'party-cloudy.png';
        }
    }

    
}

const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const middleOfContainer = document.querySelector(".middle");
const bottomOfContainer = document.querySelector(".bottom");

searchBtn.addEventListener('click', ()=>{
    const inptCity =  searchBox.value;
    checkWeather(inptCity);
    middleOfContainer.style.display = "flex";
    bottomOfContainer.style.display = "flex";
})


