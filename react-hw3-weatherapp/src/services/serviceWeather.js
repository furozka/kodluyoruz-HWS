import axios from "axios"
import { API_KEY } from "./API_KEY"


export default async function FetchData(city,setWeather){
    const baseURL = "http://api.weatherapi.com/v1"
    const baseAPI = "/forecast.json"
    const options = {
        params: {
            key: API_KEY,
            q: city,
            days: 7,
        }
    }

    const {data} = await axios(baseURL+baseAPI,options)
    console.log(data)
    const forecastday = data.forecast.forecastday
    setWeather(forecastday)
    console.log(forecastday)
}

    // Current weather	/current.json or /current.xml
    // Forecast	/forecast.json or /forecast.xml
    // Search or Autocomplete	/search.json or /search.xml
    // History	/history.json or /history.xml
    // Marine	/marine.json or /marine.xml
    // Future	/future.json or /future.xml
    // Time Zone	/timezone.json or /timezone.xml
    // Sports	/sports.json or /sports.xml
    // Astronomy	/astronomy.json or /astronomy.xml
    // IP Lookup	/ip.json or /ip.xml