import { WeatherResponse } from "../model/weatherResponse";

const city = 'Example';

const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;

// TODO: Create an async function with an argument called city to return the that of the endpoint
export const getWeather = async (city: string) :Promise<WeatherResponse> =>  {
    let requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`, requestOptions);
    return response.json();
} 

export const getWeatherPromises = (city: string): Promise<WeatherResponse> => {
    var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
    };

    return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`,
    requestOptions
    ).then((response) => response.json()).catch((err) => alert(err));
};