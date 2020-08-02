const searchForm = document.querySelector('#search-form');
searchForm.addEventListener("submit", fetchWeather);
const forecast = document.getElementById('forecast');

function fetchWeather(e) {
    e.preventDefault();
    const zip = document.querySelector("#search-term").value;
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?zip=${zip}&appid=b8d555814d3e396548e9371b2e5b9209`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
    
          
        // let output = `Forecast for ${data[0].EnglishName}, ${data[0].AdministrativeArea.ID} ${zip}`
        

        // // output += '</p>'
        // output += `${data[0].fl}`
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