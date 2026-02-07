const conditionElement = document.querySelector('#condition');
const locationElement = document.querySelector('#location');
const dateTimeElement = document.querySelector('#date-time');
const temperatureElement = document.querySelector('#temperature');
const feelsLikeElement = document.querySelector('#feels-like');
const gifImg = document.querySelector('#gif-img');

function renderCard(weatherInfo, gifUrl) {
    conditionElement.textContent = weatherInfo.condition;
    locationElement.textContent = weatherInfo.location;
    dateTimeElement.textContent = weatherInfo.dateTime;
    temperatureElement.textContent = `${weatherInfo.temperature}°F`;
    feelsLikeElement.textContent = `Feels like ${weatherInfo.feelsLike}°F`;
    gifImg.src = gifUrl;
    gifImg.alt = weatherInfo.condition;
}
export { renderCard };