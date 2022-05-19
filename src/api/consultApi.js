export default async function getCurrentWeather(region) {
  const axios = require('axios');

  const lat = region.latitude;
  const lon = region.longitude;
  const API_KEY = '9e4778b35907706a5be5e45ab9f09e2d';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  var results = {};
  
  await axios
    .get(url)
    .then(response => {
      const data = response.data;
      const locationName = data.sys.country + ', ' + data.name;
      const sunrise = new Date(data.sys.sunrise * 1000);
      const sunset = new Date(data.sys.sunset * 1000);
      const icon = data.weather[0].icon;
      const tempMin = data.main.temp_min;
      const tempMax = data.main.temp_max;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      const currentTemperature = data.main.temp;

      results = {
        currentTemperature: currentTemperature,
        tempMin: tempMin,
        tempMax: tempMax,
        locationName: locationName,
        wind: wind,
        humidity: humidity,
        icon: icon,
        sunrise: sunrise,
        sunset: sunset,
      };
    })
    .catch(error => console.log(error));

  return results;
}
