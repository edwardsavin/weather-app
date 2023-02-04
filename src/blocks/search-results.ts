import getTemperature from "../functions/api-search";
import { switchUnits } from "./unit-switch";
import getFlagEmoji from "../functions/get-flag-emoji";

let lastValidLocation: string = "London";

function createLocationDiv(location: string) {
  const locationDiv = document.createElement("div");
  locationDiv.classList.add("weather-location");
  locationDiv.textContent = location;

  return locationDiv;
}

function createCountryDiv(country: string) {
  const countryDiv = document.createElement("div");
  countryDiv.classList.add("weather-country");

  const flag = getFlagEmoji(country);
  countryDiv.textContent = flag;

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

function createTemperatureDiv(temperatureMetric: number) {
  const temperatureDiv = document.createElement("div");
  temperatureDiv.classList.add("weather-temperature");
  temperatureDiv.textContent = `${temperatureMetric} °C`;

  return temperatureDiv;
}

function createFeelsLikeDiv(feelsLikeMetric: number) {
  const feelsLikeDiv = document.createElement("div");
  feelsLikeDiv.classList.add("weather-feels-like");
  feelsLikeDiv.textContent = `Feels like: ${feelsLikeMetric} °C`;

  return feelsLikeDiv;
}

function createHumidityDiv(humidity: number) {
  const humidityDiv = document.createElement("div");
  humidityDiv.classList.add("weather-humidity");
  humidityDiv.textContent = `Humidity: ${humidity} %`;

  return humidityDiv;
}

function createWindSpeedDiv(windSpeedMetric: number) {
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
  feelsLikeMetric: number,
  humidity: number,
  windSpeedMetric: number
) {
  const resultsContainer = document.querySelector(".search-results-container");

  const locationResult = createLocationDiv(location);
  const countryResult = createCountryDiv(country);
  const descriptionResult = createDescriptionDiv(description);
  const iconResult = createIconDiv(icon);
  const temperatureResult = createTemperatureDiv(temperatureMetric);
  const feelsLikeResult = createFeelsLikeDiv(feelsLikeMetric);
  const humidityResult = createHumidityDiv(humidity);
  const windSpeedResult = createWindSpeedDiv(windSpeedMetric);

  resultsContainer.append(
    countryResult,
    locationResult,
    descriptionResult,
    iconResult,
    temperatureResult,
    feelsLikeResult,
    humidityResult,
    windSpeedResult
  );
}

function clearResults() {
  const resultsContainer = document.querySelector(".search-results-container");
  resultsContainer.innerHTML = "";
}

function setLastValidLocation(searchInput: string) {
  lastValidLocation = searchInput;
}

// Get the results from the API and send them to the DOM
async function sendResultsToDom(searchInput: string) {
  let response: object;

  // Try to get the weather for the user's search input
  try {
    const newResponse = await getTemperature(searchInput);
    response = newResponse;
    setLastValidLocation(searchInput);
  } catch (error) {
    // If the user's search fails, get a fallback weather for the last valid location
    const fallbackResponse = await getTemperature(lastValidLocation);
    response = fallbackResponse;
    setLastValidLocation(lastValidLocation);
  }

  const objResponse = Object(response);
  const objResponseMetric = Object(objResponse.metricTemperature);
  const objResponseImperial = Object(objResponse.imperialTemperature);

  const { location } = objResponseMetric;
  const { country } = objResponseMetric;
  const { description } = objResponseMetric;
  const { icon } = objResponseMetric;

  const temperatureMetric = Math.round(objResponseMetric.temperature);
  const feelsLikeMetric = Math.round(objResponseMetric.feelsLike);
  const humidity = Math.round(objResponseMetric.humidity);
  const windSpeedMetric = Math.round(objResponseMetric.windSpeed);

  const temperatureImperial = Math.round(objResponseImperial.temperature);
  const feelsLikeImperial = Math.round(objResponseImperial.feelsLike);
  const windSpeedImperial = Math.round(objResponseImperial.windSpeed);

  addResultsToContainer(
    location,
    country,
    description,
    icon,
    temperatureMetric,
    feelsLikeMetric,
    humidity,
    windSpeedMetric
  );

  // Send the results to the different unit values to the unit switch function
  switchUnits(
    temperatureMetric,
    temperatureImperial,
    feelsLikeMetric,
    feelsLikeImperial,
    humidity,
    windSpeedMetric,
    windSpeedImperial
  );
}

export { createResultsContainer, sendResultsToDom, clearResults };
