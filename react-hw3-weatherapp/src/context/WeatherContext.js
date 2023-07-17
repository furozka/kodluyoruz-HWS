import { createContext, useContext, useState } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children})=>{
    const [weather, setWeather] = useState([])
    const [city,setCity] = useState("Istanbul")
    const values = {
        weather,
        setWeather,
        city,
        setCity
    }
    return (<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>)
}

export const useWeather = ()=> useContext(WeatherContext)