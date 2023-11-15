import { useQuery } from "react-query";

export type Location = {
    long: number | null,
    lat: number | null
}

export const fetchWeather = async (location: Location) => {
    const BASE_URL = 'http://api.weatherapi.com/v1/current.json'
    const key = process.env.REACT_APP_WEATHER_API || '';
    
    if(!key) throw new Error("No API key");
    if(!location.long || !location.lat) throw new Error("No coordinates provided");
    const body = { method: "GET" }
    const url = `${BASE_URL}?key=${key}&q=${location.lat},${location.long}&aqi=no`

    try{
        const response = await fetch(url, body)
        const res = await response.json()
        return res 
    } catch (e) {
        console.log("Error", e)
    }
}

// caching for the location and time
export const useFetchWeather = (location: Location) => {
    return useQuery({ 
        queryKey: [location], 
        queryFn: () => fetchWeather(location),
        staleTime: 4 * 60 * (60 * 1000), // 4 hours
        cacheTime: ((4 * 60) + 5) * (60 * 1000) // 4 hours and 5 minutes
    })
}