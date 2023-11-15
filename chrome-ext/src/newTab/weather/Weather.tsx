import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import clsx from "clsx";
import { useFetchWeather } from "./weather.api";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const Weather = () => {

    const [location, setLocation] = useState({long: null, lat: null})

    useEffect(() => {
        // Check if the browser supports geolocation
        if ("geolocation" in navigator) {
            // Get the user's current location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // rounding to 2 digits gives you accuracy of around 1 km
                    const latitude = Math.round(position.coords.latitude * 100) / 100
                    
                    const longitude = Math.round(position.coords.longitude * 100) / 100
                    setLocation({long: longitude, lat: latitude})
                },
                (error) => {
                console.error("Error getting location: " + error.message);
                },
                {
                    timeout: 60 * 60 * 1000, // time the current location will be cached in ms. Set to 1 hr
                    maximumAge: 0
                }
          );
        } else {
          console.error("Geolocation is not supported by this browser");
        }
      }, []);

      const { isLoading, error, data, isFetching } = useFetchWeather(location);
      console.log(isLoading, error, data, isFetching)

      return (
        <div 
            className={clsx(
                "absolute top-24 right-8 p-4 w-[300px] h-[150px] rounded-lg bg-gray-400 text-white flex items-center",
                isLoading ? "justify-center flex-col gap-y-3" : "justify-between"
            )}
        >
            {isLoading &&
                <>
                    <CircularProgress />
                    <p className="text-base">
                        Fetching the weather for your region
                    </p>
                </>
            }
            {data && 
                <>
                    <div className="flex flex-col justify-start">
                        <p className="text-base">
                            {data.current.condition.text}
                        </p>
                        <img src={`https:${data.current.condition.icon}`} alt="icon of current weather"/>
                    </div>
                    <Divider orientation="vertical" flexItem sx={{ borderBottomWidth: 5 }}/>
                    <div className="flex flex-col justify-start">
                        <p className="text-base font-bold">
                            {data.location.name}, {data.location.country}
                        </p>
                        <p className="text-base">{DAYS[new Date().getDay()]}</p>
                        <p className="text-3xl">
                            {data.current.temp_c} &deg;
                        </p>
                        <p className="text-base">
                            {data.current.temp_f} &deg; F
                        </p>
                    </div>
                </>
            }
            {
                !data && error && <p>There was an error fetching the data</p>
            }
        </div>
    )
}

export default Weather;