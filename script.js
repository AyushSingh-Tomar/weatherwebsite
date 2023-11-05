const apiKey = "fd4bb0c4033aae8ec0a17d3dde0045b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const weatherImg = document.querySelector('.weather-icon')



const humidity = document.querySelector('.humidity')

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.desc').innerHTML = data.weather[0].description;

    if(data.weather[0].main =="Clouds")
    {
          weatherImg.classList.toggle("bx-cloud")
    }
    if(data.weather[0].main =="Clear")
    {
          weatherImg.classList.toggle("bx-sun")
    }
    if(data.weather[0].main =="Rain")
    {
          weatherImg.classList.toggle("bx-cloud-light-rain")
    }
    if(data.weather[0].main =="Drizzle")
    {
          weatherImg.classList.toggle("bx bx-cloud-drizzle")
    }
    if(data.weather[0].main =="Mist")
    {
          weatherImg.classList.toggle("bx bxl-tailwind-css")
    }
}


