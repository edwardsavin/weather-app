import getTemperature from "../functions/api-search";

function createLocationDiv(location: string) {
  const locationDiv = document.createElement("div");
  locationDiv.classList.add("weather-location");
  locationDiv.textContent = location;

  return locationDiv;
}

function createCountryDiv(country: string) {
  const countryDiv = document.createElement("div");
  countryDiv.classList.add("weather-country");
  countryDiv.textContent = country;

  return countryDiv;
}

function createDescriptionDiv(description: string) {
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("weather-description");
  descriptionDiv.textContent = description;

  return descriptionDiv;
}

function createIconDiv(icon: string) {
  const iconDiv = document.createElement("div");
  iconDiv.classList.add("weather-icon");
  iconDiv.textContent = icon;

  return iconDiv;
}

function createTemperatureDiv(
  temperatureMetric: number,
  temperatureImperial: number
) {
  const temperatureDiv = document.createElement("div");
  temperatureDiv.classList.add("weather-temperature");
  temperatureDiv.textContent = `${temperatureMetric} °C`;

  return temperatureDiv;
}

function createFeelsLikeDiv(
  feelsLikeMetric: number,
  feelsLikeImperial: number
) {
  const feelsLikeDiv = document.createElement("div");
  feelsLikeDiv.classList.add("weather-feels-like");
  feelsLikeDiv.textContent = `Feels like: ${feelsLikeMetric} °C`;

  return feelsLikeDiv;
}

function createHumidityDiv(humidityMetric: number, humidityImperial: number) {
  const humidityDiv = document.createElement("div");
  humidityDiv.classList.add("weather-humidity");
  humidityDiv.textContent = `Humidity: ${humidityMetric} %`;

  return humidityDiv;
}

function createWindSpeedDiv(
  windSpeedMetric: number,
  windSpeedImperial: number
) {
  const windSpeedDiv = document.createElement("div");
  windSpeedDiv.classList.add("weather-wind-speed");
  windSpeedDiv.textContent = `Wind Speed: ${windSpeedMetric} km/h`;

  return windSpeedDiv;
}

function createResultsContainer() {
  const resultsContainer = document.createElement("div");
  resultsContainer.classList.add("search-results-container");

  return resultsContainer;
}

// Create the results container and append the results to it
function addResultsToContainer(
  location: string,
  country: string,
  description: string,
  icon: string,
  temperatureMetric: number,
  temperatureImperial: number,
  feelsLikeMetric: number,
  feelsLikeImperial: number,
  humidityMetric: number,
  humidityImperial: number,
  windSpeedMetric: number,
  windSpeedImperial: number
) {
  const resultsContainer = document.querySelector(".search-results-container");

  const locationResult = createLocationDiv(location);
  const countryResult = createCountryDiv(country);
  const descriptionResult = createDescriptionDiv(description);
  const iconResult = createIconDiv(icon);
  const temperatureResult = createTemperatureDiv(
    temperatureMetric,
    temperatureImperial
  );
  const feelsLikeResult = createFeelsLikeDiv(
    feelsLikeMetric,
    feelsLikeImperial
  );
  const humidityResult = createHumidityDiv(humidityMetric, humidityImperial);
  const windSpeedResult = createWindSpeedDiv(
    windSpeedMetric,
    windSpeedImperial
  );

  resultsContainer.append(
    locationResult,
    countryResult,
    descriptionResult,
    iconResult,
    temperatureResult,
    feelsLikeResult,
    humidityResult,
    windSpeedResult
  );
}

// Get the results from the API and send them to the DOM
async function sendResultsToDom(searchInput: string) {
  const response = await getTemperature(searchInput).catch(() => {
    // TODO: Add custom alert
    // eslint-disable-next-line no-alert
    alert(
      "Location not found. Please try again with a different location or check your spelling and try again."
    );
  });
  const objResponse = Object(response);

  const objResponseMetric = Object(objResponse.metricTemperature);
  const objResponseImperial = Object(objResponse.imperialTemperature);

  const { location } = objResponseMetric;
  const { country } = objResponseMetric;
  const { description } = objResponseMetric;
  const { icon } = objResponseMetric;

  const temperatureMetric = Math.round(objResponseMetric.temperature);
  const feelsLikeMetric = Math.round(objResponseMetric.feelsLike);
  const humidityMetric = Math.round(objResponseMetric.humidity);
  const windSpeedMetric = Math.round(objResponseMetric.windSpeed);

  const temperatureImperial = Math.round(objResponseImperial.temperature);
  const feelsLikeImperial = Math.round(objResponseImperial.feelsLike);
  const humidityImperial = Math.round(objResponseImperial.humidity);
  const windSpeedImperial = Math.round(objResponseImperial.windSpeed);

  addResultsToContainer(
    location,
    country,
    description,
    icon,
    temperatureMetric,
    temperatureImperial,
    feelsLikeMetric,
    feelsLikeImperial,
    humidityMetric,
    humidityImperial,
    windSpeedMetric,
    windSpeedImperial
  );
}

export { createResultsContainer, sendResultsToDom };
