function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
   temperatureElement.innerHTML = Math.round (response.data.main.temp)
   cityElement.innerHTML = response.data.name;
}
let apiKey = "6f543def4e92c07bc6958213d1ba887b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);