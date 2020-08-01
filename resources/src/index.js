const searchForm = document.querySelector('#search-form');
searchForm.addEventListener("submit", fetchWeather);
const forecast = document.getElementById('forecast');

function fetchWeather(e) {
    e.preventDefault();
    const zip = document.querySelector("#search-term").value;
    fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=w3Q9byYW6oHv4dTabIL0DO2v2gxqiYkC&q=${zip}&language=en-us`)
      .then(response => response.json())
      .then(data =>
        console.log(data)
    
          
        // let output = `<h2>${zip}</h2>`;
        // output += '<p>'
        // output += `data[0].EnglishName`

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
        // document.getElementById("word-display").innerHTML = output;
      )}