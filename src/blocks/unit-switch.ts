let temperatureMetricFound: number;
let temperatureImperialFound: number;
let feelsLikeMetricFound: number;
let feelsLikeImperialFound: number;
let humidityFound: number;
let windSpeedMetricFound: number;
let windSpeedImperialFound: number;

// Change the units of the weather data based on the unit switcher
function switchUnits(
  temperatureMetric: number,
  temperatureImperial: number,
  feelsLikeMetric: number,
  feelsLikeImperial: number,
  humidity: number,
  windSpeedMetric: number,
  windSpeedImperial: number
) {
  const temperatureDiv = document.querySelector(".weather-temperature");
  const feelsLikeDiv = document.querySelector(".weather-feels-like");
  const humidityDiv = document.querySelector(".weather-humidity");
  const windSpeedDiv = document.querySelector(".weather-wind-speed");

  const unitSwitcher = document.querySelector(".unit-switcher");
  const unitSwitcherValue = unitSwitcher.getAttribute("data-unit");

  temperatureMetricFound = temperatureMetric;
  temperatureImperialFound = temperatureImperial;
  feelsLikeMetricFound = feelsLikeMetric;
  feelsLikeImperialFound = feelsLikeImperial;
  humidityFound = humidity;
  windSpeedMetricFound = windSpeedMetric;
  windSpeedImperialFound = windSpeedImperial;

  if (unitSwitcherValue === "metric") {
    temperatureDiv.textContent = `${temperatureMetric} °C`;
    feelsLikeDiv.textContent = `Feels Like: ${feelsLikeMetric} °C`;
    humidityDiv.textContent = `Humidity: ${humidity} %`;
    windSpeedDiv.textContent = `Wind Speed: ${windSpeedMetric} m/s`;
  } else {
    temperatureDiv.textContent = `${temperatureImperial} °F`;
    feelsLikeDiv.textContent = `Feels Like: ${feelsLikeImperial} °F`;
    windSpeedDiv.textContent = `Wind Speed: ${windSpeedImperial} mph`;
  }
}

// Check the unit switcher value and return it
function checkUnitStatus() {
  const unitSwitcher = document.querySelector(".unit-switcher");
  const unitSwitcherValue = unitSwitcher.getAttribute("data-unit");

  switchUnits(
    temperatureMetricFound,
    temperatureImperialFound,
    feelsLikeMetricFound,
    feelsLikeImperialFound,
    humidityFound,
    windSpeedMetricFound,
    windSpeedImperialFound
  );

  return unitSwitcherValue;
}

// Create the unit switcher
function createUnitSwitcher() {
  const unitSwitcherContainer = document.createElement("div");

  const unitSwitcher = document.createElement("button");
  unitSwitcher.classList.add("unit-switcher");
  unitSwitcher.dataset.unit = "metric";
  unitSwitcher.textContent = "Show Fahrenheit";

  unitSwitcher.addEventListener("click", () => {
    const currentUnit = unitSwitcher.dataset.unit;

    if (currentUnit === "metric") {
      unitSwitcher.dataset.unit = "imperial";
      unitSwitcher.textContent = "Show Celsius";
      checkUnitStatus();
    } else {
      unitSwitcher.dataset.unit = "metric";
      unitSwitcher.textContent = "Show Fahrenheit";
      checkUnitStatus();
    }
  });

  unitSwitcherContainer.appendChild(unitSwitcher);

  return unitSwitcher;
}

export { createUnitSwitcher, switchUnits };
