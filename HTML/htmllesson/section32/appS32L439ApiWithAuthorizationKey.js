let myKey = "17b703f6b16a7a988a4467e1dee46b48";
let city = prompt("Enter a city name:");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function getWeather(){
    let data = await fetch(url);
    let dataJson = await data.json();
    console.log(dataJson);
}

getWeather();