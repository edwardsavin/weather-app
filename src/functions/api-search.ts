// Fetch weather data from OpenWeatherMap API and return information about it in metric units
async function getTemperatureMetric(location: string) {
  const responseMetric = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1aaa95c01bd86f296f84339c8c5057fa&units=metric`,
    {
      mode: "cors",
    }
  );
  const dataMetric = await responseMetric.json();

  return {
    location: dataMetric.name,
    country: dataMetric.sys.country,
    description: dataMetric.weather[0].description,
    icon: dataMetric.weather[0].icon,
    temperature: dataMetric.main.temp,
    feelsLike: dataMetric.main.feels_like,
    humidity: dataMetric.main.humidity,
    windSpeed: dataMetric.wind.speed,
  };
}

// Fetch weather data from OpenWeatherMap API and return information about it in imperial units
async function getTemperatureImperial(location: string) {
  const responseImperial = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1aaa95c01bd86f296f84339c8c5057fa&units=imperial`,
    {
      mode: "cors",
    }
  );
  const dataImperial = await responseImperial.json();

  return {
    location: dataImperial.name,
    country: dataImperial.sys.country,
    description: dataImperial.weather[0].description,
    icon: dataImperial.weather[0].icon,
    temperature: dataImperial.main.temp,
    feelsLike: dataImperial.main.feels_like,
    humidity: dataImperial.main.humidity,
    windSpeed: dataImperial.wind.speed,
  };
}

// Call both functions and return the data in the requested unit
async function getTemperature(location: string, unit: string = "metric") {
  const metricTemperature = await getTemperatureMetric(location);
  const imperialTemperature = await getTemperatureImperial(location);

  if (unit === "imperial") {
    return imperialTemperature;
  }

  return metricTemperature;
}

export default getTemperature;
