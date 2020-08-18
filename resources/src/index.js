const searchForm = document.querySelector('#search-form');
searchForm.addEventListener("submit", fetchWeather);
const forecast = document.getElementById('forecast');

function fetchWeather(e) {
  e.preventDefault();
  const zip = document.querySelector("#search-term").value;
  fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=6e4234240a11d3e8ecc1803c3f8845e4`)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      let currently = `${data.list[0].weather[0].description}`
      if (currently.includes("rain")) {
        document.body.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/000/617/305/non_2x/seamless-pattern-of-yellow-umbrella-with-drops-raining-on-blue-background-vector-illustration.jpg)';
      } else if (currently.includes("cloud")) { 
        document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/2138694.jpg)';
      } else if (currently.includes("snow")) {
        document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/367251.jpg)';
      } else {
        document.body.style.backgroundImage = hidden;
      }
      let output = `Forecast for ${data.city.name}, ${zip}`
      let kelvin = Number(data.list[0].main.feels_like)
      const celsius = kelvin - 273;
      let feelsLike = Math.floor(celsius * (9/5) + 32);
    
      let kelvinTemp = Number(data.list[0].main.temp)
      const celsiusTemp = kelvinTemp - 273;
      let temp = Math.floor(celsiusTemp * (9/5) + 32);
      console.log(currently.includes("rain"))
    
      output += `<p>Currently: ${currently}</p>`
      output += `<li> Current Temp: ${temp}° F </li>`
      output += `<li> Feels Like: ${feelsLike}° F </li>`
      output += `<li> Humidity: ${data.list[0].main.humidity}% </li>`
      output += `Cloud Coverage: ${data.list[0].clouds.all}%`
      document.getElementById("forecast").innerHTML = output;
    }
    )
  }
//   }
// )
// }


//   } else if (weatherinfo == Clouds) {
//     imgs.style.backgroundImage = "url(cloud.gif)";
//   } else if (weatherinfo == Clear) {
//     imgs.style.backgroundImage = "url(sky3.gif)";
//   } else {
//     imgs.style.backgroundImage = "url(background.gif)";
//
