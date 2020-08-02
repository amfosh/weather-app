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
    
          
        let output = `Forecast for ${data.city.name}, ${zip}`
        let kelvin = Number(data.list[0].main.feels_like)
        const celsius = kelvin - 273;
        console.log(kelvin)
        let temp = Math.floor(celsius * (9/5) + 32);

        output += '</p>'
        output += `Feels Like: ${temp}`
        // output += '</p>'
        // output += '<h3>definitions:</h3>'
        // output += '<p>'
        // output += `${data[0].shortdef[0]}`
        // output += '<br>'
        // output += data[0].shortdef[1] ? `${data[0].shortdef[1]}` : ``
        // output += '<br>'
        // output += data[0].shortdef[2] ? `${data[0].shortdef[2]}` : ``
        // output += '</p>'
        document.getElementById("forecast").innerHTML = output;
        })}