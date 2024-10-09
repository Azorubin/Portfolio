import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from './WeatherPng/search.png'
import clear_icon from './WeatherPng/clear.png'
import cloud_icon from './WeatherPng/cloud.png'
import drizzle_icon from './WeatherPng/drizzle.png'
import humidity_icon from './WeatherPng/humidity.png'
import rain_icon from './WeatherPng/rain.png'
import snow_icon from './WeatherPng/snow.png'
import wind_icon from './WeatherPng/wind.png'


const Weather = () => {
    const inputRef=useRef();
    const[weatherData,setWeatherData]=useState(false);
    const allIcons={
        "01d":clear_icon,
        "01n":clear_icon,
        "02d":cloud_icon,
        "02n":cloud_icon,
        "03d":cloud_icon,
        "03n":cloud_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,
        }

    const search = async (city)=>{
        if(city===''){
            alert('Enter city name');
            return;
        }
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'83ce8b1c47fd49c61424e159b581edcb'}`

            const response= await fetch(url);
            const data= await response.json();
            
            if(!response.ok){console.log(data.message);
                return;
            }

            console.log(data);
            const icon= allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon,
            })
        } catch (error) {
            setWeatherData(false);
            console.error("error in fetching weather data")
        }
    }  
    
    useEffect(()=>{
        search();
    },[])
    
  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder='Search'/>
            <img src={search_icon} alt="search_icon" onClick={()=>search(inputRef.current.value)} />
        </div>
        {weatherData?<>
            <img src={weatherData.icon} alt="clear_icon" className='weather-icon'/>
        <p className='temperature'>{weatherData.temperature}°c</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="humidity_icon" />
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="wind_icon" />
                <div>
                    <p>{weatherData.windSpeed} km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
        </>:<></>}
     </div>
  )
}

export default Weather