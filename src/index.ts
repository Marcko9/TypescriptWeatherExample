// Style import
import './styles/main.scss';

// TODO: Import the API request method
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { getWeather, getWeatherPromises } from './networking/weather';

// TODO: Create an async function to call the API method
export const displayWeather = async () => {
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        //const weather = await getWeatherPromises(city);
        updateInteface(weather);
    } 
}

// TODO: Add an event listener to the button
if (buttonClick) buttonClick.addEventListener('click', displayWeather);
