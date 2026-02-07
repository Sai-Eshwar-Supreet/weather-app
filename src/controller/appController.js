import { state } from "../model/state";
import { setLoader } from "../view/loadingManager";
import { renderCard } from "../view/renderer";
import { getGifUrl, getWeather } from "./webrequestManager";

function extractWeatherData(data) {
  if (!data || !data.currentConditions || !data.days || data.days.length === 0) {
    throw new Error('Invalid weather data format');
  }
  return {
    condition: data.currentConditions.conditions,
    location: data.resolvedAddress,
    dateTime: new Date().toDateString(),
    temperature: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
  };
}

async function processSearch(query){
    if(!query || query === state.query) return;

    state.query = query;

    setLoader(true);

    try{
        await fetchData();
    }
    catch(error){
        alert(`Error fetching data: ${error.message}`);
    }

    setLoader(false);

    renderCard(state.weatherData, state.gifUrl);
}

async function fetchData(){
    try {
        const weatherData = await getWeather(state.query);
        state.weatherData = extractWeatherData(weatherData);
        state.gifUrl = await getGifUrl(`${state.weatherData.condition}`);
    } catch (error) {
        alert(`Error fetching data: ${error.message}`);
    }
}

export {processSearch};