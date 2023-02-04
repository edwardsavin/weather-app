// Return the url of the icon for the weather condition
function getIcon(iconCode: string) {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
  return iconUrl;
}

export default getIcon;
