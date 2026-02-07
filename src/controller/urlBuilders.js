import { API_KEY } from "./apiKey";

function buildWeatherURL(location, date = undefined) {
  const apiKey = API_KEY.visualCrossing;
  const baseURL =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
  if (!location) {
    throw new Error('Location is required to build the weather API URL');
  }

  const locationUrl = `${baseURL}/${location}`;

  if (date) {
    const formattedDate = date.toISOString();
    return `${locationUrl}/${formattedDate}?key=${apiKey}`;
  }

  const params = new URLSearchParams({ key: apiKey, contentType: 'json' });

  return `${locationUrl}?${params.toString()}`;
}

function buildGiffyURL(query) {
  const apiKey = API_KEY.giffy;
  const baseURL = 'https://api.giphy.com/v1/gifs/translate';

  if (!query) {
    throw new Error('Query is required to build the Giphy API URL');
  }
  const params = new URLSearchParams({
    api_key: apiKey,
    s: query,
    random_id: crypto.randomUUID(),
  });

  return `${baseURL}?${params.toString()}`;
}

export {buildWeatherURL, buildGiffyURL}