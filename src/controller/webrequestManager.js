import { buildGiffyURL, buildWeatherURL } from "./urlBuilders";

async function getWeather(location) {
  const url = buildWeatherURL(location, new Date());

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function getGifUrl(query) {
  const url = buildGiffyURL(query);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch GIF data: ${response.status}`);
  }

  const data = await response.json();
  if (data.data.length === 0) {
    throw new Error('No GIFs found for the given query');
  }
  return data.data.images.original.url;
}

export {getWeather, getGifUrl}