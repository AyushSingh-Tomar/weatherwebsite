
const apiKey = "fd4bb0c4033aae8ec0a17d3dde0045b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&units=metric"
const inputBox = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const weatherImg = document.querySelector('.weather-icon')

async function successGetLocation(position)
{
  const result = await getWeather(position.coords.latitude,position.coords.longitude);
  console.log(result);
}
function failedGetLocation()
{
  const a = prompt("Couldn't get location automatically , you can manually enter it");
 console.log(a);
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
          weatherImg.classList.remove("bx-droplet")
          weatherImg.classList.remove("bx-circle")
          weatherImg.classList.add("bx-cloud")
          
    }
    if(data.weather[0].main =="Clear")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-sun")

    }
    if(data.weather[0].main =="Rain")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-cloud-light-rain")

    }
    if(data.weather[0].main =="Drizzle")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
       weatherImg.classList.add("bx-cloud-drizzle")
    }
    if(data.weather[0].main =="Mist")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-droplet")
    }
    if(data.weather[0].main =="Smoke")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-circle")

    }
}
if(a!= null)
{
  checkWeather(a);
}
  


}

addEventListener('load',async ()=>{
      navigator.geolocation.getCurrentPosition(successGetLocation,failedGetLocation);
});

async function getWeather(lat,lon)
{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
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
          weatherImg.classList.remove("bx-droplet")
          weatherImg.classList.remove("bx-circle")
          weatherImg.classList.add("bx-cloud")
          
    }
    if(data.weather[0].main =="Clear")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-sun")

    }
    if(data.weather[0].main =="Rain")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-cloud-light-rain")

    }
    if(data.weather[0].main =="Drizzle")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
       weatherImg.classList.add("bx-cloud-drizzle")
    }
    if(data.weather[0].main =="Mist")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-droplet")
    }
    if(data.weather[0].main =="Smoke")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-circle")

    }
}



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
          weatherImg.classList.remove("bx-droplet")
          weatherImg.classList.remove("bx-circle")
          weatherImg.classList.add("bx-cloud")
          
    }
    if(data.weather[0].main =="Clear")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-sun")

    }
    if(data.weather[0].main =="Rain")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-cloud-light-rain")

    }
    if(data.weather[0].main =="Drizzle")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
       weatherImg.classList.add("bx-cloud-drizzle")
    }
    if(data.weather[0].main =="Mist")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-droplet")
    }
    if(data.weather[0].main =="Smoke")
    {
      weatherImg.classList.remove("bx-cloud")
      weatherImg.classList.remove("bx-sun")
      weatherImg.classList.remove("bx-cloud-light-rain")
      weatherImg.classList.remove("bx-cloud-drizzle")
      weatherImg.classList.remove("bx-droplet")
      weatherImg.classList.remove("bx-circle")
      weatherImg.classList.add("bx-circle")

    }
}

searchBtn.addEventListener("click",()=>{
  checkWeather(inputBox.value);})

