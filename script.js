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
          weatherImg.classList.remove("bx-cloud")
          weatherImg.classList.remove("bx-sun")
          weatherImg.classList.remove("bx-cloud-light-rain")
          weatherImg.classList.remove("bx-cloud-drizzle")
          weatherImg.classList.remove("bxl-tailwind-css")
          weatherImg.classList.remove("bx-circle")
          weatherImg.classList.add("bx-cloud")
          
    }
    if(data.weather[0].main =="Clear")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bxl-tailwind-css")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-sun")

    }
    if(data.weather[0].main =="Rain")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bxl-tailwind-css")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-cloud-light-rain")

    }
    if(data.weather[0].main =="Drizzle")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx bx-cloud-drizzle")
      weatherImg.classList.remove("bxl-tailwind-css")
      weatherImg.classList.remove("bx-circle")
       weatherImg.classList.add("bx bx-cloud-drizzle")
    }
    if(data.weather[0].main =="Mist")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx bxl-tailwind-css")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx bxl-tailwind-css")
    }
    if(data.weather[0].main =="Smoke")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bxl-tailwind-css")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-circle")

    }
}


